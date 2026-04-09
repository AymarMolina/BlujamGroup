"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "SEGURIDAD DE LA INFORMACIÓN Y GOBIERNO DE TI",
    description: "Blindamos la integridad de su organización mediante un enfoque integral de gestión de riesgos y cumplimiento normativo. Construimos un marco de confianza y resiliencia que garantiza la continuidad del negocio bajo los más altos estándares internacionales.",
    image: "/icons/servicios/servicio1Img.png",
    thumb: "/icons/servicios/servicio1Img.png",
    videoUrl: "/icons/videos/vid1.mp4",
    icon: "/icons/logos/blujamlogoChico.png",
  },
  {
    id: 2,
    title: "INFRAESTRUCTURA Y SOPORTE DE TI",
    description: "Garantizamos la continuidad operativa mediante outsourcing de soporte técnico, administración de redes y mantenimiento de infraestructura. Desde el diseño de cableado estructurado hasta sistemas de respaldo energético (UPS), proporcionamos bases tecnológicas sólidas, escalables y seguras para su negocio.",
    image: "/icons/servicios/soporte.png",
    thumb: "/icons/servicios/soporte.png",
    videoUrl: "/icons/videos/vid1.mp4",
    icon: "/icons/logos/blujamlogoChico.png",
  },
  {
    id: 3,
    title: "DESARROLLO DE SOFTWARE Y SOLUCIONES DIGITALES",
    description: "Impulsamos su presencia digital con desarrollo web de alto rendimiento, plataformas de comercio electrónico y aplicaciones móviles nativas para iOS y Android. Especialistas en sistemas empresariales a medida que optimizan procesos internos y transforman la experiencia de sus clientes.",
    image: "/icons/servicios/solweb.png",
    thumb: "/icons/servicios/solweb.png",
    videoUrl: "/icons/videos/vid1.mp4",
    icon: "/icons/logos/blujamlogoChico.png",
  },
  {
    id: 4,
    title: "AUTOMATIZACIÓN E INTELIGENCIA ARTIFICIAL",
    description: "Elevamos la eficiencia mediante Automatización de Procesos (RPA) y flujos digitales inteligentes. Implementamos soluciones de IA aplicada, desde asistentes virtuales y chatbots avanzados hasta análisis predictivo, permitiendo una toma de decisiones estratégica basada en datos reales.",
    image: "/icons/servicios/automa.png",
    thumb: "/icons/servicios/automa.png",
    videoUrl: "/icons/videos/vid1.mp4",
    icon: "/icons/logos/blujamlogoChico.png",
  },
];

