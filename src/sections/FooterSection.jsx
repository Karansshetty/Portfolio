import { PROFILE } from "../data/portfolioData.js";

export default function FooterSection({ onBackToTop }) {
  const year = 2026;

  const handleBackToTop = () => {
    if (typeof onBackToTop === "function") {
      onBackToTop();
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="section-heroLike footer" role="contentinfo">
      <div className="hero-bg hero-bg-base" aria-hidden="true" />
      <div className="hero-bg hero-bg-glow" aria-hidden="true" />

      <div className="section-inner footer-inner">
        <div className="footer-left">
          <span className="footer-leftText">Built with care</span>
        </div>

        <div className="footer-center">
          <span className="footer-copy">© {year} {PROFILE.name}. All rights reserved.</span>
        </div>

        <div className="footer-right">
          <button type="button" className="backtotop" onClick={handleBackToTop}>
            Back to top <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
