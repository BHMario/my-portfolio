import React from "react";
import "./Footer.css";
import githubLogo from '../../assets/githubLogo.png';
import linkedinLogo from '../../assets/linkedinLogo.png';
import gmailLogo from '../../assets/gmailLogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Mario Sánchez Ruiz. All rights reserved.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/BHMario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubLogo} alt="GitHub" className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/mario-s%C3%A1nchez-ruiz-52a4a733b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="mailto:tuemail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <img src={gmailLogo} alt="Email" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
