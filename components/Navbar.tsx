"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Navbar() {
  const navRef = useRef(null);
  const leftLineRef = useRef(null);
  const rightLineRef = useRef(null);
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        .fromTo([leftLineRef.current, rightLineRef.current],
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1.5, stagger: 0.2 },
          "-=0.8"
        )
        .from(".nav-link", {
          opacity: 0,
          y: -10,
          stagger: 0.1,
          duration: 0.8,
        }, "-=1");

      const showAnim = gsap.from(navRef.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.out"
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          setIsScrolled(self.scroll() > 50);
          if (self.direction === 1) {
            showAnim.reverse();
            setActiveMenu(null); 
          } else {
            showAnim.play();   
          }
        }
      });

    }, navRef);
    return () => ctx.revert();
  }, []);
  const mainLinks = [
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "PROYECTOS", href: "/proyectos" },
    { name: "CONTACTO", href: "/contacto" },
  ];
  const menuServicios = [
    {
      title: "SEGURIDAD & GOBIERNO",
      links: [
        { name: "ISO 27001", href: "/servicios/seguridad-de-la-informacion" },
        { name: "Gobierno de TI", href: "/servicios/seguridad-de-la-informacion" },
        { name: "Auditoría de Sistemas", href: "/servicios/seguridad-de-la-informacion" },
      ]
    },
    {
      title: "SOFTWARE & DIGITAL",
      links: [
        { name: "Desarrollo Web", href: "/servicios/desarrollo-de-software" },
        { name: "Sistemas a Medida", href: "/servicios/desarrollo-de-software" },
      ]
    },
    {
      title: "IA & AUTOMATIZACIÓN",
      links: [
        { name: "Procesos RPA", href: "/servicios/automatizacion-e-ia" },
        { name: "Chatbots", href: "/servicios/automatizacion-e-ia" },
      ]
    }
  ];

  const menuInfra = [
    {
      title: "SOPORTE & GESTIÓN",
      links: [
        { name: "Outsourcing TI", href: "/servicios/infraestructura-y-soporte" },
        { name: "Administracion", href: "/servicios/infraestructura-y-soporte" },
        { name: "Cableado Estructurado", href: "/servicios/infraestructura-y-soporte" },
        { name: "Energia y continuidad", href: "/servicios/infraestructura-y-soporte" },
        { name: "Mantenimiento", href: "/servicios/infraestructura-y-soporte" },
      ]
    }
  ];


  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ${
        isScrolled || activeMenu ? "bg-[#000A15]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1650px] mx-auto px-10 relative">
        <div className={`flex items-center justify-between relative transition-all duration-500 ${
          isScrolled ? "h-24" : "h-32"
        }`}>

          <div className="flex gap-12 flex-1 justify-start">
            <button 
              onMouseEnter={() => setActiveMenu('infra')}
              className="nav-link text-white text-[10px] 2xl:text-[11px] tracking-[2px] font-michroma hover:text-[#F07C20] transition-colors duration-300"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              INFRAESTRUCTURA & SOPORTE TI
            </button>
            <button 
              onMouseEnter={() => setActiveMenu('servicios')}
              className="nav-link text-white text-[10px] 2xl:text-[11px] tracking-[2px] font-michroma hover:text-[#F07C20] transition-colors duration-300"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              SERVICIOS TI
            </button>
          </div>

          <div className="flex-none px-12 relative z-10">
            <Link href="/">
              <Image
                src="/icons/logos/blujamcom.png"
                alt="Blujam Group Logo"
                width={isScrolled ? 180 : 220} 
                height={70}
                className="cursor-pointer transition-all duration-500"
                priority
              />
            </Link>
          </div>

          <div className="flex gap-12 flex-1 justify-end">
            {mainLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href} // <-- Aquí usamos la ruta real
                className="nav-link text-white text-[10px] 2xl:text-[11px] tracking-[2px] font-michroma hover:text-[#FE7F0E] transition-colors duration-300"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div ref={leftLineRef} className="absolute bottom-0 left-0 h-[1px] w-[calc(50%-130px)] origin-left" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)" }} />
          <div ref={rightLineRef} className="absolute bottom-0 right-0 h-[1px] w-[calc(50%-130px)] origin-right" style={{ background: "linear-gradient(to left, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)" }} />
        </div>

        <div 
          className={`absolute left-0 top-full w-full bg-[#000A15] border-t border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
            activeMenu ? "max-h-[450px] opacity-100 py-10" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-3 gap-8">
            {(activeMenu === 'servicios' ? menuServicios : activeMenu === 'infra' ? menuInfra : []).map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-[#FE7F0E] font-michroma text-[12px] tracking-[3px] mb-6 uppercase"style={{ fontFamily: "var(--font-michroma)" }}>
                  {section.title}
                </h4>
                <div className="flex flex-col gap-3">
                    {section.links.map((link, i) => (
                    <Link      key={i} 
                        href={link.href}  
                        onClick={() => setActiveMenu(null)}
                       className="text-white/90 hover:text-white text-[10px] tracking-widest font-michroma transition-all duration-300 hover:translate-x-1"
                       style={{ fontFamily: "var(--font-michroma)" }}
                    >
                    {link.name}
                    </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}