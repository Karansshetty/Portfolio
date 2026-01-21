import { motion } from "framer-motion";
import {
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { sectionItemVariants } from "../components/animationVariants.js";
import { SKILLS } from "../data/portfolioData.js";

const SKILL_META = {
  java: { Icon: FaJava, color: "#007396", glow: "rgba(0, 115, 150, 0.24)" },
  python: { Icon: SiPython, color: "#3776AB", glow: "rgba(255, 212, 59, 0.28)" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", glow: "rgba(247, 223, 30, 0.28)" },

  react: { Icon: SiReact, color: "#61DAFB", glow: "rgba(97, 218, 251, 0.30)" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss3, color: "#1572B6" },
  tailwind: { Icon: SiTailwindcss, color: "#38BDF8" },

  node: { Icon: SiNodedotjs, color: "#68A063", glow: "rgba(104, 160, 99, 0.28)" },
  express: { Icon: SiExpress, color: "rgba(233, 238, 255, 0.72)", glow: "rgba(233, 238, 255, 0.16)" },
  rest: { Icon: SiPostman, color: "rgba(233, 238, 255, 0.78)", glow: "rgba(233, 238, 255, 0.16)" },
  jwt: { Icon: SiJsonwebtokens, color: "rgba(233, 238, 255, 0.82)", glow: "rgba(233, 238, 255, 0.18)" },

  mongodb: { Icon: SiMongodb, color: "#47A248", glow: "rgba(71, 162, 72, 0.28)" },
  mysql: { Icon: SiMysql, color: "#00758F", glow: "rgba(0, 117, 143, 0.28)" },
  firebase: { Icon: SiFirebase, color: "#FFCA28", glow: "rgba(255, 202, 40, 0.22)" },

  git: { Icon: SiGit, color: "#F05032", glow: "rgba(240, 80, 50, 0.28)" },
  github: { Icon: SiGithub, color: "#ffffff", glow: "rgba(233, 238, 255, 0.18)" },
  postman: { Icon: SiPostman, color: "#FF6C37", glow: "rgba(255, 108, 55, 0.26)" },
  vscode: { Icon: VscCode, color: "#007ACC", glow: "rgba(0, 122, 204, 0.26)" },
};

const SKILL_ORDER = [
  "java",
  "python",
  "javascript",
  "react",
  "node",
  "html",
  "css",
  "tailwind",
  "express",
  "mongodb",
  "mysql",
  "firebase",
  "git",
  "rest",
  "jwt",
  "github",
  "postman",
  "vscode",
];

const PYRAMID_ROW_SIZES = [3, 4, 5, 6];

function SkillBadge({ id, name }) {
  const meta = SKILL_META[id];
  const Icon = meta?.Icon;

  return (
    <span
      className="skill-badge"
      style={{
        "--skill-color": meta?.color || "rgba(233, 238, 255, 0.78)",
        "--skill-glow": meta?.glow || meta?.color || "rgba(233, 238, 255, 0.18)",
      }}
      title={name}
    >
      {Icon ? <Icon className="skill-badge-icon" aria-hidden="true" focusable="false" /> : null}
      <span className="skill-badge-name">{name}</span>
    </span>
  );
}

export default function SkillsSection() {
  const skillMap = new Map(SKILLS.map((s) => [s.id, s]));
  const orderedSkills = SKILL_ORDER.map((id) => skillMap.get(id)).filter(Boolean);

  const rows = [];
  let offset = 0;
  for (const size of PYRAMID_ROW_SIZES) {
    rows.push(orderedSkills.slice(offset, offset + size));
    offset += size;
  }

  return (
    <AnimatedSection id="skills" title="Skills" eyebrow="Core stack & tooling" withHeroBackground>
      <motion.div className="skills-pyramid" variants={sectionItemVariants}>
        {rows.map((row, idx) => (
          <div
            key={`skills-row-${idx}`}
            className={`skills-row skills-row-${idx + 1}`}
            role="list"
          >
            {row.map((s) => (
              <span key={s.id} role="listitem">
                <SkillBadge id={s.id} name={s.name} />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
