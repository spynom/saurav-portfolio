function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-card-single">

        {/* LEFT SIDE - IMAGE */}
        <div className="about-image">
          <img src="/profile.png" alt="Saurav Kumar" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="about-content">
          <h3>AI/ML Engineer & Problem Solver</h3>

          <p>
            I am an AI/ML Engineer focused on building intelligent systems
            that transform ideas into scalable, production-ready solutions.
            My work spans computer vision, transformer-based document
            processing, and deploying real-time machine learning APIs.
          </p>

          <p>
            I specialize in YOLO-based object detection systems, LLM-powered
            document parsing, and designing ML architectures that deliver
            measurable business impact. My approach combines strong
            mathematical foundations with practical deployment expertise.
          </p>

          <div className="about-highlights">
            <div>📍 Based in India</div>
            <div>🎓 PG Diploma in Applied Statistics</div>
            <div>💼 AI/ML Engineer</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
