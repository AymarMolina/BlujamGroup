"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  // Canvas snake animation (igual al resto del proyecto)
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
          const len = 100 + Math.random() * 180;
          const sign = Math.random() > 0.5 ? 1 : -1;
          let ex = cx, ey = cy;
          if (dir === "H") ex += len * sign; else ey += len * sign;
          this.segments.push({ x0: cx, y0: cy, x1: ex, y1: ey, len });
          this.totalLength += len; cx = ex; cy = ey;
          dir = dir === "H" ? "V" : "H";
        }
        const duration = 2.5 + Math.random() * 3;
        const delay = Math.random() * 6;
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
        ctx.lineCap = "round"; ctx.lineJoin = "round";
        ctx.strokeStyle = "#FE7F0E"; ctx.shadowColor = "#FE7F0E"; ctx.shadowBlur = 8;
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
        ctx.fillStyle = "#FFB060"; ctx.shadowBlur = 18; ctx.fill();
        ctx.restore();
      }
    }

    const snakes: Snake[] = Array.from({ length: 20 }, () => new Snake());
    let raf1: number, raf2: number;
    const tick = () => {
      for (let i = 0; i < snakes.length; i++) if (!snakes[i].alive) snakes[i] = new Snake();
      raf1 = requestAnimationFrame(tick);
    };
    const draw = () => {
      ctx.clearRect(0, 0, W(), H());
      for (const s of snakes) s.draw(ctx);
      raf2 = requestAnimationFrame(draw);
    };
    tick(); draw();
    return () => {
      cancelAnimationFrame(raf1); cancelAnimationFrame(raf2);
      window.removeEventListener("resize", resize);
      gsap.killTweensOf(snakes);
    };
  }, []);

  // Animaciones de entrada
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(codeRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", delay: 0.1 }
    )
    .fromTo(heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "expo.out" },
      "-=0.4"
    )
    .fromTo(actionsRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "expo.out" },
      "-=0.4"
    );
  }, []);

  return (
    <main className="bg-[#000A15] min-h-screen flex flex-col items-center justify-center pb-24 overflow-hidden">
      {/* Canvas fondo */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      </div>

      {/* Contenido centrado */}
      <section className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-start justify-center min-h-screen py-20">

        {/* Eyebrow label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-[1px] bg-[#FE7F0E]" />
          <p
            style={{ fontFamily: "var(--font-rajdhani)" }}
            className="text-[#FE7F0E] text-xs font-bold tracking-[6px] uppercase"
          >
            Blujam Group Tech Global Solutions S.A.C.
          </p>
        </div>

        {/* Código de error grande */}
        <div ref={codeRef}>
          <span
            style={{ fontFamily: "var(--font-michroma)" }}
            className="text-[#FE7F0E]/10 text-[160px] sm:text-[220px] md:text-[280px] font-bold leading-none select-none pointer-events-none absolute left-4 sm:left-6 md:left-10 -translate-y-1/2"
            aria-hidden="true"
          >
            404
          </span>
        </div>

        {/* Título */}
        <div ref={heroRef} className="mt-4">
          <h1
            style={{ fontFamily: "var(--font-michroma)" }}
            className="text-white text-4xl sm:text-6xl md:text-7xl uppercase leading-[1.05] tracking-tight"
          >
            Página no<br />
            <span className="text-[#FE7F0E]">encontrada</span>
          </h1>

          <p
            style={{ fontFamily: "var(--font-rajdhani)" }}
            className="mt-8 text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl border-l-2 border-white/10 pl-6"
          >
            La página que buscas no existe o fue movida a otra dirección.
            Verifica la URL o regresa al inicio para continuar navegando.
          </p>
        </div>

        {/* Acciones */}
        <div ref={actionsRef} className="mt-12 flex flex-col sm:flex-row items-start gap-4">
          <Link
            href="/"
            style={{ fontFamily: "var(--font-michroma)" }}
            className="inline-flex items-center gap-3 bg-[#FE7F0E] hover:bg-[#FFB060] text-black text-xs uppercase tracking-[3px] px-8 py-4 transition-colors duration-300"
          >
            <span>Volver al inicio</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <Link
            href="/contacto"
            style={{ fontFamily: "var(--font-michroma)" }}
            className="inline-flex items-center gap-3 border border-white/20 hover:border-[#FE7F0E]/40 text-white/80 hover:text-white text-xs uppercase tracking-[3px] px-8 py-4 transition-all duration-300"
          >
            Contacto
          </Link>
        </div>

        {/* Divider + meta (igual al resto del proyecto) */}
        <div className="mt-20 w-full">
          <div className="h-[1px] bg-gradient-to-r from-[#FE7F0E] via-[#FE7F0E]/20 to-transparent mb-8" />
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FE7F0E]" />
            <p
              style={{ fontFamily: "var(--font-michroma)" }}
              className="text-white/80 text-[10px] uppercase tracking-[3px]"
            >
              Error 404 — Recurso no encontrado
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}