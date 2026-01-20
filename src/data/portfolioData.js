export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const PROFILE = {
  name: "Karan Shetty",
  brand: "Karan",
  role: "Software Engineer",
  focus: "MERN Stack",
  tagline:
    "I build clean, scalable web applications with a strong focus on reliability, performance, and user experience.",
  heroIntro:
    "I build clean, scalable web applications with a strong focus on reliability, performance, and user experience. I enjoy turning ideas into efficient digital solutions using modern web technologies.",
  roles: ["Software Engineer", "MERN Stack Developer", "Full Stack Developer"],
  avatarPath: "/KaranIntroimg1.png",
  resumePath: "/Karan_Shetty_Resume_2025.pdf",
  email: "karansshetty6@gmail.com",
  phone: "+91 76760 85605",
  socials: {
    github: "https://github.com/Karansshetty",
    linkedin: "https://www.linkedin.com/in/karan-shetty-86765522a/",
  },
};

export const EDUCATION = [
  {
    year: "2022–2025",
    degree: "B.E in Computer Science and Engineering",
    institution: "Sahyadri College of Engineering and Management",
    location: "Mangalore, India",
    badge: "CGPA: 8.27",
  },
  {
    year: "2020–2022",
    degree: "Diploma in Computer Science and Engineering",
    institution: "Karnataka Government Polytechnic",
    location: "Mangalore, India",
    badge: "Percentage: 80.94%",
  },
  {
    year: "2018–2020",
    degree: "Pre University College (PCM)",
    institution: "Durga Parameshwari PU College",
    location: "Mangalore, India",
    badge: "Percentage: 64.83%",
  },
];

export const EXPERIENCE = [
  {
    year: "",
    company: "Technical Career Education Private Limited",
    role: "Student Intern",
    location: "",
    bullets: [
      "Developed and deployed a Task Management web application using the MERN stack.",
      "Participated in project meetings to surface blockers, align on solutions, and improve team coordination.",
    ],
    tech: "MongoDB • Express • React • Node.js",
  },
  {
    year: "Oct–Nov 2023 • Feb 2025 – May 2025",
    company: "Thaniya Technologies",
    role: "Full Stack Developer Intern",
    location: "Mangalore, India",
    bullets: [
      "Contributed to building MERN-stack web applications with a focus on scalable, maintainable implementation.",
      "Collaborated with cross-functional teams to deliver feature enhancements, triage and fix bugs, and improve application performance.",
    ],
    tech: "MERN Stack",
  },
];

export const SKILLS = [
  {
    category: "Languages",
    items: [
      { name: "Java", icon: "code" },
      { name: "Python", icon: "code" },
      { name: "C", icon: "code" },
      { name: "JavaScript (ES6+)", icon: "js" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: "react" },
      { name: "Tailwind CSS", icon: "code" },
      { name: "Bootstrap", icon: "box" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "server" },
      { name: "JWT Authentication", icon: "lock" },
      { name: "RESTful APIs", icon: "api" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "db" },
      { name: "MongoDB Atlas", icon: "db" },
      { name: "Firebase", icon: "db" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git & GitHub", icon: "git" },
      { name: "Postman", icon: "tool" },
      { name: "VS Code", icon: "tool" },
      { name: "Android Studio", icon: "tool" },
      { name: "Jupyter Notebook", icon: "tool" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Image to Text and Text to Speech Conversion: Implementing OCR and TTS",
    stack: "Python • Tesseract OCR • Google Text-to-Speech API",
    description:
      "Built an accessibility-focused application that converts text in images into spoken audio using OCR and TTS integration.",
    github: "",
    demo: "",
  },
  {
    title: "Event Management System",
    stack: "Apache • JavaScript • HTML • CSS • MySQL",
    description:
      "Developed and deployed a full-stack event management system to streamline event planning, registration, and execution with CRUD workflows and database-triggered notifications.",
    github: "",
    demo: "",
  },
  {
    title: "Smart Water Turbidity and Pipeline Management",
    stack: "ESP32 • Firebase • React • Node.js • Sensors",
    description:
      "Built an IoT-based system for real-time water quality monitoring and threshold-based automation, with remote visualization via a Firebase-backed web interface.",
    github: "",
    demo: "",
  },
];
