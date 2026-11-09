"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { languageLabels, Language } from "@/data/translations";
import { useLanguage } from "./contexts/LanguageContext";

const languages: Language[] = ["en", "ja", "th", "my"];

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-burnt/50 bg-cream/80 backdrop-blur-sm p-1">
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          aria-label={`Switch language to ${languageLabels[lang]}`}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt",
            language === lang
              ? "bg-burnt text-ink"
              : "text-ink/70 hover:bg-burnt/20 hover:text-ink",
          )}
        >
          {languageLabels[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
