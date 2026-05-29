import { ArrowUpRight, Instagram, Linkedin, MessageCircle } from "lucide-react";

const WHATSAPP = "5581985390099";
const WHATSAPP_DISPLAY = "(81) 98539-0099";

const Contact = () => {
  return (
    <section id="contato" className="py-[120px] md:py-[160px]">
      <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:gap-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
            <span className="text-burgundy">06 —</span>
            Contato
          </div>

          <h2 className="max-w-[16ch] font-display text-[clamp(44px,5.5vw,80px)] font-light leading-[0.98] tracking-[-0.03em]">
            Vamos conversar{" "}
            <em className="font-light italic text-burgundy">sobre o seu caso</em>.
          </h2>

          <p className="mt-8 max-w-[44ch] text-[16px] leading-[1.6] text-ink-soft">
            Para agendamento, segunda opinião ou discussão de casos entre
            colegas — a forma mais rápida é o WhatsApp da secretaria. Você
            também pode escrever por e-mail.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-4 rounded-full border border-ink bg-ink px-6 py-4 text-cream transition-colors hover:bg-burgundy hover:border-burgundy"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="font-mono text-[12px] uppercase tracking-[0.14em]">
              WhatsApp · {WHATSAPP_DISPLAY}
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* coluna direita - detalhes */}
        <div
          className="grid content-start gap-px overflow-hidden rounded-[1.75rem] border border-line bg-line"
          style={{
            boxShadow:
              "0 20px 40px -28px rgba(26,22,20,0.16), 0 4px 12px -8px rgba(26,22,20,0.08)",
          }}
        >
          <div className="bg-cream p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Atendimento
            </div>
            <div className="mt-2 font-display text-[20px] font-light leading-snug">
              Recife — Pernambuco
            </div>
            <p className="mt-1 text-[13px] text-ink-soft">
              Pernambuco · Região Metropolitana · Interior · Nordeste
            </p>
          </div>

          <div className="bg-cream p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              E-mail
            </div>
            <a
              href="mailto:cristianoberardo@gmail.com"
              className="mt-2 block font-display text-[18px] font-light leading-snug hover:text-burgundy"
            >
              cristianoberardo@gmail.com
            </a>
            <a
              href="mailto:cristiano@cardioin.com.br"
              className="mt-1 block text-[13px] text-ink-soft hover:text-burgundy"
            >
              cristiano@cardioin.com.br
            </a>
          </div>

          <div className="bg-cream p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              Redes
            </div>
            <div className="mt-3 flex gap-3">
              <a
                href="https://www.instagram.com/dr.cristianoberardo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-burgundy hover:text-burgundy"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/cristiano-berardo-cunha-md-msc-phd-8b193b6a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-burgundy hover:text-burgundy"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
