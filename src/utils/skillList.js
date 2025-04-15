import {
  FaReact,
  FaNodeJs,
  FaNode,
  FaDatabase,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaBootstrap,
  FaCss3,
  FaGithub,
  FaAws,
  FaJava,
  FaNpm,
  FaYarn,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiSqlite,
  SiMongodb,
  SiGit,
  SiPostman,
  SiAxios,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Define the skills array
export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: [
      { technology: "JavaScript", rating: 5, icon: FaJsSquare },
      { technology: "Python", rating: 4, icon: FaPython },
      { technology: "Java", rating: 3, icon: FaJava },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { technology: "HTML", rating: 5, icon: FaHtml5 },
      { technology: "CSS", rating: 5, icon: FaCss3 },
      { technology: "JavaScript", rating: 5, icon: FaJsSquare },
      { technology: "React", rating: 4, icon: FaReact },
    ],
  },
  {
    category: "Backend",
    skills: [
      { technology: "Node.js", rating: 4, icon: FaNode },
      { technology: "Express", rating: 4, icon: FaNodeJs }, // No specific icon for Express, can use Node.js icon
    ],
  },

  {
    category: "Database Skills",
    skills: [
      { technology: "MySQL", rating: 4, icon: FaDatabase },
      { technology: "PostgreSQL", rating: 4, icon: SiPostgresql },
      { technology: "SQLite", rating: 4, icon: SiSqlite }, // No specific icon for SQLite
      { technology: "MongoDB", rating: 4, icon: SiMongodb }, // No specific icon for MongoDB
    ],
  },
  {
    category: "Development Tools",
    skills: [
      { technology: "Git", rating: 4, icon: SiGit },
      { technology: "GitHub", rating: 4, icon: FaGithub },
      { technology: "VS Code", rating: 4, icon: VscVscode },
      { technology: "Postman", rating: 4, icon: SiPostman },
      { technology: "NPM", rating: 4, icon: FaNpm },
      { technology: "Yarn", rating: 4, icon: FaYarn },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { technology: "React", rating: 4, icon: FaReact },
      { technology: "Express", rating: 4, icon: FaNodeJs },
      { technology: "Redux", rating: 4, icon: SiRedux },
      { technology: "Bootstrap", rating: 4, icon: FaBootstrap },
      { technology: "Tailwind", rating: 4, icon: SiTailwindcss },
      { technology: "jQuery", rating: 4, icon: FaYarn },
      { technology: "Axios", rating: 4, icon: SiAxios },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { technology: "AWS", rating: 4, icon: FaAws },
      // You can use a placeholder for other tools like Azure, Docker, Jenkins etc., or skip the icon.
    ],
  },
];

export const nonTechnicalSkills = [
  {
    tabId: 2,
    displayText: "Soft Skills",
    children: [
      {
        category: "Personal Qualities",
        skills: [
          "Communication",
          "Problem-solving",
          "Teamwork",
          "Time management",
          "Adaptability",
          "Quick Learner",
        ],
      },
    ],
  },
  {
    tabId: 3,
    displayText: "Analytical & Logical Skills",
    children: [
      {
        category: "Problem Solving & DSA",
        skills: [
          "Data Structures (Arrays, Linked List, Stack, Queue)",
          "Algorithms (Sorting, Searching, Recursion)",
          "Debugging and Optimizing Code",
        ],
      },
    ],
  },
  {
    tabId: 4,
    displayText: "Project Skills",
    children: [
      {
        category: "Web App Development",
        skills: [
          "Building responsive websites",
          "API Integration",
          "Authentication (Login/Register)",
          "CRUD Operations",
          "State Management (Redux, Context API)",
        ],
      },
    ],
  },
];
