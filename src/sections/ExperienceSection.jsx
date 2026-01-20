import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { EXPERIENCE } from "../data/portfolioData.js";

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" title="Experience" withHeroBackground>
      <div className="timeline">
        {EXPERIENCE.map((role) => (
          <motion.article
            key={`${role.year}-${role.company}-${role.role}`}
            className="timeline-item"
            variants={sectionItemVariants}
          >
            <div className="timeline-year">{role.year}</div>

            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-head">
                <h3 className="timeline-title">
                  {role.role} — {role.company}
                </h3>
                {role.tech ? <span className="badge badge-muted">{role.tech}</span> : null}
              </div>
              <p className="timeline-meta">{role.location}</p>
              <ul className="timeline-bullets">
                {role.bullets.slice(0, 2).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
