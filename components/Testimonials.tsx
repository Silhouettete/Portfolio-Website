"use client";

import { testimonials } from "@/data";
import React from "react";
import { useLanguage } from "./contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 flex flex-col items-center" id="testimonials">
      <h1 className="heading mb-12">{t.testimonialsHeading}</h1>

      {testimonials.map(({ id }) => (
        <div className="w-full flex justify-center" key={id}>
          <div
            className="w-[80vw] sm:w-2xl h-[30vh] sm:h-[40vh]
                       bg-[#13162d] rounded-3xl
                       flex flex-col items-center justify-center
                       text-center px-6
                       border border-white/10 shadow-lg"
          >
            <p className="lg:text-lg md:text-base text-sm font-light max-w-2xl">
              {t.testimonialFptQuote}
            </p>

            <span className="mt-6 text-xs lg:text-sm text-blue-300 font-bold">
              {t.testimonialFptTitle}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
