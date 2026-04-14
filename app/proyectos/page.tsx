import type { Metadata } from "next";
import GaleriaProyectos from "./ProyectosClient";

export const metadata: Metadata = {
  title: "Proyectos | Blujam Group — Portafolio TI en Perú",
  description:
    "Explora el portafolio de proyectos de Blujam Group: infraestructura, desarrollo de software, seguridad de la información y automatización empresarial en Perú.",
  alternates: {
    canonical: "https://blujamgroup.com/proyectos",
  },
  openGraph: {
    title: "Proyectos | Blujam Group — Portafolio TI en Perú",
    description:
      "Explora el portafolio de proyectos de Blujam Group en infraestructura, software, seguridad y automatización.",
    url: "https://blujamgroup.com/proyectos",
  },
};
export default function Page() {
  return <GaleriaProyectos />;
}