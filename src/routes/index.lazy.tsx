import { Link, createLazyFileRoute } from '@tanstack/react-router';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/lib/graphql';
import { PostGQLResponse } from '@/types/posts';
import ExperiencePanel from '@/components/ui/experience-panel';
import experience from "@/assets/experience.json"
import projects from "@/assets/projects.json";

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { BookOpenCheck, Loader2 } from 'lucide-react';
import { BentoGridItem } from '@/components/ui/bento-grid';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Github from '@/components/icons/github';
import Discord from '@/components/icons/discord';
import Telegram from '@/components/icons/telegram';
export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    const { loading, data } = useQuery<PostGQLResponse>(GET_POSTS);

    return (
        <div className="flex flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                Hello I am Sayan
            </h1>
            <p className="max-w-[700px] text-lg mb-3 text-muted-foreground">
                Hobbyist student software developer.
            </p>
            <div className="flex gap-2 flex-row">
                <Link className='flex justify-between gap-1 bg-zinc-800 items-center border rounded-md p-[5px]' to='https://github.com/Dank-del'>
                    <p className='text-md'>Github</p>
                    <Github />
                </Link>
                <Link className='flex justify-between gap-1 bg-zinc-800 items-center border rounded-md p-[5px]' to='https://telegram.dog/dank_as_fuck'>
                    <p className='text-md'>Telegram</p>
                    <Telegram />
                </Link>
                <Link className='flex justify-between gap-1 bg-zinc-800 items-center border rounded-md p-[5px]' to='https://discord.com/users/506536929152466945'>
                    <p className='text-md'>Discord</p>
                    <Discord />
                </Link>
            </div>
            <h1 className='text-2xl'>Experience</h1>
            <ol className="relative border-s border-gray-200">
                {experience.map((exp, idx) => (
                    <ExperiencePanel
                        key={idx}
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
                    {!loading && data?.user.posts.nodes.map((post, i) => {
                        console.log(post)
                        return (
                            // <BlogPostCard
                            // title={post.title}
                            // readTimeMins={post.readTimeInMinutes}
                            // tags={post.tags}
                            // link={post.url}
                            <BentoGridItem
                                key={i}
                                url={post.url}
                                title={post.title}
                                description={`${post.readTimeInMinutes} min read`}
                                header={<img src={post.coverImage.url} />}
                                icon={<BookOpenCheck />}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        )
                    })}
                </div>
            </div>
            <h1 className='text-2xl mt-2'>Projects</h1>
            <HoverEffect items={projects} />
        </div>
    )
}