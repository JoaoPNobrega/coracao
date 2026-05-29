import { useState } from "react";
import { Heart } from "lucide-react";
import MorphingMenu from "./MorphingMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Principal"
        className="relative grid grid-cols-[1fr_auto_1fr] items-center pt-7 text-[#f8efe8]"
      >
        {/* hamburger glass (esquerda) — morpha pra X quando aberto */}
        <div>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="lg-base lg-light lg-hover lg-sheen group inline-flex h-11 items-center gap-2.5 rounded-full px-4"
          >
            <span
              className="relative inline-flex h-4 w-5 flex-col items-center justify-center"
              aria-hidden="true"
            >
              <span
                className="absolute h-px w-5 origin-center bg-current transition-all duration-500 ease-[cubic-bezier(.5,0,.2,1)]"
                style={{
                  transform: open
                    ? "translateY(0) rotate(45deg)"
                    : "translateY(-3px) rotate(0)",
                }}
              />
              <span
                className="absolute h-px w-5 origin-center bg-current transition-all duration-500 ease-[cubic-bezier(.5,0,.2,1)]"
                style={{
                  transform: open
                    ? "translateY(0) rotate(-45deg)"
                    : "translateY(3px) rotate(0)",
                }}
              />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] opacity-80 transition-opacity group-hover:opacity-100">
              {open ? "Fechar" : "Menu"}
            </span>
          </button>
        </div>

        {/* logo centralizado */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-display text-[18px] tracking-tight"
        >
          <span className="inline-grid h-[22px] w-[22px] place-items-center text-[#ff7a86]">
            <Heart className="h-full w-full" fill="currentColor" strokeWidth={0} />
          </span>
          <span className="hidden sm:inline">Dr. Cristiano Berardo</span>
          <span className="sm:hidden">Berardo</span>
        </a>

        {/* glass agendar (direita) */}
        <div className="flex justify-end">
          <a
            href="#contato"
            className="lg-base lg-light lg-hover lg-sheen inline-flex h-11 items-center gap-2 rounded-full px-5 font-mono text-[11px] uppercase tracking-[0.16em]"
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff7a86]"
              style={{
                boxShadow: "0 0 10px hsl(var(--ember) / 0.8)",
                animation: "ping 1.6s ease-out infinite",
              }}
            />
            <span className="hidden sm:inline">Agendar avaliação</span>
            <span className="sm:hidden">Agendar</span>
          </a>
        </div>
      </nav>

      <MorphingMenu open={open} onClose={() => setOpen(false)} origin={{ x: "6%", y: "5%" }} />
    </>
  );
};

export default Navbar;
