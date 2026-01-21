import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { EXPERIENCE } from "../data/portfolioData.js";
import {
  SiExpress,
  SiGit,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

const TECH_ICON_MAP = {
  mongodb: { label: "MongoDB", Icon: SiMongodb, className: "tech-mongodb" },
  express: { label: "Express", Icon: SiExpress, className: "tech-express" },
  react: { label: "React", Icon: SiReact, className: "tech-react" },
  node: { label: "Node.js", Icon: SiNodedotjs, className: "tech-node" },
  git: { label: "Git", Icon: SiGit, className: "tech-git" },
  github: { label: "GitHub", Icon: SiGithub, className: "tech-github" },
};

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
              </div>
              <p className="timeline-meta">{role.location}</p>
              <ul className="timeline-bullets">
                {role.bullets.slice(0, 2).map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {Array.isArray(role.tech) && role.tech.length ? (
                <div className="timeline-tech" aria-label="Technologies used">
                  {role.tech.map((id) => {
                    const item = TECH_ICON_MAP[id];
                    if (!item) return null;

                    return (
                      <span
                        key={id}
                        className={`tech-icon ${item.className}`}
                        role="img"
                        aria-label={item.label}
                        data-tooltip={item.label}
                        tabIndex={0}
                      >
                        <item.Icon aria-hidden="true" focusable="false" />
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
