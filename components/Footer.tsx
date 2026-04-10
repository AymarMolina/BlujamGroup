"use client";
import React from "react";
import Link from "next/link";

const footerData = [
  {
    title: "Seguridad de la Información y Gobierno de TI",
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
    title: "Infraestructura y Soporte de TI",
    links: [
      { name: "Outsourcing y Soporte TI", href: "/servicios/infraestructura-y-soporte?servicio=outsourcing" },
      { name: "Administración de Infraestructura", href: "/servicios/infraestructura-y-soporte?servicio=administracion" },
      { name: "Cableado Estructurado", href: "/servicios/infraestructura-y-soporte?servicio=cableado" },
      { name: "Energía y Continuidad (UPS)", href: "/servicios/infraestructura-y-soporte?servicio=energia" },
      { name: "Mantenimiento Preventivo y Correctivo", href: "/servicios/infraestructura-y-soporte?servicio=mantenimiento" },
    ],
  },
  {
    title: "Desarrollo de Software y Soluciones Digitales",
    links: [
      { name: "Desarrollo Web y E-commerce", href: "/servicios/desarrollo-de-software?servicio=web-ecommerce" },
      { name: "Desarrollo de Aplicaciones Móviles", href: "/servicios/desarrollo-de-software?servicio=mobile" },
      { name: "Sistemas Empresariales a Medida", href: "/servicios/desarrollo-de-software?servicio=medida" },
    ],
  },
  {
    title: "Automatización e Inteligencia Artificial",
    links: [
      { name: "Automatización de Procesos (RPA)", href: "/servicios/automatizacion-e-ia?servicio=rpa" },
      { name: "Chatbots y Asistentes Virtuales", href: "/servicios/automatizacion-e-ia?servicio=chatbots" },
      { name: "IA Aplicadas al Negocio", href: "/servicios/automatizacion-e-ia?servicio=ia-aplicada" },
    ],
  },
];

const socials = [
  {
    href: "https://www.facebook.com/blujamgroup",
    label: "Facebook",
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    href: "https://www.linkedin.com/company/blujamgroup/",
    label: "LinkedIn",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    href: "https://www.instagram.com/blujamgroup",
    label: "Instagram",
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    ),
  },
  {
    href: "https://www.tiktok.com/@blujamgroup",
    label: "TikTok",
    icon: (
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.74a4.85 4.85 0 01-1.02-.05z" />
    ),
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#000A15] border-t border-white/5 pt-20 pb-10 px-6 md:px-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

          <div className="lg:col-span-1 flex flex-col gap-6">
            <img
              src="/icons/logos/blujamlogoChico.png"
              alt="Blujam Group Logo"
              className="w-48 h-auto mb-4"
            />
            <p
              className="text-white/90 text-sm leading-relaxed font-light"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Transformamos la infraestructura tecnológica y protegemos los activos
              digitales de su organización con estándares internacionales.
            </p>

            <div className="flex gap-3 flex-wrap">
              {socials.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:border-orange-500 hover:text-orange-500 transition-colors duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>

          </div>

          {footerData.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4
                className="text-white text-sm font-bold uppercase tracking-[0.15em] border-l-2 border-orange-500 pl-4"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-orange-500 text-sm transition-colors duration-300 font-light block"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p
            className="text-white/50 text-xs tracking-widest uppercase"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            © {new Date().getFullYear()} BLUJAM GROUP. TECH GLOBAL SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a
              href="/politicas"
              className="text-white/50 hover:text-white text-xs uppercase tracking-widest transition-colors"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              className="text-white/50 hover:text-white text-xs uppercase tracking-widest transition-colors"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;