import SkillContainer from '../components/skillContainer'

export default function Introduction() {
    const skills = [
        { icon: "fa-brands fa-aws", name: "AWS" },
        { icon: "fa-brands fa-golang", name: "Golang" },
        { icon: "fa-brands fa-php", name: "PHP" },
        { icon: "fa-brands fa-laravel", name: "Laravel" },
        { icon: "fa-brands fa-python", name: "Python" },
        { icon: "fa-brands fa-js", name: "JavaScript" },
        { icon: "fa-brands fa-react", name: "React" },
        { icon: "fa-brands fa-node", name: "Node.js" },
        { icon: "fa-solid fa-database", name: "PostgreSQL" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
        { icon: "fa-brands fa-docker", name: "Docker" },
    ];

    return (

        <div className="introMainContent">
            <div className="introContent">
                <h3>My name is <span>Muhamad Bayu Fadayan</span></h3>
            </div>

            <div className="jobTitle">
                <span className="prefix"> I'm </span>
                <span className="position"> Web Developer </span>
            </div>

            <div className="portoDescription">
                <p>
                    Undergraduate of Computer Science at Pakuan University. Passionate
                    about web development, both backend and frontend. Currently
                    serving as an assistant lecturer at the Computer Science
                    Laboratory, Pakuan University.
                </p>
            </div>

            <div className="cvAndSocial">
                <div className="downloadCVButton">
                    <p>View My Resume</p>
                </div>

                <div className="socialMedia">
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-solid fa-envelope"></i>
                </div>
            </div>

            <h2 className="introSKill">Tech Stack & Growing Skills</h2>

            <SkillContainer skills={skills} />

        </div>

    )
}
