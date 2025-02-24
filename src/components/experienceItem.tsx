export default function ExperienceItem({ start_date, end_date, title, company, description, technologies }: { start_date: string, end_date: string, title: string, company: string, description: string, technologies: string }) {
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
        <div className="experienceItem">
            <div className="experienceDate">{formatDate(start_date)} - {end_date ? formatDate(end_date) : "Present"}</div>
            <div className="experienceDetail">
                <div className="experienceTitle">{title}</div>
                <div className="experienceCompany">{company}</div>
                <div className="experienceDescription">
                    {description}
                    <span className="experienceTechnologies">
                        Stack & Tools <span>{technologies}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
