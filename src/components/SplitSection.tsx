const SplitSection = () => {
  return (
    <section className="grid items-center gap-14 py-[120px] md:grid-cols-[1.05fr_1fr] md:gap-20 md:py-[140px]">
      {/* texto à esquerda */}
      <div>
        <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          <span className="text-burgundy">02 —</span>
          Atendimento
        </div>

        <h2 className="mb-7 max-w-[14ch] font-display text-[clamp(40px,4.6vw,68px)] font-light leading-[1.02] tracking-[-0.025em]">
          Uma medicina <em className="font-light italic text-burgundy">vagarosa</em>,
          em tempos apressados.
        </h2>

        <p className="mb-4 max-w-[46ch] text-[17px] leading-[1.6] text-ink-soft">
          Cada consulta começa por uma escuta longa — a história, o estilo de
          vida, os sinais que o corpo dá antes que qualquer exame mostre. Só
          depois vêm os protocolos, os números e as decisões clínicas.
        </p>
        <p className="mb-4 max-w-[46ch] text-[17px] leading-[1.6] text-ink-soft">
          O consultório foi pensado como um lugar de descanso: luz natural,
          tempo sem pressa, e a certeza de que você sairá entendendo exatamente
          o que está acontecendo com o seu coração.
        </p>

        <div className="mt-9 font-display text-[18px] italic">
          "Cuidar é, sobretudo, um gesto de atenção."
          <small className="mt-1.5 block font-mono text-[11px] not-italic uppercase tracking-[0.12em] text-muted">
            — Dr. Henrique Vasconcelos · CRM-PE 00000
          </small>
        </div>
      </div>

      {/* placeholder de imagem à direita */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-line bg-[linear-gradient(180deg,hsl(30_18%_86%),#e2d8c9)]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--ink) / 0.035) 0 2px, transparent 2px 14px)",
          }}
        />
        <div className="pointer-events-none absolute inset-[14px] rounded-[1px] border border-dashed border-ink/20" />

        <span className="absolute left-[18px] top-[18px] rounded-full border border-line bg-popover px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
          Retrato · 4:5
        </span>

        <span className="absolute left-0 top-0 h-3.5 w-3.5 border border-b-0 border-r-0 border-ink-soft" />
        <span className="absolute right-0 top-0 h-3.5 w-3.5 border border-b-0 border-l-0 border-ink-soft" />
        <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border border-r-0 border-t-0 border-ink-soft" />
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border border-l-0 border-t-0 border-ink-soft" />

        <div className="absolute inset-0 grid place-items-center text-center font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
          <div>
            <span className="mb-2 block font-display text-[22px] normal-case italic tracking-normal text-ink-soft">
              imagem
            </span>
            insira sua foto aqui
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
