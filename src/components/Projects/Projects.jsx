import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

/*
 * Curated project dataset based on real GitHub repos.
 * Using static data instead of live API calls for:
 *   1. No rate-limit issues (GitHub API: 60 req/hr unauthenticated)
 *   2. Full control over descriptions, tech tags, and ordering
 *   3. Zero loading delay — instant render
 *   4. Works offline / behind firewalls
 *
 * To update: edit this array when you publish new projects.
 */
const projects = [
  {
    title: 'Personal Portfolio',
    description:
      'Modern single-page portfolio built with React and Vite. Features a custom design system, dark/light mode, scroll-triggered animations with Framer Motion, and a fully functional contact form.',
    technologies: ['React', 'Vite', 'CSS', 'Framer Motion'],
    category: 'frontend',
    githubUrl: 'https://github.com/BHMario/my-portfolio',
    demoUrl: 'https://bhmario.github.io/my-portfolio/',
  },
  {
    title: 'Finova (In Development)',
    description:
      'Personal SaaS finance dashboard featuring multi-currency support and comprehensive financial tracking. Built with modern web technologies, still in early active development.',
    technologies: ['React', 'TypeScript', 'Vite', 'MySQL'],
    category: 'fullstack',
    githubUrl: 'https://github.com/BHMario/Finova',
    demoUrl: null,
  },
  {
    title: 'Zen',
    description:
      'Cross-platform mobile application built with Flutter and Dart. Demonstrates multiplatform development skills with modern reactive UI patterns and state management.',
    technologies: ['Dart', 'Flutter', 'Mobile'],
    category: 'mobile',
    githubUrl: 'https://github.com/BHMario/zen',
    demoUrl: null,
  },
  {
    title: 'BusTracker',
    description:
      'Bus route simulation app with interactive mapping. Generates routes, displays them on Leaflet.js maps, shows statistics, and exports data to JSON.',
    technologies: ['Java', 'Swing', 'Leaflet.js', 'JSON'],
    category: 'fullstack',
    githubUrl: 'https://github.com/BHMario/BUSTracker',
    demoUrl: null,
  },
  {
    title: 'Hotel Management System',
    description:
      'Full-stack hotel management application with PHP backend. Features room booking, guest management, and a responsive admin panel for hotel operations.',
    technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/BHMario/SistemaGestionHotelera',
    demoUrl: null,
  },
  {
    title: 'TriviaIlerna',
    description:
      'Trivia application with categorized questions by topic and difficulty. Includes user authentication, role-based access control, and a relational database backend.',
    technologies: ['Java', 'MySQL', 'JDBC'],
    category: 'backend',
    githubUrl: 'https://github.com/BHMario/TriviaIlerna',
    demoUrl: null,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

function Projects() {
  return (
    <section id="projects" className="projects section" aria-label="Projects developed by Mario">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Projects</span>
          <h2>Featured Projects</h2>
          <p>A selection of projects I've built — from frontend interfaces to full-stack applications.</p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="projects__cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://github.com/BHMario"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View all projects on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
