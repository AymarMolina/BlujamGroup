import { Suspense } from "react";
import DetalleServicio from "./DetalleServicio";
import type { Metadata } from "next";
import { SERVICE_CATEGORIES } from "@/constants/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { slug } = await params;
  const cat = SERVICE_CATEGORIES.find((c) => c.slug === slug);

  if (!cat) return { title: "Servicio | Blujam Group" };

  return {
    title: `${cat.title} | Blujam Group`,
    description: `Blujam Group ofrece servicios de ${cat.title.toLowerCase()} en Perú. Soluciones profesionales para empresas que buscan optimizar su tecnología.`,
    alternates: {
      canonical: `https://blujamgroup.com/servicios/${slug}`,
    },
    openGraph: {
      title: `${cat.title} | Blujam Group`,
      description: `Servicios de ${cat.title.toLowerCase()} para empresas peruanas.`,
      url: `https://blujamgroup.com/servicios/${slug}`,
      images: cat.image ? [{ url: cat.image }] : [],
    },
  };
}
export async function generateStaticParams() {
  return [
    { slug: "seguridad-de-la-informacion" },
    { slug: "desarrollo-de-software" },
    { slug: "automatizacion-e-ia" },
    { slug: "infraestructura-y-soporte" },
  ];
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={null}>
      <DetalleServicio params={params} />
    </Suspense>
  );
}