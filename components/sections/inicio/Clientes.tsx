import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const clients = [
  { img: "/icons/clientes/cliente-01.png", alt: "SPY Security" },
  { img: "/icons/clientes/cliente-02.png", alt: "Mary Lalaland" },
  { img: "/icons/clientes/cliente-03.png", alt: "Antares Clean" },
  { img: "/icons/clientes/cliente-04.png", alt: "EVT Corp" },
  { img: "/icons/clientes/cliente-05.png", alt: "RZ Negocios" },
  { img: "/icons/clientes/cliente-06.png", alt: "Cliente 6" },
  { img: "/icons/clientes/cliente-07.png", alt: "Cliente 6" },
  { img: "/icons/clientes/cliente-08.png", alt: "Cliente 6" },
  { img: "/icons/clientes/cliente-09.png", alt: "Cliente 6" },
  { img: "/icons/clientes/cliente-10.png", alt: "Cliente 6" },
  { img: "/icons/clientes/cliente-11.png", alt: "Cliente 6" },
];

const ClientCard = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <div className={cn(
      "relative flex h-32 w-64 items-center justify-center overflow-hidden rounded-xl px-10 transition-all duration-300 ease-in-out cursor-pointer",
      "bg-[#F2F1F5] border border-white/5", 
      "hover:bg-white hover:border-[#e85d04] hover:shadow-[0_0_20px_rgba(232,93,4,0.2)]"
    )}>
      <img
        src={img}
        alt={alt}
        className={cn(
          "max-h-16 w-auto object-contain transition-all duration-300",
          "group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100"
        )}
      />
    </div>
  );
};

export default function SeccionClientes() {
  return (
    <section className=" py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 
            className="flex items-center gap-0 text-[2.5rem] font-black tracking-[0.15em] uppercase leading-none"
            style={{ fontFamily: "var(--font-michroma)" }}
          >
            <span className="text-black">NUESTROS</span>
            <span 
              className="bg-[#e85d04] text-white px-6 py-2 inline-block ml-3"
              style={{ clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)" }}
            >
              CLIENTES
            </span>
          </h2>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[#e85d04]/50"></div>
            <p 
              className="text-black text-xl font-medium tracking-[0.2em] uppercase"
              style={{ fontFamily: "Rajdhani, sans-serif" }}
            >
              Organizaciones que confían en nosotros
            </p>
            <div className="h-px w-12 bg-[#e85d04]/50"></div>
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s] py-4">
            {clients.map((client, idx) => (
              <ClientCard key={idx} {...client} />
            ))}
          </Marquee>

        </div>

      </div>
    </section>
  );
}