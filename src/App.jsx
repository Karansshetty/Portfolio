import { useCallback, useEffect, useMemo, useState } from "react";
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

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

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
