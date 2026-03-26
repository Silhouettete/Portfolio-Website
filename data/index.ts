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
  },
  {
    id: 2,
    title: "Hotel Self-Check-in Hackathon Project",
    des: "Flutter mobile self check-in system built for a hotel ERP hackathon, 10+ screens, dual auth flows, and real-time validation.",
    img: "/hackathon.jpg",
    iconLists: ["/flutter.svg", "/Figma.svg"],
    link: "https://github.com/Silhouettete/Hotel-Self-Check-In-Project",
  },
  {
    id: 3,
    title: "University FAQ Page",
    des: "Replaced a static FAQ page with a Gemini API-powered chatbot delivering instant multilingual responses to international students.",
    img: "/Chat-Bot.jpg",
    iconLists: ["/js.svg", "/tail.svg", "/ts.svg", "/gemini.svg"],
    link: "https://github.com/Silhouettete/Pick-up-FAQ",
  },
  {
    id: 4,
    title: "Employee Dashboard Page",
    des: "Flask web app that processes employee and interview Excel data — validating, merging with Pandas, and generating timestamped dashboard reports.",
    img: "/dashboard.jpg",
    iconLists: ["/python.svg", "/pandas.svg"],
    link: "https://employee-dashboard-jheb.onrender.com/",
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
