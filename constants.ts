import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  profile: {
    name: "Rohith Virlanki",
    email: "rohithvirlanki1926@gmail.com",
    phone: "+91 8639353615",
    location: "Visakhapatnam, India",
    summary: "A Bachelor of Computer Science graduate with strong technical competencies in programming, databases, and software engineering. Fast learner, practical project experience, and committed to developing clean, efficient, and user-centred solutions."
  },
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering-Cyber Security",
      institution: "Visakhapatnam, India", // Implicit from text
      score: "CGPA: 8.3/10",
      period: "12/2021 – 05/2025",
      location: "Visakhapatnam, India"
    },
    {
      degree: "Senior Secondary School - Maths, Physics, and Chemistry (MPC)",
      institution: "Visakhapatnam, India",
      score: "Score: 963/1000",
      period: "06/2019 – 03/2021",
      location: "Visakhapatnam, India"
    },
    {
      degree: "Secondary School",
      institution: "Visakhapatnam, India",
      score: "CGPA: 9.7/10",
      period: "06/2018 – 03/2019",
      location: "Visakhapatnam, India"
    }
  ],
  languages: [
    "English (Native/Bilingual)",
    "German (Conversational)"
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "SQL", "C"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["HTML", "CSS", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["SQL", "MongoDB", "NoSQL"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "GitHub", "Google Gemini", "Open API"]
    }
  ],
  projects: [
    {
      title: "Firewall Configuration and Optimization",
      period: "07/2025 – 10/2025",
      description: "Designed and optimized a custom firewall using iptables and pfSense, filtering traffic in depth, limiting unauthorized access, enforcing security policies, and streamlining rule sets. This configuration greatly improved network security and performance while minimizing false positives.",
      technologies: ["iptables", "pfSense", "Network Security"]
    },
    {
      title: "Prevention and Detection of Network Attacks",
      period: "12/2024 – 04/2025",
      description: "Designed a system able to identify and block network attacks by traffic pattern analysis and malicious activity identification. Implemented IDS/IPS techniques along with firewall rules for better overall network security and resilience.",
      technologies: ["IDS/IPS", "Traffic Analysis", "Cyber Security"]
    }
  ],
  certificates: [
    {
      title: "Cyber Security Internship",
      issuer: "SkillDzire",
      description: "Acquired practical experience in network security, threat analysis, vulnerability assessment, and firewall configuration. Developed substantive capabilities to identify and mitigate security risks effectively."
    },
    {
      title: "Full-Stack Java Internship",
      issuer: "SkillDzire",
      description: "Acquired hands-on experience in Java programming, front-end and back-end development, integrating databases, and building responsive web applications using industry-relevant tools and frameworks."
    }
  ]
};

// Data for Chart Visualization
export const SKILL_CHART_DATA = [
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'Java', A: 85, fullMark: 100 },
  { subject: 'SQL', A: 80, fullMark: 100 },
  { subject: 'HTML/CSS', A: 95, fullMark: 100 },
  { subject: 'CyberSec', A: 85, fullMark: 100 },
  { subject: 'Networking', A: 75, fullMark: 100 },
];
