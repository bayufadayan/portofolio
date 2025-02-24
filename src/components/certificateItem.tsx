export default function CertificateItem({image_url, title, issuer} : {image_url: string, title: string, issuer:string}) {
    return (
        <div className="certificateItem">
            <div className="certificateImage">
                <img src={image_url} alt="certificate" />
            </div>
            <div className="certificateDetail">
                <div className="certificateTitle">{title}</div>
                <div className="certificateIssuer">{issuer}</div>
            </div>
        </div>
    )
}
