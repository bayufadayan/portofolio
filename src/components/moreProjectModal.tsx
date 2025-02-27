import { useState } from "react";
import ProjectModalDetail from "./projectModalDetail";

/* eslint-disable @typescript-eslint/no-explicit-any */
type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClose: () => void;
};

type MoreProjectProps = {
    projects: any[];
} & HoverProps;

export default function MoreProjectModal({ projects, onClose, onMouseEnter, onMouseLeave }: MoreProjectProps) {
    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isClosing, setIsClosing] = useState(false);

    const formatDescription = (text: string) => {
        const words = text.split(" ");
        return words.length > 11 ? words.slice(0, 11).join(" ") + " ..." : text;
    };

    const onDetailClick = (index: number) => {
        setCurrentIndex(index);
        setIsModalDetailOpen(true);
    }

    const onCloseClass = () => { setIsClosing(true) }

    return (
        <>
            <div
                className={`moreProjectDetail ${isClosing ? "closing" : ""}`}
                onClick={() => {
                    onCloseClass();
                    setTimeout(() => {
                        onClose();
                    }, 300);

                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button
                        className="close-button"
                        onClick={() => {
                            onCloseClass();
                            setTimeout(() => {
                                onClose();
                            }, 300);
                        }}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >&times;</button>
                    <h2 className="modal-title">More Projects ({projects.length})</h2>
                    <div className="project-list">
                        {projects.map((project, index) => (
                            <div key={index}
                                className="project-card"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                                onClick={() => onDetailClick(index)}
                            >
                                <img src={project.thumbnail} alt={project.title} className="project-image" />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description.trim() !== "" ? formatDescription(project.description) : "-"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isModalDetailOpen && (
                <ProjectModalDetail
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onCloseModalButtonClick={() => setIsModalDetailOpen(false)}
                    projects={projects}
                    currentIndex={currentIndex}
                />
            )}
        </>
    );
}
