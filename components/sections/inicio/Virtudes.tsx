"use client";
import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    title: "Innovación Tecnológica",
    tags: ["Creatividad", "Futuro"],
    desc: "Impulsamos la transformación de su negocio mediante soluciones creativas y disruptivas. En Blujam Group, convertimos las tendencias tecnológicas del mañana en herramientas hoy, asegurando que su empresa no solo se adapte al cambio, sino que lidere el futuro de su sector.",
    img: "/icons/servicios/vir1.png",
  },
  {
    title: "Seguridad Integral",
    tags: ["Protección", "Confianza"],
    desc: "Garantizamos la protección de sus activos digitales y físicos con soluciones de seguridad de vanguardia. Nuestro enfoque integral abarca desde ciberseguridad hasta protocolos de gestión de riesgos, brindando la tranquilidad que su empresa necesita.",
    img: "/icons/servicios/serv2.webp",
  },
  {
    title: "Experiencia y Confiabilidad",
    tags: ["Trayectoria", "Solidez"],
    desc: "Con años de experiencia en el mercado, hemos construido una reputación basada en resultados tangibles y relaciones duraderas. Nuestra solidez como empresa es el respaldo que nuestros clientes necesitan para tomar decisiones estratégicas.",
    img: "/icons/servicios/serv3.webp",
  },
  {
    title: "Enfoque al Cliente",
    tags: ["Cercanía", "Atención"],
    desc: "Cada cliente es único y merece una atención personalizada. En Blujam Group ponemos al cliente en el centro de cada decisión, ofreciendo acompañamiento cercano, respuesta ágil y soluciones a medida que generan valor real.",
    img: "/icons/servicios/serv4.webp",
  },
];

const words = ["BLUJAMGROUP", "BLUJAMGROUP", "BLUJAMGROUP", "BLUJAMGROUP", "BLUJAMGROUP"];

