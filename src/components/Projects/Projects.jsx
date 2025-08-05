import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import './Projects.css';
import Footer from '../Footer/Footer';

function Projects({ isDarkMode, toggleDarkMode }) {
  const projects = [
    {
      title: 'Elysium-Vape',
      description: 'An online vape shop interface showcasing a modern product catalog, shopping cart design. Built to demonstrate e-commerce UI concepts without purchase functionality',
      technologies: ['HTML5', 'CSS', 'JavaScript'],
      demoUrl: '//URL de la demo (githubPages) del proyecto correspondiente', //TO DO: Replace with actual demo URL
      githubUrl: 'https://github.com/BHMario/Elysium-Vape',
    },
    {
      title: 'TriviaIlerna',
      description: 'A trivia application with categorized questions by topic and difficulty. Includes user authentication, role-based access (player/admin), and a relational database to manage users and game data',
      technologies: ['Java', 'SQL'],
      demoUrl: '//URL de la demo (githubPages) del proyecto correspondiente', //TO DO: Replace with actual demo URL
      githubUrl: '//URL del repositorio de GitHub del proyecto correspondiente', //TO DO: Replace with actual GitHub URL
    },
    {
      title: 'BusTracker',
      description: 'Bus simulation app built with Java Swing and Leaflet.js. It generates routes, displays them on interactive maps, shows statistics, allows route editing, and exports data to JSON',
      technologies: ['Java (Swing, AWT, I/O)', 'Leaflet.js', 'JSON'],
      demoUrl: '//URL de la demo (githubPages) del proyecto correspondiente', //TO DO: Replace with actual demo URL
      githubUrl: '//URL del repositorio de GitHub del proyecto correspondiente', //TO DO: Replace with actual GitHub URL
    },
    {
      title: 'Videogame Hispalis',
      description: 'A simplified homage to Darkest Dungeon: a turn-based Java Swing fighting game where you battle bots that deal randomized damage each turn. Built as a learning exercise to master event-driven GUIs and game mechanics.',
      technologies: ['Java (Swing, AWT, I/O)'],
      demoUrl: '//URL de la demo (githubPages) del proyecto correspondiente', //TO DO: Replace with actual demo URL
      githubUrl: '//URL del repositorio de GitHub del proyecto correspondiente', //TO DO: Replace with actual GitHub URL
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
