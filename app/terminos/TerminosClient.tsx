"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const definitions = [
  { term: "Afiliado", desc: 'Significa una entidad que controla, está controlada o está bajo control común con una parte, donde "control" significa la propiedad del 50% o más de las acciones, intereses patrimoniales u otros valores con derecho a voto para la elección de directores u otra autoridad administrativa.' },
  { term: "La Empresa", desc: 'Referida como "la Empresa", "Nosotros" o "Nuestro" en este Acuerdo, se refiere a Blujam Group, Jr. Don Bosco 361 – Breña, Lima, 15083.' },
  { term: "País", desc: "Se refiere a: Lima - Perú." },
  { term: "Dispositivo", desc: "Significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital." },
  { term: "Servicio", desc: "Se refiere al sitio web." },
  { term: "Términos y Condiciones", desc: 'También conocidos como "Términos", se refieren a estos Términos y Condiciones que forman el acuerdo completo entre Usted y la Empresa con respecto al uso del Servicio.' },
  { term: "Servicio de redes sociales de terceros", desc: "Se refiere a cualquier servicio o contenido prestado por un tercero que el Servicio puede mostrar, incluir o poner a disposición." },
  { term: "El sitio web", desc: "Se refiere a Blujam Group, accesible desde https://www.blujamgroup.com/" },
  { term: "Usted", desc: "Se refiere a la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda." },
];

const sections = [
  {
    id: "01",
    title: "Recopilación y uso de sus datos personales",
    body: "Estos son los Términos y condiciones que rigen el uso de este Servicio y el acuerdo que opera entre Usted y la Empresa. Estos Términos y Condiciones establecen los derechos y obligaciones de todos los usuarios con respecto al uso del Servicio. Su acceso y uso del Servicio está condicionado a Su aceptación y cumplimiento de estos Términos y Condiciones. Al acceder o utilizar el Servicio, usted acepta estar sujeto a estos Términos y condiciones. Si no está de acuerdo con alguna parte de estos Términos y condiciones, no podrá acceder al Servicio. Usted declara que es mayor de 18 años. La Empresa no permite que los menores de 18 años utilicen el Servicio.",
  },
  {
    id: "02",
    title: "Propiedad intelectual",
    body: "El Servicio y su contenido original, las características y la funcionalidad son y seguirán siendo propiedad exclusiva de la Empresa y sus licenciantes. El Servicio está protegido por derechos de autor, marca registrada y otras leyes tanto del país como de países extranjeros. Nuestras marcas y nuestra imagen comerciales no pueden usarse en relación con ningún producto o servicio sin el consentimiento previo por escrito de la Empresa.",
  },
  {
    id: "03",
    title: "Enlaces a otros sitios web",
    body: "Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por la Empresa. La Empresa no tiene control ni asume responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios web o servicios de terceros. Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad de los sitios web o servicios de terceros que visite.",
  },
  {
    id: "04",
    title: "Terminación",
    body: "Podemos rescindir o suspender su acceso de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo, incluso, entre otros, si usted incumple estos Términos y condiciones. Al finalizar, su derecho a usar el Servicio cesará de inmediato.",
  },
  {
    id: "05",
    title: "Limitación de responsabilidad",
    body: "A pesar de los daños en los que pueda incurrir, la responsabilidad total de la Empresa y de cualquiera de sus proveedores bajo cualquier disposición de estos Términos se limitará al monto realmente pagado por Usted a través del Servicio. En ningún caso la Empresa será responsable por daños especiales, incidentales, indirectos o consecuentes derivados del uso o incapacidad de uso del Servicio.",
  },
  {
    id: "06",
    title: 'Descargo "TAL CUAL" y "SEGÚN DISPONIBILIDAD"',
    body: 'El Servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD", sin garantías expresas o implícitas de ningún tipo.',
  },
  {
    id: "07",
    title: "Leyes del país",
    body: "Las leyes del país regirán estos Términos y su uso del Servicio. Su uso de la Aplicación también puede estar sujeto a otras leyes locales, estatales, nacionales o internacionales.",
  },
  {
    id: "08",
    title: "Resolución de disputas",
    body: "Si tiene alguna inquietud o disputa sobre el Servicio, acepta primero intentar resolver la disputa de manera informal contactando a la Empresa.",
  },
];

