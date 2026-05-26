export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    title: "Smart Kids — Game and Learn",
    des: "Multi-platform UX design for a children's English learning app. Designed 16+ screens across web, mobile, and Apple Vision Pro — applying Nielsen's heuristics, color psychology, and gamification systems to drive engagement.",
    img: "/smart-kids.png",
    iconLists: ["/Figma.svg"],
    link: "/smart-kids-case-study.html",
    category: "UI/UX",
  },
  {
    id: 2,
    title: "Hotel Self-Check-in",
    des: "Designed and built a self check-in system for a hotel ERP hackathon. Led UX decisions across 10+ screens — designing dual auth flows (Booking ID + email), identity verification with live selfie, and a confirmation slip — then implemented it in Flutter.",
    img: "/hackathon.jpg",
    iconLists: ["/flutter.svg", "/Figma.svg"],
    link: "https://github.com/Silhouettete/Hotel-Self-Check-In-Project",
    category: "UI/UX",
  },
  {
    id: 3,
    title: "AI-powered Job Board",
    des: "Full-stack job platform built with Next.js and PostgreSQL, covering authentication, listings, search, applications, and file uploads with Docker containerization.",
    img: "/Job.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.svg",
      "/postgresql.svg",
    ],
    link: "https://job-board-blond-three.vercel.app/",
    category: "Dev",
  },
  {
    id: 4,
    title: "University FAQ Chatbot",
    des: "Replaced a static FAQ page with a Gemini API-powered chatbot delivering instant multilingual responses to international students.",
    img: "/Chat-Bot.jpg",
    iconLists: ["/js.svg", "/tail.svg", "/ts.svg", "/gemini.svg"],
    link: "https://github.com/Silhouettete/Pick-up-FAQ",
    category: "Dev",
  },
  {
    id: 5,
    title: "Employee Dashboard",
    des: "Flask web app that processes employee and interview Excel data — validating, merging with Pandas, and generating timestamped dashboard reports.",
    img: "/dashboard.jpg",
    iconLists: ["/python.svg", "/Pandas.svg"],
    link: "https://employee-dashboard-jheb.onrender.com/",
    category: "Dev",
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
