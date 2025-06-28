function ProjectCard({ title, description, technologies, demoUrl, githubUrl }) {
  return (
    <div className="project-card" aria-label={`Project: ${title}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul aria-label={`Technologies used in ${title}`}>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="project-buttons">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          aria-label={`View live demo of ${title}`}
        >
          View Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          aria-label={`View source code of ${title} on GitHub`}
        >
          View Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
