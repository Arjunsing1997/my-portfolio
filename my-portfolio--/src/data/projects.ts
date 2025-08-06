import type { Project } from '../interface/interface';

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and TypeScript.",
    stack: ["React", "TypeScript", "CSS"],
    image: "/assets/images/portfolio.png",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Mobile Shop App",
    description: "E-commerce mobile app for shopping, built with React Native.",
    stack: ["React Native", "Redux", "Firebase"],
    image: "/assets/images/shopapp.png",
  },
  // Add more projects as needed
];
