"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./contexts/LanguageContext";

const skills = [
  { name: "TypeScript", src: "/ts.svg" },
  { name: "React", src: "/react.svg" },
  { name: "Next.js", src: "/next.svg" },
  { name: "Node.js", src: "/node.svg" },
  { name: "PostgreSQL", src: "/postgresql.svg" },
  { name: "Docker", src: "/docker.svg" },
  { name: "Flutter", src: "/flutter.svg" },
  { name: "Python", src: "/python.svg" },
  { name: "Git", src: "/git.svg" },
  { name: "Tailwind CSS", src: "/tail.svg" },
  { name: "Figma", src: "/Figma.svg" },
];

const currentLearnings = [
  {
    name: "Full Stack Open",
    src: "/next.svg",
  },
  {
    name: "System Design",
    src: "/system_design.svg",
  },
];

const stats = [
  { value: "3.98", translationKey: "statGpaLabel" },
  { value: "1st", translationKey: "statHonoursLabel" },
] as const;

// Shared look for every cream box in this section
const box = "rounded-2xl p-6 bg-card text-ink border border-ink/10 shadow-sm";

const About = () => {
  const { t } = useLanguage();

  const paragraphs = [t.aboutP1, t.aboutP2, t.aboutP3, t.aboutP4];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Eyebrow */}
        <p className="uppercase tracking-widest text-xs text-center text-ink/60 font-semibold mb-4">
          {t.aboutEyebrow}
        </p>

        {/* Heading */}
        <h2 className="heading mb-16">
          {t.aboutHeadingPre}
          <span className="text-burnt">{t.aboutHeadingHighlight}</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {paragraphs.map((text, i) => (
              <div key={i} className={box}>
                <p
                  className={cn(
                    "leading-relaxed",
                    i === 0
                      ? "text-lg font-medium text-ink"
                      : "text-base text-ink/75",
                  )}
                >
                  {text}
                </p>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.translationKey}
                  className="rounded-xl p-4 text-center bg-card text-ink border border-ink/10 shadow-sm"
                >
                  <p className="text-2xl font-bold text-burnt">{stat.value}</p>

                  <p className="text-xs text-ink/60 mt-1">
                    {t[stat.translationKey]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className={cn(box, "h-fit")}>
            {/* Tech Stack */}
            <p className="uppercase tracking-widest text-xs text-ink/55 font-semibold mb-6">
              {t.techStackLabel}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={cn(
                    "flex items-center gap-3 rounded-xl",
                    "border border-ink/10 bg-secondary/50 px-4 py-3",
                    "hover:border-burnt transition-colors duration-200",
                    "cursor-default",
                  )}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink">
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                    />
                  </span>

                  <span className="text-sm text-ink font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Currently Learning */}
            <div className="mt-6 pt-6 border-t border-ink/10">
              <p className="uppercase tracking-widest text-xs text-ink/55 font-semibold mb-3">
                {t.currentlyLearningLabel}
              </p>

              <div className="flex flex-wrap gap-2">
                {currentLearnings.map((item) => (
                  <span
                    key={item.name}
                    className="flex text-sm px-3 py-2 rounded-full gap-2 bg-plum text-cream"
                  >
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-5 h-5 object-contain"
                    />

                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-6 pt-6 border-t border-ink/10">
              <p className="uppercase tracking-widest text-xs text-ink/55 font-semibold mb-3">
                {t.softSkillsLabel}
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  t.softSkillCommunication,
                  t.softSkillTeamwork,
                  t.softSkillProblemSolving,
                  t.softSkillAdaptability,
                  t.softSkillTimeManagement,
                  t.softSkillContinuousLearning,
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-2 rounded-full border border-ink/15 bg-secondary text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
