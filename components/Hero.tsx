"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/MagicButton";
import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]",
          )}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
      </div>

      {/* Spotlights */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="orange"
        />

        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="blue" />

        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>

      {/* Language toggle */}
      <div className="absolute top-6 right-6 z-30">
        <LanguageToggle />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-9rem)] w-full items-center justify-center">
        <div className="flex w-full max-w-[89vw] flex-col items-center justify-center gap-10 lg:max-w-[75vw] lg:flex-row lg:gap-14">
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1.5 rounded-[2rem] bg-linear-to-br from-orange-400/30 via-purple-500/30 to-blue-500/30 blur-2xl" />

            <div className="relative h-44 w-44 overflow-hidden rounded-[2rem] border border-white/20 bg-black-100 md:h-60 md:w-60">
              <img
                src="./SwanPyaeAung.jpeg"
                alt="Swan Pyae Aung"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex max-w-[89vw] flex-col items-center text-center md:max-w-2xl lg:max-w-[50vw] lg:items-start lg:text-left">
            <h2 className="max-w-80 text-xs uppercase tracking-widest text-purple-100">
              {t.portfolioBy}
            </h2>

            <TextGenerateEffect
              key={t.heroTitle}
              className="text-center text-[28px] md:text-3xl lg:text-4xl lg:text-left"
              words={t.heroTitle}
            />

            <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#projects">
                <MagicButton
                  title={t.ctaProjects}
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>

              <a
                href="/SwanPyaeAung-SWE-Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title={t.ctaResume}
                  icon={<FaDownload />}
                  position="right"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
