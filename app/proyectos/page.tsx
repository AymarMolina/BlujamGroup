"use client";

import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, Server, ShieldCheck, Zap, Cpu, ChevronLeft, ExternalLink, ChevronRight, X, MoveLeft } from 'lucide-react';
import { gsap } from 'gsap';

const CATEGORIES = ["TODOS", "INFRAESTRUCTURA", "SOFTWARE", "SEGURIDAD", "AUTOMATIZACIÓN"];

const PROJECTS = [
  // INFRAESTRUCTURA
  { id: 1, category: 'INFRAESTRUCTURA', service: 'Cableado Estructurado', title: 'Peinado y Ordenamiento de Racks', img: '/icons/servicios/infra/proyecto-infra-3.webp', url: '/servicios/infraestructura-y-soporte' },
  { id: 2, category: 'INFRAESTRUCTURA', service: 'Energía y UPS', title: 'Instalación de Sistema de Respaldo Crítico', img: '/icons/servicios/infra/proyecto-infra-4.webp', url: '/servicios/infraestructura-y-soporte' },
  { id: 3, category: 'INFRAESTRUCTURA', service: 'Mantenimiento Preventivo y Correctivo', title: 'Optimización de Datacenter Local', img: '/icons/servicios/infra/proyecto-infra-5.webp', url: '/servicios/infraestructura-y-soporte' },
  
  // SOFTWARE - WEB & E-COMMERCE
  { id: 4, category: 'SOFTWARE', service: 'Web & E-commerce', title: 'Marylalaland Store', img: '/icons/servicios/soft/proyecto-software-1.webp', url: '/servicios/desarrollo-de-software?servicio=web-ecommerce' },
  { id: 5, category: 'SOFTWARE', service: 'Web & E-commerce', title: 'Corporativo Evtcorp', img: '/icons/servicios/soft/proyecto-software-2.webp', url: '/servicios/desarrollo-de-software?servicio=web-ecommerce' },
  { id: 6, category: 'SOFTWARE', service: 'Web & E-commerce', title: 'Portal 7 Bee', img: '/icons/servicios/soft/proyecto-software-3.webp', url: '/servicios/desarrollo-de-software?servicio=web-ecommerce' },
  
  // SOFTWARE - APPS
  { id: 7, category: 'SOFTWARE', service: 'Apps Móviles', title: 'App de Delivery Express', img: '/icons/servicios/soft/proyecto-software-4.webp', url: '/servicios/desarrollo-de-software?servicio=mobile' },
  { id: 8, category: 'SOFTWARE', service: 'Apps Móviles', title: 'Fintech Wallet Digital', img: '/icons/servicios/soft/proyecto-software-5.webp', url: '/servicios/desarrollo-de-software?servicio=mobile' },
  { id: 9, category: 'SOFTWARE', service: 'Apps Móviles', title: 'Tracking Logístico Real-time', img: '/icons/servicios/soft/proyecto-software-6.webp', url: '/servicios/desarrollo-de-software?servicio=mobile' },
  
  // SOFTWARE - SISTEMAS A MEDIDA
  { id: 10, category: 'SOFTWARE', service: 'Sistemas a Medida', title: 'Gestión Integral de Gimnasios', img: '/icons/servicios/soft/proyecto-software-7.webp', url: '/servicios/desarrollo-de-software?servicio=medida' },
  { id: 11, category: 'SOFTWARE', service: 'Sistemas a Medida', title: 'Control de Reservas Hoteleras', img: '/icons/servicios/soft/proyecto-software-8.webp', url: '/servicios/desarrollo-de-software?servicio=medida' },
  { id: 12, category: 'SOFTWARE', service: 'Sistemas a Medida', title: 'ERP para Talleres Mecánicos', img: '/icons/servicios/soft/proyecto-software-8.webp', url: '/servicios/desarrollo-de-software?servicio=medida' },

  // SEGURIDAD
  { id: 13, category: 'SEGURIDAD', service: 'Implementación de SGSI (ISO 27001)', title: 'Certificación de Seguridad Bancaria', img: '/icons/servicios/segu/proyecto-segu-1.webp', url: '/servicios/seguridad-de-la-informacion' },
  { id: 14, category: 'SEGURIDAD', service: 'Gobierno de TI', title: 'Marco Normativo para Entidad Pública', img: '/icons/servicios/segu/proyecto-segu-2.webp', url: '/servicios/seguridad-de-la-informacion' },
  { id: 15, category: 'SEGURIDAD', service: 'Auditoría de Sistemas', title: 'Evaluación de Infraestructura Crítica', img: '/icons/servicios/segu/proyecto-segu-3.webp', url: '/servicios/seguridad-de-la-informacion' },
  { id: 16, category: 'SEGURIDAD', service: 'Gestión de Vulnerabilidades', title: 'Pentesting de Aplicaciones Web', img: '/icons/servicios/segu/proyecto-segu-4.webp', url: '/servicios/seguridad-de-la-informacion' },

  // AUTOMATIZACIÓN
  { id: 17, category: 'AUTOMATIZACIÓN', service: 'RPA (Automatización de Procesos)', title: 'Automatización de Facturación Masiva', img: '/icons/servicios/automa/proyecto-auto-1.webp', url: '/servicios/automatizacion-e-ia?servicio=rpa' },
  { id: 18, category: 'AUTOMATIZACIÓN', service: 'Chatbots y Asistentes Virtuales', title: 'Asistente IA para Atención al Cliente', img: '/icons/servicios/automa/proyecto-auto-2.webp', url: '/servicios/automatizacion-e-ia?servicio=chatbots' },
  { id: 19, category: 'AUTOMATIZACIÓN', service: 'IA Aplicada al Negocio', title: 'Análisis Predictivo de Ventas con ML', img: '/icons/servicios/automa/proyecto-auto-3.webp', url: '/servicios/automatizacion-e-ia?servicio=ia-aplicada' },
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
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const gridRef = useRef(null);

  const filteredProjects = filter === "TODOS" ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  const nextProject = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length);
    }
  };

  const prevProject = () => {
    if (selectedProjectIndex !== null) {
      setSelectedProjectIndex((selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextProject();
    if (distance < -50) prevProject();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectIndex(null);
      if (e.key === "ArrowRight") nextProject();
      if (e.key === "ArrowLeft") prevProject();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProjectIndex]);

  const currentProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <main className="bg-[#000A15] text-white min-h-screen pt-40 pb-32 px-6 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="header-text">
          <h2 className="text-[#ff7a00] text-[10px] tracking-[10px] uppercase mb-4 font-bold" style={{ fontFamily: "var(--font-michroma)" }}>// Visual Portfolio</h2>
          <h1 className="text-4xl md:text-6xl font-bold uppercase" style={{ fontFamily: "var(--font-michroma)" }}>GALERÍA DE <span className="text-[#ff7a00]">PROYECTOS</span></h1>
        </div>

        <div className="flex flex-wrap justify-center bg-white/5 backdrop-blur-xl border border-white/10 p-1 rounded-3xl md:rounded-full">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 md:px-6 py-2 rounded-full text-[9px] font-bold uppercase transition-all tracking-widest ${filter === cat ? 'bg-[#ff7a00] text-black' : 'text-white hover:text-[#ff7a00]'}`} style={{ fontFamily: "var(--font-michroma)" }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div ref={gridRef} className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProjectIndex(index)}
            className="project-card cursor-pointer block relative group overflow-hidden rounded-[30px] border border-white/5 break-inside-avoid bg-white/5"
          >
            <div className={`relative w-full overflow-hidden ${index % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
              <Image 
                src={project.img} 
                alt={project.service} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0} 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
              <div className="w-full h-full bg-[#D9D9D9]/10 backdrop-blur-[20px] border border-white/20 rounded-[25px] flex flex-col items-center justify-center text-center p-4 transform scale-90 group-hover:scale-100 transition-transform duration-500">
                <div className="mb-4 bg-[#ff7a00] p-2 rounded-full text-black">
                  {getCategoryIcon(project.category)}
                </div>
                <p className="text-[#ff7a00] text-[10px] uppercase tracking-[4px] mb-1 font-bold" style={{ fontFamily: "var(--font-michroma)" }}>{project.category}</p>
                <h3 className="text-white text-base font-bold uppercase leading-tight" style={{ fontFamily: "var(--font-rajdhani)" }}>{project.title}</h3>
                <p className="text-white/60 text-[12px] uppercase mt-1" style={{ fontFamily: "var(--font-michroma)" }}>{project.service}</p>
                <div className="mt-2 flex items-center gap-2 text-white">
                  <span className="text-[10px] tracking-widest uppercase" style={{ fontFamily: "var(--font-michroma)" }}>Ver Galería +</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {currentProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button onClick={() => setSelectedProjectIndex(null)} className="absolute top-6 right-6 text-white/50 hover:text-[#ff7a00] p-2 z-[120]">
            <X size={32} />
          </button>

          <button onClick={prevProject} className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#ff7a00] transition-colors z-[110]">
            <ChevronLeft size={60} />
          </button>
          <button onClick={nextProject} className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#ff7a00] transition-colors z-[110]">
            <ChevronRight size={60} />
          </button>

          <div className="w-full max-w-6xl h-full lg:h-auto flex flex-col justify-evenly lg:grid lg:grid-cols-12 gap-6 lg:gap-12 p-6 md:p-12 overflow-y-auto lg:overflow-visible">
            
            <div className="lg:col-span-8 relative aspect-[4/3] lg:aspect-auto lg:h-[65vh] rounded-3xl overflow-hidden border border-white/10">
              <Image 
                src={currentProject.img} 
                alt={currentProject.title} 
                fill 
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-contain lg:object-cover bg-[#000d1a]"
              />
              
              <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 px-4 py-2 rounded-full border border-white/20 animate-pulse">
                <MoveLeft size={14} className="text-[#ff7a00]" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Desliza</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-6 pb-12 lg:pb-0">
              <div className="text-center lg:text-left">
                <span className="text-[#ff7a00] text-[10px] tracking-[5px] font-bold uppercase" style={{ fontFamily: "var(--font-michroma)" }}>
                  {currentProject.category}
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white mt-3" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  {currentProject.title}
                </h2>
                <p className="text-white/60 mt-4 text-sm font-medium leading-relaxed" style={{ fontFamily: "var(--font-michroma)" }}>
                  {currentProject.service}
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link 
                  href={currentProject.url}
                  className="inline-flex items-center gap-3 bg-[#ff7a00] text-black font-bold py-4 px-10 rounded-full hover:bg-white transition-all transform active:scale-95"
                  style={{ fontFamily: "var(--font-michroma)", fontSize: '11px' }}
                >
                  VER MÁS DETALLES <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 text-center">
        <p className="text-white uppercase tracking-[5px] text-[10px] mb-8" style={{ fontFamily: "var(--font-michroma)" }}>ALGUNOS DE NUESTOS PROYECTOS</p>
        <div className="h-[1px] w-20 bg-[#ff7a00] mx-auto"></div>
      </div>
    </main>
  );
}