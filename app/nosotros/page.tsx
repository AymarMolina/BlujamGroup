import type { Metadata } from "next";
import NosotrosPage from "./NosotrosClient";

export const metadata: Metadata = {
  title: "Nosotros | Blujam Group — Tecnología TI en Perú",
  description:
    "Conoce a Blujam Group, empresa peruana especializada en tecnología, infraestructura TI, seguridad de la información y automatización empresarial.",
  alternates: {
    canonical: "https://blujamgroup.com/nosotros",
  },
  openGraph: {
    title: "Nosotros | Blujam Group — Tecnología TI en Perú",
    description:
      "Conoce a Blujam Group, empresa peruana especializada en tecnología, infraestructura TI, seguridad de la información y automatización empresarial.",
    url: "https://blujamgroup.com/nosotros",
  },
};
export default function Page() {
  return <NosotrosPage />;
}