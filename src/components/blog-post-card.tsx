import { HTMLProps } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { cn } from "@/lib/utils";
import { Tag } from "@/types/posts";
import { Link } from "@tanstack/react-router"

interface BlogPostCardProps extends HTMLProps<HTMLDivElement> {
    title: string;
    readTimeMins: number;
    tags: Tag[];
    link: string;
}

const BlogPostCard = (props: BlogPostCardProps) => {
    // const tags = props.tags.map(m => m.name)
    return (
        <Link to={props.link}>
        <Card className={cn("max-w-64 w-full h-full", props.className)}>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.readTimeMins} mins to read</CardDescription>
            </CardHeader>
        </Card>
        </Link>

    );
}

export default BlogPostCard;