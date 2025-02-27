import { useState } from "react";

type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onCloseModalButtonClick: () => void;
};

type ProjectDetailProps = {
    project_category: string;
    title: string;
    description: string;
    detail_description: string;
    repository_url: string;
    demo_url: string;
    demo_video: string;
    thumbnail: string;
} & HoverProps;

export default function ProjectModalDetail({
    onMouseEnter,
    onMouseLeave,
    onCloseModalButtonClick,
    project_category,
    title,
    description,
    detail_description,
    repository_url,
    demo_url,
    demo_video,
    thumbnail,
}: ProjectDetailProps) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onCloseModalButtonClick();
        }, 300);
    };

    return (
        <div className={`projectModal ${isClosing ? "closing" : ""}`}>
            <div className="overlay" onClick={handleClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div>
            <div className="container">
                <button className="closeButton" onClick={handleClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>&times;</button>

                <div className="content">
                    <div className="info">
                        <div className="personal">
                            <span className="projectLabel">{project_category}</span>
                            <h1>{title}</h1>
                            <p className="description">{description}</p>

                            <small > Details: </small>
                            <div className="secondaryInformation">
                                {detail_description}
                            </div>
                        </div>

                    </div>
                    <div className="photo">
                        <img src={thumbnail} alt="Profile" />
                        <div className="linkProject">
                            <ul>
                                {repository_url != "" && (
                                    <a href={repository_url} target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-brands fa-github"></i>
                                        <li>Repository</li>
                                    </a>
                                )}

                                {demo_url != "" && (
                                    <a href={demo_url} target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-solid fa-laptop"></i>
                                        <li>Live Demo</li>
                                    </a>
                                )}

                                {demo_video != "" && (
                                    <a href={demo_video} target="_blank" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-solid fa-play"></i>
                                        <li>Video Showcase</li>
                                    </a>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigationNext">
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Previous</span>
                <span onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Next</span>
            </div>
        </div>
    )
}
