/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import SkillContainer from '../components/skillContainer'
import axios from "axios";

export default function Introduction() {
    const [data, setData] = useState<any[]>([]);
    const [position, setPosition] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [skills, setSkills] = useState<any[]>([]);
    const [socialMedia, setSocialMedia] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/personal-informations`);
            const resData = res.data;

            setData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchDataPosition = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/job-titles`);
            const resData = res.data;

            setPosition(resData);
            console.error(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchDataSkill = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/skills`);
            const resData = res.data;

            setSkills(resData);
            console.error(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const fetchDataSocialMedia = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/social-medias`);
            const resData = res.data;

            setSocialMedia(resData);
            console.error(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
        fetchDataPosition();
        fetchDataSkill();
        fetchDataSocialMedia();
    }, []);

    useEffect(() => {
        if (position.length === 0) return;

        setIsFading(true);
        const changeTextTimeout = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % position.length);
            setIsFading(false);
        }, 3000);

        return () => {
            clearTimeout(changeTextTimeout);
        };
    }, [index, position.length]);

    return (
        <div className="introMainContent">
            <div className="introContent">
                <h3>My name is <span>{data.length > 0 ? data[0].name : "Loading..."}</span></h3>
            </div>

            <div className="jobTitle">
                <span className="prefix"> I'm </span>
                <span className={`position ${isFading ? 'fade-out' : ''}`}>
                    {position.length > 0 ? position[index].title : "Loading..."}
                </span>
            </div>

            <div className="portoDescription">
                <p>
                    {data.length > 0 ? data[0].description : "Loading..."}
                </p>
            </div>

            <div className="cvAndSocial">
                <a href={data.length > 0 ? data[0].resume_link : ""} target='_blank' className="downloadCVButton">
                    <p>View My Resume</p>
                </a>

                <div className="socialMedia">
                    <a href={`mailto:${data.length > 0 ? data[0].email : "bayufadayan@gmail.com"}`}> <i className="fa-solid fa-envelope"></i> </a>
                    {socialMedia
                        .filter(item => item.type === "primary")
                        .map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    {/* <span> <i className="fa-solid fa-ellipsis"></i> </span> */}
                </div>
            </div>

            <h2 className="introSKill">Tech Stack & Growing Skills</h2>

            <SkillContainer skills={skills} />

        </div>

    )
}
