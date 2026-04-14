"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Send } from 'lucide-react';

const prioridades = ['Baja', 'Media', 'Alta', 'Urgente'];

export default function ReclamacionesPage() {
  const [prioridad, setPrioridad] = useState('Baja');

  return (
    <main className="bg-[#000A15] text-white min-h-screen selection:bg-[#ff7a00] selection:text-black overflow-hidden">

      <section className="relative pt-28 sm:pt-36 md:pt-48 pb-10 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#ff7a00]/5 blur-[150px] rounded-full -mt-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span
            className="text-[#ff7a00] tracking-[4px] sm:tracking-[8px] uppercase text-[10px] mb-4 sm:mb-6 block font-bold"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            // Libro de Reclamaciones
          </span>
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-white leading-none mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            TU RECLAMO ES <br />
            <span className="text-[#ff7a00]">NUESTRA PRIORIDAD.</span>
          </h1>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative group">
          <div className="absolute inset-0 z-0 overflow-hidden border border-white/10">
            <Image
              src="/icons/servicios/serv3.webp"
              alt="Fondo Reclamaciones"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]"
            />
          </div>

          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16 bg-[#D9D9D9]/15 border border-white/10">
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">

              {/* Formulario */}
              <div className="lg:col-span-7">
                <h3
                  className="text-[#ff7a00] text-base sm:text-xl uppercase mb-6 sm:mb-10 tracking-widest"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  Registrar Reclamo
                </h3>
                <form className="space-y-6 sm:space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                      <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Nombre Completo</label>
                      <input type="text" placeholder="Tu nombre completo" className="bg-transparent w-full outline-none text-lg sm:text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                    </div>
                    <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                      <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>DNI / RUC</label>
                      <input type="text" placeholder="Nº de documento" className="bg-transparent w-full outline-none text-lg sm:text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                      <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Correo Electrónico</label>
                      <input type="email" placeholder="correo@empresa.com" className="bg-transparent w-full outline-none text-lg sm:text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                    </div>
                    <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                      <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Teléfono</label>
                      <input type="tel" placeholder="+51 000 000 000" className="bg-transparent w-full outline-none text-lg sm:text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                    </div>
                  </div>


                  {/* Prioridad */}
                  <div>
                    <label className="text-white text-[10px] uppercase block mb-3" style={{ fontFamily: "var(--font-michroma)" }}>Prioridad</label>
                    <div className="flex flex-wrap gap-2">
                      {prioridades.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPrioridad(p)}
                          className={`border px-4 py-2 text-[11px] uppercase tracking-widest transition-all font-bold ${
                            prioridad === p
                              ? 'border-[#ff7a00] text-[#ff7a00] bg-[#ff7a00]/10'
                              : 'border-white/20 text-white/50 hover:border-[#ff7a00] hover:text-[#ff7a00]'
                          }`}
                          style={{ fontFamily: "var(--font-michroma)" }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                    <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Descripción del Reclamo</label>
                    <textarea rows={3} placeholder="Detalla qué ocurrió, cuándo y cómo..." className="bg-transparent w-full outline-none text-lg sm:text-xl font-bold resize-none" style={{ fontFamily: "var(--font-rajdhani)" }} />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#ff7a00] text-black font-bold py-3 sm:py-4 px-8 sm:px-12 flex items-center gap-3 sm:gap-4 hover:bg-white transition-all active:scale-95 shadow-xl shadow-black/20"
                    style={{ fontFamily: "var(--font-michroma)" }}
                  >
                    ENVIAR RECLAMO <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </button>
                </form>
              </div>

              {/* Info lateral */}
              <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-16">
                <div>
                  <h3 className="text-[#ff7a00] text-base sm:text-xl uppercase mb-6 sm:mb-8 tracking-widest" style={{ fontFamily: "var(--font-michroma)" }}>
                    Información
                  </h3>
                  <div className="space-y-7 sm:space-y-8">
                    <div>
                      <h4 className="text-[10px] text-white/80 uppercase mb-2 tracking-[3px]" style={{ fontFamily: "var(--font-michroma)" }}>Contacto</h4>
                      <p className="text-2xl sm:text-3xl text-white/80 font-bold italic" style={{ fontFamily: "var(--font-rajdhani)" }}>970 478 503</p>
                      <p className="text-2xl sm:text-3xl text-white/80 font-bold italic mt-1" style={{ fontFamily: "var(--font-rajdhani)" }}>941 929 214</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] text-white/80 uppercase mb-2 tracking-[3px]" style={{ fontFamily: "var(--font-michroma)" }}>Correo</h4>
                      <p className="text-base sm:text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }}>CONECTA@BLUJAMGROUP.COM</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] text-white/80 uppercase mb-2 tracking-[3px]" style={{ fontFamily: "var(--font-michroma)" }}>Plazo de Respuesta</h4>
                      <div className="border-l-4 border-[#ff7a00] pl-4 bg-[#ff7a00]/5 py-3 pr-3">
                        <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-rajdhani)" }}>
                          Respondemos en un máximo de <span className="text-[#ff7a00] font-bold">15 días hábiles</span> según normativa vigente.
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[10px] text-white/80 uppercase mb-2 tracking-[3px]" style={{ fontFamily: "var(--font-michroma)" }}>Seguimiento</h4>
                      <p className="text-sm text-white/40" style={{ fontFamily: "var(--font-rajdhani)" }}>Recibirás un código en tu correo para rastrear el estado de tu reclamo.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => window.open(`https://wa.me/51970478503?text=${encodeURIComponent("Hola, quisiera registrar un reclamo.")}`, "_blank")}
                  className="bg-[#e85d04] hover:bg-[#ff6d0a] text-white py-2 px-8 sm:px-10 font-bold w-full uppercase transition-all shadow-[0_0_15px_rgba(232,93,4,0.3)] active:scale-95"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Reclamar por WhatsApp
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}