"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Anderson",
    company: "Global Imports Ltd.",
    review:
      "VelnorixGlobal has transformed the way we manage international shipments. Their tracking platform is accurate, deliveries arrive on schedule, and their customer support is always responsive.",
  },
  {
    name: "Sarah Johnson",
    company: "Nova Retail Group",
    review:
      "From urgent deliveries to international freight, every shipment has been handled professionally. We finally have a logistics partner we can completely rely on.",
  },
  {
    name: "David Chen",
    company: "Horizon Technologies",
    review:
      "The real-time tracking experience gives our customers complete confidence. VelnorixGlobal continues to exceed our expectations with every shipment.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[#1E3A8A]">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-6xl">
            Trusted by businesses
            <br />
            around the world.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every shipment represents trust. Here's what our clients say about
            working with VelnorixGlobal.
          </p>
        </div>

        {/* Testimonial */}

        <div className="relative mt-20 overflow-hidden rounded-[36px] border border-slate-200 bg-slate-50 p-10 shadow-xl md:p-16">
          <Quote
            size={70}
            className="absolute right-10 top-10 text-[#1E3A8A]/10"
          />

          <div key={current} className="animate-[fade_0.6s_ease]">
            <div className="mb-8 flex justify-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={22}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="mx-auto max-w-3xl text-center text-2xl font-medium leading-relaxed text-slate-700 md:text-3xl">
              "{testimonials[current].review}"
            </p>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                {testimonials[current].name}
              </h3>

              <p className="mt-2 text-slate-500">
                {testimonials[current].company}
              </p>
            </div>
          </div>

          {/* Navigation */}

          <button
            onClick={previous}
            className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition hover:bg-[#1E3A8A] hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow transition hover:bg-[#1E3A8A] hover:text-white"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Pagination */}

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                current === index ? "w-10 bg-[#1E3A8A]" : "w-3 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
