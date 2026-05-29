const credentials = [
  {
    period: "Pós-doutorado",
    place: "Harvard Medical School",
    detail: "Brigham and Women's Hospital · Ciências Cardiovasculares · Boston, EUA",
  },
  {
    period: "Doutorado",
    place: "IMIP",
    detail: "Saúde Integral · Instituto de Medicina Integral Prof. Fernando Figueira",
  },
  {
    period: "Mestrado",
    place: "UFPE",
    detail: "Cirurgia · Universidade Federal de Pernambuco",
  },
  {
    period: "Atuação atual",
    place: "Recife — PE",
    detail:
      "Coordenação de residência médica, gestão em cardiologia e cirurgia cardiovascular em serviços de referência",
  },
];

const pillars = [
  { k: "20+", v: "Anos de experiência em cirurgia cardiovascular" },
  { k: "03", v: "Países de formação acadêmica e clínica" },
  { k: "∞", v: "Casos discutidos em heart team com a equipe assistente" },
];

const Credentials = () => {
  return (
    <section id="formacao" className="bg-secondary/40 py-[120px] md:py-[140px]">
      <div className="mx-auto max-w-[1240px] px-8">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:gap-24">
          {/* coluna esquerda */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
              <span className="text-burgundy">05 —</span>
              Formação
            </div>
            <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light leading-[1.04] tracking-[-0.025em]">
              Uma trajetória feita de{" "}
              <em className="font-light italic text-burgundy">estudo</em>,
              prática e ensino.
            </h2>
            <p className="mt-7 max-w-[40ch] text-[15px] leading-[1.6] text-ink-soft">
              Mais de duas décadas dedicadas à medicina cardiovascular, com
              passagem por instituições de referência no Brasil e no exterior.
              A formação acadêmica caminha junto com a atuação clínica, o
              ensino de novos cirurgiões e a pesquisa em inovação.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {pillars.map((p) => (
                <div key={p.v}>
                  <div className="font-display text-[36px] font-light leading-none tracking-tight text-burgundy">
                    {p.k}
                  </div>
                  <div className="mt-3 text-[12px] leading-[1.45] text-ink-soft">
                    {p.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* coluna direita - timeline */}
          <div>
            <ol className="relative">
              {credentials.map((c, i) => (
                <li
                  key={c.place}
                  className="grid grid-cols-[auto_1fr] gap-x-8 border-t border-line py-9 md:gap-x-12"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                    <span className="text-burgundy">{String(i + 1).padStart(2, "0")}</span>
                    <br />
                    {c.period}
                  </div>
                  <div>
                    <h3 className="font-display text-[28px] font-light leading-tight tracking-tight">
                      {c.place}
                    </h3>
                    <p className="mt-2 max-w-[44ch] text-[14px] leading-[1.55] text-ink-soft">
                      {c.detail}
                    </p>
                  </div>
                </li>
              ))}
              <li className="border-t border-line" />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
