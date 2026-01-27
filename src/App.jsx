import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import { useScroll } from "framer-motion";

import { NAV_SECTIONS } from "./data/portfolioData.js";
import AboutSection from "./sections/AboutSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import FooterSection from "./sections/FooterSection.jsx";
import Hero from "./sections/Hero.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";

function App() {
  const sections = useMemo(() => NAV_SECTIONS, []);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  const activeSectionRef = useRef(activeSection);
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const getStickyNavOffsetPx = useCallback(() => {
    const navbarWrapper = document.querySelector(".navbar-wrapper");
    const navbar = document.querySelector(".navbar");
    const rect = (navbarWrapper ?? navbar)?.getBoundingClientRect();

    // Offset is how much vertical space is effectively "covered" at the top.
    // We use the wrapper because it includes the sticky top gap.
    if (!rect) return 96;
    return rect.bottom + 8;
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = getStickyNavOffsetPx();
    const absoluteTop = window.scrollY + el.getBoundingClientRect().top;
    window.scrollTo({ top: Math.max(0, absoluteTop - offset), behavior: "smooth" });
  }, [getStickyNavOffsetPx]);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!elements.length) return;

    let rafId = 0;

    const computeActive = () => {
      const offset = getStickyNavOffsetPx();

      // Pick the last section whose top has crossed the nav offset.
      // This avoids "next section" lighting up too early on tall sections.
      let nextActive = elements[0]?.id ?? "home";
      let bestTop = Number.NEGATIVE_INFINITY;

      for (const el of elements) {
        const top = el.getBoundingClientRect().top;
        if (top <= offset && top > bestTop) {
          bestTop = top;
          nextActive = el.id;
        }
      }

      if (nextActive && activeSectionRef.current !== nextActive) {
        setActiveSection(nextActive);
      }
    };

    const schedule = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(computeActive);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [sections, getStickyNavOffsetPx]);

  return (
    <div className="app">
      <CursorGlow />
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        scrollYProgress={scrollYProgress}
      />

      <main className="main">
        <Hero onViewProjects={() => scrollToSection("projects")} />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection onBackToTop={() => scrollToSection("home")} />
      </main>
    </div>
  );
}

export default App;
