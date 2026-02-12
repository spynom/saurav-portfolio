const projects = [
  {
    title: "RAG Customer Support Assistant",
    duration: "Jan 2024 — Mar 2024",
    description:
      "End-to-end Retrieval-Augmented Generation (RAG) system for banking support using semantic vector search and LLM-based contextual response generation.",
    tools: ["Python", "LangChain", "LLM", "FAISS", "FastAPI"],
    link: "https://github.com/spynom/kotak-bank-customer-support-bot",
    featured: true
  },
  {
    title: "End-to-End Autonomous Driving System",
    duration: "Aug 2023 — Dec 2023",
    description:
      "Deep learning steering angle prediction pipeline achieving ~0.87 R² with YOLO object detection and lane detection integration.",
    tools: ["PyTorch", "YOLO", "OpenCV", "NumPy"],
    link: "https://github.com/spynom/End-to-End-Autonomous-Driving-System"
  }
];

function Projects() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="projects-section">
      
      <div className="projects-wrapper">

        <h2 className="section-title">Projects</h2>

        {/* Featured Project */}
        {featuredProject && (
          <div className="featured-project">
            <div className="featured-left">
              <span className="project-duration">
                {featuredProject.duration}
              </span>

              <h3>{featuredProject.title}</h3>

              <p>{featuredProject.description}</p>

              <div className="tech-tags">
                {featuredProject.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

              <a
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        )}

        {/* Grid Projects */}
        <div className="projects-grid">
          {otherProjects.map((project, index) => (
            <div key={index} className="project-card">
              <span className="project-duration">
                {project.duration}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-tags">
                {project.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects-cta">
          <a
            href="https://github.com/spynom?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Explore All Projects on GitHub →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
