"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/constants/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [current]);

  const { text, initials, company, role } = testimonials[current];

  return (
    <section className="py-32 px-6 relative text-center">
      <h2
        className="text-[#ff7a00] text-sm tracking-[4px] mb-5 uppercase"
        style={{ fontFamily: "var(--font-michroma)" }}
      >
        // Clientes Satisfechos
      </h2>
      <p
        className="text-4xl md:text-7xl text-white italic mb-20"
        style={{ fontFamily: "var(--font-rajdhani)" }}
      >
        Confianza en cada paso.
      </p>

      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 p-12 rounded-3xl backdrop-blur-sm">
        <p
          className="text-2xl md:text-4xl text-white mb-12 italic leading-relaxed transition-opacity duration-300"
          style={{
            fontFamily: "var(--font-rajdhani)",
            opacity: fading ? 0 : 1,
          }}
        >
          "{text}"
        </p>

        <div
          className="flex items-center justify-center gap-5 border-t border-white/10 pt-10 transition-opacity duration-300"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div
            className="w-16 h-16 bg-[#ff7a00] rounded-full flex items-center justify-center font-bold text-black text-2xl flex-shrink-0"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            {initials}
          </div>
          <div className="text-left">
            <p
              className="font-bold text-[#ff7a00] text-xl uppercase"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              {company}
            </p>
            <p
              className="text-white uppercase tracking-widest text-sm"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              {role}
            </p>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#ff7a00] w-5" : "bg-white/20"
            }`}
            aria-label={`Testimonio ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}