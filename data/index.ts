export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "AI-powered Job Board",
    des: "A full-stack job platform using AI to match candidates with relevant roles.",
    img: "/Job.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.svg",
      "/postgresql.svg",
    ],
    link: "https://github.com/Silhouettete/Job-Board",
  },
  {
    id: 2,
    title: "Hotel Self-Check-in Hackathon Project",
    des: "A mobile-first self check-in experience built to reduce hotel front-desk congestion.",
    img: "/hackathon.jpg",
    iconLists: ["/flutter.svg", "/Figma.svg"],
    link: undefined,
  },
  {
    id: 3,
    title: "University FAQ Page",
    des: "An AI-powered FAQ system delivering instant answers to university queries.",
    img: "/Chat-Bot.jpg",
    iconLists: ["/js.svg", "/tail.svg", "/ts.svg", "/gemini.svg"],
    link: "https://github.com/Silhouettete/Pick-up-FAQ",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Demonstrated a solid understanding of project requirements and completed assigned tasks reliably. Showed good teamwork skills and collaborated effectively in a remote working environment.",
    name: "Mr Tien",
    title: "Project Supervisor, FPT Software (Client: NXP)",
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Software Engineering Intern @FPT Software",
    duration: "July 2025 - October 2025",
    desc: "Helped design and implement an automated CI/CD pipeline platform that improved deployment consistency and reduced manual setup using Docker, Nexus, and Ansible.",
    className: "md:col-span-2",
    thumbnail: "/FPT_Software.svg",
  },

  {
    id: 2,
    title: "Project Lead (CimSO ERP Hackathon)",
    desc: "Led development of a hackathon project from ideation to delivery, building user-facing features and ensuring timely completion within a fast-paced, collaborative environment.",
    className: "md:col-span-2",
    thumbnail: "/hackathon.svg",
  },
];
