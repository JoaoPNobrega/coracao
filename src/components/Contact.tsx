import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Instagram, Linkedin, MessageCircle } from "lucide-react";

const WHATSAPP = "5581985390099";
const WHATSAPP_DISPLAY = "(81) 98539-0099";

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="contato"
      className="relative py-[120px] md:py-[180px]"
    >
      {/* decoração — glow ember grande atrás do título */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse, hsl(var(--ember) / 0.10), transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--burgundy) / 0.16), transparent 60%)",
        }}
      />

      {/* header centralizado */}
      <div
        className="relative mb-16 text-center"
        style={{
          opacity: 0,
          animation: shown
            ? "card-rise 1000ms cubic-bezier(.2,.7,.2,1) 0ms forwards"
            : undefined,
        }}
      >
        <div className="mb-7 inline-flex items-center gap-4 font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
          <span className="inline-block h-px w-7 bg-muted" />
          06 — Contato
          <span className="inline-block h-px w-7 bg-muted" />
        </div>
        <h2 className="mx-auto max-w-[20ch] text-balance font-display text-[clamp(44px,5.8vw,88px)] font-light leading-[0.98] tracking-[-0.03em]">
          Vamos conversar{" "}
          <em className="font-light italic text-burgundy">sobre o seu caso</em>
          .
        </h2>
        <p className="mx-auto mt-8 max-w-[52ch] text-[16px] leading-[1.6] text-ink-soft">
          Para agendamento, segunda opinião ou discussão de casos entre colegas
          — a forma mais rápida é o WhatsApp da secretaria. Você também pode
          escrever por e-mail.
        </p>
      </div>

      {/* Big Liquid Glass WhatsApp card */}
      <div
        className="relative mx-auto max-w-[820px]"
        style={{
          opacity: 0,
          animation: shown
            ? "card-rise-scale 1200ms cubic-bezier(.2,.7,.2,1) 200ms forwards"
            : undefined,
        }}
      >
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
          className="lg-base lg-ink lg-hover lg-sheen group relative block overflow-hidden rounded-[2rem] p-8 md:rounded-[2.5rem] md:p-12"
        >
          {/* anel pulsante de ember */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full blur-[80px]"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--ember) / 0.32), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col items-start gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#ff7a86]">
                <span className="relative inline-flex h-2 w-2">
                  <span
                    className="absolute inset-0 rounded-full bg-[#ff7a86]"
                    style={{ animation: "ping 1.6s ease-out infinite" }}
                  />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff7a86]" />
                </span>
                Linha direta · WhatsApp
              </div>

              <div className="mt-5 font-display text-[clamp(34px,4.6vw,64px)] font-light leading-none tracking-tight text-cream">
                {WHATSAPP_DISPLAY}
              </div>

              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#b9aaa3]">
                Atendimento direto da secretaria · Recife — PE
              </div>
            </div>

            {/* botão call-to-action grande */}
            <div className="lg-base lg-light lg-hover lg-sheen group/btn inline-flex shrink-0 items-center gap-3 rounded-full px-6 py-4 font-mono text-[12px] uppercase tracking-[0.14em]">
              <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
              <span>Iniciar conversa</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </a>
      </div>

      {/* cards de informação em vidro */}
      <div className="relative mx-auto mt-6 grid max-w-[820px] gap-4 md:grid-cols-3">
        {[
          {
            label: "Atendimento",
            value: "Recife — PE",
            sub: "PE · RMR · Interior · Nordeste",
            delay: 320,
          },
          {
            label: "E-mail",
            value: "cristianoberardo",
            sub: "cristiano@cardioin.com.br",
            delay: 400,
            href: "mailto:cristianoberardo@gmail.com",
          },
          {
            label: "Redes",
            value: null,
            sub: null,
            delay: 480,
            isSocial: true,
          },
        ].map((card, i) => {
          const Tag = card.href && !card.isSocial ? "a" : "div";
          const props =
            card.href && !card.isSocial
              ? { href: card.href }
              : {};
          return (
            <Tag
              key={i}
              {...(props as Record<string, string>)}
              className="lg-base lg-cream lg-hover relative block overflow-hidden rounded-[1.5rem] p-6"
              style={{
                opacity: 0,
                animation: shown
                  ? `card-rise 900ms cubic-bezier(.2,.7,.2,1) ${card.delay}ms forwards`
                  : undefined,
              }}
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {card.label}
              </div>
              {card.isSocial ? (
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.instagram.com/dr.cristianoberardo/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="lg-base lg-cream lg-hover inline-grid h-10 w-10 place-items-center rounded-full"
                  >
                    <Instagram className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/cristiano-berardo-cunha-md-msc-phd-8b193b6a/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="lg-base lg-cream lg-hover inline-grid h-10 w-10 place-items-center rounded-full"
                  >
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </div>
              ) : (
                <>
                  <div className="mt-3 font-display text-[18px] font-light leading-snug">
                    {card.value}
                    {card.label === "E-mail" && (
                      <span className="text-ink-soft">@gmail.com</span>
                    )}
                  </div>
                  {card.sub && (
                    <p className="mt-1 text-[12px] leading-[1.5] text-ink-soft">
                      {card.sub}
                    </p>
                  )}
                </>
              )}
            </Tag>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
