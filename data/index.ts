export const navItems = [
  { name: "navAbout", link: "#about" },
  { name: "navProjects", link: "#projects" },
  { name: "navTestimonials", link: "#testimonials" },
  { name: "navContact", link: "#contact" },
];

export const projects = [
  {
    id: 1,
    titleKey: "projectSmartKidsTitle",
    desKey: "projectSmartKidsDesc",
    img: "/smart-kids.png",
    iconLists: ["/Figma.svg"],
    link: "/smart-kids-case-study.html",
    category: "UI/UX" as const,
  },
  {
    id: 2,
    titleKey: "projectHotelTitle",
    desKey: "projectHotelDesc",
    img: "/hackathon.jpg",
    iconLists: ["/flutter.svg", "/Figma.svg"],
    link: "/ERP-Hackathon.html",
    category: "UI/UX" as const,
  },
  {
    id: 3,
    titleKey: "projectJobBoardTitle",
    desKey: "projectJobBoardDesc",
    img: "/Job.jpg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/clerk.svg",
      "/postgresql.svg",
    ],
    link: "https://job-board-blond-three.vercel.app/",
    category: "Dev" as const,
  },
  {
    id: 4,
    titleKey: "projectChatbotTitle",
    desKey: "projectChatbotDesc",
    img: "/Chat-Bot.jpg",
    iconLists: ["/js.svg", "/tail.svg", "/ts.svg", "/gemini.svg"],
    link: "https://github.com/Silhouettete/Pick-up-FAQ",
    category: "Dev" as const,
  },
  {
    id: 5,
    titleKey: "projectDashboardTitle",
    desKey: "projectDashboardDesc",
    img: "/dashboard.jpg",
    iconLists: ["/python.svg", "/Pandas.svg"],
    link: "https://employee-dashboard-jheb.onrender.com/",
    category: "Dev" as const,
  },
];

export const testimonials = [
  {
    id: 1,
    quoteKey: "testimonialFptQuote",
    name: "Mr Tien",
    titleKey: "testimonialFptTitle",
  },
];

export const workExperience = [
  {
    id: 1,
    titleKey: "experienceFptTitle",
    durationKey: "experienceFptDuration",
    descKey: "experienceFptDesc",
    className: "md:col-span-2",
    thumbnail: "/FPT_Software.svg",
  },
  {
    id: 2,
    titleKey: "experienceHackathonTitle",
    descKey: "experienceHackathonDesc",
    className: "md:col-span-2",
    thumbnail: "/hackathon.svg",
  },
];
