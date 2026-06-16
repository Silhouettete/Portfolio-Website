"use client";

import React from "react";
import { cn } from "@/lib/utils";

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
  { name: "Figma", src: "/Figma.svg" }, // ← add this
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
  { value: "3.98", label: "GPA" },
  { value: "1st", label: "Class Honours" },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Subtle grid background — matches hero */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none",
          "bg-size-[40px_40px]",
          "bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]",
        )}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <p className="uppercase tracking-widest text-xs text-center text-purple-100 mb-4">
          Get To Know Me
        </p>

        <h2 className="heading mb-16">
          About <span className="text-purple-100">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div
              className={cn(
                "rounded-2xl border border-border p-6",
                "bg-black-100 border border-white/20 text-card-foreground",
                "shadow-sm",
              )}
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;m a{" "}
                <span className="text-foreground font-medium">
                  Software Engineer from Myanmar
                </span>
                , currently based in Bangkok. I build full-stack products using
                TypeScript, React, and Node.js, from identifying the user
                problem through to shipping to production.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-border p-6",
                "bg-black-100 border border-white/20 text-card-foreground",
                "shadow-sm",
              )}
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                I interned at{" "}
                <span className="text-foreground font-medium">
                  FPT Software
                </span>{" "}
                on a client project for{" "}
                <span className="text-foreground font-medium">
                  NXP Semiconductors
                </span>
                , where I designed and implemented a containerized CI/CD
                pipeline with Docker and Jenkins.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-border p-6",
                "bg-black-100 border border-white/20 text-card-foreground",
                "shadow-sm",
              )}
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                I graduated with{" "}
                <span className="text-foreground font-medium">
                  First-Class Honours and a 3.98 GPA
                </span>{" "}
                from Rangsit University. Currently expanding through Full Stack
                Open and open-source contributions. Available for{" "}
                <span className="text-foreground font-medium">
                  immediate relocation
                </span>{" "}
                across Southeast Asia.
              </p>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-border p-6",
                "bg-black-100 border border-white/20 text-card-foreground",
                "shadow-sm",
              )}
            >
              <p className="text-base leading-relaxed text-muted-foreground">
                I use{" "}
                <span className="text-foreground font-medium">
                  AI tools such as Claude, ChatGPT, and Gemini{" "}
                </span>{" "}
                to accelerate{" "}
                <span className="text-foreground font-medium">
                  ideation, UX writing, research synthesis, and heuristic
                  reviews.{" "}
                </span>{" "}
                AI helps me challenge assumptions and explore alternatives,
                while final design judgment remains my responsibility
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn(
                    "rounded-xl border border-border p-4 text-center",
                    "bg-black-100 border border-white/20 text-card-foreground",
                    "shadow-sm",
                  )}
                >
                  <p className="text-2xl font-bold text-blue-300">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={cn(
              "rounded-2xl border border-border p-6",
              "bg-black-100 border border-white/20 text-card-foreground",
              "shadow-sm h-fit",
            )}
          >
            <p className="uppercase tracking-widest text-xs text-muted-foreground mb-6">
              Tech Stack
            </p>

            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={cn(
                    "flex items-center gap-3 rounded-xl",
                    "border border-border px-4 py-3",
                    "bg-black-100 border border-white/20 text-card-foreground",
                    "hover:border-purple-100/50 transition-colors duration-200",
                    "cursor-default",
                  )}
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm text-foreground font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="uppercase tracking-widest text-xs text-muted-foreground mb-3">
                Currently Learning
              </p>
              <div className="flex flex-wrap gap-2">
                {currentLearnings.map((item) => (
                  <span
                    key={item.name}
                    className={cn(
                      "flex text-sm px-3 py-2 rounded-full gap-2",
                      "border border-border",
                      "text-black-500",
                      "bg-muted",
                    )}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
