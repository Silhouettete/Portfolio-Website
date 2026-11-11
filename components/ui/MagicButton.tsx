"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/contexts/LanguageContext";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  /** Shows a small arrow and tells screen readers the link opens a new tab */
  external?: boolean;
};

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  external,
}: MagicButtonProps) => {
  const { t } = useLanguage();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex min-h-12 w-full md:w-60 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-2 text-center",
        "bg-burnt text-sm font-semibold text-ink",
        "transition-colors duration-200 hover:bg-burnt/90",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        otherClasses,
      )}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
      {external && (
        <>
          <ArrowUpRight
            className="size-4 shrink-0 opacity-80"
            aria-hidden="true"
          />
          <span className="sr-only">{t.opensInNewTab}</span>
        </>
      )}
    </button>
  );
};

export default MagicButton;
