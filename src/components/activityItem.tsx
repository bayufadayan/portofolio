
export default function ActivityItem() {
    return (
        <div className="activitiesItem">
            <div className="activitiesHeader">
                <div className="activitiesTitle">Backend Workshop Developer</div>
                <div className="activitiesType">Pelatihan</div>
            </div>
            <div className="activitiesDate">
                <span>21 Sept - 24 Sept 2025</span>
                <div className="organizer">
                    <p>Organized by</p>
                    <span>GDGoC Binus Bandung</span>
                </div>
            </div>
            <div className="activitiesDescription">
                Belajar Membuat Aplikasi Golang untuk REST API sederhana
                menggunakan Framework GIN
            </div>
        </div>
    )
}
