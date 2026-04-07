import Clientes from "@/components/sections/inicio/Clientes";
import CallToAction from "@/components/sections/inicio/CTA";
import Hero from "@/components/sections/inicio/Hero";
import Servicios from "@/components/sections/inicio/Servicios";
import VirtudesMarquee from "@/components/sections/inicio/Virtudes";

export default function Page() {
  return (
    <>
    <Hero/>
    <Servicios/>
    <Clientes/>
    <VirtudesMarquee/>
    <CallToAction/>
    </>
  );
}