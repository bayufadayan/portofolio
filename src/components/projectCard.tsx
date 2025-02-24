import projectThumbnailPhoto from '../assets/project-thumbnail.png'

export default function ProjectCard({ title, description, demo_url }: { title: string, description: string, demo_url: string }) {
    return (
        <div className="projectCard">
            <div className="projectThumbnail">
                <img src={projectThumbnailPhoto} alt="thumbnail project" />
            </div>
            <div className="projectContent">
                <div className="projectText">
                    <div className="title">{title}</div>
                    <div className="description">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                <div className="projectLink">{demo_url}</div>
            </div>
        </div>
    )
}
