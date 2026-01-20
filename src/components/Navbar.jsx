import "../styles/Navbar.css";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { PROFILE } from "../data/portfolioData.js";
import { motion, useReducedMotion } from "framer-motion";

function Navbar({ sections, activeSection, onNavigate, scrollYProgress }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  function handleNav(id) {
    onNavigate?.(id);
    setMenuOpen(false);
  }

  return (
    <nav className="navbar-wrapper">
  <div className="navbar">
    <motion.div
      className="nav-progress"
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0% 50%",
      }}
      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 30 }}
    />

    <button
      type="button"
      className="logo"
      onClick={() => handleNav("home")}
      aria-label="Go to top"
    >
      <img src="/KaranLogo1.png" alt="Karan Shetty" />
    </button>

    <button
      className="menu-btn"
      type="button"
      onClick={() => setMenuOpen((v) => !v)}
      aria-expanded={menuOpen}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      {menuOpen ? <FiX /> : <FiMenu />}
    </button>

    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
      {sections.map((s) => (
        <li key={s.id}>
          <button
            type="button"
            className={activeSection === s.id ? "nav-link active" : "nav-link"}
            onClick={() => handleNav(s.id)}
            aria-current={activeSection === s.id ? "page" : undefined}
          >
            {s.label}
          </button>
        </li>
      ))}
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
