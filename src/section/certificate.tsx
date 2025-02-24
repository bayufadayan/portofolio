/* eslint-disable @typescript-eslint/no-explicit-any */
import CertificateItem from "../components/certificateItem";
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Certificate() {
    const [certificateData, setCertificateData] = useState<any[]>([]);

    const fetchCertificateData = async () => {
        try {
            const res = await axios.get(`http://api.bayufadayan.my.id/api/v1/certificates`);
            const resData = res.data;

            setCertificateData(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchCertificateData();
    }, []);

    return (
        <div className="certificateContainer">
            {certificateData.map((item, index) => (
                <CertificateItem key={index} image_url={item.image_url} title={item.title} issuer={item.issuer} />
            ))}            
        </div>
    )
}
