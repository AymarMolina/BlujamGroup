"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/constants/services";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServiciosPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Header
      gsap.from(".header-tag", {
        y: -20,
        opacity: 0,
        duration: 0.2,
        ease: "expo.out",
      });
      gsap.from(".header-title", {
        x: -40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "expo.out",
      });

      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        stagger: 0.15,
        duration: 0.3,
        ease: "power4.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: ".cards-grid",
          start: "top 85%",
        }
      });

      gsap.from(".footer-line", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer-line",
          start: "top 95%",
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-[#000A15] min-h-screen pt-44 pb-32 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto" ref={containerRef}>
        
        <div className="mb-20">
          <p 
            style={{ fontFamily: "var(--font-rajdhani)" }} 
            className="header-tag text-[#FE7F0E] font-bold tracking-[8px] mb-4 text-sm uppercase"
          >
            PORTAFOLIO DE SOLUCIONES
          </p>
          <h1 
            style={{ fontFamily: "var(--font-michroma)" }} 
            className="header-title text-white text-3xl md:text-5xl border-l-4 border-[#FE7F0E] pl-8 uppercase leading-tight"
          >
            NUESTROS <span className="text-[#FE7F0E]">SERVICIOS</span>
          </h1>
        </div>

        <div className="cards-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
          {SERVICE_CATEGORIES.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/servicios/${cat.slug}`}
              className="service-card group relative h-[450px] overflow-hidden border border-white/5 bg-white/[0.02] p-12 flex flex-col justify-end transition-all duration-500 hover:border-[#FE7F0E]/40"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-70 transition-all duration-1000 ease-out" 
                />
              </div>

              <div className="relative z-10">
                <h2 
                  style={{ fontFamily: "var(--font-michroma)" }} 
                  className="text-white text-2xl mb-6 group-hover:text-[#FE7F0E] transition-colors duration-500 uppercase tracking-wider leading-snug"
                >
                  {cat.title}
                </h2>

                <div 
                  style={{ fontFamily: "var(--font-michroma)" }} 
                  className="flex items-center gap-6 text-[#FE7F0E] text-[10px] tracking-[3px] font-bold"
                >
                  EXPLORAR ESPECIALIDADES 
                  <span className="w-12 h-[1px] bg-[#FE7F0E] group-hover:w-20 transition-all duration-500"></span>
                </div>
              </div>

              <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-white/10 group-hover:border-[#FE7F0E]/50 transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}