import { useState } from "react";
import ActivityItem from "./activityItem";

/* eslint-disable @typescript-eslint/no-explicit-any */
type MoreActivityProps = {
    onClose: () => void;
    activities: any[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export default function MoreActivityModal({ activities, onClose, onMouseEnter, onMouseLeave }: MoreActivityProps) {
    const [isClosing, setIsClosing] = useState(false);

    const onCloseClass = () => { setIsClosing(true) }

    return (
        <>
            <div
                className={`moreActivityDetail ${isClosing ? "closing" : ""}`}
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
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}

                    >&times;</button>
                    <h2 className="modal-title">More activities ({activities.length})</h2>
                    <div className="activity-list">
                        {activities.map((item, index) => (
                            <ActivityItem
                                key={index}
                                title={item.title}
                                type={item.type}
                                date={item.date}
                                organizer={item.organizer}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
