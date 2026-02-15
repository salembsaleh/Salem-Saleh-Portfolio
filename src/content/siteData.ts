export const siteConfig = {
  name: "Salem Saleh",
  title: "Software Engineer",
  tagline: "I build products used by billions.",
  description:
    "CS @ Texas A&M · Incoming SWE Intern @ Netflix · Previously @ Meta (2x), Figma.",
  resume: "https://salem-saleh-resume.tiiny.site/",
  phone: "346-541-8475",
  location: "College Station, TX",
  email: "salembsaleh@gmail.com",
  linkedin: "https://linkedin.com/in/salem-saleh",
  github: "https://github.com/salembsaleh",
};

export const education = {
  school: "Texas A&M University",
  degree: "B.S. Computer Science",
  gpa: "3.96",
  honors: "College of Engineering",
  dates: "Aug 2022 – May 2026",
  coursework: [
    "Software Engineering",
    "Data Structures & Algorithms",
    "Design & Analysis of Algorithms",
    "Database Systems",
    "Computer Architecture",
    "Programming Languages",
    "Program Design & Concepts",
    "Discrete Structures",
  ],
};

export interface Experience {
  id: string;
  role: string;
  company: string;
  team?: string;
  location: string;
  dates: string;
  current?: boolean;
  bullets: string[];
  tech?: string[];
}

export const experiences: Experience[] = [
  {
    id: "netflix",
    role: "Incoming Software Engineer Intern",
    company: "Netflix",
    team: "Netflix.com",
    location: "Los Gatos, CA",
    dates: "Summer 2026",
    current: true,
    bullets: ["Incoming Summer 2026 on the Netflix.com team."],
  },
  {
    id: "thirdperson",
    role: "CTO / Co-Founder",
    company: "ThirdPerson",
    location: "Remote",
    dates: "Aug 2025 – Present",
    current: true,
    bullets: [
      "Co-founded an AI-powered search and introduction platform helping founders identify the right companies, investors, and partners.",
      "Designed end-to-end search and ranking pipeline combining semantic embeddings, rule-based guardrails, and LLM reranking.",
      "Built the product on Next.js, TypeScript, Tailwind, and Supabase, deployed to Vercel.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    id: "meta-instagram",
    role: "Software Engineer Intern",
    company: "Meta",
    team: "Instagram",
    location: "New York, NY",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Developed features on an internal ad retrieval tool used by 10,000+ engineers for testing and debugging Instagram ad flows.",
      "Improved AI-driven ad matching and retrieval for ~2 billion Instagram users.",
      "Built end-to-end features in React.js, Hack (PHP), and Python with comprehensive unit testing and data validation.",
    ],
    tech: ["React", "Hack (PHP)", "Python", "JavaScript"],
  },
  {
    id: "figma",
    role: "Software Engineer Intern",
    company: "Figma",
    location: "San Francisco, CA",
    dates: "Jan 2025 – Apr 2025",
    bullets: [
      "Delivered two highly requested features: Reorder Modes and Reorder Collections.",
      "Implemented in React (TypeScript) and C++, with data stored in Sinatra (Ruby), impacting ~4 million users.",
      "Built and launched in under 12 weeks with strong user satisfaction and adoption.",
    ],
    tech: ["React", "TypeScript", "C++", "Ruby"],
  },
  {
    id: "meta-whatsapp",
    role: "Software Engineer Intern",
    company: "Meta",
    team: "WhatsApp",
    location: "Menlo Park, CA",
    dates: "May 2024 – Aug 2024",
    bullets: [
      "Enhanced WhatsApp Web community permissions in JavaScript for ~300 million users.",
      "Streamlined group creation flows to maximize user satisfaction.",
      "Built features on WhatsApp Web using React and wrote unit tests in Jest.",
    ],
    tech: ["React", "JavaScript", "Jest"],
  },
  {
    id: "chevron",
    role: "Software Engineer Intern",
    company: "Chevron",
    location: "Houston, TX",
    dates: "May 2023 – Aug 2023",
    bullets: [
      "Built a full-stack web app in C# + .NET automating library editing for 2,500+ users.",
      "Cut time to edit 500+ software libraries from 1–2 days to a few minutes.",
    ],
    tech: ["C#", ".NET", "XAML"],
  },
];

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  details: string[];
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "application-wrapped",
    title: "Application Wrapped",
    subtitle: "Personal Project",
    description:
      "Spotify Wrapped–style web app that transforms job application trackers into a visually engaging, shareable story experience.",
    details: [
      "Privacy-first client-side CSV parsing pipeline to clean, normalize, and analyze application data without storing user information.",
      "Generated insights including total applications, interview-stage reach, top roles and companies, peak application months, and geographic trends.",
      "Animated, mobile-friendly story cards with exportable high-resolution images optimized for social sharing.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "cancer-support-match",
    title: "Cancer Support Match",
    subtitle: "JPMorgan Code for Good 2023",
    description:
      "Matching platform connecting cancer patients with survivor volunteers for CanCare nonprofit.",
    details: [
      "Designed matching algorithm pairing patients with survivors based on cancer type, treatment stage, and personal preferences.",
      "Collaborated with a cross-functional team of 5 to deliver a full-stack solution under a tight hackathon deadline.",
      "Presented to industry judges and nonprofit stakeholders, emphasizing usability and scalability.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "aggiehousing",
    title: "AggieHousing",
    subtitle: "Personal Project",
    description:
      "Housing recommendation platform helping Texas A&M students discover optimal on-campus and off-campus housing.",
    details: [
      "Implemented filtering and ranking logic based on budget, distance, amenities, and preferences.",
      "Supported 500+ students by centralizing housing data and reducing comparison time.",
    ],
    tech: ["React", "Node.js"],
  },
  {
    id: "ai-travel-planner",
    title: "AI Travel Planner",
    subtitle: "Personal Project",
    description:
      "AI-powered travel planning tool generating personalized multi-day itineraries based on user preferences.",
    details: [
      "Integrated large language models for dynamic attraction, dining, and schedule recommendations.",
      "Designed prompts ensuring coherent, realistic, and geographically efficient itineraries.",
    ],
    tech: ["Python", "OpenAI API"],
  },
  {
    id: "productivity-suite",
    title: "Productivity App Suite",
    subtitle: "HackRice 13",
    description:
      "Customizable dashboard centralizing essential productivity tools in a single workspace.",
    details: [
      "Built modular widgets for task tracking, focus management, and workspace organization.",
      "Focused on user experience design to help users prioritize and reduce context switching.",
    ],
    tech: ["React", "Node.js"],
  },
];

export const skills = {
  languages: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "C#",
    "C++",
    "Ruby",
    "Hack (PHP)",
  ],
  technologies: [
    "React",
    "Node.js",
    ".NET",
    "MongoDB",
    "Supabase",
    "Git",
    "Postman",
    "Jest",
  ],
};

export const leadership = {
  role: "Founder & President",
  organization: "Aggie Internship Club",
  location: "College Station, TX",
  dates: "Jan 2024 – May 2025",
  bullets: [
    "Founded and grew the club to ~1,000 members with expert-led workshops and exclusive industry insights.",
    "Led a team of 5+ officers to organize events with companies such as Google and Meta.",
  ],
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
