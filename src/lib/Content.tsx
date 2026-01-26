import { Brain, ChartNoAxesCombined, CodeXml, Smartphone } from "lucide-react";
import type { WhatIDoItem, categoryColorsType } from "./types";


export const WhatIDo: WhatIDoItem[] = [
    {
        icon: ChartNoAxesCombined,
        title: "Data Analysis",
        description: "Analyzing data, creating dashboards, and translating data into insights that support better decision-making.",
        color: "from-blue-500 to-purple-500"
    },
    {
        icon: CodeXml,
        title: "Full-Stack Web Development",
        description: "Designing and building web applications with a focus on clarity, usability, and scalable backend systems.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Developing cross-platform mobile applications using modern frameworks and clean system architecture.",
        color: "from-blue-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "Machine Learning & Applied AI",
      description: "Building and experimenting with ML models, NLP workflows, and AI-assisted systems to solve real-world problems.",
      color: "from-purple-500 to-pink-500"
    },
];

export const categoryColors: categoryColorsType = {
  "data-science": "from-blue-500 to-cyan-500",
  "ml-ai": "from-purple-500 to-pink-500",
  "web-development": "from-green-500 to-teal-500",
  "mobile-development": "from-orange-500 to-red-500"
};

export const categoryLabels = {
  "data-science": "Data Science",
  "ml-ai": "ML & AI",
  "web-development": "Web Development",
  "mobile-development": "Mobile Development"
};

export const skills = {
  "Data Science & ML": [
    "Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy",
    "Statistical Analysis", "NLP"
  ],
  "Web Development": [
    "JavaScript", "TypeScript", "React", "Node.js", "Express",
    "MongoDB", "PostgreSQL"
  ],
  "Mobile Development": [
    "React Native", "Firebase","cross-platform Development", "Mobile UI/UX"
  ],
  "Tools & Technologies": [
    "Git", "Jupyter", "VS Code", "Figma", "Tableau", "Bash"
  ]
};

export const careerTimeline = [
  {
    year: "Jan 2022 - May 2023",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    description: "Developed custom web solutions for small businesses, improving their online presence and customer engagement."
  },
  {
    year: "Jun 2023 - Present",
    title: "Data & Digital Marketing Analyst",
    company: "PHD Media Ghana Limited",
    description: "Leveraged data analytics to optimize marketing campaigns, resulting in a 25% increase in ROI for clients."
  },
  {
    year: "Nov 2023- Oct 2024",
    title: "Data Analyst Trainee",
    company: "Stanbic Bank Ghana LTD",
    description: "Conducted data analysis to support business decisions, focusing on customer behavior and market trends."
  }
];



export const certifications = [
  "IBM Data Science Professional Certificate",
  "ALX Data Analyst Certificate"
];

export const education = [
  {
    degree: "ALX Data science Program",
    institution: "ALX Africa",
    year: "2025-Present",
    details: "Intensive program covering data analysis, visualization, machine learning, and applied AI using Python and related tools."
  },
  {
    degree: "B.S. in Computer Science",
    institution: "State University",
    year: "2019 - 2023",
    details: "Graduated with Second Class Honor(Upper Division, GPA: 3.67), focusing on software development and data analysis."
  }
];
