import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/lib/graphql';
import BlogPostCard from '@/components/blog-post-card';
import { PostGQLResponse } from '@/types/posts';
import ExperiencePanel from '@/components/ui/experience-panel';
import experience from "@/assets/experience.json"
import projects from "@/assets/projects.json";

import ProjectCard from '@/components/project-card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';
export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const { loading, data } = useQuery<PostGQLResponse>(GET_POSTS);
    console.log(data);

    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Hello I am Sayan
            </h1>
            <p className="max-w-[700px] text-lg mb-3 text-muted-foreground">
                Hobbyist student software developer.
            </p>
            <h1 className='text-2xl'>Experience</h1>
            <ol className="relative border-s border-gray-200">
                {experience.map((exp) => (
                    <ExperiencePanel
                        company={exp.company}
                        date={exp.time}
                        position={exp.position}
                    />
                ))}
            </ol>
            <div className="flex flex-col justify-center mt-5">
                <h2 className='text-2xl'>Blogs</h2>
                {loading && (
                    <Alert>
                        <Loader2 className="h-4 w-4" />
                        <AlertTitle>Loading</AlertTitle>
                        <AlertDescription>
                            Please wait while we load blogs from Hashnode
                        </AlertDescription>
                    </Alert>
                )}
                <div className='grid grid-cols-2 mt-3 md:grid-cols-3 gap-4'>
                    {!loading && data?.user.posts.nodes.map((post) => {
                        console.log(post)
                        return (
                            <BlogPostCard
                            title={post.title}
                            readTimeMins={post.readTimeInMinutes}
                            tags={post.tags}
                            link={post.url}
                        />
                        )
                    })}
                </div>
            </div>
            <h1 className='text-2xl'>Projects</h1>
            <div className='grid grid-cols-2 mt-3 md:grid-cols-3 gap-4'>
                {projects.map((project) => (
                    <ProjectCard
                        title={project.title}
                        description={project.description}
                        links={project.links as unknown as Record<string, string>}
                    />
                ))}
            </div>
        </div>
    )
}