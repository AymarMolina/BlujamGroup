import type { Metadata } from "next";
import TerminosCondiciones from "./TerminosClient";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Blujam Group",
  description:
    "Lee los Términos y Condiciones de uso del sitio web de Blujam Group Tech Global Solutions S.A.C., empresa de tecnología registrada en Lima, Perú.",
  alternates: {
    canonical: "https://blujamgroup.com/terminos-condiciones",
  },
  openGraph: {
    title: "Términos y Condiciones | Blujam Group",
    description:
      "Términos y Condiciones de uso del sitio web de Blujam Group.",
    url: "https://blujamgroup.com/terminos-condiciones",
  },
  robots: { index: false },
};
export default function Page() {
  return <TerminosCondiciones />;
}