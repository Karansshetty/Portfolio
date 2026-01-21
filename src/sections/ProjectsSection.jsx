import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FiActivity, FiCpu, FiFileText, FiGlobe, FiMic } from "react-icons/fi";
import {
  SiApache,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
} from "react-icons/si";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { PROJECTS } from "../data/portfolioData.js";

const STACK_ICON_MAP = {
  "python": { label: "Python", Icon: SiPython, className: "tech-python" },
  "tesseract ocr": { label: "Tesseract OCR", Icon: FiFileText, className: "tech-tesseract" },
  "google text-to-speech": { label: "Google Text-to-Speech", Icon: FiMic, className: "tech-google" },

  "php": { label: "PHP", Icon: SiPhp, className: "tech-php" },
  "apache": { label: "Apache", Icon: SiApache, className: "tech-apache" },
  "mysql": { label: "MySQL", Icon: SiMysql, className: "tech-mysql" },
  "html": { label: "HTML5", Icon: SiHtml5, className: "tech-html" },
  "html5": { label: "HTML5", Icon: SiHtml5, className: "tech-html" },
  "css": { label: "CSS3", Icon: SiCss3, className: "tech-css" },
  "css3": { label: "CSS3", Icon: SiCss3, className: "tech-css" },
  "javascript": { label: "JavaScript", Icon: SiJavascript, className: "tech-javascript" },

  "mongodb": { label: "MongoDB", Icon: SiMongodb, className: "tech-mongodb" },
  "express": { label: "Express", Icon: SiExpress, className: "tech-express" },
  "react": { label: "React", Icon: SiReact, className: "tech-react" },
  "node": { label: "Node.js", Icon: SiNodedotjs, className: "tech-node" },
  "node.js": { label: "Node.js", Icon: SiNodedotjs, className: "tech-node" },
  "nodejs": { label: "Node.js", Icon: SiNodedotjs, className: "tech-node" },

  "firebase": { label: "Firebase", Icon: SiFirebase, className: "tech-firebase" },
  "esp32": { label: "ESP32", Icon: FiCpu, className: "tech-esp32" },
  "sensors": { label: "Sensors", Icon: FiActivity, className: "tech-sensors" },
  "news api": { label: "News API", Icon: FiGlobe, className: "tech-newsapi" },
  "google": { label: "Google", Icon: SiGoogle, className: "tech-google" },
};

function normalizeStackToken(token) {
  return String(token || "")
    .trim()
    .toLowerCase()
    .replace(/[®™]/g, "")
    .replace(/\s+/g, " ");
}

function ProjectCard({ project }) {
  const hasGithub = Boolean(project.github && project.github.startsWith("http"));
  const stackTags = String(project.stack || "")
    .split("•")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <motion.article className="project-card" variants={sectionItemVariants}>
      <div className="project-media">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {stackTags.length ? (
          <div className="project-tech" aria-label="Tech stack">
            {stackTags.map((raw) => {
              const key = normalizeStackToken(raw);
              const item = STACK_ICON_MAP[key] || {
                label: raw,
                Icon: FiGlobe,
                className: "tech-neutral",
              };

              return (
                <span
                  key={raw}
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

      {hasGithub ? (
        <div className="project-footer">
          <a
            className="project-github"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        </div>
      ) : null}
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
