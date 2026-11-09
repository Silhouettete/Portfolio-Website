import React from "react";
import { cn } from "@/lib/utils";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
};

export const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex h-12 w-full md:w-60 cursor-pointer items-center justify-center gap-2 rounded-lg px-7",
        "bg-burnt text-sm font-semibold text-ink",
        "transition-colors duration-200 hover:bg-burnt/90",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        otherClasses,
      )}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default MagicButton;
