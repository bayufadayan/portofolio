type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

type ProjectCardProps = {
    title: string;
    description: string;
    demo_url: string;
    thumbnail: string;
    projectCategory: string;
} & HoverProps;

export default function ProjectCard({ title, description, demo_url, thumbnail, projectCategory, onMouseEnter, onMouseLeave }: ProjectCardProps) {

    const formatDescription = (text: string) => {
        const words = text.split(" ");
        return words.length > 8 ? words.slice(0, 9).join(" ") + " ..." : text;
    };

    return (
        <div className="projectCard">
            <div className="projectThumbnail">
                <div className="headerLabel">
                    <div className="projectCategory">
                        {projectCategory}
                    </div>
                    <div className="expand" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </div>
                </div>
                <img src={thumbnail} alt="thumbnail project" />
            </div>
            <div className="projectContent">
                <div className="projectText">
                    <div className="title">{title}</div>
                    <div className="description">
                        <p>
                            {description.trim() !== "" ? formatDescription(description) : "-"}
                        </p>
                    </div>
                </div>
                <a target='_blank' href={demo_url} className="projectLink" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    )
}
