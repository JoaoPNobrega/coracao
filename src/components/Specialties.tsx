import { useEffect, useRef, useState } from "react";

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
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="areas"
      className="relative py-[120px] md:py-[160px]"
    >
      {/* decoração parallax — blob burgundy quente */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--burgundy) / 0.18), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-32 h-[360px] w-[360px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--ember-soft) / 0.14), transparent 60%)",
        }}
      />

      {/* header */}
      <div className="relative mb-16 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
            <span className="text-burgundy">03 —</span>
            Áreas de atuação
          </div>
          <h2 className="max-w-[18ch] text-balance font-display text-[clamp(40px,4.8vw,72px)] font-light leading-[1.02] tracking-[-0.025em]">
            Cirurgia cardiovascular,{" "}
            <em className="font-light italic text-burgundy">em toda</em> a sua
            complexidade.
          </h2>
        </div>
        <p className="max-w-[42ch] text-[16px] leading-[1.6] text-ink-soft">
          Avaliação e tratamento cirúrgico de doenças cardíacas adultas, com
          foco em casos complexos e em estratégias decididas em conjunto com a
          equipe assistente.
        </p>
      </div>

      {/* grid de cards de vidro */}
      <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {areas.map((a, i) => (
          <article
            key={a.n}
            className="lg-base lg-cream lg-hover lg-sheen group relative overflow-hidden rounded-[1.6rem] p-7"
            style={{
              opacity: 0,
              animation: shown
                ? `card-rise 900ms cubic-bezier(.2,.7,.2,1) ${i * 80}ms forwards`
                : undefined,
            }}
          >
            <div className="relative flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy">
                {a.n}
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full bg-burgundy/30 transition-all duration-500 group-hover:bg-burgundy"
                style={{
                  boxShadow: "0 0 0 0 hsl(var(--burgundy) / 0)",
                }}
              />
            </div>
            <h3 className="relative mt-7 font-display text-[22px] font-light leading-[1.15] tracking-tight">
              {a.title}
            </h3>
            <p className="relative mt-3 text-[14px] leading-[1.55] text-ink-soft">
              {a.desc}
            </p>

            {/* linha animada embaixo no hover */}
            <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-burgundy via-ember to-burgundy transition-all duration-700 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
