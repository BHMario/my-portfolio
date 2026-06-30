import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profilePhoto from '../../assets/profile.jpg';
import cvFile from '../../assets/MarioSanchezRuiz_CV.pdf';
import './Hero.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* --- Typewriter hook --- */
const roles = [
  'Frontend Developer',
  'React Developer',
  'Frontend Developer focused on UI/UX',
  'JavaScript Frontend Developer',
];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

function Hero() {
  const typedText = useTypewriter(roles);
  const { scrollY } = useScroll();

  /* Parallax: blobs move slightly as user scrolls */
  const blobY1 = useTransform(scrollY, [0, 600], [0, -80]);
  const blobY2 = useTransform(scrollY, [0, 600], [0, -50]);

  return (
    <section id="hero" className="hero" aria-label="Homepage Introduction">
      {/* Parallax gradient blobs */}
      <motion.div className="hero__blob hero__blob--1" style={{ y: blobY1 }} />
      <motion.div className="hero__blob hero__blob--2" style={{ y: blobY2 }} />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__photo-wrapper" variants={itemVariants}>
            <img
              src={profilePhoto}
              alt="Mario Sánchez Ruiz"
              className="hero__photo"
              width="180"
              height="180"
              loading="eager"
            />
            {/* Employment status badge */}
            <span className="hero__status hero__status--open"> {/* open (green) o employed (blue) */}
              <span className="hero__status-dot hero__status-dot--green" />
              Open to work
            </span>
          </motion.div>

          <motion.p className="hero__greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants}>
            <span className="hero__name-accent">Mario</span> Sánchez Ruiz
          </motion.h1>

          <motion.h2 className="hero__role" variants={itemVariants} aria-label="Multiplatform App Developer">
            <span className="hero__typed">{typedText}</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </motion.h2>

          <motion.p className="hero__description" variants={itemVariants}>
            Crafting high-quality web and mobile apps. Open to international remote opportunities.
          </motion.p>

          <motion.p className="hero__sub-description" variants={itemVariants}>
            My focus is on developing efficient, scalable, and user-friendly applications that make a real impact.
          </motion.p>

          <motion.div className="hero__cta" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary btn-lg">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Contact Me
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
            <a href={cvFile} download="MarioSanchezRuiz_CV" className="btn btn-secondary btn-lg">
              Download CV
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </motion.div>

          <motion.div className="hero__socials" variants={itemVariants}>
            <a
              href="https://github.com/BHMario"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mario-s%C3%A1nchez-ruiz-52a4a733b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:mariosanrui1612@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
