import { Brain, ChartNoAxesCombined, CodeXml, Smartphone } from "lucide-react";
import type { WhatIDoItem, categoryColorsType } from "./types";


export const WhatIDo: WhatIDoItem[] = [
    {
        icon: ChartNoAxesCombined,
    title: "Frontend Engineering",
    description: "Building responsive React interfaces that are clear, fast, and easy for users to work with.",
        color: "from-blue-500 to-purple-500"
    },
    {
        icon: CodeXml,
    title: "Backend and API Development",
    description: "Designing backend services and APIs with NestJS and PostgreSQL to support real product workflows.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Smartphone,
    title: "Mobile App Development",
    description: "Developing React Native apps that connect cleanly with backend services and support daily operations.",
        color: "from-blue-500 to-purple-500"
    },
    {
      icon: Brain,
    title: "System Integration",
    description: "Connecting websites and products with tools like EmailJS, WhatsApp, and Google Sheets to support business tasks.",
      color: "from-purple-500 to-pink-500"
    },
];

export const categoryColors: categoryColorsType = {
  "data-science": "from-blue-500 to-cyan-500",
  "ml-ai": "from-purple-500 to-pink-500",
  "web-development": "from-green-500 to-teal-500",
  "mobile-development": "from-orange-500 to-red-500"
};

export const categoryLabels: { [key: string]: string } = {
  "data-science": "Data",
  "ml-ai": "ML & AI",
  "web-development": "Web Development",
  "mobile-development": "Mobile Development"
};

export const skills = {
  "Frontend Engineering": [
    "React", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI"
  ],
  "Backend and APIs": [
    "NestJS", "Node.js", "Express", "PostgreSQL", "REST APIs"
  ],
  "Mobile Development": [
    "React Native", "Firebase", "Mobile UI", "App State Management"
  ],
  "Quality and Workflow": [
    "Git", "Postman", "Manual Testing", "QA Mindset", "Debugging"
  ],
  "Data and ML/AI": [
    "Python", "Pandas", "Scikit-learn", "Data Visualization", "ML Concepts", "Power BI", "Data Modeling", "A/B Testing", "Automation"
  ]
};

export const careerTimeline = [
  {
    year: "Jan 2022 - May 2023",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description: "Built and launched business websites with booking and contact flows, including EmailJS and WhatsApp integrations."
  },
  {
    year: "Jun 2023 - Present",
    title: "Software Developer and Data Analyst",
    company: "PHD Media Ghana Limited",
    description: "Designed and implemented system development, workflow automation, and AI-driven analytics solutions to optimize digital operations and media planning performance."
  },
  {
    year: "Nov 2023- Oct 2024",
    title: "Graduate Trainee",
    company: "Stanbic Bank Ghana LTD",
    description: "Supported reporting and process improvement projects while building stronger problem solving and delivery habits for software work."
  }
];



export const certifications = [
  "IBM Data Science Professional Certificate",
  "ALX Data Analyst Certificate"
];

export const education = [
  {
    degree: "ALX Data Science Program",
    institution: "ALX Africa",
    year: "2025-Present",
    details: "Practical training in software engineering, covering frontend and backend development, APIs, and team based delivery."
  },
  {
    degree: "B.S. in Computer Science",
    institution: "State University",
    year: "2019 - 2023",
    details: "Graduated with Second Class Honor(Upper Division, GPA: 3.67), focusing on software development and data analysis."
  },
  {
    degree: "PreMest Web Development Bootcamp",
    institution: "Soronko Academy",
    year: "2021",
    details: "Intensive training in web development, covering HTML, CSS, JavaScript, Reactjs and practical project work to build real websites and applications."
  }
];

