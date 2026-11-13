
import Cover1 from "../assets/Cover1.png";
import Cover2 from "../assets/Cover2.png";
import Cover3 from "../assets/Cover3.png";
import Cover4 from "../assets/Cover4.png";
import CoverChatApp from "../assets/Cover5.png";
import CodeProof from "../assets/CodeProof.png";

export const projectsData = [
  // 1. CodeProof
  {
    id: 1,
    image: CodeProof,
    title: "CodeProof – AI-Powered Legacy Code Migration & Verification",
    description:
      "An AI-powered platform that translates legacy code into modern programming languages, executes both versions in a sandbox, compares their outputs, and verifies behavioral consistency using AI.",
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Groq AI",
      "Gemini AI",
      "Docker",
    ],
    category: "WEB",
    link: "https://github.com/Harsh0478/CodeProof",
  },

  // 2. SpendSense
  {
    id: 2,
    image: Cover2, // Temporary image; replace with SpendSense screenshot later
    title: "SpendSense – AI-Powered Personal Expense Tracker",
    description:
      "An AI-powered personal finance application that helps users track expenses, manage budgets, analyze spending patterns, and gain financial insights. Features include AI-based expense categorization, an AI financial assistant, budget reminders, recurring payments, and CSV/PDF transaction imports with duplicate detection.",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Google Gemini API",
      "JWT",
      "Expo SecureStore",
    ],
    category: "APK",
    link: "https://github.com/Harsh0478/SpendSense.git",
  },

  // 3. BookWorm
  {
    id: 3,
    image: Cover1,
    title: "BookWorm – Book Recommendation Mobile Application",
    description:
      "A mobile application that helps users discover and explore books through a recommendation experience. Built with reusable components, structured MongoDB schemas, and efficient pagination for smooth browsing.",
    techStack: [
      "React Native",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    category: "APK",
    link: "https://drive.google.com/file/d/1vvUiAw4yUhiwJ9VqttyBizU2huEPXRmn/view?usp=drive_link",
  },

  // 4. Chatty Web
  {
    id: 4,
    image: CoverChatApp,
    title: "Chatty Web – Real-Time Messaging Application",
    description:
      "A full-stack real-time messaging application that enables users to communicate through instant messaging with a responsive interface and real-time communication powered by Socket.io.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JavaScript",
    ],
    category: "WEB",
    link: "https://chat-app-mern-xm0z.onrender.com/",
  },

  // 5. Expense Tracker
  

  // 6. Open Campus
  {
    id: 6,
    image: Cover3,
    title: "Open Campus – College ERP Platform",
    description:
      "A digital college ERP platform designed to simplify campus activities and provide centralized management of college services through a user-friendly interface.",
    techStack: [
      "React.js",
      "JavaScript",
      "Firebase",
      "CSS",
    ],
    category: "WEB",
    link: "https://open-campus.vercel.app/",
  },

  // 7. Simple Calculator
  {
    id: 7,
    image: Cover4,
    title: "Simple Calculator",
    description:
      "A lightweight and responsive calculator web application that performs basic mathematical operations through a simple and user-friendly interface.",
    techStack: [
      "React.js",
      "JavaScript",
      "CSS",
    ],
    category: "WEB",
    link: "https://calculator-webapp-blond.vercel.app/",
  },
];

export const projectsNav = [
  { name: "all" },
];
