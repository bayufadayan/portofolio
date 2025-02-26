/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from '../components/projectCard'
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Project({ selectedCategory }: { selectedCategory: string | null }) {
    const [data, setData] = useState<any[]>([]);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/projects`);
            const resData = res.data;

            setData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const filteredData = data.filter(item =>
        selectedCategory === 'web_mobile' ? [1, 2].includes(item.project_category_id) :
            selectedCategory === 'other' ? ![1, 2].includes(item.project_category_id) :
                true
    );


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="projectContainer">
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        demo_url={item.demo_url}
                        thumbnail={item.thumbnail}
                    />
                ))
            ) : (
                <p className="noData">Stay tuned! New projects will be added soon.</p>
            )}
        </div>
    );

}
