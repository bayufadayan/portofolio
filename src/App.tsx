'use client';
import './App.css'
import Navigation from './components/navigation'
import Introduction from './section/introduction'
import Project from './section/project'
import ExperienceAndActivities from './section/experienceAndActivities'
import Certificate from './section/certificate'
import ProfileImage from './components/profileImage'
import useCanvasCursor from './components/useCanvasCursor';

function App() {
  useCanvasCursor();

  return (
    <>
      <Navigation />
      <main>
        <section className="introduction">
          <Introduction />
          <ProfileImage />
        </section>
        <section className="projects" id='projects'>
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
