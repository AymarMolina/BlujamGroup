"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Globe from "@/components/ui/globecomponent";
import { OrbitingCirclesDemo } from "../../ui/inicio/orbitingdemo";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText);
}

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const orbitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const splitTitle = new SplitText(titleRef.current, { type: "chars, words" });
      
      const splitSubtitle = new SplitText(subtitleRef.current, { type: "words, lines" });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        splitTitle.chars,
        { 
          opacity: 0, 
          y: 50, 
          rotateX: -90 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          stagger: 0.02, 
          duration: 1.2 
        }
      )
      .fromTo(
        orbitRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)" },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=1"
      )
      .fromTo(
        splitSubtitle.words,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 1 },
        "-=0.5"
      );

      gsap.to(buttonRef.current, {
        y: -5,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-auto min-h-[120vh] md:h-[140vh] overflow-hidden bg-[#000A15] font-barlow">
      
      <div
        className="absolute inset-0 z-0"
        style={{ background: "radial-gradient(ellipse at center, #1A518F 0%, #000A15 70%)" }}
      />

      <div className="absolute bottom-[-30vh] md:bottom-[-75vh] w-[200vw] md:w-[150vw] h-[80vh] md:h-[150vh] left-1/2 -translate-x-1/2  pointer-events-none z-[1]">
        <Globe />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] 2xl:max-w-[1650px] mx-auto h-full flex px-6 md:px-16 flex-col justify-center gap-10 md:gap-15 pt-50 pb-16 md:pt-0 md:pb-0">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-5">
          <div className="w-full md:flex-none md:max-w-[650px] 2xl:max-w-[850px] flex flex-col items-center md:items-start 2xl:max-w-[850px]">
            <h1
              ref={titleRef}
              className="text-white font-normal leading-tight tracking-tight mb-7 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl text-center md:text-left"
              style={{ fontFamily: "var(--font-michroma)", perspective: "1000px" }}
            >
              Arquitectura digital de élite para empresas con visión de futuro.
            </h1>
            <button 
                onClick={() =>
                  window.open(
                    `https://wa.me/51970478503?text=${encodeURIComponent("Hola, me gustaría contactarlos para más información.")}`,
                    "_blank"
                  )
                }
              ref={buttonRef}
              className="bg-[#F07C20] text-white border-none rounded-[6px] px-15 py-3 text-lg font-medium cursor-pointer hover:bg-[#d96d18] transition-all shadow-[0_0_20px_rgba(240,124,32,0.3)]"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              Contactar
            </button>
          </div>

          <div ref={orbitRef} className="w-full flex justify-center md:flex-1 md:max-w-[680px]">
            <OrbitingCirclesDemo/>
          </div>
        </div>

        <div className="text-center max-w-6xl mx-auto">
          <p
            ref={subtitleRef}
            className="m-0 text-white font-normal leading-relaxed text-2xl sm:text-3xl md:text-5xl"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            Tecnología pensada para empresas que quieren{" "}
            <span
              className="text-[#F07C20] font-bold tracking-widest text-4xl sm:text-5xl md:text-7xl"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              CRECER
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}