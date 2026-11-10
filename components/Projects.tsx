"use client";

import { projects } from "@/data";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { useLanguage } from "./contexts/LanguageContext";

type Filter = "All" | "UI/UX" | "Dev";
type Category = Exclude<Filter, "All">;

const filters: readonly Filter[] = ["All", "Dev", "UI/UX"];

const badgeStyles: Record<Category, string> = {
  "UI/UX": "bg-plum/15 border-plum/40",
  Dev: "bg-burnt/15 border-burnt/40",
};

const Projects = () => {
  const { t } = useLanguage();

  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const tabLabels: Record<Filter, string> = {
    All: t.filterAll,
    "UI/UX": t.filterUiUx,
    Dev: t.filterDev,
  };

  const categoryLabels: Record<Category, string> = {
    "UI/UX": t.categoryUiUx,
    Dev: t.categoryDev,
  };

  const projectTranslations: Record<
    number,
    { title: string; description: string }
  > = {
    1: {
      title: t.projectSmartKidsTitle,
      description: t.projectSmartKidsDesc,
    },
    2: {
      title: t.projectHotelTitle,
      description: t.projectHotelDesc,
    },
    3: {
      title: t.projectJobBoardTitle,
      description: t.projectJobBoardDesc,
    },
    4: {
      title: t.projectChatbotTitle,
      description: t.projectChatbotDesc,
    },
    5: {
      title: t.projectDashboardTitle,
      description: t.projectDashboardDesc,
    },
    6: {
      title: t.projectSeminarTitle,
      description: t.projectSeminarDesc,
    },
  };

  return (
    <div className="py-20 z-10 relative" id="projects">
      <h1 className="heading">
        {t.projectsHeadingPre}
        <span className="text-burnt">{t.projectsHeadingHighlight}</span>
      </h1>

      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
        {filters.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-colors duration-200 cursor-pointer ${
              active === tab
                ? "bg-burnt text-ink border-burnt"
                : "bg-burnt/15 text-ink border-burnt/50 hover:bg-burnt/30 hover:border-burnt"
            }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto px-4">
        {filtered.map(({ id, img, iconLists, link, category }) => {
          const translation = projectTranslations[id];
          const isExternal = link.startsWith("http");

          return (
            <a
              key={id}
              href={link}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex h-full flex-col rounded-3xl border border-ink/15 bg-card p-4
                         transition-all duration-300 ease-out
                         hover:-translate-y-1 hover:border-burnt hover:shadow-lg
                         motion-reduce:transition-none motion-reduce:hover:translate-y-0
                         focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt"
            >
              {/* Project image */}
              <div className="aspect-video w-full overflow-hidden rounded-2xl bg-secondary">
                <img
                  src={img}
                  alt={translation.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>

              <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                {/* Category badge */}
                <div className="mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full text-ink border ${badgeStyles[category]}`}
                  >
                    {categoryLabels[category]}
                  </span>
                </div>

                {/* Project title */}
                <h2 className="font-bold text-xl text-ink mb-2">
                  {translation.title}
                </h2>

                {/* Project description */}
                <p className="text-sm text-ink/75 leading-relaxed line-clamp-3">
                  {translation.description}
                </p>

                {/* Technologies + link */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon) => (
                      <div
                        key={icon}
                        className="-ml-2 first:ml-0 flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-ink"
                      >
                        <img src={icon} alt="" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-sm font-semibold text-burnt">
                    <span>
                      {category === "UI/UX" ? t.viewCaseStudy : t.checkLiveSite}
                    </span>
                    <FaLocationArrow className="ms-2 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
