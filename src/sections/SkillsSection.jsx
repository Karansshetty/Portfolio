import { motion } from "framer-motion";
import {
  FiAperture,
  FiBox,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLock,
  FiServer,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { SKILLS } from "../data/portfolioData.js";

const iconMap = {
  react: FaReact,
  js: FaJsSquare,
  html: FaHtml5,
  css: FaCss3Alt,
  node: FaNodeJs,
  server: FiServer,
  db: FiDatabase,
  api: FiAperture,
  lock: FiLock,
  git: FiGitBranch,
  tool: FiTool,
  bolt: FiZap,
  code: FiCode,
  cpu: FiCpu,
  box: FiBox,
};

function SkillPill({ name, icon }) {
  const Icon = iconMap[icon] || FiCode;
  return (
    <span className="skill-pill" title={name}>
      <Icon className="skill-icon" aria-hidden="true" />
      {name}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" title="Skills" eyebrow="Core stack & tooling" withHeroBackground>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <motion.section
            key={group.category}
            className="skills-card"
            variants={sectionItemVariants}
          >
            <h3 className="skills-title">{group.category}</h3>
            <div className="skills-pills">
              {group.items.map((s) => (
                <SkillPill key={`${group.category}-${s.name}`} name={s.name} icon={s.icon} />
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </AnimatedSection>
  );
}
