/* eslint-disable @typescript-eslint/no-explicit-any */
import ActivityItem from "../components/activityItem";
import ExperienceItem from "../components/experienceItem";
import { useEffect, useState } from 'react';
import axios from "axios";

type ExperienceAndActivitiesProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export default function ExperienceAndActivities({ onMouseEnter, onMouseLeave }: ExperienceAndActivitiesProps) {
    const [experienceData, setExperienceData] = useState<any[]>([]);
    const [activitiesData, setActivitiesData] = useState<any[]>([]);

    const fetchDataExperience = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/experiences`);
            const resData = res.data;

            setExperienceData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchActivitiesData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/activities`);
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
                    <div className="experienceContent">
                        <h1>MY EXPERIENCES</h1>
                        {experienceData
                            .sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()) // Sort dari terbaru ke lama
                            .slice(0, 3)
                            .map((item, index) => (
                                <ExperienceItem
                                    key={index}
                                    start_date={item.start_date}
                                    end_date={item.end_date}
                                    title={item.title}
                                    company={item.company}
                                    description={item.description}
                                    technologies={item.technologies}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                />
                            ))}
                    </div>
                    {experienceData.length > 3 && (
                        <div className="seeAnotherButton" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <p>
                                View More Experiences
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="forActivities">
                <div className="activitiesList">
                    <div className="activitiesContent">
                        <h1>MY Last Activities</h1>
                        {activitiesData
                            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort dari terbaru ke terlama
                            .slice(0, 3)
                            .map((item, index) => (
                                <ActivityItem
                                    key={index}
                                    title={item.title}
                                    type={item.type}
                                    date={item.date}
                                    organizer={item.organizer}
                                    description={item.description}
                                    onMouseEnter={onMouseEnter}
                                    onMouseLeave={onMouseLeave}
                                />
                            ))}
                    </div>
                    {activitiesData.length > 3 && (
                        <div className="seeAnotherButton" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <p>
                                View More Activities
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
