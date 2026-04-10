import { Suspense } from "react";
import DetalleServicio from "./DetalleServicio";

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