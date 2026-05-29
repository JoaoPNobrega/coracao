import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-7 text-[#f8efe8]">
      <a href="#" className="flex items-center gap-2.5 font-display text-[18px] tracking-tight">
        <span className="inline-grid h-[22px] w-[22px] place-items-center text-[#ff7a86]">
          <Heart className="h-full w-full" fill="currentColor" strokeWidth={0} />
        </span>
        Dr. Cristiano Berardo
      </a>

      <div className="hidden gap-9 text-sm text-[#f8efe8]/75 md:flex">
        <a href="#trajetoria" className="transition-colors hover:text-white">Trajetória</a>
        <a href="#areas" className="transition-colors hover:text-white">Áreas</a>
        <a href="#publicos" className="transition-colors hover:text-white">Pacientes & médicos</a>
        <a href="#formacao" className="transition-colors hover:text-white">Formação</a>
        <a href="#contato" className="transition-colors hover:text-white">Contato</a>
      </div>

      <Button variant="pill" size="pill" asChild>
        <a className="border-[#f8efe8]/70 text-[#f8efe8] hover:bg-[#f8efe8] hover:text-[#171211]" href="#contato">
          Agendar avaliação
        </a>
      </Button>
    </nav>
  );
};

export default Navbar;
