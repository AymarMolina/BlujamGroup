"use client";

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactoPage() {
  return (
    <main className="bg-[#000A15] text-white min-h-screen selection:bg-[#ff7a00] selection:text-black overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-48 pb-16 px-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff7a00]/5 blur-[150px] rounded-full -mt-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <span 
            className="text-[#ff7a00] tracking-[8px] uppercase text-[10px] mb-6 block font-bold"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            // Canal de Comunicación
          </span>
          <h1 
            className="text-5xl md:text-8xl font-bold uppercase text-white leading-none mb-6"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            TU PRÓXIMO PASO <br />
            <span className="text-[#ff7a00]">COMIENZA AQUÍ.</span>
          </h1>
        </div>
      </section>

      {/* 2. MEGA CONTENEDOR VIDRIOSO (Envuelve Formulario + Info) */}
      <section className="pb-32 px-6 relative">
        <div className="max-w-7xl mx-auto relative group">
          
          {/* LA IMAGEN DE FONDO UNIFICADA */}
          <div className="absolute inset-0 z-0 overflow-hidden border border-white/10">
            <Image 
              src="/icons/servicios/serv3.webp" 
              alt="Fondo Unificado"
              fill
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-[2s]"
            />
          </div>

          {/* EL CRISTAL (Glassmorphism que cubre todo) */}
          <div 
            className="relative z-10 p-8 md:p-16 bg-[#D9D9D9]/15  border border-white/10"
            style={{ zIndex: 10 }}
          >
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* IZQUIERDA: FORMULARIO */}
              <div className="lg:col-span-7">
                <h3 
                  className="text-[#ff7a00] text-xl uppercase mb-10 tracking-widest"
                  style={{ fontFamily: "var(--font-michroma)" }}
                >
                  Enviar Mensaje Directo
                </h3>
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                      <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Identificación</label>
                      <input type="text" placeholder="Tu nombre" className="bg-transparent w-full outline-none text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                    </div>
                    <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                      <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Organización</label>
                      <input type="text" placeholder="Empresa" className="bg-transparent w-full outline-none text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                    </div>
                  </div>
                  <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                    <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Canal de Respuesta</label>
                    <input type="email" placeholder="Email corporativo" className="bg-transparent w-full outline-none text-xl font-bold" style={{ fontFamily: "var(--font-rajdhani)" }} />
                  </div>
                  <div className="space-y-2 border-b border-white/20 focus-within:border-[#ff7a00] transition-colors pb-2">
                    <label className="text-white text-[10px] uppercase block" style={{ fontFamily: "var(--font-michroma)" }}>Detalles</label>
                    <textarea rows={3} placeholder="¿Cómo podemos colaborar?" className="bg-transparent w-full outline-none text-xl font-bold resize-none" style={{ fontFamily: "var(--font-rajdhani)" }}></textarea>
                  </div>
                  <button 
                    className="bg-[#ff7a00] text-black font-bold py-4 px-15 flex items-center gap-4 hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-black/20"
                    style={{ fontFamily: "var(--font-michroma)" }}
                  >
                    ENVIAR <Send size={18} />
                  </button>
                </form>
              </div>

              {/* DERECHA: INFO DE CONTACTO (Dentro del mismo cristal) */}
              <div className="lg:col-span-5 flex flex-col gap-8 lg:border-l lg:border-white/10 lg:pl-16">
                <div>
                  <h3 className="text-[#ff7a00] text-xl uppercase mb-8 tracking-widest" style={{ fontFamily: "var(--font-michroma)" }}>Conectividad</h3>
                  <div className="space-y-10">
                    <div>
                      <h4 className="text-[10px] text-white/80 uppercase mb-2 tracking-[3px]" style={{ fontFamily: "var(--font-michroma)" }}>Contacto</h4>
                      <p className="text-3xl text-white/80 font-bold italic leading-none" style={{ fontFamily: "var(--font-rajdhani)" }}>970 478 503</p>
                      <p className="text-3xl  text-white/80 font-bold italic leading-none mt-2" style={{ fontFamily: "var(--font-rajdhani)" }}>941 929 214</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] text-white/80 uppercase mb-2 tracking-[3px]" style={{ fontFamily: "var(--font-michroma)" }}>Correo</h4>
                      <p className="text-xl font-bold break-all" style={{ fontFamily: "var(--font-rajdhani)" }}>CONECTA@BLUJAMGROUP.COM</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    window.open(
                      `https://wa.me/51970478503?text=${encodeURIComponent("Hola, me gustaría contactarlos para más información.")}`,
                      "_blank"
                    )
                  }
                  className="bg-[#e85d04] hover:bg-[#ff6d0a] text-white py-2 px-10 rounded-sm font-bold w-fit uppercase transition-all shadow-[0_0_15px_rgba(232,93,4,0.3)] active:scale-95"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  Contactar Ahora
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}