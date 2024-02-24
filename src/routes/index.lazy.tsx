import { createLazyFileRoute } from '@tanstack/react-router';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '@/lib/graphql';
import BlogPostCard from '@/components/blog-post-card';
import { PostGQLResponse } from '@/types/posts';

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
            <p className="max-w-[700px] text-lg text-muted-foreground">
                I make and break software
            </p>
            <div className="flex flex-col justify-center mt-5">
                <h2 className='text-2xl'>Blogs</h2>
                <div className='grid max-w-4xl lg:max-w-6xl gap-2 grid-cols-2 mx-auto text-center gap-y-4 sm:gap-x-8 xs:grid-cols-2 sm:grid-cols-3 mt-3 lg:grid-cols-5 sm:text-left'>
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
        </div>
    )
}