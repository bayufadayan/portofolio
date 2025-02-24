import certificatePhoto from '../assets/certificate.png'

export default function CertificateItem() {
    return (
        <div className="certificateItem">
            <div className="certificateImage">
                <img src={certificatePhoto} alt="certificate" />
            </div>
            <div className="certificateDetail">
                <div className="certificateTitle">Belajar Golang Pemula</div>
                <div className="certificateIssuer">GDGoC Binus Bandung</div>
            </div>
        </div>
    )
}
