import { Experience, Skill, SocialLink } from './types';

export const PERSONAL_INFO = {
  name: "Bagaja Birhanu Nura",
  title: "Senior Software Engineer",
  location: "Addis Ababa, Ethiopia",
  email: "bagajab@gmail.com",
  phone: "+251-916-382434",
  website: "www.bagaja.dev",
  profileImage: "https://media.licdn.com/dms/image/v2/D4D03AQHRHTSHmQUKkg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701266426637?e=1765411200&v=beta&t=mvVjqzOKGHQEp4K2wJ2Z49Y5SyUtF2OCpzdRRLZeWkI",
  summary: "Highly skilled and results-oriented Senior Software Engineer with over seven years of experience in developing and deploying innovative software solutions across various sectors, including real estate investment, global public health, and enterprise systems. Adept at leveraging a broad range of technologies to deliver user-focused applications and improve organizational efficiencies."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/bagajab", icon: "linkedin" },
  { platform: "GitHub", url: "https://github.com/bagajab", icon: "github" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "mail" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "m4health",
    role: "Senior Full Stack Engineer",
    company: "management4health (m4Health) / Honeycomb",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2024 – Present",
    description: "Leading development for global healthcare initiatives, focusing on mobile health solutions in underserved areas.",
    achievements: [
      "Successfully transitioned the National Health Insurance System from pilot to full-scale implementation, benefiting millions of Ethiopians.",
      "Led the development and enhancement of the National Health Insurance System, ensuring scalability and reliability.",
      "Improved application performance and scalability by containerizing the entire system and utilizing horizontal deployment methods.",
      "Implemented advanced security measures and conducted regular updates to maintain system integrity.",
      "Provided training and support to healthcare workers and system users."
    ]
  },
  {
    id: "truliv",
    role: "Senior Software Engineer",
    company: "TruLiv",
    location: "Los Angeles, CA / Remote",
    period: "Feb 2022 – Dec 2023",
    description: "End-to-end Real Estate Investment Technology Company leveraging big data and machine learning.",
    achievements: [
      "Designed and implemented deal summary reports generated in Word format.",
      "Developed UI/UX for deal sourcing, pipeline, and task pages.",
      "Setup email notifications for user onboarding and deal status changes.",
      "Worked on saving custom rent and sale comps.",
      "Developed a comprehensive platform notification system."
    ]
  },
  {
    id: "icap",
    role: "Software Engineer",
    company: "ICAP at Columbia University",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2022 – Feb 2022",
    description: "Global public health leader tackling HIV, tuberculosis, and malaria.",
    achievements: [
      "Developed and refined integration between applications.",
      "Researched and evaluated eHealth application software products.",
      "Customized Bahmni Open source EMR in the Ethiopian context.",
      "Integrated the Ethiopian calendar into existing apps.",
      "Developed a system for data migration from legacy systems."
    ]
  },
  {
    id: "chai",
    role: "Full Stack Engineer",
    company: "Clinton Health Access Initiative (CHAI)",
    location: "Addis Ababa, Ethiopia",
    period: "Mar 2020 – Dec 2021",
    description: "Technical lead for the insurance management platform developed for the Ethiopian Health Insurance Agency (EHIA).",
    achievements: [
      "Designed, developed, and implemented new features for the National Health Insurance System.",
      "Managed updates, bug fixes, and security patches.",
      "Managed DevOps activities to ensure uptime and availability.",
      "Conducted training and user onboarding in pilot districts.",
      "Prepared and deployed reports on business intelligence tools."
    ]
  },
  {
    id: "winner",
    role: "Programmer",
    company: "Winner Systems",
    location: "Addis Ababa, Ethiopia",
    period: "Jul 2017 – Feb 2020",
    description: "Ethiopian market leader in Enterprise Resource Planning Systems for higher education.",
    achievements: [
      "Developed Single Page Applications (SPA) using React.js, GraphQL, and Ruby on Rails API.",
      "Developed One Card system using QR Code technology for student identification.",
      "Developed Class and Exam Schedule modules.",
      "Designed an Organized Report System."
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React.js", "TypeScript", "Next.js", "Angular.js", "Vue.js", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Ruby on Rails", "Python", "Django", "PHP", "Laravel", "GraphQL", "REST APIs"]
  },
  {
    category: "Database & Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Oracle", "SQL Server", "Tableau", "Power BI"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Kubernetes", "Nginx", "Apache", "Linux (Red Hat, Ubuntu)", "Git", "CI/CD", "Microsoft IIS"]
  }
];

export const EDUCATION = [
  {
    degree: "B.S. Computer Science",
    school: "Woldia University",
    year: "2013 - 2017",
    note: "Graduated with High Distinction"
  }
];

export const CERTIFICATIONS = [
  "LinkedIn Certified Data Analyst (2023)",
  "LinkedIn Certified Project Manager (2023)",
  "COVID-19 Contact Tracing - Johns Hopkins (2020)",
  "NDG Linux Unhatched - Cisco (2020)"
];

// Context for the AI Agent
export const RESUME_CONTEXT = `
You are an AI assistant representing Bagaja Birhanu Nura, a Senior Software Engineer.
Use the following context to answer questions about Bagaja's experience, skills, and background.
Be professional, concise, and helpful. If the answer isn't in the context, say you don't have that specific information but invite them to contact Bagaja directly.

Name: ${PERSONAL_INFO.name}
Title: ${PERSONAL_INFO.title}
Summary: ${PERSONAL_INFO.summary}
Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}

Skills: ${SKILLS.map(s => s.items.join(", ")).join("; ")}

Experience:
${EXPERIENCES.map(e => `
Role: ${e.role} at ${e.company} (${e.period})
Location: ${e.location}
Description: ${e.description}
Key Achievements:
${e.achievements.map(a => "- " + a).join("\n")}
`).join("\n")}

Education: ${EDUCATION[0].degree} at ${EDUCATION[0].school} (${EDUCATION[0].year}).
Certifications: ${CERTIFICATIONS.join(", ")}.
`;