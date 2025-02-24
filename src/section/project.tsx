/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from '../components/projectCard'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Project() {
    const [data, setData] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/projects`);
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
        <div className="projectContainer">
            {data.map((item, index) => (
                <ProjectCard key={index} title={item.title} description={item.description} demo_url={item.demo_url} thumbnail={item.thumbnail} />
            ))}
        </div>
    )
}
