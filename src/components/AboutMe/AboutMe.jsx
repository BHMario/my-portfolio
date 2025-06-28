import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';  // Asegúrate de tener un archivo de CSS para AboutMe

function AboutMe({ isDarkMode, toggleDarkMode }) {
  return (
    <section id="about-me" className="about-me" aria-label="About Me">
      <button
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? '🌞' : '🌙'}
      </button>

      <Link to="/" className="back-icon" aria-label="Back to Home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 8H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </Link>
      
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>Here is a little bit about myself...</p>
        {/* Aquí puedes agregar más contenido sobre ti */}
      </div>
    </section>
  );
}

export default AboutMe;
