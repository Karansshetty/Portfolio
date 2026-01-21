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
    year: "Nov 2025 – Present",
    company: "MicroDegree Educational Pvt. Ltd.",
    role: "Software Engineer Intern",
    location: "Mangalore, India",
    bullets: [
      "Working as a Software Engineer Intern, developing full-stack web applications using the MERN stack, including RESTful APIs, database operations, and core application features.",
      "Built responsive user interfaces and collaborated in a real-world development environment using Git and GitHub, following structured workflows and best practices.",
    ],
    tech: ["mongodb", "express", "react", "node", "git", "github"],
  },
  {
    year: "Feb 2025 – May 2025",
    company: "Thaniya Technologies",
    role: "Full Stack Developer Intern",
    location: "Mangalore, India",
    bullets: [
      "Contributed to the development of a MERN-based e-commerce application, focusing on scalable implementation, feature development, and code maintainability.",
      "Collaborated with cross-functional teams to implement new features, fix bugs, and improve application performance through testing and debugging.",
    ],
    tech: ["mongodb", "express", "react", "node", "git", "github"],
  },
  {
    year: "Oct 2023 – Nov 2023",
    company: "Technical Career Education Private Limited",
    role: "Student Intern",
    location: "",
    bullets: [
      "Developed and deployed a Task Management web application using the MERN stack, implementing CRUD operations and backend logic.",
      "Participated in project discussions to identify blockers, align on solutions, and improve overall team coordination during development.",
    ],
    tech: ["mongodb", "express", "react", "node", "git", "github"],
  },
];

export const SKILLS = [
  {
    id: "java",
    name: "Java",
  },
  {
    id: "python",
    name: "Python",
  },
  {
    id: "javascript",
    name: "JavaScript (ES6+)",
  },
  {
    id: "react",
    name: "React",
  },
  {
    id: "html",
    name: "HTML5",
  },
  {
    id: "css",
    name: "CSS3",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
  },
  {
    id: "node",
    name: "Node.js",
  },
  {
    id: "express",
    name: "Express.js",
  },
  {
    id: "rest",
    name: "REST APIs",
  },
  {
    id: "jwt",
    name: "JWT Authentication",
  },
  {
    id: "mongodb",
    name: "MongoDB",
  },
  {
    id: "mysql",
    name: "MySQL",
  },
  {
    id: "firebase",
    name: "Firebase",
  },
  {
    id: "git",
    name: "Git",
  },
  {
    id: "github",
    name: "GitHub",
  },
  {
    id: "postman",
    name: "Postman",
  },
  {
    id: "vscode",
    name: "VS Code",
  },
];

export const PROJECTS = [
  {
    title: "Image to Text & Text to Speech Converter",
    image: "/ImageToSpeech.PNG",
    stack: "Python • Tesseract OCR • Google Text-to-Speech",
    description:
      "An accessibility-focused application that extracts text from images and converts it into spoken audio.",
    github: "https://github.com/Karansshetty/Image-Processing-Project",
    demo: "",
  },
  {
    title: "Event Management System",
    image: "/EventManagementSystem.PNG",
    stack: "PHP • Apache • MySQL • HTML • CSS • JavaScript",
    description:
      "A web-based system for managing events, registrations, and schedules with full CRUD functionality.",
    github: "https://github.com/Karansshetty/SQL-Projects/tree/main/Event-Management-System-main",
    demo: "",
  },
  {
    title: "Smart Water Turbidity & Pipeline Monitoring",
    image: "/SmartWaterTurbidityManagement.jpeg",
    stack: "ESP32 • Firebase • React • Node.js • Sensors",
    description:
      "IoT-based water turbidity and pipeline monitoring system using ESP32 sensors and Firebase, featuring a real-time dashboard with threshold-based alerts for water quality monitoring...",
    github: "",
    demo: "",
  },
  {
    title: "iNotebook – Notes Management App",
    image: "/InoteBookApp.PNG",
    stack: "MongoDB • Express • React • Node.js",
    description:
      "A MERN-based notes application with secure authentication, CRUD operations, and user-specific data storage.",
    github: "https://github.com/Karansshetty/INotebook-App",
    demo: "",
  },
  {
    title: "Levello - E-Commerce Web Application",
    image: "/EcommerceApp.PNG",
    stack: "MongoDB • Express • React • Node.js",
    description:
      "Developed a full-stack e-commerce platform with product listings, cart management, authentication, and order workflows.",
    github: "https://github.com/Karansshetty/Ecommerce-Application",
    demo: "",
  },
  {
    title: "NewsMonkey - News Aggregator App",
    image: "/NewsApp.PNG",
    stack: "MongoDB • Express • React • Node.js • News API",
    description:
      "Built a MERN-based news application that fetches and displays real-time news articles using external APIs.",
    github: "https://github.com/Karansshetty/News-App",
    demo: "",
  },
];
