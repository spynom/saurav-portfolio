function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">

        {/* LEFT SIDE */}
        <div className="experience-main">

            <div className="experience-header">
                <h3>AI/ML Engineer</h3>
                <span className="company">ResoluteAI Software</span>
                <span className="duration">2023 — Present</span>
            </div>

            <p className="experience-description">
                Worked on production-grade AI systems focusing on computer vision,
                document intelligence, and scalable ML deployments. Led end-to-end
                development from model experimentation to deployment in real-time environments.
            </p>

            

            <ul className="experience-list">
                <li>🚀 Designed YOLO-based baggage & barcode detection pipeline</li>
                <li>📉 Reduced manual tracking workload by <strong>40%</strong></li>
                <li>📄 Fine-tuned DONUT transformer for financial document parsing</li>
                <li>⚡ Built REST APIs with sub-second inference latency</li>
                <li>🧠 Improved inference optimization & memory efficiency</li>
            </ul>
            {/* 🔥 TECH STACK MOVED HERE */}
            <div className="experience-skills">
                <span>Python</span>
                <span>PyTorch</span>
                <span>YOLO</span>
                <span>FastAPI</span>
                <span>Docker</span>
                <span>Transformers</span>
                <span>OpenCV</span>
                <span>REST APIs</span>
                <span>Scikit-Learn</span>
                <span>Pandas</span>
                <span>Langchain</span>
                <span>LangGraph</span>
                <span>Numpy</span>
            </div>

            </div>


        {/* RIGHT SIDE METRICS */}
        <div className="experience-metrics">

          <div className="metric-box">
            <h4>40%</h4>
            <p>Manual Work Reduced</p>
          </div>

          <div className="metric-box">
            <h4>&lt;1s</h4>
            <p>API Response Time</p>
          </div>

          <div className="metric-box">
            <h4>Real-Time</h4>
            <p>Computer Vision Pipeline</p>
          </div>

          <div className="metric-box">
            <h4>Production</h4>
            <p>Deployed ML Systems</p>
          </div>

        </div>

      </div>


    </section>
  );
}

export default Experience;
