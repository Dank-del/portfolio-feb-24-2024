interface ExperiencePanelProps extends React.HTMLAttributes<HTMLDivElement> {
    company: string;
    date: string;
    position: string;
}

const ExperiencePanel = (props: ExperiencePanelProps) => {
    return (
        <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {props.date}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {props.company}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {props.position}
            </p>
        </li>
    );
}

export default ExperiencePanel;