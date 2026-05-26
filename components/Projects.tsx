"use client";

import { projects } from "@/data";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const Projects = () => {
  const [active, setActive] = useState<"All" | "UI/UX" | "Dev">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="py-20 z-10 relative" id="projects">
      <h1 className="heading text-white">
        A Collection of <span className="text-purple">My Projects</span>
      </h1>

      {/* Filter tabs */}
      <div className="flex justify-center gap-3 mt-8">
        {(["All", "UI/UX", "Dev"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer
              ${
                active === tab
                  ? "bg-purple text-white border-purple"
                  : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
              }`}
          >
            {tab === "UI/UX" ? "UI/UX" : tab === "Dev" ? "Development" : "All"}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {filtered.map(({ id, title, des, img, iconLists, link, category }) => (
          <div
            key={id}
            className="sm:h-164 lg:min-h-130 h-100 flex items-center justify-center sm:w-142.5 w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img src={img} alt="cover" className="z-10 absolute bottom-0" />
              </div>

              {/* Category badge */}
              <div className="mb-2">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full
                  ${
                    category === "UI/UX"
                      ? "bg-purple/20 text-purple border border-purple/30"
                      : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  }`}
                >
                  {category === "UI/UX" ? "UI/UX Design" : "Development"}
                </span>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-blue-300 mb-3">
                {title}
              </h1>
              <p className="lg:text-1xl lg:font-normal font-light text-sm line-clamp-3">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/20 rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-blue-200">
                    Check Live Site / repo
                  </p>
                  <FaLocationArrow className="ms-3" color="#" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
