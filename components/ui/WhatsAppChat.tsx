"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const PHONE = "51970478503";

const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [msg, setMsg] = useState("");

  const btnRef  = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  // Entrada del botón al montar + pulso periódico
  useEffect(() => {
    setMounted(true);

    gsap.fromTo(
      btnRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)", delay: 0.8 }
    );

    const pulse = gsap.timeline({ repeat: -1, repeatDelay: 4 });
    pulse
      .to(btnRef.current, { scale: 1.15, duration: 0.2, ease: "power1.out" })
      .to(btnRef.current, { scale: 1,    duration: 0.3, ease: "elastic.out(1, 0.4)" });

    return () => { pulse.kill(); };
  }, []);

  // Apertura / cierre del panel
  useEffect(() => {
    if (!panelRef.current) return;

    if (open) {
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 20, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.38,
          ease: "back.out(1.4)",
          // transformOrigin via gsap para no interferir con CSS
          transformOrigin: "bottom right",
        }
      );
    } else if (mounted) {
      gsap.to(panelRef.current, {
        opacity: 0, y: 16, scale: 0.92,
        duration: 0.22,
        ease: "power2.in",
        transformOrigin: "bottom right",
      });
    }
  }, [open]);

  const handleBtnClick = () => {
    gsap.fromTo(
      rippleRef.current,
      { scale: 0, opacity: 0.5 },
      { scale: 2.5, opacity: 0, duration: 0.55, ease: "power2.out" }
    );
    gsap.to(btnRef.current, {
      rotation: open ? 0 : 18,
      duration: 0.3,
      ease: "back.out(2)",
    });
    setOpen((v) => !v);
  };

  const handleBtnEnter = () =>
    gsap.to(btnRef.current, { scale: 1.12, duration: 0.2, ease: "power2.out" });

  const handleBtnLeave = () =>
    gsap.to(btnRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });

  const send = () => {
    const text = msg.trim() || "Hola, me gustaría más información sobre sus servicios.";
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
    setMsg("");
    setOpen(false);
  };

  return (
    <>
      {/*
        Panel: SIN overflow-hidden en el wrapper para que GSAP pueda
        animar scale sin cortar el contenido.
        El clip visual (bordes redondeados) se delega a un div interior.
      */}
      <div
        ref={panelRef}
        style={{
          opacity: 0,
          pointerEvents: open ? "auto" : "none",
          // transformOrigin aquí para que GSAP lo respete
          transformOrigin: "bottom right",
        }}
        className="fixed bottom-40 right-6 z-50 w-72 shadow-2xl"
      >
        {/* Wrapper interior con overflow-hidden para clip visual */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#000A15]">

          {/* Header */}
          <div className="bg-[#25d366] px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-[#25d366]">
              <WhatsAppIcon size={20} />
            </div>
            <div>
              <p
                className="text-white font-semibold text-sm"
                style={{ fontFamily: "var(--font-michroma)" }}
              >
                Blujam Group
              </p>
              <p
                className="text-white/80 text-xs tracking-widest"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                ● En línea
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-white/70 hover:text-white text-xl leading-none transition-colors"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div
              className="bg-white/5 rounded-xl rounded-tl-none p-3 text-sm text-white/80 leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              ¡Hola! 👋 ¿En qué podemos ayudarte hoy?
            </div>
            <div className="flex gap-2">
              <input
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escribe un mensaje..."
                style={{ fontFamily: "var(--font-rajdhani)" }}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#25d366]/60 transition-colors"
              />
              <button
                onClick={send}
                className="w-9 h-9 bg-[#25d366] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#1fb855] active:scale-95 transition-all"
              >
                <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Botón flotante */}
      <button
        ref={btnRef}
        onClick={handleBtnClick}
        onMouseEnter={handleBtnEnter}
        onMouseLeave={handleBtnLeave}
        style={{ opacity: 0 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden"
        aria-label="Abrir chat de WhatsApp"
      >
        <span
          ref={rippleRef}
          className="absolute inset-0 rounded-full bg-white/30 pointer-events-none"
          style={{ transform: "scale(0)", opacity: 0 }}
        />
        <WhatsAppIcon size={28} />
      </button>
    </>
  );
}