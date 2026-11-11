"use client";

import React, { useEffect, useState } from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaCheck, FaGithub, FaLinkedin, FaRegCopy } from "react-icons/fa6";
import { useLanguage } from "./contexts/LanguageContext";

const EMAIL = "swanpyaeaung.dev@gmail.com";

const Footer = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  // Reset the "Copied!" state after a moment
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard blocked (e.g. insecure context): fall back to the mail app
      window.location.href = `mailto:${EMAIL}`;
    }
  };

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

        {/* Quick copy-to-clipboard email */}
        <button
          type="button"
          onClick={copyEmail}
          aria-label={t.footerCopyEmail}
          className="group inline-flex max-w-full cursor-pointer flex-col items-center gap-1 rounded-2xl border border-ink/20 bg-card px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-burnt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt sm:flex-row sm:gap-3 sm:rounded-full"
        >
          <span>{EMAIL}</span>
          <span
            className={`flex items-center gap-1.5 text-xs font-semibold ${
              copied ? "text-ink" : "text-ink/70 group-hover:text-ink"
            }`}
          >
            {copied ? (
              <FaCheck className="text-burnt" aria-hidden="true" />
            ) : (
              <FaRegCopy aria-hidden="true" />
            )}
            {copied ? t.footerEmailCopied : t.footerCopyEmail}
          </span>
        </button>

        <span className="sr-only" role="status" aria-live="polite">
          {copied ? t.footerEmailCopied : ""}
        </span>
      </div>

      <div className="flex flex-col items-center gap-6 mt-6 sm:flex-row sm:justify-center sm:gap-12">
        <a
          href="https://www.linkedin.com/in/swan-pyae-19a430244/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title={t.footerLinkedIn}
            icon={<FaLinkedin className="size-5" />}
            position="right"
            external
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
            external
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
