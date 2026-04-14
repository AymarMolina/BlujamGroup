import type { Metadata } from "next";
import PoliticasClient from "./PoliticasClient";

export const metadata: Metadata = {
  title: "Política de Privacidad | Blujam Group",
  description: "Conoce cómo Blujam Group recopila, usa y protege tu información personal...",
  alternates: { canonical: "https://blujamgroup.com/politicas" },
  openGraph: {
    title: "Política de Privacidad | Blujam Group",
    description: "Conoce cómo Blujam Group protege tu información personal.",
    url: "https://blujamgroup.com/politicas",
  },
  robots: { index: false },
};

export default function Page() {
  return <PoliticasClient />;
}