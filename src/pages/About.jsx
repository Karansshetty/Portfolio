import "../styles/About.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode } from "react-icons/fa";
import { EDUCATION } from "../data/portfolioData.js";

function About() {
  return (
    <section className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1>About Me</h1>
        <div className="about-divider" aria-hidden="true" />

        <div className="about-intro">
          <p>
            I’m a Computer Science graduate focused on building clean, scalable, and maintainable web
            applications. I enjoy turning ideas into well-structured solutions using modern web technologies.
          </p>

          <p>
            I have hands-on experience with the MERN stack through academic and personal projects, including
            building REST APIs, implementing authentication, integrating databases, and creating responsive
            user interfaces with a focus on usability and performance.
          </p>

          <p>
            I follow a quality-first coding approach with clear structure, consistent patterns, and proper
            error handling.
          </p>

          <p>
            I’m actively seeking entry-level opportunities to learn from experienced teams, contribute to
            real-world products, and grow as a software engineer.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="about-block">
          <h2><FaGraduationCap /> Education</h2>

          <div className="education-timeline">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={`${edu.year}-${edu.degree}`}
                className="timeline-entry"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
              >
                <div className="timeline-year">{edu.year}</div>
                <div className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                </div>
                <div className="timeline-card">
                  <h3>{edu.degree}</h3>
                  <p>
                    {edu.institution}
                    {edu.location ? `, ${edu.location}` : ""}
                  </p>
                  {edu.badge ? <span className="badge">{edu.badge}</span> : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className="about-block">
          <h2><FaCode /> Skills</h2>

          <div className="skills-wrap">
            <span className="skill-pill">JavaScript (ES6+)</span>
            <span className="skill-pill">React</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">Express.js</span>
            <span className="skill-pill">MongoDB</span>
            <span className="skill-pill">REST APIs</span>
            <span className="skill-pill">Authentication (JWT)</span>
            <span className="skill-pill">HTML</span>
            <span className="skill-pill">CSS</span>
            <span className="skill-pill">Git & GitHub</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
