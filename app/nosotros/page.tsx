"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TestimonialsSection from '@/components/sections/nosotros/TestimonialsSection';

// Registrar el plugin de GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NosotrosPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.3
      });

      gsap.from(".hero-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target") || "0");
        const suffix = counter.getAttribute("data-suffix") || "";
        
        gsap.fromTo(counter, 
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: ".stats-container",
              start: "top 85%",
            },
            onUpdate: function() {
              counter.innerHTML = Math.ceil(this.targets()[0].innerText) + suffix;
            }
          }
        );
      });

      gsap.from(".mosaic-img", {
        scrollTrigger: {
          trigger: ".mosaic-container",
          start: "top 80%",
        },
        scale: 1.2,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      gsap.from(".testimonial-box", {
        scrollTrigger: {
          trigger: ".testimonial-box",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-[#000A15] text-white min-h-screen selection:bg-[#ff7a00] selection:text-white overflow-hidden">
      
      <section className="relative pt-48 pb-28 px-6">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff7a00]/10 blur-[150px] rounded-full -mr-32 -mt-32" />
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 text-center md:text-left hero-content">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <span className="h-[2px] w-12 bg-[#ff7a00]"></span>
              <span 
                className="text-[#ff7a00] tracking-[3px] uppercase text-xs"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                Acerca de BLUJAM GROUP
              </span>
            </div>
            <h1 
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 uppercase text-[#ff7a00]"
              style={{ fontFamily: "var(--font-michroma)" }}
            >
              Diseñamos el éxito con <br />
              <span className="text-white">soluciones a medida.</span>
            </h1>
            <p 
              className="text-white text-xl md:text-2xl max-w-2xl leading-relaxed mx-auto md:mx-0"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Impulsamos a empresas a prosperar en un mercado en constante cambio, ofreciendo valor excepcional mediante visión estratégica e innovación.
            </p>
          </div>

          <div className="md:col-span-5 relative mt-12 md:mt-0 hero-image">
            <div 
              className="relative aspect-[4/5] bg-gray-800 rounded-3xl overflow-hidden border border-white/10"
              style={{ clipPath: 'polygon(0 0, 100% 10%, 100% 100%, 0 90%)' }}
            >
              <Image 
                src="/icons/servicios/serv2.webp" 
                alt="Equipo Blujam"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative services-grid">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {[
            { title: 'Soluciones Rápidas', desc: 'Brindamos respuestas efectivas adaptadas a los desafíos de tu negocio.' },
            { title: 'Asesoría Experta', desc: 'Especialistas con orientación estratégica y práctica para tu crecimiento.' },
            { title: 'Planificación Estratégica', desc: 'Alineamos tus objetivos con las mejores oportunidades del mercado.' },
            { title: 'Operaciones Eficientes', desc: 'Optimizamos procesos internos para garantizar agilidad y rentabilidad.' },
          ].map((item, i) => (
            <div key={i} className="service-card p-9 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff7a00]/50 transition-all duration-500">
              <h3 
                className="text-xl font-bold mb-4 text-[#ff7a00] uppercase"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                {item.title}
              </h3>
              <p 
                className="text-white text-lg leading-tight"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden my-10">
        <Image 
          src="/icons/servicios/hero-1.webp" 
          alt="Cultura Blujam"
          fill
          className="object-cover opacity-40 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000A15] via-transparent to-[#000A15]"></div>
      </section>

      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#001E3C]/20 backdrop-blur-2xl border border-white/5 overflow-hidden grid lg:grid-cols-12">
            
            <div className="lg:col-span-7 p-12 md:p-16 space-y-10 stats-container">
              <div 
                className="inline-block bg-[#ff7a00] px-5 py-1 text-black font-bold tracking-widest uppercase text-xs"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                Nuestra Evolución
              </div>
              <p 
                className="text-3xl md:text-5xl text-white italic leading-tight"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                "Nacimos con una visión clara: ofrecer soluciones innovadoras para desafíos únicos."
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
                {[
                  { n: 75, s: '%', t: 'Procesos Optimizados' },
                  { n: 12, s: '+', t: 'Sectores' },
                  { n: 100, s: 'x', t: 'Ideas Transformadas' },
                ].map((s, idx) => (
                  <div key={idx}>
                    <div 
                      className="stat-number text-4xl md:text-5xl text-[#ff7a00]"
                      style={{ fontFamily: "var(--font-michroma)" }}
                      data-target={s.n}
                      data-suffix={s.s}
                    >
                      0
                    </div>
                    <p 
                      className="text-white text-sm uppercase tracking-wider mt-2"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {s.t}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-2 p-2 bg-black/20 mosaic-container">
              <div className="relative overflow-hidden row-span-2 mosaic-img">
                <Image src="/icons/servicios/serv3.webp" alt="Equipo 1" fill className="object-cover"/>
              </div>
              <div className="relative overflow-hidden mosaic-img">
                <Image src="/icons/servicios/serv4.webp" alt="Oficina" fill className="object-cover"/>
              </div>
              <div className="relative overflow-hidden mosaic-img">
                <Image src="/icons/servicios/serv2.webp" alt="Tech" fill className="object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection/>
    </main>
  );
}