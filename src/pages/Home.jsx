import { Link } from "react-router-dom";
import "../styles/Home.css";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <motion.section
  className="home-section"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4 }}
>
      <section className="home-section">
        <h1>Karan Shetty</h1>
        <h2>Software Engineer</h2>
        <p>
          Computer Science graduate with experience in building scalable web
          applications using the MERN stack. Passionate about problem-solving,
          backend development, and creating impactful software solutions.
        </p>

<div className="home-buttons">
  <Link to="/projects" className="glow-on-hover">
    View Projects <FaArrowRight />
  </Link>

  <a
    href="/Karan_Shetty_Resume_2025.pdf"
    download
    className="glow-on-hover glow-outline"
  >
    Download Resume
  </a>
</div>
      </section>
      </motion.section>
    </div>
  );
}

export default Home;
