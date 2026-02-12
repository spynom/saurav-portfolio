const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "SQL"]
  },
  {
    category: "Machine Learning",
    items: ["Scikit-Learn", "PyTorch", "NumPy", "Pandas"]
  },
  {
    category: "Computer Vision",
    items: ["YOLO", "OpenCV"]
  },
  {
    category: "Generative AI",
    items: ["LLM", "LangChain", "LangGraph", "RAG", "FAISS"]
  },
  {
    category: "Deployment & Tools",
    items: ["FastAPI", "Docker", "REST APIs", "Git"]
  }
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-card">
              <h3>{group.category}</h3>

              <div className="skill-tags">
                {group.items.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
