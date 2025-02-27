import { useState } from "react";
import ExperienceItem from "./experienceItem";

/* eslint-disable @typescript-eslint/no-explicit-any */
type MoreExperienceProps = {
    onClose: () => void;
    experiences: any[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export default function MoreExperienceModal({ experiences, onClose, onMouseEnter, onMouseLeave }: MoreExperienceProps) {
    const [isClosing, setIsClosing] = useState(false);

    const onCloseClass = () => { setIsClosing(true) }

    return (
        <>
            <div
                className={`moreExperienceDetail ${isClosing ? "closing" : ""}`}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={() => {
                    onCloseClass();
                    setTimeout(() => {
                        onClose();
                    }, 300);
                }}
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
                    >&times;</button>
                    <h2 className="modal-title">More experiences ({experiences.length})</h2>
                    <div className="experience-list">
                        {experiences.map((item, index) => (
                            <ExperienceItem
                                key={index}
                                start_date={item.start_date}
                                end_date={item.end_date}
                                title={item.title}
                                company={item.company}
                                description={item.description}
                                technologies={item.technologies}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
