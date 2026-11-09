"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { MagicButton } from "./ui/MagicButton";
import { FaDownload, FaLocationArrow } from "react-icons/fa6";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36">
      {/* Language toggle */}
      <div className="absolute top-6 right-6 z-30">
        <LanguageToggle />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-9rem)] w-full items-center justify-center">
        <div className="flex w-full max-w-[89vw] flex-col items-center justify-center gap-10 lg:max-w-[75vw] lg:flex-row lg:gap-14">
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="relative h-44 w-44 overflow-hidden rounded-[2rem] md:h-60 md:w-60">
              <img
                src="./SwanPyaeAung.jpeg"
                alt="Swan Pyae Aung"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex max-w-[89vw] flex-col items-center text-center md:max-w-2xl lg:max-w-[50vw] lg:items-start lg:text-left">
            <h2 className="max-w-80 text-xs uppercase tracking-widest text-burnt font-semibold">
              {t.portfolioBy}
            </h2>

            <TextGenerateEffect
              key={t.heroTitle}
              className="text-center text-[28px] md:text-3xl lg:text-4xl lg:text-left [&_*]:text-ink!"
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
