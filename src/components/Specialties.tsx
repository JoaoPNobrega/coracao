const areas = [
  {
    n: "01",
    title: "Revascularização do miocárdio",
    desc: "Cirurgia de pontes coronárias para doença coronariana grave, com técnica off-pump quando indicada.",
  },
  {
    n: "02",
    title: "Cirurgia valvar",
    desc: "Plastias e trocas de valva mitral, aórtica e tricúspide — incluindo abordagens minimamente invasivas.",
  },
  {
    n: "03",
    title: "Cirurgia da aorta",
    desc: "Tratamento de aneurismas e dissecções, com cirurgia convencional e procedimentos híbridos.",
  },
  {
    n: "04",
    title: "Transplante cardíaco",
    desc: "Avaliação, indicação e seguimento de pacientes com insuficiência cardíaca avançada candidatos a transplante.",
  },
  {
    n: "05",
    title: "TAVI e terapias estruturais",
    desc: "Discussão de implante valvar aórtico transcateter e demais terapias estruturais em heart team.",
  },
  {
    n: "06",
    title: "Assistência circulatória",
    desc: "Suporte mecânico ao paciente crítico, com decisão em equipe multidisciplinar e cuidado pré e pós-operatório.",
  },
  {
    n: "07",
    title: "Cirurgia minimamente invasiva",
    desc: "Abordagens por mini-toracotomia e técnicas que reduzem trauma, tempo de recuperação e dor.",
  },
  {
    n: "08",
    title: "Segunda opinião",
    desc: "Revisão de exames, indicações cirúrgicas e estratégias terapêuticas em casos cardiovasculares complexos.",
  },
];

const Specialties = () => {
  return (
    <section id="areas" className="py-[120px] md:py-[140px]">
      <div className="mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
            <span className="text-burgundy">03 —</span>
            Áreas de atuação
          </div>
          <h2 className="max-w-[18ch] font-display text-[clamp(40px,4.6vw,68px)] font-light leading-[1.02] tracking-[-0.025em]">
            Cirurgia cardiovascular,{" "}
            <em className="font-light italic text-burgundy">em toda</em> a sua complexidade.
          </h2>
        </div>
        <p className="max-w-[42ch] text-[16px] leading-[1.6] text-ink-soft">
          Avaliação e tratamento cirúrgico de doenças cardíacas adultas, com
          foco em casos complexos e em estratégias decididas em conjunto com a
          equipe assistente.
        </p>
      </div>

      <div
        className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-4"
        style={{
          boxShadow:
            "0 20px 40px -28px rgba(26,22,20,0.16), 0 4px 12px -8px rgba(26,22,20,0.08)",
        }}
      >
        {areas.map((a) => (
          <article
            key={a.n}
            className="group relative overflow-hidden bg-cream p-8 transition-colors duration-300 hover:bg-popover"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy">
                {a.n}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-burgundy/40 transition-all duration-300 group-hover:bg-burgundy" />
            </div>
            <h3 className="mt-6 font-display text-[22px] font-light leading-[1.15] tracking-tight">
              {a.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.55] text-ink-soft">{a.desc}</p>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-burgundy transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
