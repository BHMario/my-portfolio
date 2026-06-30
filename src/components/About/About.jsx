import { motion } from 'framer-motion';
import cvFile from '../../assets/MarioSanchezRuiz_CV.pdf';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function About() {
  return (
    <section id="about" className="about section" aria-label="About Me">
      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-label">About</span>
          <h2>Get to know me</h2>
          <p>A quick overview of who I am, what I do, and what drives me.</p>
        </motion.div>

        <div className="about__grid">
          {/* About Me */}
          <motion.div
            className="about__card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Who I Am</h3>
            <p>
              Passionate multiplatform developer with experience in Java and web apps.
              I love crafting clean, scalable UIs and solving problems.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="about__card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3>Experience</h3>
            <p>
              I have collaborated with teams to build
              web and mobile applications. My experience covers both frontend
              and backend, always focusing on clean code and usability.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="about__card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3>Education</h3>
            <p>
              Higher Technician in Multiplatform Application Development (EQF Level 5).
              I also keep learning through online courses
              to stay up-to-date with the latest technologies.
            </p>
          </motion.div>

          {/* Projects / Passion */}
          <motion.div
            className="about__card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3>What Drives Me</h3>
            <p>
              What drives me is creating solutions that improve people's lives,
              always eager to learn and embrace new technologies. I enjoy creating
              personal projects to explore new frameworks and tools.
            </p>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          className="about__actions"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <a href="#projects" className="btn btn-primary">
            See Projects
          </a>
          <a href={cvFile} download="MarioSanchezRuiz_CV" className="btn btn-outline">
            Download CV
          </a>
          <a
            href="https://github.com/BHMario"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            GitHub Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
