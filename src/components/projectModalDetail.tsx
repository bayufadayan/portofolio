/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onCloseModalButtonClick: () => void;
};

type ProjectDetailProps = {
    projects: any[];
    currentIndex: number;
} & HoverProps;

export default function ProjectModalDetail({
    projects,
    currentIndex: initialIndex,
    onMouseEnter,
    onMouseLeave,
    onCloseModalButtonClick,
}: ProjectDetailProps) {
    const [project, setProject] = useState(projects[initialIndex]);
    const [isClosing, setIsClosing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onCloseModalButtonClick();
        }, 300);
    };

    const onNavigateNext = () => {
        if (currentIndex < projects.length - 1) {
            const nextIndex = currentIndex + 1;
            setCurrentIndex(nextIndex);
            setProject(projects[nextIndex]);
        }
        if (currentIndex === projects.length - 1) {
            setCurrentIndex(0);
            setProject(projects[0]);
        }
    };

    const onNavigatePrevious = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            setCurrentIndex(prevIndex);
            setProject(projects[prevIndex]);
        }
        if (currentIndex === 0) {
            setCurrentIndex(projects.length - 1);
            setProject(projects[projects.length - 1]);
        }
    };

    return (
        <div className={`projectModal ${isClosing ? "closing" : ""}`}>
            <div className="overlay" onClick={handleClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div>
            <div className="container">
                <button className="closeButton" onClick={handleClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>&times;</button>

                <div className="content">
                    <div className="info">
                        <div className="personal">
                            <span className="projectLabel">{project.ProjectCategory.name}</span>
                            <h1>{project.title}</h1>
                            <p className="description">{project.description}</p>

                            <small>Details:</small>
                            <div className="secondaryInformation">
                                {project.detail_description === ""
                                    ? "Details have not yet been added."
                                    : project.detail_description}
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src={project.thumbnail} alt="Profile" />
                        <div className="linkProject">
                            <ul>
                                {project.repository_url !== "" && (
                                    <a href={project.repository_url} target="_blank" rel="noopener noreferrer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-brands fa-github"></i>
                                        <li>Repository</li>
                                    </a>
                                )}

                                {project.demo_url !== "" && (
                                    <a href={project.demo_url} target="_blank" rel="noopener noreferrer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-solid fa-laptop"></i>
                                        <li>Live Demo</li>
                                    </a>
                                )}

                                {project.demo_video !== "" && (
                                    <a href={project.demo_video} target="_blank" rel="noopener noreferrer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
                <span
                    onClick={onNavigatePrevious}
                    className="no-select"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    Previous
                </span>
                <span
                    onClick={onNavigateNext}
                    className="no-select"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    Next
                </span>
            </div>
        </div>
    );
}