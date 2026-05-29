import { useEffect, useRef, useState } from "react";

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

const buildBeatPath = () => {
  const starts = [160, 600, 1040, 1480];
  let d = "M 0 100";

  for (const x of starts) {
    d += ` L ${x} 100`;
    d += ` Q ${x + 18} 100 ${x + 28} 82`;
    d += ` Q ${x + 40} 62 ${x + 54} 84`;
    d += ` Q ${x + 64} 100 ${x + 78} 100`;
    d += ` L ${x + 94} 100`;
    d += ` L ${x + 101} 108`;
    d += ` L ${x + 110} 18`;
    d += ` L ${x + 119} 178`;
    d += ` L ${x + 128} 100`;
    d += ` L ${x + 152} 100`;
    d += ` Q ${x + 174} 100 ${x + 188} 76`;
    d += ` Q ${x + 206} 48 ${x + 226} 78`;
    d += ` Q ${x + 240} 100 ${x + 260} 100`;
  }

  d += " L 1800 100";
  return d;
};

const BEAT_PATH = buildBeatPath();

const Pulse = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [inView, setInView] = useState(false);
  const [len, setLen] = useState(5000);

  useEffect(() => {
    if (pathRef.current) {
      setLen(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="formacao"
      className="relative -mt-[18vh] min-h-[208vh] overflow-x-clip bg-[#100d0c] px-6 pt-[18vh] text-[#f7efe8] sm:px-8 md:min-h-[248vh]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.12)_14%,transparent_30%,rgba(0,0,0,0.22)_100%),linear-gradient(90deg,rgba(0,0,0,0.48),transparent_30%,transparent_70%,rgba(0,0,0,0.4))]"
      />

      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="relative mx-auto w-full max-w-[1240px]">
          <div className="relative isolate overflow-hidden pb-10 pt-2 md:pb-16">
            <div className="pointer-events-none absolute inset-x-[-18vw] top-[36%] z-0 h-[46%] opacity-70 md:top-[38%]">
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, hsl(var(--cream) / 0.2) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--cream) / 0.16) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage:
                  "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              }}
            />

            <svg
              viewBox="0 0 1800 200"
              preserveAspectRatio="none"
              className="absolute inset-0 block h-full w-full overflow-visible"
            >
              <path
                ref={pathRef}
                d={BEAT_PATH}
                fill="none"
                stroke="hsl(var(--ember))"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                vectorEffect="non-scaling-stroke"
                style={{
                  strokeDasharray: len,
                  strokeDashoffset: inView ? 0 : len,
                  transition:
                    "stroke-dashoffset 5.8s cubic-bezier(.55,0,.18,1)",
                  filter:
                    "drop-shadow(0 0 10px hsl(var(--ember) / 0.65)) drop-shadow(0 0 26px hsl(var(--ember) / 0.25))",
                  animation: inView
                    ? "pulseStroke 1.6s ease-in-out 6s infinite"
                    : undefined,
                }}
              />
            </svg>
          </div>

            <div className="relative z-10 text-center">
            <div className="mb-7 inline-flex items-center gap-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[#b9aaa3]">
              <span className="inline-block h-px w-7 bg-[#8f7770]" />
              Formação
              <span className="inline-block h-px w-7 bg-[#8f7770]" />
            </div>
            <h2 className="mx-auto max-w-[19ch] font-display text-[clamp(36px,5vw,72px)] font-light leading-[1.02] tracking-[-0.025em] text-[#fbf6f0] xl:max-w-none xl:whitespace-nowrap">
              Uma trajetória feita de{" "}
              <em className="font-light italic text-[#ff7a86]">estudo</em>,
              prática e ensino.
            </h2>
          </div>

            <div className="relative z-10 mt-16 grid gap-4 md:mt-20 md:grid-cols-4">
              {credentials.map((item, index) => (
                <article
                  key={item.place}
                  className="min-h-[250px] rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 opacity-0 shadow-[0_24px_70px_rgb(0_0_0_/_0.24),inset_0_1px_0_rgb(255_255_255_/_0.08)] backdrop-blur-xl transition-[opacity,transform,filter]"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translate3d(0, 0, 0)" : "translate3d(0, 22px, 0)",
                    filter: inView ? undefined : "blur(10px)",
                    transitionDuration: "1400ms",
                    transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)",
                    transitionDelay: `${7000 + index * 850}ms`,
                  }}
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d7c5bd]/65">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-[#ff9aa3]">
                    {item.period}
                  </div>
                  <h3 className="mt-3 font-display text-[30px] font-light leading-tight tracking-tight text-[#fbf6f0]">
                    {item.place}
                  </h3>
                  <p className="mt-5 text-[14px] leading-[1.6] text-[#eaded6]/72">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pulse;
