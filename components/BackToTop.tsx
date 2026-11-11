"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useLanguage } from "./contexts/LanguageContext";

const BackToTop = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-4000 sm:right-6",
        "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full",
        "bg-burnt text-ink shadow-lg transition-all duration-300",
        "hover:bg-burnt/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        "motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
