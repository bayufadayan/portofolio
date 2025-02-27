/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import NewProfile from '../assets/new_profile.png';
import axios from 'axios';

type AboutMeProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onAboutMePressed: () => void;
    name: string;
    description: string;
    email: string;
    phone: string;
    address: string;
};

export default function AboutMe({
    onMouseEnter,
    onMouseLeave,
    onAboutMePressed,
    name,
    description,
    email,
    phone,
    address,
}:
    AboutMeProps) {
    const [isClosing, setIsClosing] = useState(false);
    const [education, setEducation] = useState<any[]>([]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onAboutMePressed();
        }, 300);
    };

    const fetchDataEducation = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/educations`);
            const resData = res.data;

            setEducation(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchDataEducation();
    }, []);


    return (
        <div className={`aboutMe ${isClosing ? "closing" : ""}`}>
            <div className="overlay" onClick={handleClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div>
            <div className="container">
                <button className="closeButton" onClick={handleClose} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>&times;</button>

                <div className="content">
                    <div className="info">
                        <div className="personal">
                            <h1>{name}</h1>
                            <p className="description">{description}</p>

                            <div className="secondaryInformation">
                                <ul>
                                    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-solid fa-square-envelope"></i>
                                        {email}
                                    </li>
                                    <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                                        <i className="fa-brands fa-square-whatsapp"></i>
                                        {phone}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-map-pin"></i>
                                        {address}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {education.map((item, index) => (
                            <div className="educationCard" key={index}>
                                <p className="institution">{item.institution}</p>
                                <p>{item.start_year} - {item.end_year == 0 ? ("Present") : (item.end_year)}</p>
                                <p>{item.degree} of {item.major}</p>
                            </div>
                        ))}

                    </div>
                    <div className="photo">
                        <img src={NewProfile} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
}
