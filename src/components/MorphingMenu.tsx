import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  origin?: { x: string; y: string };
}

const items = [
  {
    href: "#trajetoria",
    label: "Trajetória",
    caption: "Heart team, escuta e ciência",
  },
  {
    href: "#areas",
    label: "Áreas de atuação",
    caption: "Da revascularização ao transplante",
  },
  {
    href: "#publicos",
    label: "Pacientes & médicos",
    caption: "Dois caminhos, o mesmo cuidado",
  },
  {
    href: "#formacao",
    label: "Formação",
    caption: "Harvard · IMIP · UFPE",
  },
  {
    href: "#contato",
    label: "Contato",
    caption: "WhatsApp, e-mail e endereço",
  },
];

const MorphingMenu = ({ open, onClose, origin }: Props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
    } else if (mounted) {
      const t = setTimeout(() => setMounted(false), 620);
      return () => clearTimeout(t);
    }
  }, [open, mounted]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!mounted) return null;

  const ox = origin?.x ?? "8%";
  const oy = origin?.y ?? "5%";

  return (
    <div
      className="fixed inset-0 z-[100]"
      style={
        { "--ox": ox, "--oy": oy } as React.CSSProperties
      }
    >
      {/* painel de vidro com clip-path morphing */}
      <div
        className="lg-base absolute inset-0 bg-[#0d0a09]/82"
        style={{
          animation: open
            ? "menu-reveal 680ms cubic-bezier(.55,0,.18,1) forwards"
            : "menu-hide 580ms cubic-bezier(.55,0,.18,1) forwards",
          backdropFilter: "blur(28px) saturate(180%)",
          WebkitBackdropFilter: "blur(28px) saturate(180%)",
        }}
        onClick={onClose}
      />

      {/* glow ember orbital atrás do conteúdo */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--ember) / 0.20), transparent 60%)",
          opacity: open ? 1 : 0,
          transition: "opacity 700ms ease",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-[1240px] flex-col px-8 pt-7 text-[#f7efe8]">
        {/* topo: marca + fechar */}
        <div className="flex items-center justify-between">
          <span
            className="font-display text-[16px] tracking-tight opacity-0"
            style={{
              animation: open
                ? "menu-item 600ms cubic-bezier(.2,.7,.2,1) 120ms forwards"
                : undefined,
            }}
          >
            Dr. Cristiano Berardo
          </span>
          <button
            onClick={onClose}
            className="lg-base lg-light lg-hover inline-flex h-11 w-11 items-center justify-center rounded-full"
            aria-label="Fechar menu"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* lista de links */}
        <div className="flex flex-1 items-center">
          <ul className="space-y-2 md:space-y-3">
            {items.map((it, i) => (
              <li
                key={it.href}
                className="opacity-0"
                style={{
                  animation: open
                    ? `menu-item 720ms cubic-bezier(.2,.7,.2,1) ${220 + i * 80}ms forwards`
                    : undefined,
                }}
              >
                <a
                  href={it.href}
                  onClick={onClose}
                  className="group flex items-baseline gap-6 py-1"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff7a86]/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-display text-[clamp(40px,6.4vw,88px)] font-light italic leading-[1] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#ff7a86]">
                      {it.label}
                    </div>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b9aaa3]">
                      {it.caption}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* rodapé */}
        <div
          className="flex flex-wrap items-end justify-between gap-4 pb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b9aaa3] opacity-0"
          style={{
            animation: open
              ? "menu-item 700ms cubic-bezier(.2,.7,.2,1) 720ms forwards"
              : undefined,
          }}
        >
          <a
            href="https://wa.me/5581985390099"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[#ff7a86]"
          >
            (81) 98539-0099 · WhatsApp
          </a>
          <span className="hidden md:inline">
            Recife · Pernambuco · Nordeste
          </span>
        </div>
      </div>
    </div>
  );
};

export default MorphingMenu;
