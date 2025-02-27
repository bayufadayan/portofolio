import { useState } from "react";
import CertificateItem from "./certificateItem";

/* eslint-disable @typescript-eslint/no-explicit-any */
type MoreCertificateProps = {
    onClose: () => void;
    certificates: any[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

export default function MoreCertificateModal({ certificates, onClose, onMouseEnter, onMouseLeave }: MoreCertificateProps) {
    const [isClosing, setIsClosing] = useState(false);

    const onCloseClass = () => { setIsClosing(true) }

    return (
        <>
            <div
                className={`moreCertificateDetail ${isClosing ? "closing" : ""}`}
                onClick={() => {
                    onCloseClass();
                    setTimeout(() => {
                        onClose();
                    }, 300);
                }}
            >
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button
                        className="close-button"
                        onClick={() => {
                            onCloseClass();
                            setTimeout(() => {
                                onClose();
                            }, 300);
                        }}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}

                    >&times;</button>
                    <h2 className="modal-title">More certificates ({certificates.length})</h2>
                    <div className="certificate-list">
                        {certificates.map((item, index) => (
                            <CertificateItem key={index} image_url={item.image_url} title={item.title} issuer={item.issuer} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}
