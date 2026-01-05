import { testimonials } from "@/data";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 flex flex-col items-center" id="testimonials">
      <h1 className="heading mb-12">Testimonials</h1>
      {testimonials.map(({ id, quote, title }) => (
        <div className="w-full flex justify-center" key={id}>
          <div
            className="w-[80vw] sm:w-2xl h-[30vh] sm:h-[40vh] 
                        bg-[#13162d] rounded-3xl
                        flex flex-col items-center justify-center
                        text-center px-6
                        border border-white/10 shadow-lg"
          >
            <p className="lg:text-lg md:text-base text-sm font-light max-w-2xl">
              {quote}
            </p>
            <span className="mt-6 text-xs lg:text-sm text-blue-300 font-bold">
              {title}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