export default function TerminosCondiciones() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const defsRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Canvas snake animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const W = () => canvas.width;
    const H = () => canvas.height;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    interface Segment { x0: number; y0: number; x1: number; y1: number; len: number }

    class Snake {
      x = 0; y = 0; segments: Segment[] = []; progress = 0; totalLength = 0;
      opacity = 0; alive = true; lineWidth = 1; tailLen = 100;
      constructor() { this.reset(); }
      reset() {
        this.segments = []; this.totalLength = 0; this.alive = true;
        this.lineWidth = 0.8 + Math.random() * 1.4;
        this.x = Math.random() * W(); this.y = Math.random() * H();
        this.tailLen = 80 + Math.random() * 140;
        let dir = Math.random() > 0.5 ? "H" : "V";
        let cx = this.x, cy = this.y;
        for (let i = 0; i < 3 + Math.floor(Math.random() * 5); i++) {
          const len = 100 + Math.random() * 180, sign = Math.random() > 0.5 ? 1 : -1;
          let ex = cx, ey = cy;
          if (dir === "H") ex += len * sign; else ey += len * sign;
          this.segments.push({ x0: cx, y0: cy, x1: ex, y1: ey, len });
          this.totalLength += len; cx = ex; cy = ey;
          dir = dir === "H" ? "V" : "H";
        }
        const duration = 2.5 + Math.random() * 3, delay = Math.random() * 6;
        gsap.fromTo(this, { progress: 0, opacity: 0 }, {
          progress: this.totalLength + this.tailLen, duration, delay, ease: "none",
          onComplete: () => { this.alive = false; },
        });
        gsap.to(this, { opacity: 0.12 + Math.random() * 0.25, duration: 0.4, delay });
        gsap.to(this, { opacity: 0, duration: 0.6, delay: delay + duration - 0.6 });
      }
      pointAt(p: number) {
        let acc = 0;
        for (const s of this.segments) {
          if (p <= acc + s.len) { const t = (p - acc) / s.len; return { x: s.x0 + (s.x1 - s.x0) * t, y: s.y0 + (s.y1 - s.y0) * t }; }
          acc += s.len;
        }
        const last = this.segments[this.segments.length - 1];
        return { x: last.x1, y: last.y1 };
      }
      draw(ctx: CanvasRenderingContext2D) {
        if (!this.alive || this.opacity < 0.005) return;
        const head = Math.min(this.progress, this.totalLength), tail = Math.max(0, this.progress - this.tailLen);
        const STEPS = 60, step = (head - tail) / STEPS;
        if (step <= 0) return;
        ctx.save(); ctx.globalAlpha = this.opacity; ctx.lineWidth = this.lineWidth;
        ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.strokeStyle = "#FE7F0E"; ctx.shadowColor = "#FE7F0E"; ctx.shadowBlur = 8;
        ctx.beginPath();
        const start = this.pointAt(tail); ctx.moveTo(start.x, start.y);
        for (let i = 1; i <= STEPS; i++) { const pt = this.pointAt(tail + step * i); ctx.lineTo(pt.x, pt.y); }
        ctx.stroke();
        const headPt = this.pointAt(head);
        ctx.beginPath(); ctx.arc(headPt.x, headPt.y, this.lineWidth * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFB060"; ctx.shadowBlur = 18; ctx.fill(); ctx.restore();
      }
    }

    const snakes: Snake[] = Array.from({ length: 20 }, () => new Snake());
    let raf1: number, raf2: number;
    const tick = () => { for (let i = 0; i < snakes.length; i++) if (!snakes[i].alive) snakes[i] = new Snake(); raf1 = requestAnimationFrame(tick); };
    const draw = () => { ctx.clearRect(0, 0, W(), H()); for (const s of snakes) s.draw(ctx); raf2 = requestAnimationFrame(draw); };
    tick(); draw();
    return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2); window.removeEventListener("resize", resize); gsap.killTweensOf(snakes); };
  }, []);

  // Animaciones entrada
  useEffect(() => {
    if (heroRef.current) gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "expo.out", delay: 0.2 });
    if (defsRef.current) gsap.fromTo(defsRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 0.45 });
    const els = sectionsRef.current.filter(Boolean);
    gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "expo.out", stagger: 0.1, delay: 0.6 });
  }, []);

  return (
    <main className="bg-[#000A15] min-h-screen pb-24">
      {/* Canvas fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Hero */}
      <section className="relative z-10 border-b border-white/10 px-4 sm:px-6 md:px-10 pt-45 pb-16">
        <div ref={heroRef} className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-[#FE7F0E]" />
            <p
              style={{ fontFamily: "var(--font-rajdhani)" }}
              className="text-[#FE7F0E] text-xs font-bold tracking-[6px] uppercase"
            >
              Blujam Group Tech Global Solutions S.A.C.
            </p>
          </div>

          <h1
            style={{ fontFamily: "var(--font-michroma)" }}
            className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-7xl uppercase leading-[1.05] tracking-tight"
          >
            Términos &<br />
            <span className="text-[#FE7F0E]">Condiciones</span>
          </h1>

          <p
            style={{ fontFamily: "var(--font-rajdhani)" }}
            className="mt-8 text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6"
          >
            Estos Términos y condiciones rigen el uso de este Servicio y el acuerdo que opera
            entre Usted y la Empresa. Lea detenidamente antes de utilizar nuestro servicio.
          </p>
        </div>
      </section>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 space-y-10">

        {/* Bloque Interpretación + Definiciones */}
        <div ref={defsRef} className="bg-white/[0.02] border border-white/5 p-6 sm:p-10">
          {/* Interpretación */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-2 h-2 bg-[#FE7F0E] shrink-0" />
              <h2
                style={{ fontFamily: "var(--font-michroma)" }}
                className="text-white text-sm sm:text-base uppercase tracking-[3px]"
              >
                Interpretación
              </h2>
            </div>
            <p
              style={{ fontFamily: "var(--font-rajdhani)" }}
              className="text-white/90 text-base sm:text-lg leading-relaxed border-l-2 border-white/10 pl-5 sm:pl-8"
            >
              Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo
              las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado
              independientemente de si aparecen en singular o en plural.
            </p>
          </div>

          {/* Definiciones */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 bg-[#FE7F0E] shrink-0" />
            <h2
              style={{ fontFamily: "var(--font-michroma)" }}
              className="text-white text-sm sm:text-base uppercase tracking-[3px]"
            >
              Definiciones
            </h2>
          </div>

          <div className="space-y-0 border-l-2 border-white/10 pl-5 sm:pl-8">
            {definitions.map((def, i) => (
              <div
                key={i}
                className="py-4 border-b border-white/5 last:border-0 flex flex-col sm:flex-row sm:gap-8"
              >
                <span
                  style={{ fontFamily: "var(--font-michroma)" }}
                  className="text-[#FE7F0E] text-xs uppercase tracking-[2px] shrink-0 sm:w-64 mb-1 sm:mb-0 pt-0.5"
                >
                  {def.term}
                </span>
                <p
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                  className="text-white/90 text-base sm:text-lg leading-relaxed"
                >
                  {def.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Secciones */}
        {sections.map((sec, i) => (
          <div
            key={sec.id}
            ref={(el) => { if (el) sectionsRef.current[i] = el; }}
            className="bg-white/[0.02] border border-white/5 hover:border-[#FE7F0E]/20 transition-all duration-500 p-6 sm:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <span
                style={{ fontFamily: "var(--font-michroma)" }}
                className="text-[#FE7F0E] text-base"
              >
                {sec.id}
              </span>
              <div className="w-2 h-2 bg-[#FE7F0E] shrink-0" />
              <h2
                style={{ fontFamily: "var(--font-michroma)" }}
                className="text-white text-sm sm:text-base uppercase tracking-[3px]"
              >
                {sec.title}
              </h2>
            </div>
            <p
              style={{ fontFamily: "var(--font-rajdhani)" }}
              className="text-white/90 text-base sm:text-lg leading-relaxed border-l-2 border-white/10 pl-5 sm:pl-8"
            >
              {sec.body}
            </p>
          </div>
        ))}

        {/* Contáctenos */}
        <div
          ref={(el) => { if (el) sectionsRef.current[sections.length] = el; }}
          className="bg-[#FE7F0E] p-6 sm:p-10"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-2 h-2 bg-black shrink-0" />
            <h2
              style={{ fontFamily: "var(--font-michroma)" }}
              className="text-black text-sm sm:text-base uppercase tracking-[3px]"
            >
              Contáctenos
            </h2>
          </div>
          <p
            style={{ fontFamily: "var(--font-rajdhani)" }}
            className="text-black text-base sm:text-lg leading-relaxed font-semibold border-l-2 border-black/20 pl-5 sm:pl-8"
          >
            Si tiene alguna pregunta sobre estos Términos y condiciones, puede contactarnos
            visitando esta página en nuestro sitio web:{" "}
            <Link
                href="/contacto"
                className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                Visitar página ahora
            </Link>
          </p>
        </div>

        {/* Divider + meta */}
        <div>
          <div className="h-[1px] bg-gradient-to-r from-[#FE7F0E] via-[#FE7F0E]/20 to-transparent mb-8" />
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FE7F0E]" />
            <p
              style={{ fontFamily: "var(--font-michroma)" }}
              className="text-white/80 text-[10px] uppercase tracking-[3px]"
            >
              Blujam Group Tech Global Solutions S.A.C. — Jr. Don Bosco 361, Breña, Lima 15083
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}