const VirtudesMarquee = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [prevCardIdx, setPrevCardIdx] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("down");
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevCardRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const stickyH = window.innerHeight;
      const scrolled = -rect.top;
      const total = sectionH - stickyH;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const idx = Math.min(cards.length - 1, Math.floor(progress * cards.length));

      if (idx !== prevCardRef.current) {
        const previous = prevCardRef.current;
        const dir = idx > previous ? "down" : "up";
        prevCardRef.current = idx;
        setDirection(dir);
        setPrevCardIdx(previous);
        setCurrentCard(idx);
        setIsAnimating(true);
        setTimeout(() => {
          setPrevCardIdx(null);
          setIsAnimating(false);
        }, 600);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        @keyframes slideUpIn {
          0%   { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        @keyframes slideDownIn {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        .card-slide-up {
          animation: slideUpIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .card-slide-down {
          animation: slideDownIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        /* ── Solo responsive (< 1024px) ── */

        /* Card: de horizontal a vertical en mobile/tablet */
        @media (max-width: 1023px) {
          .virtud-grid {
            display: flex !important;
            flex-direction: column !important;
            padding: 1.25rem !important;
            gap: 1rem !important;
            overflow-y: auto;
          }
          .virtud-img {
            width: 100% !important;
            height: 200px !important;
            max-height: 200px !important;
            flex-shrink: 0;
          }
          .virtud-text h2 {
            font-size: 1.35rem !important;
            margin-bottom: 0.5rem !important;
          }
          .virtud-text .virtud-tags {
            margin-bottom: 0.5rem !important;
            font-size: 0.7rem !important;
          }
          .virtud-text .virtud-desc {
            font-size: 0.82rem !important;
            margin-bottom: 0.75rem !important;
            /* limitar líneas en mobile para que no se corte el botón */
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .virtud-cta {
            margin-top: 0 !important;
          }
        }

        /* Tablet intermedia (768–1023px): imagen más alta */
        @media (min-width: 768px) and (max-width: 1023px) {
          .virtud-img {
            height: 260px !important;
            max-height: 260px !important;
          }
          .virtud-text h2 {
            font-size: 1.75rem !important;
          }
          .virtud-text .virtud-desc {
            font-size: 0.95rem !important;
            -webkit-line-clamp: 5;
          }
        }

        /* Card container height en mobile/tablet */
        @media (max-width: 1023px) {
          .virtud-card-container {
            margin: 0 2rem;
          }
        }
      `}} />

      <div ref={sectionRef} style={{ height: `${(cards.length + 1) * 100}vh`, position: "relative" }}>
        <div className="sticky top-0 h-[100vh] overflow-hidden flex items-center justify-center bg-[#000A15]">

          <div className="absolute animate-scroll z-0">
            {[1, 2].map((loop) => (
              <div key={loop} className="flex items-center">
                {words.map((word, index) => (
                  <React.Fragment key={index}>
                    <span
                      className="text-white text-5xl md:text-6xl 2xl:text-[7rem] font-light tracking-[0.1em] px-10 uppercase whitespace-nowrap"
                      style={{ fontFamily: "var(--font-scheherazade), sans-serif" }}
                    >
                      {word}
                    </span>
                    <div className="w-12 h-11 border border-blue-500 rotate-45 mx-1 flex-shrink-0" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>

          <div className="virtud-card-container relative z-10 w-full max-w-6xl h-[60vh] overflow-hidden">

            {prevCardIdx !== null && isAnimating && (
              <div
                className="absolute inset-0 flex items-center justify-center
                  bg-[#D9D9D9]/25 backdrop-blur-[38.8px] border border-white/10 overflow-hidden"
                style={{ zIndex: 10 }}
              >
                <CardContent card={cards[prevCardIdx]} />
              </div>
            )}

            <div
              key={`${currentCard}-${direction}`}
              className={`absolute inset-0 flex items-center justify-center
                bg-[#D9D9D9]/25 backdrop-blur-[38.8px] border border-white/10 overflow-hidden
                ${isAnimating
                  ? direction === "down" ? "card-slide-up" : "card-slide-down"
                  : ""
                }`}
              style={{ zIndex: 20 }}
            >
              <CardContent card={cards[currentCard]} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

const CardContent = ({ card }: { card: typeof cards[0] }) => (
  <div className="virtud-grid grid grid-cols-1 md:grid-cols-10 gap-12 p-12 md:p-15 w-full h-full items-center">
    <div className="virtud-img md:col-span-4 h-full max-h-[400px] md:max-h-full bg-gray-800/50 border border-white/5 overflow-hidden shadow-inner">
      <img
        src={card.img}
        className="w-full h-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
        alt={card.title}
      />
    </div>
    <div className="virtud-text md:col-span-6 flex flex-col justify-center text-left">
      <h2 className="text-white text-4xl mb-4" style={{ fontFamily: "var(--font-michroma)" }}>
        {card.title}
      </h2>
      <div className="virtud-tags flex gap-6 mb-6 text-white/90 tracking-[0.2em] text-sm font-medium">
        {card.tags.map((tag) => (
          <span key={tag} style={{ fontFamily: "var(--font-rajdhani)" }}>{tag}</span>
        ))}
      </div>
      <p className="virtud-desc text-white/70 text-lg lg:text-base leading-relaxed mb-10 max-w-3xl font-light"
        style={{ fontFamily: "var(--font-rajdhani)" }}>
        {card.desc}
      </p>
      <div className="virtud-cta mt-8 md:mt-auto">
        <button
          onClick={() =>
            window.open(
              `https://wa.me/51970478503?text=${encodeURIComponent("Hola, me gustaría contactarlos para más información.")}`,
              "_blank"
            )
          }
          className="bg-[#e85d04] hover:bg-[#ff6d0a] text-white py-2 px-10 rounded-sm font-bold w-fit uppercase transition-all shadow-[0_0_15px_rgba(232,93,4,0.3)] active:scale-95"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Contactar Ahora
        </button>
      </div>
    </div>
  </div>
);

export default VirtudesMarquee;