import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { PROJECTS } from "../data/portfolioData.js";

function ProjectCard({ project }) {
  const hasGithub = Boolean(project.github && project.github.startsWith("http"));
  const hasDemo = Boolean(project.demo && project.demo.startsWith("http"));

  return (
    <motion.article className="project-card" variants={sectionItemVariants}>
      <div className="project-top">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-stack">{project.stack}</p>
      </div>
      <p className="project-desc">{project.description}</p>

      {(hasGithub || hasDemo) && (
        <div className="project-actions">
          {hasGithub && (
            <a
              className="btn btn-tertiary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FiGithub />
            </a>
          )}
          {hasDemo && (
            <a
              className="btn btn-secondary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <FiExternalLink />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" title="Projects" eyebrow="Selected work" withHeroBackground>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </AnimatedSection>
  );
}
