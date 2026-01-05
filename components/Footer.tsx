import React from "react";
import { MagicButton } from "./ui/MagicButton";
import {
  FaEnvelope,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMailchimp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <img
        src="/footer-grid.svg"
        alt="grid"
        className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none"
      />

      <div className="relative flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span>Let's Get In Touch!</span>
        </h1>
        <p className="text-xl text-white-300 md:mt-10 my-6 text-center font-mono">
          If you need help or have question, I'm here for u.
        </p>
      </div>
      <div className="flex flex-col gap-6 mt-6 sm:flex-row sm:justify-evenly">
        <a
          href="https://www.linkedin.com/in/swan-pyae-19a430244/"
          target="_blank"
        >
          <MagicButton
            title="LinkedIn"
            icon={<FaLinkedin className="size-5" />}
            position="right"
          />
        </a>
        <a href="mailto:swanpyaex03@gmail.com">
          <MagicButton
            title="Gmail"
            icon={<FaEnvelope className="size-5" />}
            position="right"
          />
        </a>
        <a href="https://github.com/Silhouettete">
          <MagicButton
            title="GitHub"
            icon={<FaGithub className="size-5" />}
            position="right"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
