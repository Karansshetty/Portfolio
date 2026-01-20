import { motion } from "framer-motion";

function Projects() {
  return (
    <div>
      <motion.section
  className="home-section"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4 }}
>
      <h1>Projects Page</h1>
      <p>React project setup is working ✅</p>
      </motion.section>
    </div>
  );
}

export default Projects;
