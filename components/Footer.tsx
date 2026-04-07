import React from "react";
import Image from "next/image";

const footerData = [
  {
    title: "Seguridad de la Información y Gobierno de TI",
    links: [
      "Implementación de SGSI (ISO 27001)",
      "Gobierno de TI para Sistemas de Información",
      "Auditoría y Evaluación de Sistemas",
      "Gestión de Vulnerabilidades",
      "Cumplimiento Normativo",
      "Capacitación en Seguridad",
      "Acompañamiento para Certificaciones"
    ],
  },
  {
    title: "Infraestructura y Soporte de TI",
    links: [
      "Outsourcing y Soporte TI",
      "Administración de Infraestructura",
      "Cableado Estructurado",
      "Energía y Continuidad (UPS)",
      "Mantenimiento Preventivo y Correctivo"
    ],
  },
  {
    title: "Desarrollo de Software y Soluciones Digitales",
    links: [
      "Desarrollo Web y E-commerce",
      "Desarrollo de Aplicaciones Móviles",
      "Sistemas Empresariales a Medida"
    ],
  },
  {
    title: "Automatización e Inteligencia Artificial",
    links: [
      "Automatización de Procesos (RPA)",
      "Chatbots y Asistentes Virtuales",
      "Soluciones de IA Aplicadas"
    ],
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
            <p className="text-white/90 text-sm leading-relaxed font-light" style={{ fontFamily: 'var(--font-rajdhani)' }}>
              Transformamos la infraestructura tecnológica y protegemos los activos digitales de su organización con estándares internacionales.
            </p>
            <div className="flex gap-4">
               <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/90 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">in</div>
            </div>
          </div>

          {footerData.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-[0.15em] border-l-2 border-orange-500 pl-4 h-fit"
                  style={{ fontFamily: 'var(--font-michroma)' }}>
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-white/90 hover:text-orange-500 text-sm transition-colors duration-300 font-light block"
                       style={{ fontFamily: 'var(--font-rajdhani)' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-white/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/90 text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-rajdhani)' }}>
            © {new Date().getFullYear()} BLUJAM GROUP. TECH GLOBAL SOLUTIONS. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/90 hover:text-white text-xs uppercase tracking-widest transition-colors"style={{ fontFamily: 'var(--font-rajdhani)' }}>Privacidad</a>
            <a href="#" className="text-white/90 hover:text-white text-xs uppercase tracking-widest transition-colors"style={{ fontFamily: 'var(--font-rajdhani)' }}>Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;