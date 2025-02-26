'use client';
import './App.css'
import { useEffect, useRef, useCallback, useState } from "react";
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

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const posX = e.clientX;
    const posY = e.clientY;

    if (cursorDotRef.current) {
      cursorDotRef.current.style.transform = `translate(${posX - 4}px, ${posY - 4}px)`;
    }

    if (cursorOutlineRef.current) {
      cursorOutlineRef.current.animate(
        { transform: `translate(${posX - 20}px, ${posY - 20}px)` },
        { duration: 300, fill: "forwards", easing: "ease-out" }
      );
    }

    if (cursorOutlineBlurRef.current) {
      cursorOutlineBlurRef.current.animate(
        { transform: `translate(${posX - 20}px, ${posY - 20}px)` },
        { duration: 300, fill: "forwards", easing: "ease-out" }
      );
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

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
      />
      <Navigation
        onMouseEnter={() => setCursorChange(true)}
        onMouseLeave={() => setCursorChange(false)}
      />
      <main>
        <section className="introduction">
          <Introduction
            onMouseEnter={() => setCursorChange(true)}
            onMouseLeave={() => setCursorChange(false)}
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
                Web or Mobile
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
          <Project selectedCategory={selectedCategory} />
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
