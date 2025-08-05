import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import Footer from '../Footer/Footer';

function AboutMe({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="page-content">
      {/* Dark mode toggle */}
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      {/* Back to home */}
      <Link to="/" className="back-icon" aria-label="Back to Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
             viewBox="0 0 20 20">
          <path fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 8H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"/>
        </svg>
      </Link>

      <main id="about-me" className={`about-me ${isDarkMode ? 'dark-mode' : ''}`} aria-label="About Me">
        {/* Block 1 - About */}
        <div className="block">
          <div className="block-image">
            <img src="/my-portfolio/assets/mi-foto.jpg" alt="Mario working"/>
          </div>
          <div className="block-text">
            <h2>About Me</h2>
            <p>
              Passionate multiplatform developer with experience in React, Java and mobile apps.
              I love crafting clean, scalable UIs and solving complex problems.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-projects">See Projects</Link>
              <a href="/CV-Mario.pdf" download="CV-MarioSanchezRuiz" className="btn btn-cv" aria-label="Download my CV as PDF">
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Block 2 - Skills */}
        <div className="block reverse">
          <div className="block-image">
            <img src="/my-portfolio/assets/skills.jpg" alt="Skills"/>
          </div>
          <div className="block-text">
            <h2>Skills</h2>
            <p>Some of the technologies I work with are:</p>
            <ul className="skills-list">
              <li>React / React Native</li>
              <li>Java / Spring Boot</li>
              <li>Node.js / Express</li>
              <li>MongoDB / SQL</li>
              <li>TailwindCSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>

        {/* Block 3 - Experience */}
        <div className="block">
          <div className="block-image">
            <img src="/my-portfolio/assets/experience.jpg" alt="Experience"/>
          </div>
          <div className="block-text">
            <h2>Experience</h2>
            <p>
              I have collaborated with teams and freelance clients to build
              web and mobile applications. My experience covers both frontend
              and backend, always focusing on clean code and usability.
            </p>
          </div>
        </div>

        {/* Block 4 - Education */}
        <div className="block reverse">
          <div className="block-image">
            <img src="/my-portfolio/assets/education.jpg" alt="Education"/>
          </div>
          <div className="block-text">
            <h2>Education</h2>
            <p>
              Bachelor's degree in Computer Science.
              I also keep learning through online courses and certifications
              to stay up-to-date with the latest technologies.
            </p>
          </div>
        </div>

        {/* Block 5 - Projects */}
        <div className="block">
          <div className="block-image">
            <img src="/my-portfolio/assets/projects.jpg" alt="Projects"/>
          </div>
          <div className="block-text">
            <h2>Projects</h2>
            <p>
              I enjoy creating personal projects to explore new frameworks and
              tools. You can check some of my work on my{" "}
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>.
            </p>
          </div>
        </div>
      </main>

      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
}

export default AboutMe;
