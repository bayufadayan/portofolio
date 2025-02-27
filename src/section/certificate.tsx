/* eslint-disable @typescript-eslint/no-explicit-any */
import CertificateItem from "../components/certificateItem";
import { useEffect, useState } from 'react';
import axios from "axios";
import MoreCertificateModal from "../components/moreCertificate";

type HoverProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export default function Certificate({ onMouseEnter, onMouseLeave }: HoverProps) {
    const [certificateData, setCertificateData] = useState<any[]>([]);
    const [isModalMoreCertificateOpen, setIsModalMoreCertificateOpen] = useState(false);

    const fetchCertificateData = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/certificates`);
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

            {certificateData.length > 12 && (
                <div className="seeAnotherButton moreCertificate" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                    onClick={() => setIsModalMoreCertificateOpen(!isModalMoreCertificateOpen)}
                >
                    <p>
                        View all Certicate
                    </p>
                </div>
            )}
            {isModalMoreCertificateOpen && (
                <MoreCertificateModal
                    onClose={() => setIsModalMoreCertificateOpen(!isModalMoreCertificateOpen)}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    certificates={certificateData}
                />
            )}
        </div>
    )
}
