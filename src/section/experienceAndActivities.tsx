/* eslint-disable @typescript-eslint/no-explicit-any */
import ActivityItem from "../components/activityItem";
import ExperienceItem from "../components/experienceItem";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function ExperienceAndActivities() {
    const [experienceData, setExperienceData] = useState<any[]>([]);
    const [activitiesData, setActivitiesData] = useState<any[]>([]);

    const fetchDataExperience = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/experiences`);
            const resData = res.data;

            setExperienceData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchActivitiesData = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/activities`);
            const resData = res.data;

            setActivitiesData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchDataExperience();
        fetchActivitiesData();
    }, []);

    return (
        <div className="experienceContainer">
            <div className="forExperience">
                <div className="experienceList">
                    <h1>MY EXPERIENCES</h1>
                    {experienceData.map((item, index) => (
                        <ExperienceItem key={index} start_date={item.start_date} end_date={item.end_date} title={item.title} company={item.company} description={item.description} technologies={item.technologies} />
                    ))}
                </div>
            </div>
            <div className="forActivities">
                <div className="activitiesList">
                    <h1>MY Last Activities</h1>
                    {activitiesData.map((item, index) => (
                        <ActivityItem key={index} title={item.title} type={item.type} date={item.date} organizer={item.organizer} description={item.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}
