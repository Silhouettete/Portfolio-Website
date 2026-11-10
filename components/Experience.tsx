"use client";

import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/moving-border";
import { useLanguage } from "./contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const experienceTranslations = {
    1: {
      title: t.experienceFptTitle,
      duration: t.experienceFptDuration,
      desc: t.experienceFptDesc,
    },
    2: {
      title: t.experienceHackathonTitle,
      duration: "",
      desc: t.experienceHackathonDesc,
    },
    3: {
      title: t.experienceSeminarTitle,
      duration: "",
      desc: t.experienceSeminarDesc,
    },
  } as const;
  return (
    <div className="py-10" id="experience">
      <h1 className="heading"> {t.experienceHeading}</h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => {
          const translated =
            experienceTranslations[
              card.id as keyof typeof experienceTranslations
            ];

          return (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              className="flex-1 bg-card text-ink border-ink/15"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-3">
                <img
                  src={card.thumbnail}
                  alt={translated.title}
                  className="lg:w-32 md:w-20 w-16"
                />

                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold mb-2 text-ink">
                    {translated.title}
                  </h1>

                  {translated.duration && (
                    <h3 className="text-start text-xs md:text-xl font-semibold text-burnt">
                      {translated.duration}
                    </h3>
                  )}

                  <p className="text-start text-ink/70 mt-3 font-medium">
                    {translated.desc}
                  </p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
