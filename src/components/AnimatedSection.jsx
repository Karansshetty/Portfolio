import { motion } from "framer-motion";
import {
  sectionContainerVariants,
  sectionItemVariants,
} from "./animationVariants.js";

export function AnimatedSection({
  id,
  className = "",
  children,
  title,
  eyebrow,
  withHeroBackground = false,
}) {
  const sectionClassName = [`section`, withHeroBackground ? "section-heroLike" : "", className]
    .filter(Boolean)
    .join(" ")
    .trim();

  return (
    <section id={id} className={sectionClassName}>
      {withHeroBackground && (
        <>
          <div className="hero-bg hero-bg-base" aria-hidden="true" />
          <div className="hero-bg hero-bg-glow" aria-hidden="true" />
        </>
      )}
      <motion.div
        className="section-inner"
        variants={sectionContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
      >
        {(title || eyebrow) && (
          <motion.header className="section-header" variants={sectionItemVariants}>
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </motion.header>
        )}
        <div className="section-body">{children}</div>
      </motion.div>
    </section>
  );
}
