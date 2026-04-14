import type { Metadata } from "next";
import ContactoPage from "./page";

export const metadata: Metadata = {
  title: "Contacto | Blujam Group",
  description:
    "Ponte en contacto con Blujam Group. Llámanos, escríbenos por WhatsApp o envíanos un mensaje para cotizar soluciones TI a medida para tu empresa.",
  alternates: {
    canonical: "https://blujamgroup.com/contacto",
  },
  openGraph: {
    title: "Contacto | Blujam Group",
    description:
      "Ponte en contacto con Blujam Group para cotizar soluciones de tecnología e infraestructura TI.",
    url: "https://blujamgroup.com/contacto",
  },
};
export default function Page() {
  return <ContactoPage />;
}