export default function NuestrosServicios() {
  const [current, setCurrent] = useState(0);
  const container = useRef(null);
  const service = services[current];
  const progress = ((current + 1) / services.length) * 100;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const trigger = ScrollTrigger.create({
      trigger: container.current,
      start: "top 75%",
      onEnter: () => {
        interval = setInterval(() => {
          setCurrent((p) => (p + 1) % services.length);
        }, 3000);
      },
      onLeave: () => clearInterval(interval),
      onEnterBack: () => {
        interval = setInterval(() => {
          setCurrent((p) => (p + 1) % services.length);
        }, 4000);
      },
      onLeaveBack: () => clearInterval(interval),
    });

    return () => {
      clearInterval(interval);
      trigger.kill();
    };
  }, []);

  useGSAP(() => {
    gsap.killTweensOf(".corner-path");
    gsap.set(".corner-path", { strokeDasharray: 300, strokeDashoffset: 300 });
    gsap.killTweensOf(".gsap-scale-img");
    gsap.set(".gsap-scale-img", { scale: 1.15, filter: "blur(5px)", opacity: 0 });
    gsap.set(".char", { opacity: 0, y: 15, rotateX: -90 });
    gsap.set(".gsap-fade-slide", { opacity: 0, x: -20 });

    ScrollTrigger.create({
      trigger: container.current,
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(".corner-path", {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.2,
          delay: 0.2,
        });

        const tl = gsap.timeline({ delay: 0.2 });
        tl.fromTo(
          ".char",
          { opacity: 0, y: 15, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.02, duration: 0.5, ease: "power2.out" }
        );
        tl.fromTo(
          ".gsap-fade-slide",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "expo.out" },
          "-=0.3"
        );

        gsap.to(".gsap-scale-img", {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: 1.2,
          ease: "expo.out",
          delay: 0.2,
        });
      },
    });
  }, { scope: container, dependencies: [current] });

  return (
    <section ref={container} className="bg-[#000A15] text-white px-6 sm:px-10 lg:px-20 pt-14 lg:pt-20 min-h-screen overflow-hidden">
      <div className="gsap-section-content">

        <div className="mb-10 lg:mb-16">
          <h2
            className="flex flex-wrap items-center gap-0 text-xl sm:text-2xl lg:text-[2rem] font-black tracking-[0.12em] uppercase leading-none"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            <span>NUESTROS</span>
            <span
              className="bg-[#e85d04] text-white px-3 py-1 inline-block ml-2"
              style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}
            >
              SERVICIOS
            </span>
          </h2>
          <p className="text-white/90 text-base lg:text-xl mt-3 font-normal tracking-wide" style={{ fontFamily: "Rajdhani, sans-serif" }}>
            Un ecosistema de capacidades tecnológicas para potenciar cada pilar de su negocio.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-x-0 items-start relative">

          <div className="flex flex-col justify-between h-[550px] pr-6">
            <h3
              className="z-10 text-[2.6rem] font-black tracking-wider leading-[1.1] uppercase text-white mt-20 absolute max-w-[50%]"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              {service.title.split(" ").map((word, i) => (
                <span key={`word-${i}`} className="inline-block whitespace-nowrap">
                  {word.split("").map((char, j) => (
                    <span key={`char-${j}`} className="char inline-block">{char}</span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </h3>

            <div className="mt-auto">
              <div className="gsap-fade-slide w-[270px] h-[170px] overflow-hidden rounded-sm mb-6 border border-white/5 relative bg-black">
                <video
                  key={`video-thumb-${current}`}
                  src={service.videoUrl}
                  autoPlay loop muted playsInline
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <Link
                href="/servicios"
                className="bg-[#F07C20] hover:bg-[#cf5204] text-white text-lg px-15 py-3 w-fit transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block"
                style={{ fontFamily: "Michroma, sans-serif", borderRadius: "5px" }}
              >
                Ver servicios
              </Link>
            </div>
          </div>

          <div className="image-container relative p-6" style={{ width: "420px", height: "590px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 420 590">
              <path className="corner-path" d="M340 10 H400 Q410 10 410 20 V120" stroke="#e85d04" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path className="corner-path" d="M80 580 H20 Q10 580 10 570 V470" stroke="#e85d04" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
            <div className="w-full h-full overflow-hidden rounded-[4px] border border-white/10 bg-[#0a1118] relative z-1 flex items-center justify-center">
              <div className="absolute z-1 inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="absolute w-full h-full animate-spin" viewBox="0 0 50 50">
                    <circle className="opacity-25" cx="25" cy="25" r="20" stroke="white" strokeWidth="2" fill="none" />
                    <circle className="opacity-100" cx="25" cy="25" r="20" stroke="#e85d04" strokeWidth="2" strokeDasharray="30, 150" strokeLinecap="round" fill="none" />
                  </svg>
                  <img src="/icons/logos/blujamlogoChico.png" alt="loading" className="w-8 h-8 object-contain opacity-50 animate-pulse" />
                </div>
              </div>
              <img
                key={service.image}
                src={service.image}
                alt={service.title}
                className="gsap-scale-img w-full h-full object-cover shadow-2xl z-10 relative"
                onLoad={(e) => { gsap.fromTo(e.currentTarget, { opacity: 0 }, { opacity: 1, duration: 0.5 }); }}
              />
            </div>
          </div>

          <div className="flex flex-col h-[550px] pl-10 justify-between">
            <div className="mt-20">
              <div className="gsap-fade-slide mb-6 w-30 h-30">
                <img src={service.icon} alt="" className="w-full h-full object-contain" />
              </div>
              <p className="gsap-fade-slide text-white text-lg leading-[1.8] font-normal max-w-full" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                {service.description}
              </p>
            </div>
            <div className="mt-auto">
              <div className="text-sm mb-2">
                <span className="text-white/30">0{current + 1} / </span>
                <span className="text-[#e85d04] font-bold">0{services.length}</span>
              </div>
              <div className="h-[2px] bg-white/10 relative w-full mb-8">
                <div
                  className="absolute left-0 top-0 h-full bg-[#e85d04] shadow-[0_0_15px_rgba(232,93,4,0.6)]"
                  style={{ width: `${progress}%`, transition: "width 0.8s cubic-bezier(0.65, 0, 0.35, 1)" }}
                />
              </div>
              <div className="flex gap-4">
                <button onClick={() => setCurrent((p) => Math.max(0, p - 1))} disabled={current === 0} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e85d04] hover:border-[#e85d04] transition-all disabled:opacity-10 cursor-pointer">←</button>
                <button onClick={() => setCurrent((p) => Math.min(services.length - 1, p + 1))} disabled={current === services.length - 1} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e85d04] hover:border-[#e85d04] transition-all disabled:opacity-10 cursor-pointer">→</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:hidden gap-8 pb-16">

          <h3
            className="text-2xl sm:text-3xl font-black tracking-wider leading-[1.2] uppercase text-white"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            {service.title.split(" ").map((word, i) => (
              <span key={`word-${i}`} className="inline-block whitespace-nowrap mr-2">
                {word.split("").map((char, j) => (
                  <span key={`char-${j}`} className="char inline-block">{char}</span>
                ))}
              </span>
            ))}
          </h3>

          <div className="image-container relative mx-auto w-full max-w-[340px] sm:max-w-[420px]" style={{ height: "360px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 420 360">
              <path className="corner-path" d="M340 10 H400 Q410 10 410 20 V90" stroke="#e85d04" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path className="corner-path" d="M80 350 H20 Q10 350 10 340 V270" stroke="#e85d04" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
            <div className="w-full h-full overflow-hidden rounded-[4px] border border-white/10 bg-[#0a1118] relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="absolute w-full h-full animate-spin" viewBox="0 0 50 50">
                    <circle className="opacity-25" cx="25" cy="25" r="20" stroke="white" strokeWidth="2" fill="none" />
                    <circle className="opacity-100" cx="25" cy="25" r="20" stroke="#e85d04" strokeWidth="2" strokeDasharray="30, 150" strokeLinecap="round" fill="none" />
                  </svg>
                  <img src="/icons/logos/blujamlogoChico.png" alt="loading" className="w-7 h-7 object-contain opacity-50 animate-pulse" />
                </div>
              </div>
              <img
                key={service.image}
                src={service.image}
                alt={service.title}
                className="gsap-scale-img w-full h-full object-cover shadow-2xl relative z-10"
                onLoad={(e) => { gsap.fromTo(e.currentTarget, { opacity: 0 }, { opacity: 1, duration: 0.5 }); }}
              />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={service.icon} alt="" className="w-10 h-10 object-contain flex-none mt-1 gsap-fade-slide" />
            <p className="gsap-fade-slide text-white text-base leading-[1.8] font-normal" style={{ fontFamily: "Rajdhani, sans-serif" }}>
              {service.description}
            </p>
          </div>

          <div className="gsap-fade-slide w-full h-[160px] sm:h-[200px] overflow-hidden rounded-sm border border-white/5 relative bg-black">
            <video
              key={`video-thumb-mobile-${current}`}
              src={service.videoUrl}
              autoPlay loop muted playsInline
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div>
            <div className="text-sm mb-2">
              <span className="text-white/30">0{current + 1} / </span>
              <span className="text-[#e85d04] font-bold">0{services.length}</span>
            </div>
            <div className="h-[2px] bg-white/10 relative w-full mb-6">
              <div
                className="absolute left-0 top-0 h-full bg-[#e85d04] shadow-[0_0_15px_rgba(232,93,4,0.6)]"
                style={{ width: `${progress}%`, transition: "width 0.8s cubic-bezier(0.65, 0, 0.35, 1)" }}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <button onClick={() => setCurrent((p) => Math.max(0, p - 1))} disabled={current === 0} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e85d04] hover:border-[#e85d04] transition-all disabled:opacity-10 cursor-pointer">←</button>
                <button onClick={() => setCurrent((p) => Math.min(services.length - 1, p + 1))} disabled={current === services.length - 1} className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#e85d04] hover:border-[#e85d04] transition-all disabled:opacity-10 cursor-pointer">→</button>
              </div>
              <Link
                href="/servicios"
                className="bg-[#F07C20] hover:bg-[#cf5204] text-white text-sm px-6 py-3 transition-all duration-300 active:scale-95 inline-block"
                style={{ fontFamily: "Michroma, sans-serif", borderRadius: "5px" }}
              >
                Ver servicios
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}