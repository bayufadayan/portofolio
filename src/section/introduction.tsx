/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import SkillContainer from '../components/skillContainer'
import axios from "axios";
import AboutMe from '../components/aboutMe';
import Loading from '../components/loading';
import ProfileImage from '../components/profileImage';

type NavigationProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onAboutMePressed: () => void;
    isAboutMePressed: boolean;
};

export default function Introduction({ onMouseEnter, onMouseLeave, onAboutMePressed, isAboutMePressed }: NavigationProps) {
    const [data, setData] = useState<any[]>([]);
    const [position, setPosition] = useState<any[]>([]);
    const [index, setIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [skills, setSkills] = useState<any[]>([]);
    const [socialMedia, setSocialMedia] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [personal, position, skills, social] = await Promise.all([
                axios.get(`${import.meta.env.VITE_API_URL}/personal-informations`),
                axios.get(`${import.meta.env.VITE_API_URL}/job-titles`),
                axios.get(`${import.meta.env.VITE_API_URL}/skills`),
                axios.get(`${import.meta.env.VITE_API_URL}/social-medias`)
            ]);

            setData(personal.data);
            setPosition(position.data);
            setSkills(skills.data);
            setSocialMedia(social.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        }
    };

    useEffect(() => {
        fetchData();
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
            {isLoading && (
                <Loading />
            )}
            {isAboutMePressed && (
                <AboutMe
                    onAboutMePressed={onAboutMePressed}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    name={data.length > 0 ? data[0].name : "Loading..."}
                    description={data.length > 0 ? data[0].description : "Loading..."}
                    email={data.length > 0 ? data[0].email : "Loading..."}
                    phone={data.length > 0 ? data[0].phone : "Loading..."}
                    address={data.length > 0 ? data[0].address : "Loading..."}
                />
            )}
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

            <div className="mobileProfile">
                <ProfileImage />
            </div>

            <div className="cvAndSocial">
                <a href={data.length > 0 ? data[0].resume_link : ""} target='_blank' className="downloadCVButton" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <p>View My Resume</p>
                </a>

                <div className="socialMedia">
                    <a href={`mailto:${data.length > 0 ? data[0].email : "bayufadayan@gmail.com"}`}> <i className="fa-solid fa-envelope" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></i> </a>
                    {socialMedia
                        .filter(item => item.type === "primary")
                        .map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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
