import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between pt-7">
      <div className="flex items-center gap-2.5 font-display text-[18px] tracking-tight">
        <span className="inline-grid h-[22px] w-[22px] place-items-center text-burgundy">
          <Heart className="h-full w-full" fill="currentColor" strokeWidth={0} />
        </span>
        Dr. Henrique Vasconcelos
      </div>

      <div className="hidden gap-9 text-sm text-ink-soft md:flex">
        <a href="#" className="transition-colors hover:text-burgundy">Sobre</a>
        <a href="#" className="transition-colors hover:text-burgundy">Especialidades</a>
        <a href="#" className="transition-colors hover:text-burgundy">Consultório</a>
        <a href="#" className="transition-colors hover:text-burgundy">Contato</a>
      </div>

      <Button variant="pill" size="pill" asChild>
        <a href="#">Agendar consulta</a>
      </Button>
    </nav>
  );
};

export default Navbar;
