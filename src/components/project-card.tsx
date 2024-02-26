import { HTMLProps } from "react";
import { Separator } from "./ui/separator";

interface ProjectCardProps extends HTMLProps<HTMLDivElement> {
    title: string;
    description: string;
    links: Record<string, string>;
}

const ProjectCard = (props: ProjectCardProps) => {
    console.log(props.links)
    return (
        <div className="border rounded-xl relative p-3">
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">{props.title}</h4>
                <p className="text-[12px] lg:text-sm text-muted-foreground max-h-28 overflow-ellipsis overflow-hidden">
                    {props.description}
                </p>
            </div>
            <div className="relative bottom-0">
                <Separator className="my-4" />
                <div className="flex h-5 items-center justify-center space-x-4 text-sm">
                    {Object.entries(props.links).map(([key, value]) => (
                        <a key={key} href={value}>
                            <div>{key}</div>
                            <Separator orientation="vertical" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;