import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { PROFILE } from "../data/portfolioData.js";

export default function Hero({ onViewProjects }) {
  const prefersReducedMotion = useReducedMotion();
  const baseDelay = prefersReducedMotion ? 0 : 0.10;
  const stagger = prefersReducedMotion ? 0 : 0.12;
  const ease = "easeOut";

  return (
    <section id="home" className="hero section section-hero">
      <div className="hero-bg hero-bg-base" aria-hidden="true" />
      <div className="hero-bg hero-bg-glow" aria-hidden="true" />

      <motion.div
        className="section-inner hero-inner"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.55, ease, delay: baseDelay }}
            >
              Hi, I'm
            </motion.p>

            <div className="hero-nameBlock" aria-label="Name and role">
              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.65, ease, delay: baseDelay + stagger }}
              >
                <span className="hero-name-gradient">{PROFILE.name}</span>
              </motion.h1>

              <motion.p
                className="hero-roleStatic"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease,
                  delay: baseDelay + stagger * 2,
                }}
              >
                {PROFILE.role || "Software Engineer"}
              </motion.p>
            </div>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease, delay: baseDelay + stagger * 3 }}
            >
              {PROFILE.heroIntro || PROFILE.tagline}
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease, delay: baseDelay + stagger * 4 }}
            >
              <button type="button" className="btn btn-primary" onClick={onViewProjects}>
                View Projects <FiArrowDownRight />
              </button>

              <a className="btn btn-secondary" href={PROFILE.resumePath} download>
                Download Resume <FiDownload />
              </a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.65, ease, delay: baseDelay + stagger * 5 }}
            >
              <a
                className="hero-social-link"
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="hero-social-link"
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Open GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>

          <div className="hero-media" aria-hidden="false">
            <motion.div
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.75, ease, delay: baseDelay + stagger * 2 }}
            >
              <motion.div
                className="hero-avatarWrap"
                animate={prefersReducedMotion ? { y: 0 } : { y: [0, -10, 0] }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 6.5, ease: "easeInOut", repeat: Infinity }}
              >
              <img
                className="hero-avatar"
                src="/KaranLogo1.png"
                alt="Karan Shetty avatar"
                loading="eager"
                decoding="async"
              />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="hero-scroll-hint" aria-hidden="true">
          <span className="hero-scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
}
