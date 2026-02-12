import {
  FiMail,
  FiGithub,
  FiCode
} from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrapper">

        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-grid">

          {/* LEFT – FORM */}
          <div className="contact-card form-card">
            <h3>Send a Message</h3>

            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message" rows="5" />

              <button type="submit" className="contact-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT – SOCIAL LINKS */}
          <div className="contact-card social-card">
            <h3>Connect With Me</h3>

            <a href="mailto:yourmail@gmail.com" className="social-item">
  <FiMail className="icon" />
  <span>Email</span>
</a>

<a href="https://linkedin.com" className="social-item">
  <FaLinkedinIn className="icon" />
  <span>LinkedIn</span>
</a>

<a href="https://github.com" className="social-item">
  <FiGithub className="icon" />
  <span>GitHub</span>
</a>

<a href="https://leetcode.com" className="social-item">
  <FiCode className="icon" />
  <span>LeetCode</span>
</a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
