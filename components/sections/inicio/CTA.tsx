"use client"; // Necesario para GSAP en Next.js App Router

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CallToAction = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const scannerRef = useRef(null);

  useEffect(() => {
    // Definimos el contexto de GSAP para animaciones seguras en React
    const ctx = gsap.context(() => {
      
      // 1. Animación del Escáner (Haz de Luz)
      // Hace que un haz de luz sutil recorra la trama
      gsap.fromTo(
        scannerRef.current,
        { x: "-100%" }, // Empieza fuera de la izquierda
        {
          x: "100%", // Termina fuera de la derecha
          duration: 3.5, // Tiempo de recorrido
          ease: "power2.inOut", // Curva de aceleración
          repeat: -1, // Repetición infinita
          yoyo: true, // Vuelve en la dirección opuesta
        }
      );

      // 2. Animación de Opacidad Sutil de la Trama
      // Hace que la cuadrícula "respire" suavemente
      gsap.fromTo(
        gridRef.current,
        { opacity: 0.1 },
        {
          opacity: 0.18,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        }
      );

    }, sectionRef);

    // Limpieza de animaciones al desmontar
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#007bff] py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 80%)", // Suaviza bordes
        }}
      />

      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FE7F0E]/10 blur-[120px] rounded-full z-0" 
      />

      <div className="relative z-10">
        <h2
          className="text-white text-4xl md:text-6xl lg:text-7xl mb-10 tracking-wider uppercase max-w-5xl"
          style={{ fontFamily: 'var(--font-michroma), sans-serif' }}
        >
          ¿BUSCAS UNA SOLUCION?
        </h2>

        <button
          className="bg-[#ff7a00] hover:bg-[#e66e00] text-white text-lg md:text-xl font-bold py-4 px-12 rounded-md transition-all duration-300 active:scale-95 uppercase shadow-xl hover:shadow-[#ff7a00]/30"
          style={{ fontFamily: 'var(--font-rajdhani), sans-serif' }}
        >
          CONTACTAR AHORA
        </button>
      </div>

    </section>
  );
};

export default CallToAction;