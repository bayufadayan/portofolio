/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import axios from "axios";

export default function ProfileImage() {
    const [data, setData] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.VITE_API_URL}/personal-informations`);
            const resData = res.data;

            setData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="profilePictures">
            <img src={data.length > 0 ? data[0].profile_image : ""} alt="Profile Photo" />
        </div>
    )
}
