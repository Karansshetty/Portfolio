import { motion, useReducedMotion } from "framer-motion";

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="section section-about">
      <div className="hero-bg hero-bg-base" aria-hidden="true" />
      <div className="hero-bg hero-bg-glow" aria-hidden="true" />

      <div className="section-inner about-inner">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
        >
          About Me
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-media"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.65, ease: "easeOut" }}
          >
            <div className="about-photoWrap">
              <img
                className="about-photo"
                src="/KaranIntroimg1.png"
                alt="Karan Shetty"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          >
            <div className="about-prose">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
