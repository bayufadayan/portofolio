import ActivityItem from "../components/activityItem";
import ExperienceItem from "../components/experienceItem";

export default function ExperienceAndActivities() {
    return (
        <div className="experienceContainer">
            <div className="forExperience">
                <div className="experienceList">
                    <h1>MY EXPERIENCES</h1>
                    <ExperienceItem />
                    <ExperienceItem />
                </div>
            </div>
            <div className="forActivities">
                <div className="activitiesList">
                    <h1>MY Last Activities</h1>
                    <ActivityItem />
                    <ActivityItem />
                    <ActivityItem />
                </div>
            </div>
        </div>
    )
}
