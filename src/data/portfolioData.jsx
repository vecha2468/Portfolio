import { FaGithub, FaLinkedin, FaEnvelope, FaAws, FaReact, FaNodeJs, FaDatabase, FaCode,FaJava, FaHtml5, FaCss3Alt, FaWordpress, FaFigma } from 'react-icons/fa'; // Example icons
import { SiExpress,SiPostman, SiMongodb,SiJenkins ,SiAngular, SiFirebase,SiGooglecloud , SiTailwindcss,SiSpringboot,SiDjango, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Chanukya Vejandla",
  title: "Full Stack Developer",
  email: "chanukyavejandla246@gmail.com",
  linkedin: "https://www.linkedin.com/in/chanukya-vejandla-72b0511ab/",
  github: "https://github.com/vecha2468",
  resumeLink: "/AditiAryaResume.pdf", // Make sure your resume is in public/
  bio: "Innovative Full Stack Developer passionate about creating seamless and impactful web solutions. Eager to leverage modern technologies to solve real-world problems and contribute to dynamic team environments.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "San Jose State University",
    degree: "Master of Science in Software Engineering",
    duration: "Jan 2025 – Present",
    score: "CGPA: 3.85/4",
  },
  {
    institution: "National Institute of Technology Karnataka, Surathkal",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "August 2019 - May 2023",
    score: "7.51/10",
  },
];

export const projects = [
  {
    title:"BookTable",
    tech: ["React JS", "Node.js", "AWS", "MySQL"],
    description: "Built a full-stack restaurant reservation system using React, Node.js, and MySQL, with role-based access (Customer,Manager, Admin), deployed on AWS EC2 with auto-scaling and load balancing.Implemented real-time restaurant search, table booking/cancellation, analytics dashboard, and confirmation via email/SMS, integrated Google Maps and deployed a UI via AWS CloudFront.",

    date: "March 2025",
    githubLink: "https://github.com/vecha2468/Booktable", // Replace with actual link
    liveLink: null, // Replace with actual link if available
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "Quiz App",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    description: "Developed a backend quiz application using Spring Boot and Java, exposing REST APIs to manage quizzes, questions, and user responses.Implemented input validation, exception handling, and integrated PostgreSQL for persistent data storage; tested endpoints using Postman.",
    date: "Feb 2025",
    githubLink: "https://github.com/vecha2468/Quiz-application", // Replace with actual link
    liveLink: null,
    category: "Backend",
    icon: <SiSpringboot size={24} className="text-accent-1"/>
  },
  {
    title: "HR Edge",
    tech: ["React JS", "Django", "Python", "MySQL"],
    description: "Developed a scalable, role-based Human Resource Management System using React, Django Rest Framework, and MySQL, deployed securely on AWS using EC2, RDS, S3, and CloudFront.Engineered secure authentication and authorization flows using Auth 2.0, enabling seamless Clerk-based SSO with RBAC and Integrated Jenkins with GitHub and AWS Systems Manager to automate CI/CD pipelines.",
    date: "April 2025",
    githubLink: "https://github.com/vecha2468/HrEdge",
    liveLink: null,
    category: "Full Stack",
    icon: <SiDjango size={24} className="text-accent-1"/>
  },
  // {
  //   title: "WealthWise",
  //   tech: ["React JS", "Node JS", "Firebase", "API Integration"],
  //   description: "Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.",
  //   date: "Jan 2025 – Present",
  //   githubLink: "https://github.com/aditiarya37/WealthWise",
  //   liveLink: "https://wealthwisefinance.vercel.app/",
  //   category: "Fintech",
  //   icon: <SiFirebase size={24} className="text-accent-1"/>
  // },
  // {
  //   title: "Blood Shortage Survey and Dashboard",
  //   tech: ["React.js", "Node.js", "MongoDB"],
  //   description: "Increased efficiency of blood shortage tracking for healthcare organizations by 60% through a real-time analytics dashboard. Built an intuitive React.js dashboard with real-time charts and data visualizations.",
  //   date: "Jan 2025 – Present",
  //   githubLink: "https://github.com/aditiarya37/BloodLink", // Replace with actual link
  //   liveLink: null,
  //   category: "Healthcare",
  //   icon: <FaDatabase size={24} className="text-accent-1"/>
  // },
];

export const skills = {
  languages: [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "React JS", icon: <FaReact /> },
    {name:"Angular", icon: <SiAngular />},
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
  ],
  toolsAndPlatforms: [
    { name: "AWS", icon: <FaAws /> },
    { name: "Google Cloud Platform", icon: <SiGooglecloud /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <SiPostman /> }, // Placeholder icon
    { name: "Jenkins", icon: <SiJenkins /> },
    // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Software Engineer",
    organization: "Cogoport",
    duration: "June 2023 – January 2025",
    points: [
      "Collaborated with cross-functional teams to implement new features and improve system performance, reducing latency by 20%.",
      "Optimized database queries and implemented caching strategies to enhance response times and reduce load on the server.",
      "Built RESTful APIs for CRUD operations and authentication, ensuring secure data handling and efficient user management.",
      "Contributed to the development of a new feature that improved user experience by 30%.",
      "Worked on a project that reduced the time to market for new features by 25%.",
    ],
  },
  {
    role: "Software Engineer Intern",
    organization: "Boeing",
    duration: "May 2022 – August 2022",
    points: [
      "Collaborated with a software team to develop frontend components using Angular for enterprise applications, following the SDLC.",
      "Gained hands-on experience in software development and industry best practices during a summer internship.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};