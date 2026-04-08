"use client";

import React, { useState, useEffect, useRef, use } from "react";
import gsap from "gsap";
import { SERVICE_CATEGORIES } from "@/constants/services";

// Tipos para las líneas
interface StairLine {
  size: number;
  top: number;
  left: number;
  dur: number;
  delay: number;
  opacity: number;
}

export default function DetalleServicio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const categoria = SERVICE_CATEGORIES.find((c) => c.slug === slug);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const contentRef = useRef(null);
  const [stairLines, setStairLines] = useState<StairLine[]>([]);  // ← empieza vacío

  const current = categoria?.services[selectedIdx];
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Genera las líneas SOLO en el cliente
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const W = () => canvas.width;
    const H = () => canvas.height;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Segment { x0:number; y0:number; x1:number; y1:number; len:number; }

    class Snake {
      x=0; y=0; segments:Segment[]=[]; progress=0; totalLength=0;
      opacity=0; alive=true; lineWidth=1; tailLen=100; tween:gsap.core.Tween|null=null;

      constructor() { this.reset(); }

      reset() {
        this.segments = [];
        this.totalLength = 0;
        this.alive = true;
        this.lineWidth = 0.8 + Math.random() * 1.4;
        this.x = Math.random() * W();
        this.y = Math.random() * H();
        this.tailLen = 80 + Math.random() * 140;

        let dir = Math.random() > 0.5 ? "H" : "V";
        let cx = this.x, cy = this.y;
        const numSeg = 3 + Math.floor(Math.random() * 5);

        for (let i = 0; i < numSeg; i++) {
          const len = 100 + Math.random() * 180;
          const sign = Math.random() > 0.5 ? 1 : -1;
          let ex = cx, ey = cy;
          if (dir === "H") ex = cx + len * sign;
          else ey = cy + len * sign;
          this.segments.push({ x0: cx, y0: cy, x1: ex, y1: ey, len });
          this.totalLength += len;
          cx = ex; cy = ey;
          dir = dir === "H" ? "V" : "H";
        }

        const duration = 2.5 + Math.random() * 3;
        const delay = Math.random() * 6;

        gsap.fromTo(this, { progress: 0, opacity: 0 }, {
          progress: this.totalLength + this.tailLen,
          duration, delay, ease: "none",
          onComplete: () => { this.alive = false; }
        });
        gsap.to(this, { opacity: 0.12 + Math.random() * 0.25, duration: 0.4, delay });
        gsap.to(this, { opacity: 0, duration: 0.6, delay: delay + duration - 0.6 });
      }

      pointAt(p: number) {
        let acc = 0;
        for (const s of this.segments) {
          if (p <= acc + s.len) {
            const t = (p - acc) / s.len;
            return { x: s.x0 + (s.x1 - s.x0) * t, y: s.y0 + (s.y1 - s.y0) * t };
          }
          acc += s.len;
        }
        const last = this.segments[this.segments.length - 1];
        return { x: last.x1, y: last.y1 };
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (!this.alive || this.opacity < 0.005) return;
        const head = Math.min(this.progress, this.totalLength);
        const tail = Math.max(0, this.progress - this.tailLen);
        const STEPS = 60;
        const step = (head - tail) / STEPS;
        if (step <= 0) return;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.strokeStyle = "#FE7F0E";
        ctx.shadowColor = "#FE7F0E";
        ctx.shadowBlur = 8;

        ctx.beginPath();
        const start = this.pointAt(tail);
        ctx.moveTo(start.x, start.y);
        for (let i = 1; i <= STEPS; i++) {
          const pt = this.pointAt(tail + step * i);
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        const headPt = this.pointAt(head);
        ctx.beginPath();
        ctx.arc(headPt.x, headPt.y, this.lineWidth * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFB060";
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();
      }
    }

    const snakes: Snake[] = Array.from({ length: 20 }, () => new Snake());

    let raf1: number, raf2: number;

    const tick = () => {
      for (let i = 0; i < snakes.length; i++) {
        if (!snakes[i].alive) snakes[i] = new Snake();
      }
      raf1 = requestAnimationFrame(tick);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      for (const s of snakes) s.draw(ctx);
      raf2 = requestAnimationFrame(draw);
    };

    tick(); draw();

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.removeEventListener("resize", resize);
      gsap.killTweensOf(snakes);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(contentRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: "expo.out" }
    );
  }, [selectedIdx]);

  if (!categoria || !current) return null;

  return (
    <main className="bg-[#000A15] min-h-screen pb-20">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>
      <section className="relative h-[70vh] pt-20 flex items-center px-6 md:px-10 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img src={categoria.image} className="w-full h-full object-cover " alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000A15] via-[#000A15]/80 to-transparent" />
          <div className="absolute inset-0 bg-black/40" /> 
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-[#FE7F0E]" />
            <p style={{fontFamily: "var(--font-rajdhani)"}} className="text-[#FE7F0E] text-sm font-bold tracking-[8px] uppercase">
              {categoria.id.replace("-", " ")}
            </p>
          </div>
          <h1 style={{fontFamily: "var(--font-michroma)"}} className="text-white text-4xl md:text-7xl max-w-5xl leading-[1.1] uppercase">
            {categoria.title}
          </h1>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 grid grid-cols-12 gap-10 lg:gap-20 items-start">
        
        <div className="col-span-12 lg:col-span-8" ref={contentRef}>
          
          <div className="mb-24">
            <h2 style={{fontFamily: "var(--font-michroma)"}} className="text-[#FE7F0E] text-3xl mb-10 leading-tight uppercase max-w-2xl">
              {current.slogan}
            </h2>
            <p style={{fontFamily: "var(--font-rajdhani)"}} className="text-white/90 text-2xl leading-relaxed font-light border-l-2 border-white/10 pl-8">
              {current.fullDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <div className="space-y-8">
              <h3 style={{fontFamily: "var(--font-michroma)"}} className="text-white text-lg uppercase tracking-[4px] flex items-center gap-3">
                <span className="w-2 h-2 bg-[#FE7F0E]" /> Desafíos Críticos
              </h3>
              <div className="space-y-6">
                {current.essential?.map((item, i) => (
                  <div key={i} className="group p-6 bg-white/[0.02] border border-white/5 hover:border-[#FE7F0E]/30 transition-all">
                    <p style={{fontFamily: "var(--font-rajdhani)"}} className="text-white/60 group-hover:text-white transition-colors uppercase font-bold text-sm tracking-widest">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[400px]">
               <img src={current.images?.[0] || categoria.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
               <div className="absolute inset-0 bg-[#FE7F0E]/10 mix-blend-overlay" />
               <div className="absolute inset-0 border border-white/10 m-4" />
            </div>
          </div>

          <div className="mb-32">
            <h3 style={{fontFamily: "var(--font-michroma)"}} className="text-white text-xl uppercase tracking-[4px] mb-12">
              Alcance del Servicio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {current.features?.map((f, i) => (
                <div key={i} className="flex items-start gap-6 border-b border-white/5 pb-8">
                  <span className="text-[#FE7F0E] font-michroma text-xl">0{i+1}</span>
                  <p style={{fontFamily: "var(--font-rajdhani)"}} className="text-white text-xl uppercase leading-none mt-1">{f}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-32 bg-white/[0.03] p-10 md:p-16 border border-white/5">
            <h3 style={{fontFamily: "var(--font-michroma)"}} className="text-[#FE7F0E] text-xs tracking-[5px] uppercase mb-10">Metodología de Ejecución</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {["Diagnóstico", "Implementación", "Optimización"].map((step, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-[1px] bg-white/20 w-full" />
                  <h4 style={{fontFamily: "var(--font-michroma)"}} className="text-white text-[12px]">{step}</h4>
                  <p style={{fontFamily: "var(--font-rajdhani)"}} className="text-white/90 text-sm italic">Procesos estandarizados bajo normativas internacionales.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div className="text-center md:text-right italic">
               <p style={{fontFamily: "var(--font-michroma)"}} className="text-white/90 text-2xl leading-relaxed">
                 "{current.quote}"
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {current.benefits?.map((b, i) => (
                 <div
                    key={i}
                    className="bg-[#FE7F0E] p-10 flex flex-col justify-between min-h-[200px]"
                    style={{
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* shimmer sweep */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                        backgroundSize: "200% 200%",
                        animation: "cardShimmer 3s ease-in-out infinite",
                      }}
                    />
                    {/* orbe decorativo */}
                    <div
                      className="absolute -bottom-5 -right-5 w-24 h-24 rounded-full pointer-events-none"
                      style={{ background: "rgba(255,255,255,0.27)", animation: "stairMove 4s ease-in-out infinite alternate" }}
                    />
                    <h4 style={{fontFamily: "var(--font-michroma)"}} className="text-black text-xl uppercase leading-tight font-bold relative z-10">{b.title}</h4>
                    <p style={{fontFamily: "var(--font-rajdhani)"}} className="text-black text-lg font-semibold italic relative z-10">{b.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 relative h-full">
          <div className="sticky top-32 space-y-8 pt-4">
            <div className="bg-[#0D1520] border border-white/10 p-10  relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FE7F0E]/5 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <h3 style={{fontFamily: "var(--font-michroma)"}} className="text-white/90 text-[10px] tracking-[5px] mb-10 uppercase relative z-10">
                Especialidades
              </h3>
              
              <div className="flex flex-col gap-3 relative z-10">
                {categoria.services.map((service, index) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedIdx(index);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                    className={`w-full text-left px-6 py-5 tracking-[2px] transition-all duration-500 border-l-2 ${
                      selectedIdx === index 
                      ? "bg-[#FE7F0E] text-black border-white translate-x-2 font-bold shadow-[0_0_20px_rgba(254,127,14,0.3)]" 
                      : "bg-white/[0.03] text-white/90 border-transparent hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {service.name.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[#FE7F0E] p-[1px] group transition-transform hover:-translate-y-1">
               <button 
               onClick={() =>
                  window.open(
                    `https://wa.me/51970478503?text=${encodeURIComponent("Hola, me gustaría contactarlos para más información.")}`,
                    "_blank"
                  )
                }
                 style={{fontFamily: "var(--font-michroma)"}} 
                 className="w-full bg-[#000A15] text-white py-8 text-[11px] tracking-[4px] font-bold group-hover:bg-transparent group-hover:text-black transition-all uppercase"
                >
                 Solicitar Cotizacion
               </button>
            </div>
            
          </div>
        </div>

      </section>
    </main>
  );
}