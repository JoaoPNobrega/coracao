import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-7">
      <a href="#" className="flex items-center gap-2.5 font-display text-[18px] tracking-tight">
        <span className="inline-grid h-[22px] w-[22px] place-items-center text-burgundy">
          <Heart className="h-full w-full" fill="currentColor" strokeWidth={0} />
        </span>
        Dr. Cristiano Berardo
      </a>

      <div className="hidden gap-9 text-sm text-ink-soft md:flex">
        <a href="#trajetoria" className="transition-colors hover:text-burgundy">Trajetória</a>
        <a href="#areas" className="transition-colors hover:text-burgundy">Áreas</a>
        <a href="#publicos" className="transition-colors hover:text-burgundy">Pacientes & médicos</a>
        <a href="#formacao" className="transition-colors hover:text-burgundy">Formação</a>
        <a href="#contato" className="transition-colors hover:text-burgundy">Contato</a>
      </div>

      <Button variant="pill" size="pill" asChild>
        <a href="#contato">Agendar avaliação</a>
      </Button>
    </nav>
  );
};

export default Navbar;
