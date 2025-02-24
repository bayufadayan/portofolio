export default function ProjectCard({ title, description, demo_url, thumbnail }: { title: string, description: string, demo_url: string, thumbnail: string }) {
    return (
        <div className="projectCard">
            <div className="projectThumbnail">
                <img src={thumbnail} alt="thumbnail project" />
            </div>
            <div className="projectContent">
                <div className="projectText">
                    <div className="title">{title}</div>
                    <div className="description">
                        <p>
                            {description != "" ? description : "-"}
                        </p>
                    </div>
                </div>
                <a target='_blank' href={demo_url} className="projectLink"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
        </div>
    )
}
