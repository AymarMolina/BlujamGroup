"use client";

import React, { useState, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Server, ShieldCheck, Zap, Maximize2, Cpu } from 'lucide-react';
import { gsap } from 'gsap';

const CATEGORIES = ["TODOS", "INFRAESTRUCTURA", "SOFTWARE", "SEGURIDAD", "AUTOMATIZACIÓN"];

const PROJECTS = [
  { id: 1, category: 'INFRAESTRUCTURA', service: 'Outsourcing y Soporte TI', img: '/icons/servicios/infra/infraestructura-ti-soporte-tecnico-empresas.webp', url: '/servicios/infraestructura-y-soporte' },
  { id: 2, category: 'INFRAESTRUCTURA', service: 'Infraestructura TI', img: '/icons/servicios/infra/infraestructura-ti-soporte-tecnico-empresas.webp', url: '/servicios/infraestructura-y-soporte' },
  { id: 3, category: 'INFRAESTRUCTURA', service: 'Cableado Estructurado', img: '/icons/servicios/infra/infraestructura-ti-soporte-tecnico-empresas.webp', url: '/servicios/infraestructura-y-soporte' },
  { id: 4, category: 'INFRAESTRUCTURA', service: 'Energía y UPS', img: '/icons/servicios/infra/infraestructura-ti-soporte-tecnico-empresas.webp', url: '/servicios/infraestructura-y-soporte' },
  { id: 5, category: 'SOFTWARE', service: 'Web & E-commerce', img: '/icons/servicios/soft/desarrollo-software-soluciones-digitales-empresas.webp', url: '/servicios/desarrollo-de-software' },
  { id: 6, category: 'SOFTWARE', service: 'Apps Móviles', img: '/icons/servicios/soft/desarrollo-software-soluciones-digitales-empresas.webp', url: '/servicios/desarrollo-de-software' },
  { id: 7, category: 'SOFTWARE', service: 'Sistemas a Medida', img: '/icons/servicios/soft/desarrollo-software-soluciones-digitales-empresas.webp', url: '/servicios/desarrollo-de-software' },
  { id: 8, category: 'SEGURIDAD', service: 'ISO 27001 & Ciberseguridad', img: '/icons/servicios/segu/ciberseguridad-seguridad-informacion-empresas.webp', url: '/servicios/seguridad-de-la-informacion' },
  { id: 9, category: 'SEGURIDAD', service: 'Gobierno de TI', img: '/icons/servicios/segu/ciberseguridad-seguridad-informacion-empresas.webp', url: '/servicios/seguridad-de-la-informacion' },
  { id: 10, category: 'AUTOMATIZACIÓN', service: 'Inteligencia Artificial', img: '/icons/servicios/automa/automatizacion-inteligencia-artificial-empresas.webp', url: '/servicios/automatizacion-e-ia' },
  { id: 11, category: 'AUTOMATIZACIÓN', service: 'RPA & Bots', img: '/icons/servicios/automa/automatizacion-inteligencia-artificial-empresas.webp', url: '/servicios/automatizacion-e-ia' },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "SOFTWARE": return <Globe size={24} />;
    case "INFRAESTRUCTURA": return <Server size={24} />;
    case "SEGURIDAD": return <ShieldCheck size={24} />;
    case "AUTOMATIZACIÓN": return <Cpu size={24} />;
    default: return <Zap size={24} />;
  }
};

export default function GaleriaProyectos() {
  const [filter, setFilter] = useState("TODOS");
  const gridRef = useRef(null);

  const filteredProjects = filter === "TODOS" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  // Animación GSAP al cambiar el filtro
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".project-card", 
        { 
          opacity: 0, 
          y: 20, 
          scale: 0.95 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.5, 
          stagger: 0.1, 
          ease: "power2.out",
          clearProps: "all" 
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [filter]);

  return (
    <main className="bg-[#000A15] text-white min-h-screen pt-40 pb-32 px-6 overflow-hidden">
      
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="header-text">
          <h2 
            className="text-[#ff7a00] text-[10px] tracking-[10px] uppercase mb-4 font-bold"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            // Visual Portfolio
          </h2>
          <h1 
            className="text-4xl md:text-6xl font-bold uppercase"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            GALERÍA DE <span className="text-[#ff7a00]">PROYECTOS</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-3xl md:rounded-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[9px] font-bold uppercase transition-all tracking-widest ${
                filter === cat ? 'bg-[#ff7a00] text-black' : 'text-white hover:text-[#ff7a00]'
              }`}
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid con Referencia para GSAP */}
      <div 
        ref={gridRef}
        className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {filteredProjects.map((project) => (
          <Link 
            href={project.url} 
            key={project.id}
            className="project-card block relative group overflow-hidden rounded-[30px] border border-white/5 break-inside-avoid  bg-white/5"
          >
            <Image 
              src={project.img}
              alt={project.service}
              width={800}
              height={1000}
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
              <div className="w-full h-full bg-[#D9D9D9]/10 backdrop-blur-[20px] border border-white/20 rounded-[25px] flex flex-col items-center justify-center text-center p-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                
                <div className="mb-4 bg-[#ff7a00] p-3 rounded-full text-black shadow-[0_0_20px_rgba(255,122,0,0.5)]">
                  {getCategoryIcon(project.category)}
                </div>
                
                <p 
                  className="text-[#ff7a00] text-[10px] uppercase tracking-[4px] mb-1 font-bold"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  {project.category === "SEGURIDAD" ? "SEGURIDAD TI" : project.category}
                </p>
                <h3 
                  className="text-white text-2xl font-bold uppercase leading-tight"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {project.service}
                </h3>

                <div className="mt-6 flex items-center gap-2 text-white/70">
                   <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-michroma)" }}>Ver Detalles</span>
                   <Maximize2 size={16} className="group-hover:text-[#ff7a00] transition-colors" />
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 group-hover:opacity-0 transition-opacity">
                <span className="text-[9px] text-white uppercase tracking-widest font-bold" style={{ fontFamily: "var(--font-michroma)" }}>
                    {project.id < 10 ? `0${project.id}` : project.id}
                </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-500 uppercase tracking-[5px] text-[10px] mb-8" style={{ fontFamily: "var(--font-michroma)" }}>
          ALGUNOS DE NUESTOS PROYECTOS
        </p>
        <div className="h-[1px] w-20 bg-[#ff7a00] mx-auto"></div>
      </div>

    </main>
  );
}