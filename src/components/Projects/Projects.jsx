import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './Projects.css';
import Footer from '../Footer/Footer';

function Projects({ isDarkMode, toggleDarkMode }) {
  const projects = [
    {
      title: 'Project One',
      description: 'A description of project one.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: 'https://project-one.com',
      githubUrl: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'Project Two',
      description: 'A description of project two.',
      technologies: ['Flutter', 'Dart'],
      demoUrl: 'https://project-two.com',
      githubUrl: 'https://github.com/yourusername/project-two',
    },
  ];

  return (
    <div className="page-container">
      <main id="projects" className="projects" aria-label="List of projects developed by Mario">
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? '🌞' : '🌙'}
        </button>

        <h2>My Projects</h2>

        <Link to="/" className="back-icon" aria-label="Back to Home">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 8H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z"
              clipRule="evenodd" />
          </svg>
        </Link>

        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default Projects;
