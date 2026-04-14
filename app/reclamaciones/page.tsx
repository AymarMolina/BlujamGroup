import type { Metadata } from "next";
import ReclamacionesPage from "./ReclamacionesClient";

export const metadata: Metadata = {
  title: "Libro de Reclamaciones | Blujam Group",
  description:
    "Registra tu reclamo o queja en el Libro de Reclamaciones de Blujam Group. Respondemos en un máximo de 15 días hábiles según la normativa peruana vigente.",
  alternates: {
    canonical: "https://blujamgroup.com/reclamaciones",
  },
  openGraph: {
    title: "Libro de Reclamaciones | Blujam Group",
    description:
      "Registra tu reclamo en Blujam Group. Respondemos en máximo 15 días hábiles.",
    url: "https://blujamgroup.com/reclamaciones",
  },
};
export default function Page() {
  return <ReclamacionesPage />;
}