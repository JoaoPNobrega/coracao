import { useEffect, useRef, useState } from "react";

// monta 3 batimentos com longos repousos entre eles dentro de um viewBox 1600x200
const buildBeatPath = () => {
  const starts = [220, 720, 1220];
  let d = "M 0 100";
  for (const x of starts) {
    d += ` L ${x} 100`;
    d += ` L ${x + 20} 100`;
    d += ` Q ${x + 30} 100 ${x + 38} 82`; // P sobe
    d += ` Q ${x + 48} 65 ${x + 58} 82`;
    d += ` Q ${x + 66} 100 ${x + 75} 100`;
    d += ` L ${x + 90} 100`; // PR
    d += ` L ${x + 96} 105`; // Q
    d += ` L ${x + 103} 18`; // R (pico)
    d += ` L ${x + 110} 180`; // S (vale)
    d += ` L ${x + 117} 100`;
    d += ` L ${x + 135} 100`; // ST
    d += ` Q ${x + 150} 100 ${x + 160} 78`; // T sobe
    d += ` Q ${x + 175} 50 ${x + 190} 78`;
    d += ` Q ${x + 200} 100 ${x + 215} 100`;
    d += ` L ${x + 260} 100`; // pós-T
  }
  d += " L 1600 100";
  return d;
};

const BEAT_PATH = buildBeatPath();

const Pulse = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [inView, setInView] = useState(false);
  const [len, setLen] = useState(5000);

  useEffect(() => {
    if (pathRef.current) {
      setLen(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-cream px-6 py-[100px] sm:px-8 md:py-[140px]"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div className="inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
            <span className="inline-block h-px w-7 bg-muted" />
            Princípio
          </div>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted md:inline">
            Heart Team · Cuidado Compartilhado
          </span>
        </div>

        {/* monitor card */}
        <div
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-ink/15 bg-ink text-cream"
          style={{
            boxShadow:
              "0 40px 80px -24px rgba(26,22,20,0.42), 0 12px 24px -12px rgba(26,22,20,0.28), inset 0 1px 0 0 hsl(36 33% 96% / 0.06)",
          }}
        >
          {/* halo sutil interno */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 110%, hsl(353 56% 50% / 0.16), transparent 60%)",
            }}
          />

          {/* top chrome */}
          <div className="relative flex items-center justify-between border-b border-cream/10 px-7 py-5 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 md:px-12">
            <div className="flex items-center gap-3">
              <span
                className="inline-block h-2 w-2 rounded-full bg-ember"
                style={{ animation: "ping 1.4s ease-out infinite" }}
              />
              <span>ECG · Derivação II · 25mm/s</span>
            </div>
            <span className="hidden md:inline">Spec · 003 / 2026</span>
          </div>

          {/* corpo */}
          <div className="relative px-7 pb-10 pt-14 sm:px-10 md:px-16 md:pb-14 md:pt-20">
            <h2 className="max-w-[22ch] font-display text-[clamp(36px,5.6vw,84px)] font-light leading-[1.02] tracking-[-0.028em]">
              Toda cirurgia começa muito antes da sala — começa em uma{" "}
              <em className="font-light italic text-ember">decisão</em> tomada em equipe.
            </h2>

            {/* ECG canvas */}
            <div className="relative mt-14 h-[160px] w-full md:mt-20 md:h-[220px]">
              {/* grid medical */}
              <div
                className="absolute inset-0 opacity-[0.16]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, hsl(var(--cream) / 0.22) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--cream) / 0.22) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)",
                }}
              />

              <svg
                viewBox="0 0 1600 200"
                preserveAspectRatio="none"
                className="block h-full w-full overflow-visible"
              >
                <path
                  ref={pathRef}
                  d={BEAT_PATH}
                  fill="none"
                  stroke="hsl(var(--ember))"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  style={{
                    strokeDasharray: len,
                    strokeDashoffset: inView ? 0 : len,
                    transition:
                      "stroke-dashoffset 6.2s cubic-bezier(.55,0,.18,1)",
                    filter:
                      "drop-shadow(0 0 10px hsl(var(--ember) / 0.55)) drop-shadow(0 0 22px hsl(var(--ember) / 0.18))",
                    animation: inView
                      ? "pulseStroke 1.6s ease-in-out 6.4s infinite"
                      : undefined,
                  }}
                />
              </svg>

              {/* ponto vivo no fim */}
              <span
                className="absolute right-[1%] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-ember opacity-0"
                style={{
                  animation: inView
                    ? "appear .4s ease 6.4s forwards, ping 1.6s ease-out 6.4s infinite"
                    : undefined,
                  boxShadow: "0 0 16px hsl(var(--ember) / 0.85)",
                }}
              />
            </div>
          </div>

          {/* bottom chrome */}
          <div className="relative grid grid-cols-2 gap-y-6 border-t border-cream/10 px-7 py-7 md:grid-cols-4 md:px-16">
            {[
              { k: "BPM", v: "72" },
              { k: "Ritmo", v: "Sinusal" },
              { k: "PR / QT", v: "160 · 380" },
              { k: "Eixo", v: "+60°" },
            ].map((item, i) => (
              <div key={item.k} className={i >= 2 ? "hidden md:block" : ""}>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/35">
                  {item.k}
                </div>
                <div className="mt-1.5 font-display text-[26px] font-light leading-none tracking-tight">
                  {item.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* legenda discreta abaixo */}
        <p className="mx-auto mt-8 max-w-[58ch] text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          Visualização ilustrativa · ritmo sinusal normal — figura decorativa
        </p>
      </div>
    </section>
  );
};

export default Pulse;
