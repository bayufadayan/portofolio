import './App.css'
import profilePhoto from './assets/profile.png'
import Navigation from './components/navigation'
import Introduction from './section/introduction'
import Project from './section/project'
import ExperienceAndActivities from './section/experienceAndActivities'
import Certificate from './section/certificate'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <section className="introduction">
          <Introduction />
          <div className="profilePictures">
            <img src={profilePhoto} alt="Profile Photo" />
          </div>
        </section>
        <section className="projects">
          <div className="headerTitle">PROJECTS</div>
          <Project />
        </section>
        <section className="experience">
          <div className="headerTitle" id="experiences">EXPERIENCES & ACTIVITIES</div>
          <ExperienceAndActivities />
        </section>
        <section className="certification">
          <div className="headerTitle" id="certificates">Certificate</div>
          <Certificate />
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
