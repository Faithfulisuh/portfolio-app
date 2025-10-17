import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  profile: {
    name: "John Developer",
    title: "Full Stack Developer",
    bio: "Passionate developer with expertise in React Native, TypeScript, and modern web technologies. I love creating beautiful, functional applications that solve real-world problems.",
  },
  skills: [
    "React Native",
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Expo",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "Mobile Development"
  ],
  contact: {
    email: "john.developer@example.com",
    phone: "+1 (555) 123-4567",
    social: [
      { platform: "GitHub", url: "https://github.com/johndeveloper" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/johndeveloper" },
      { platform: "Twitter", url: "https://twitter.com/johndeveloper" }
    ]
  }
};