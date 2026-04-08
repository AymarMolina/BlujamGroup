"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;

    if (visible) {
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    } else {
      gsap.to(btnRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.8,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [visible]);

  const handleClick = () => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
      onComplete: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    });
  };

  const handleEnter = () => {
    gsap.to(btnRef.current, { y: -5, duration: 0.25, ease: "power2.out" });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, { y: 0, duration: 0.25, ease: "power2.out" });
  };

  // Siempre renderizamos el botón para que GSAP pueda animarlo al salir
  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        opacity: 0,
        fontFamily: "var(--font-michroma)",
      }}
      className="fixed bottom-24 right-6 z-50 w-12 h-12 bg-[#ff7a00] flex items-center justify-center pointer-events-auto"
      aria-label="Volver arriba"
    >
      <svg
        width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="black"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}