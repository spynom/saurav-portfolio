import { useEffect, useState } from "react";

function Hero() {
  const roles = ["AI/ML Engineer", "Python Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-icon">
          <span>🧠</span>
        </div>

        <h1>
          Hi, I'm <span className="highlight">Saurav</span>
        </h1>

        <h3 className="typing-role">
          {text}
          <span className="cursor">|</span>
        </h3>

        <p>
          An AI/ML enthusiast and full-stack developer from India,
          exploring the fascinating world of artificial intelligence
          and machine learning.
        </p>

        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn-primary">
            Download Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
