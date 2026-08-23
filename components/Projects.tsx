"use client";

import { projects } from "@/data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { useLanguage } from "./contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const [active, setActive] = useState<"All" | "UI/UX" | "Dev">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const tabLabels: Record<"All" | "UI/UX" | "Dev", string> = {
    All: t.filterAll,
    "UI/UX": t.filterUiUx,
    Dev: t.filterDev,
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
  };

  return (
    <div className="py-20 z-10 relative" id="projects">
      <h1 className="heading text-white">
        {t.projectsHeadingPre}
        <span className="text-purple">{t.projectsHeadingHighlight}</span>
      </h1>

      {/* Filter tabs */}
      <div className="flex justify-center gap-3 mt-8">
        {(["All", "UI/UX", "Dev"] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
              active === tab
                ? "bg-purple text-white border-purple"
                : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
            }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {filtered.map(({ id, img, iconLists, link, category }) => {
          const translation = projectTranslations[id];

          return (
            <div
              key={id}
              className="sm:h-164 lg:min-h-130 h-100 flex items-center justify-center sm:w-142.5 w-[80vw]"
            >
              <PinContainer title={link} href={link}>
                {/* Project image */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="" />
                  </div>

                  <img
                    src={img}
                    alt={translation.title}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                {/* Category badge */}
                <div className="mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      category === "UI/UX"
                        ? "bg-purple/20 text-purple border border-purple/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    {category === "UI/UX" ? t.categoryUiUx : t.categoryDev}
                  </span>
                </div>

                {/* Project title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-blue-300 mb-3">
                  {translation.title}
                </h1>

                {/* Project description */}
                <p className="lg:text-1xl lg:font-normal font-light text-sm line-clamp-3">
                  {translation.description}
                </p>

                {/* Technologies + link */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt="" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-blue-200">
                      {t.checkLiveSite}
                    </p>

                    <FaLocationArrow className="ms-3" />
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
