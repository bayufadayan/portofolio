type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

type ActivityItemProps = {
    title: string;
    type: string;
    date: string;
    organizer: string;
    description: string;
} & HoverProps;

export default function ActivityItem({ title, type, date, organizer, description, onMouseEnter, onMouseLeave}: ActivityItemProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return "Present";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });
    };

    return (
        <div className="activitiesItem" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="activitiesHeader">
                <div className="activitiesTitle">{title}</div>
                <div className="activitiesType">{type}</div>
            </div>
            <div className="activitiesDate">
                <span>{formatDate(date)}</span>
                <div className="organizer">
                    <p>Organized by</p>
                    <span>{organizer}</span>
                </div>
            </div>
            <div className="activitiesDescription">
                {description}
            </div>
        </div>
    )
}
