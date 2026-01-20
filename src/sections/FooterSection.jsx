import { FiArrowUp } from "react-icons/fi";
import { PROFILE } from "../data/portfolioData.js";

export default function FooterSection({ onBackToTop }) {
  const year = new Date().getFullYear();

  return (
    <footer className="section section-heroLike footer">
      <div className="hero-bg hero-bg-base" aria-hidden="true" />
      <div className="hero-bg hero-bg-glow" aria-hidden="true" />

      <div className="section-inner footer-inner">
        <p className="footer-name">{PROFILE.name}</p>
        <p className="footer-copy">© {year}. All rights reserved.</p>

        <button type="button" className="backtotop" onClick={onBackToTop}>
          Back to top <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}
