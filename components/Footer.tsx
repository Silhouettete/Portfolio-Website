"use client";

import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "./contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      {/* ... */}

      <div className="relative flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span>{t.footerHeading}</span>
        </h1>

        <p className="text-xl text-white-300 md:mt-10 my-6 text-center font-light">
          {t.footerDescription}
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6 sm:flex-row sm:justify-evenly">
        <a
          href="https://www.linkedin.com/in/swan-pyae-19a430244/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title={t.footerLinkedIn}
            icon={<FaLinkedin className="size-5" />}
            position="right"
          />
        </a>

        <a href="mailto:swanpyaeaung.dev@gmail.com">
          <MagicButton
            title={t.footerEmail}
            icon={<FaEnvelope className="size-5" />}
            position="right"
          />
        </a>

        <a
          href="https://github.com/Silhouettete"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title={t.footerGitHub}
            icon={<FaGithub className="size-5" />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
