import type { Metadata } from "next";
import Clientes from "@/components/sections/inicio/Clientes";
import CallToAction from "@/components/sections/inicio/CTA";
import Hero from "@/components/sections/inicio/Hero";
import Servicios from "@/components/sections/inicio/Servicios";
import VirtudesMarquee from "@/components/sections/inicio/Virtudes";

export const metadata: Metadata = {
  title: "Blujam Group | Tecnología, Infraestructura y Seguridad TI en Perú",
  description:
    "Blujam Group impulsa empresas peruanas con soluciones de infraestructura TI, seguridad de la información, desarrollo de software y automatización empresarial.",
  alternates: {
    canonical: "https://blujamgroup.com",
  },
  openGraph: {
    title: "Blujam Group | Tecnología, Infraestructura y Seguridad TI en Perú",
    description:
      "Blujam Group impulsa empresas peruanas con soluciones de infraestructura TI, seguridad de la información, desarrollo de software y automatización empresarial.",
    url: "https://blujamgroup.com",
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <Servicios />
      <Clientes />
      <VirtudesMarquee />
      <CallToAction />
    </>
  );
}