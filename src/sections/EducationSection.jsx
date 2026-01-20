import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { EDUCATION } from "../data/portfolioData.js";

export default function EducationSection() {
  return (
    <AnimatedSection id="education" title="Education" withHeroBackground>
      <div className="timeline">
        {EDUCATION.map((edu) => (
          <motion.article
            key={`${edu.year}-${edu.degree}`}
            className="timeline-item"
            variants={sectionItemVariants}
          >
            <div className="timeline-year" aria-label={`Year ${edu.year}`}>
              {edu.year}
            </div>

            <div className="timeline-rail" aria-hidden="true">
              <span className="timeline-dot" />
            </div>

            <div className="timeline-card">
              <div className="timeline-card-head">
                <h3 className="timeline-title">{edu.degree}</h3>
                {edu.badge ? <span className="badge">{edu.badge}</span> : null}
              </div>
              <p className="timeline-meta">
                {edu.institution}
                {edu.location ? ` • ${edu.location}` : ""}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
