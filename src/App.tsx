'use client';
import './App.css'
import { useRef, useState } from "react";
import Navigation from './components/navigation'
import Introduction from './section/introduction'
import Project from './section/project'
import ExperienceAndActivities from './section/experienceAndActivities'
import Certificate from './section/certificate'
import ProfileImage from './components/profileImage'
import useCanvasCursor from './components/useCanvasCursor';
import SideNavbar from './components/sideNavbar';
import ToTheTop from './components/toTheTop';

function App() {
  useCanvasCursor();
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorOutlineRef = useRef<HTMLDivElement | null>(null);
  const cursorOutlineBlurRef = useRef<HTMLDivElement | null>(null);
  const [cursorChange, setCursorChange] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("web_mobile");
  const [isAboutMePressed, setIsAboutMePressed] = useState(false);

  return (
    <>
      <div className={`cursor-dot ${cursorChange ? "cursor-dot-change" : ""}`} ref={cursorDotRef}></div>
      <div className={`cursor-outline ${cursorChange ? "cursor-outline-change" : ""}`} ref={cursorOutlineRef}></div>
      <div className="cursor-outline-blur" ref={cursorOutlineBlurRef}></div>
      <ToTheTop
        onMouseEnter={() => setCursorChange(true)}
        onMouseLeave={() => setCursorChange(false)} />
      <SideNavbar
        onMouseEnter={() => setCursorChange(true)}
        onMouseLeave={() => setCursorChange(false)}
        onAboutMePressed={() => setIsAboutMePressed(true)}
      />
      <Navigation
        onMouseEnter={() => setCursorChange(true)}
        onMouseLeave={() => setCursorChange(false)}
        onAboutMePressed={() => setIsAboutMePressed(true)}
      />
      <main>
        <section className="introduction">
          <Introduction
            onMouseEnter={() => setCursorChange(true)}
            onMouseLeave={() => setCursorChange(false)}
            onAboutMePressed={() => setIsAboutMePressed(false)}
            isAboutMePressed={isAboutMePressed}
          />
          <ProfileImage />
        </section>
        <section className="projects" id='projects'>
          <div className="headerTitle">PROJECTS</div>
          <div className='projectMenuContainer'>
            <ul className="projectMenu">
              <li
                className={selectedCategory === 'web_mobile' ? 'active' : ''}
                onClick={() => setSelectedCategory('web_mobile')}
                onMouseEnter={() => setCursorChange(true)}
                onMouseLeave={() => setCursorChange(false)}
              >
                Web/Mobile
              </li>
              <li
                className={selectedCategory === 'other' ? 'active' : ''}
                onClick={() => setSelectedCategory('other')}
                onMouseEnter={() => setCursorChange(true)}
                onMouseLeave={() => setCursorChange(false)}
              >
                Another Project
              </li>
            </ul>
          </div>
          <Project
            selectedCategory={selectedCategory}
            onMouseEnter={() => setCursorChange(true)}
            onMouseLeave={() => setCursorChange(false)}
          />
        </section>
        <section className="experience">
          <div className="headerTitle" id="experiences">EXPERIENCES & ACTIVITIES</div>
          <ExperienceAndActivities
            onMouseEnter={() => setCursorChange(true)}
            onMouseLeave={() => setCursorChange(false)}
          />
        </section>
        <section className="certification">
          <div className="headerTitle" id="certificates">Certificate</div>
          <Certificate
            onMouseEnter={() => setCursorChange(true)}
            onMouseLeave={() => setCursorChange(false)}
          />
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default App
