"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(navRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        .fromTo(
          [leftLineRef.current, rightLineRef.current],
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 1.5, stagger: 0.2 },
          "-=0.8"
        )
        .from(".nav-link", { opacity: 0, y: -10, stagger: 0.1, duration: 0.8 }, "-=1");

      const showAnim = gsap
        .from(navRef.current, { yPercent: -100, paused: true, duration: 0.3, ease: "power2.out" })
        .progress(1);

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
        },
      });
    }, navRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
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
        { name: "Implementación de SGSI (ISO 27001)", href: "/servicios/seguridad-de-la-informacion?servicio=sgsi" },
        { name: "Gobierno de TI para Sistemas de Información", href: "/servicios/seguridad-de-la-informacion?servicio=gobierno" },
        { name: "Auditoría y Evaluación de Sistemas", href: "/servicios/seguridad-de-la-informacion?servicio=auditoria" },
        { name: "Gestión de Vulnerabilidades", href: "/servicios/seguridad-de-la-informacion?servicio=vulnerabilidades" },
        { name: "Cumplimiento Normativo", href: "/servicios/seguridad-de-la-informacion?servicio=cumplimiento" },
        { name: "Capacitación en Seguridad", href: "/servicios/seguridad-de-la-informacion?servicio=capacitacion" },
      ],
    },
    {
      title: "SOFTWARE & DIGITAL",
      links: [
        { name: "Desarrollo Web y E-commerce", href: "/servicios/desarrollo-de-software?servicio=web-ecommerce" },
        { name: "Desarrollo de Aplicaciones Móviles", href: "/servicios/desarrollo-de-software?servicio=mobile" },
        { name: "Sistemas Empresariales a Medida", href: "/servicios/desarrollo-de-software?servicio=medida" },
      ],
    },
    {
      title: "IA & AUTOMATIZACIÓN",
      links: [
        { name: "Automatización de Procesos (RPA)", href: "/servicios/automatizacion-e-ia?servicio=rpa" },
        { name: "Chatbots y Asistentes Virtuales", href: "/servicios/automatizacion-e-ia?servicio=chatbots" },
        { name: "IA Aplicadas al Negocio", href: "/servicios/automatizacion-e-ia?servicio=ia-aplicada" },
      ],
    },
  ];

  const menuInfra = [
    {
      title: "SOPORTE & GESTIÓN",
      links: [
        { name: "Outsourcing y Soporte TI", href: "/servicios/infraestructura-y-soporte?servicio=outsourcing" },
        { name: "Administración de Infraestructura", href: "/servicios/infraestructura-y-soporte?servicio=administracion" },
        { name: "Cableado Estructurado", href: "/servicios/infraestructura-y-soporte?servicio=cableado" },
        { name: "Energía y Continuidad (UPS)", href: "/servicios/infraestructura-y-soporte?servicio=energia" },
        { name: "Mantenimiento Preventivo y Correctivo", href: "/servicios/infraestructura-y-soporte?servicio=mantenimiento" },
      ],
    },
  ];

  const allMobileMenus = [
    { key: "infra", label: "INFRAESTRUCTURA & SOPORTE TI", sections: menuInfra },
    { key: "servicios", label: "SERVICIOS TI", sections: menuServicios },
  ];

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setActiveMenu(null)}
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-500 ${
        isScrolled || activeMenu || mobileOpen ? "bg-[#000A15]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1650px] mx-auto px-6 lg:px-10 relative">

        <div
          className={`hidden lg:flex items-center justify-between relative transition-all duration-500 ${
            isScrolled ? "h-24" : "h-32"
          }`}
        >
          <div className="flex gap-12 flex-1 justify-start">
            <button
              onMouseEnter={() => setActiveMenu("infra")}
              className="nav-link text-white text-[10px] 2xl:text-[11px] tracking-[2px] hover:text-[#F07C20] transition-colors duration-300"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              INFRAESTRUCTURA & SOPORTE TI
            </button>
            <button
              onMouseEnter={() => setActiveMenu("servicios")}
              className="nav-link text-white text-[10px] 2xl:text-[11px] tracking-[2px] hover:text-[#F07C20] transition-colors duration-300"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              SERVICIOS TI
            </button>
          </div>

          <div className="flex-none px-12 relative z-10">
            <Link href="/">
              <img
                src="/icons/logos/blujamcom.png"
                alt="Blujam Group Logo"
                style={{ width: isScrolled ? "180px" : "220px", height: "auto" }}
                className="cursor-pointer transition-all duration-500"
              />
            </Link>
          </div>

          <div className="flex gap-12 flex-1 justify-end">
            {mainLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-white text-[10px] 2xl:text-[11px] tracking-[2px] hover:text-[#FE7F0E] transition-colors duration-300"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div
            ref={leftLineRef}
            className="absolute bottom-0 left-0 h-[1px] w-[calc(50%-130px)] origin-left"
            style={{ background: "linear-gradient(to right, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)" }}
          />
          <div
            ref={rightLineRef}
            className="absolute bottom-0 right-0 h-[1px] w-[calc(50%-130px)] origin-right"
            style={{ background: "linear-gradient(to left, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)" }}
          />
        </div>

        <div
          className={`hidden lg:block absolute left-0 top-full w-full bg-[#000A15] border-t border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
            activeMenu ? "max-h-[450px] opacity-100 py-10" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-3 gap-8">
            {(activeMenu === "servicios" ? menuServicios : activeMenu === "infra" ? menuInfra : []).map(
              (section, idx) => (
                <div key={idx} className="space-y-4">
                  <h4
                    className="text-[#FE7F0E] text-[12px] tracking-[3px] mb-6 uppercase"
                    style={{ fontFamily: "var(--font-michroma)" }}
                  >
                    {section.title}
                  </h4>
                  <div className="flex flex-col gap-3">
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={() => setActiveMenu(null)}
                        className="text-white/90 hover:text-white text-[10px] tracking-widest transition-all duration-300 hover:translate-x-1"
                        style={{ fontFamily: "var(--font-michroma)" }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between h-20">
          <Link href="/">
            <img
              src="/icons/logos/blujamcom.png"
              alt="Blujam Group Logo"
              style={{ width: "140px", height: "auto" }}
              className="cursor-pointer"
            />
          </Link>

          <button
            onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null); }}
            className="flex flex-col justify-center items-center w-10 h-10 gap-[6px] focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className="block h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{
                width: "26px",
                transform: mobileOpen ? "translateY(7.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] bg-white transition-all duration-300"
              style={{
                width: "26px",
                opacity: mobileOpen ? 0 : 1,
                transform: mobileOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] bg-white transition-all duration-300 origin-center"
              style={{
                width: "26px",
                transform: mobileOpen ? "translateY(-7.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileOpen ? "max-h-[80vh] opacity-100 pb-8" : "max-h-0 opacity-0"
          }`}
          style={{ overflowY: mobileOpen ? "auto" : "hidden" }}
        >
          <div className="border-t border-white/10 pt-6 flex flex-col gap-1">

            {allMobileMenus.map((menu) => (
              <div key={menu.key}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === menu.key ? null : menu.key)
                  }
                  className="w-full flex items-center justify-between py-3 px-1 text-white text-[10px] tracking-[2px] hover:text-[#F07C20] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  <span>{menu.label}</span>
                  <span
                    className="transition-transform duration-300 text-[#F07C20]"
                    style={{ transform: mobileExpanded === menu.key ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    ▾
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${
                    mobileExpanded === menu.key ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {menu.sections.map((section, idx) => (
                    <div key={idx} className="pl-4 pb-4 pt-2">
                      <p
                        className="text-[#FE7F0E] text-[9px] tracking-[3px] uppercase mb-3"
                        style={{ fontFamily: "var(--font-michroma)" }}
                      >
                        {section.title}
                      </p>
                      <div className="flex flex-col gap-3">
                        {section.links.map((link, i) => (
                          <Link
                            key={i}
                            href={link.href}
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                            className="text-white/80 hover:text-white text-[10px] tracking-widest transition-colors duration-300"
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
            ))}

            <div className="h-[1px] bg-white/10 my-2" />

            {mainLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-1 text-white text-[10px] tracking-[2px] hover:text-[#FE7F0E] transition-colors duration-300"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}