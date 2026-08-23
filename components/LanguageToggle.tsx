"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { languageLabels, Language } from "@/data/translations";
import { useLanguage } from "./contexts/LanguageContext";

const languages: Language[] = ["en", "ja", "th", "my"];

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black-100/80 backdrop-blur-sm p-1">
      {languages.map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          aria-label={`Switch language to ${languageLabels[lang]}`}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer",
            language === lang
              ? "bg-purple-100 text-black-100"
              : "text-white/60 hover:text-white",
          )}
        >
          {languageLabels[lang]}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
