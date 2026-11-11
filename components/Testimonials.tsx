"use client";

import { testimonials } from "@/data";
import React from "react";
import { useLanguage } from "./contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 flex flex-col items-center" id="testimonials">
      <h1 className="heading mb-12">{t.testimonialsHeading}</h1>

      <div className="w-full max-w-3xl flex flex-col gap-8 px-4">
        {testimonials.map(({ id, name }) => (
          <figure
            key={id}
            className="rounded-3xl border border-ink/10 bg-card px-6 py-8 text-ink shadow-sm sm:px-8 sm:py-10 md:px-14 md:py-14"
          >
            <span
              aria-hidden="true"
              className="block h-12 text-7xl font-serif leading-none text-burnt"
            >
              {"\u201C"}
            </span>

            <blockquote className="mt-2 text-lg font-light leading-relaxed text-ink md:text-2xl">
              {t.testimonialFptQuote}
            </blockquote>

            <figcaption className="mt-10 flex items-center gap-4 border-t border-ink/10 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-burnt text-base font-bold text-ink">
                {name.replace(/^Mr\.?\s+/i, "").charAt(0)}
              </div>

              <div className="text-left">
                <p className="text-sm font-semibold text-ink">{name}</p>
                <p className="text-xs text-ink/70 md:text-sm">
                  {t.testimonialFptTitle}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
