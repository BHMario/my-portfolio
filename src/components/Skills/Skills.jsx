import { motion } from 'framer-motion';
import './Skills.css';

const BASE = '/my-portfolio/icons';

/*
 * Technologies structured for a frontend-focused developer.
 * Groups ordered by relevance: Core → Frameworks → Styling → Backend → DevOps & Tools
 */
const skillCategories = [
  {
    title: 'Core Languages',
    description: 'The foundation of everything I build',
    skills: [
      { name: 'JavaScript', icon: `${BASE}/core-languages/jsLogo.png` },
      { name: 'TypeScript', icon: `${BASE}/core-languages/tsLogo.png` },
      { name: 'HTML5', icon: `${BASE}/core-languages/htmlLogo.png` },
      { name: 'CSS3', icon: `${BASE}/core-languages/cssLogo.png` },
      { name: 'PHP', icon: `${BASE}/core-languages/phpLogo.png` },
      { name: 'Python', icon: `${BASE}/core-languages/pythonLogo.png` },
      { name: 'Java', icon: `${BASE}/core-languages/javaLogo.png` },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    description: 'Tools I use to build modern UIs',
    skills: [
      { name: 'React', icon: `${BASE}/frameworks-libraries/reactLogo.png` },
      { name: 'Angular', icon: `${BASE}/frameworks-libraries/angularLogo.png` },
      { name: 'Laravel', icon: `${BASE}/frameworks-libraries/laravelLogo.png` },
      { name: 'Liferay', icon: `${BASE}/frameworks-libraries/liferayLogo.png` },
      { name: 'Spring Boot', icon: `${BASE}/frameworks-libraries/springbootLogo.png` },
      { name: 'Node.js', icon: `${BASE}/frameworks-libraries/nodejsLogo.png` },
    ],
  },
  {
    title: 'Styling & Design',
    description: 'Making interfaces look polished',
    skills: [
      { name: 'SCSS', icon: `${BASE}/styling-design/scssLogo.png` },
      { name: 'Bootstrap', icon: `${BASE}/styling-design/bootstrapLogo.png` },
      { name: 'Figma', icon: `${BASE}/styling-design/figmaLogo.png` },
    ],
  },
  {
    title: 'Databases',
    description: 'Where the data lives',
    skills: [
      { name: 'MySQL', icon: `${BASE}/databases/mysqlLogo.png` },
      { name: 'SQLite', icon: `${BASE}/databases/sqliteLogo.png` },
      { name: 'PostgreSQL', icon: `${BASE}/databases/postgresqlLogo.png` },
    ],
  },
  {
    title: 'DevOps & Tools',
    description: 'My daily development environment',
    skills: [
      { name: 'Git', icon: `${BASE}/devops-tools/gitLogo.png` },
      { name: 'GitHub', icon: `${BASE}/devops-tools/githubLogo.png` },
      { name: 'VS Code', icon: `${BASE}/devops-tools/vscodeLogo.png` },
      { name: 'IntelliJ IDEA', icon: `${BASE}/devops-tools/intellijLogo.png` },
      { name: 'Eclipse', icon: `${BASE}/devops-tools/eclipseLogo.png` },
    ],
  },

];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function Skills() {
  return (
    <section id="skills" className="skills section" aria-label="Technologies I work with">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Tech Stack</span>
          <h2>Technologies I work with</h2>
          <p>The tools and technologies I use to bring ideas to life — curated for a frontend-focused workflow.</p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skills__category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="skills__category-header">
                <h3 className="skills__category-title">{category.title}</h3>
                {category.description && (
                  <p className="skills__category-desc">{category.description}</p>
                )}
              </div>
              <motion.div
                className="skills__items"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skills__item"
                    variants={itemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skills__icon"
                      loading="lazy"
                    />
                    <span className="skills__name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
