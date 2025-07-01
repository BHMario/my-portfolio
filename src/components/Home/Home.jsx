import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../Footer/Footer.jsx';

function Home({ isDarkMode, toggleDarkMode }) {
  return (
    <>
      <header className="hero" aria-label="Homepage Introduction">
        <div className="hero-content">
          <img src="/src/assets/profile.jpg" alt="Mario profile" className="profile-photo" />
          <h1>Hello, I'm <span className="highlight">Mario</span></h1>
          <h2>Multiplatform App Developer</h2>
          <p>
            Crafting high-quality mobile apps using React Native and more. Open to international remote opportunities.
          </p>
          <p className="highlight">
            My focus is on developing efficient, scalable, and user-friendly applications that make a real impact.
          </p>
          <p className="highlight">
            What drives me is creating solutions that improve people's lives, always eager to learn and embrace new technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-projects" aria-label="Go to my projects">View Projects</Link>
            <Link to="/contact" className="btn btn-contact" aria-label="Contact me">Contact Me</Link>
            <Link to="/about" className="btn btn-about" aria-label="Learn about me">About Me</Link>
            <a href="/CV-Mario.pdf" download="CV-MarioSanchezRuiz" className="btn btn-cv" aria-label="Download my CV as PDF">Download CV</a>
          </div>

          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="dark-mode-toggle"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <section className="skills-section" id="skills" aria-label="Technologies I work with">
          <h3>Technologies I work with</h3>
          <div className="skills-cards">
            {/* Frontend */}
            <div className="skill-card">
              <h4>Frontend</h4>
              <ul>
                <li><img src="/icons/react.svg" alt="React" />React</li>
                <li><img src="/icons/html.svg" alt="HTML" />HTML</li>
                <li><img src="/icons/css.svg" alt="CSS" />CSS</li>
                <li><img src="/icons/js.svg" alt="JavaScript" />JavaScript</li>
                <li><img src="/icons/typescript.svg" alt="TypeScript" />TypeScript</li>
                <li><img src="/icons/bootstrap.svg" alt="Bootstrap" />Bootstrap</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="skill-card">
              <h4>Backend</h4>
              <ul>
                <li><img src="/icons/java.svg" alt="Java" />Java</li>
                <li><img src="/icons/mysql.svg" alt="MySQL" />MySQL</li>
                <li><img src="/icons/node.svg" alt="Node.js" />Node.js</li>
              </ul>
            </div>

            {/* Frameworks */}
            <div className="skill-card">
              <h4>Frameworks</h4>
              <ul>
                <li><img src="/icons/springboot.svg" alt="Spring Boot" />Spring Boot</li>
                <li><img src="/icons/angular.svg" alt="Angular" />Angular</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="skill-card">
              <h4>Tools</h4>
              <ul>
                <li><img src="/icons/eclipse.svg" alt="Eclipse" />Eclipse</li>
                <li><img src="/icons/idea.svg" alt="IntelliJ IDEA" />IntelliJ IDEA</li>
                <li><img src="/icons/vscode.svg" alt="VS Code" />Visual Studio Code</li>
                <li><img src="/icons/mysql-workbench.svg" alt="MySQL Workbench" />MySQL Workbench</li>
                <li><img src="/icons/git.svg" alt="Git" />Git</li>
                <li><img src="/icons/github.svg" alt="GitHub" />GitHub</li>
                <li><img src="/icons/figma.svg" alt="Figma" />Figma</li>
              </ul>
            </div>
          </div>
        </section>
      </header>

      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

export default Home;
