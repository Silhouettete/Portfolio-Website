"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/contexts/LanguageContext";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        // Show when scrolling up, hide when scrolling down
        setVisible(direction < 0);
      }
    }
  });

  // Scroll spy: highlight the last section whose top has passed ~35% of the viewport
  useEffect(() => {
    const update = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      let current = "";

      if (atBottom) {
        current = navItems[navItems.length - 1]?.link ?? "";
      } else {
        for (const item of navItems) {
          const el = document.getElementById(item.link.replace("#", ""));
          if (
            el &&
            el.getBoundingClientRect().top <= window.innerHeight * 0.35
          ) {
            current = item.link;
          }
        }
      }

      setActiveLink(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [navItems]);

  // nav item names are translation keys (e.g. "navAbout")
  const label = (name: string) =>
    (t as unknown as Record<string, string>)[name] ?? name;

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={cn(
          "fixed top-4 sm:top-6 inset-x-0 z-5000 mx-auto flex max-w-fit items-center justify-center gap-0.5 sm:gap-1",
          "rounded-full border border-cream/15 bg-ink p-1.5",
          "shadow-[0_8px_30px_rgba(17,17,17,0.18)]",
          className,
        )}
      >
        {navItems.map((navItem, idx) => {
          const isActive = activeLink === navItem.link;

          return (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "relative flex items-center whitespace-nowrap rounded-full px-2.5 py-2 text-xs sm:px-4 sm:text-sm transition-colors duration-200",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt",
                isActive
                  ? "font-semibold text-ink"
                  : "font-medium text-cream/80 hover:text-cream",
              )}
            >
              {/* Orange pill that slides to the active link */}
              {isActive && (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-burnt"
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 380, damping: 32 }
                  }
                />
              )}

              <span className="relative z-10 block sm:hidden">
                {navItem.icon ?? label(navItem.name)}
              </span>
              <span className="relative z-10 hidden sm:block">
                {label(navItem.name)}
              </span>
            </a>
          );
        })}
      </motion.nav>
    </AnimatePresence>
  );
};
