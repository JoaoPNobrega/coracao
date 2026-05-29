// constrói N ciclos cardíacos consecutivos para um path SVG contínuo
const buildBeats = (count: number, cycleWidth = 240) => {
  let d = "M 0 50";
  for (let i = 0; i < count; i++) {
    const x = i * cycleWidth;
    d += ` L ${x + 60} 50`;
    d += ` Q ${x + 70} 50 ${x + 75} 40`; // P up
    d += ` Q ${x + 80} 30 ${x + 85} 40`;
    d += ` Q ${x + 90} 50 ${x + 95} 50`; // P down
    d += ` L ${x + 105} 50`; // PR
    d += ` L ${x + 110} 53`; // Q
    d += ` L ${x + 115} 8`; // R (pico)
    d += ` L ${x + 120} 88`; // S
    d += ` L ${x + 125} 50`;
    d += ` L ${x + 140} 50`; // ST
    d += ` Q ${x + 150} 50 ${x + 158} 40`; // T up
    d += ` Q ${x + 168} 28 ${x + 178} 40`;
    d += ` Q ${x + 188} 50 ${x + 196} 50`;
    d += ` L ${x + 240} 50`; // rest
  }
  return d;
};

const CYCLES = 24;
const CYCLE_WIDTH = 240;
const TOTAL_WIDTH = CYCLES * CYCLE_WIDTH;
const BEAT_PATH = buildBeats(CYCLES, CYCLE_WIDTH);

const Pulse = () => {
  return (
    <section
      aria-label="Princípio"
      className="relative isolate overflow-hidden bg-ink text-cream"
    >
      {/* grid sutil de monitor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--cream) / 0.18) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--cream) / 0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* viñeta radial pra dar profundidade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 45%, hsl(var(--ink)) 95%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-16 px-8 pt-[120px] md:gap-24 md:pt-[160px]">
        {/* eyebrow */}
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
          <span className="inline-block h-px w-7 bg-cream/40" />
          Princípio
          <span className="ml-auto hidden font-mono text-[10px] tracking-[0.2em] text-cream/40 md:inline">
            LEAD II · GAIN 10mm/mV · 25mm/s
          </span>
        </div>

        {/* frase manifesto */}
        <h2 className="max-w-[24ch] font-display text-[clamp(40px,6.4vw,96px)] font-light leading-[1.02] tracking-[-0.025em]">
          Toda cirurgia começa muito antes da sala — começa em uma{" "}
          <em className="font-light italic text-ember">decisão</em> tomada em equipe.
        </h2>
      </div>

      {/* ECG em loop contínuo, full-bleed */}
      <div className="relative mt-20 md:mt-28">
        {/* máscara nas bordas pra fade in/out */}
        <div
          className="relative h-[clamp(180px,28vw,320px)] w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          }}
        >
          {/* track 2x — translateX(-50%) faz loop seamless */}
          <div
            className="flex h-full w-[200%]"
            style={{
              animation: "ecgFlow 18s linear infinite",
            }}
          >
            {[0, 1].map((i) => (
              <svg
                key={i}
                viewBox={`0 0 ${TOTAL_WIDTH} 100`}
                preserveAspectRatio="none"
                className="block h-full w-1/2 shrink-0 overflow-visible"
              >
                <path
                  d={BEAT_PATH}
                  fill="none"
                  stroke="hsl(var(--ember))"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: "drop-shadow(0 0 10px hsl(var(--ember) / 0.55))",
                  }}
                />
              </svg>
            ))}
          </div>

          {/* indicador pulsante (estilo "ponto vivo" do monitor) */}
          <span
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember"
            style={{
              animation: "pulseStroke 1.1s ease-in-out infinite",
              boxShadow: "0 0 12px hsl(var(--ember) / 0.7)",
            }}
          />
        </div>
      </div>

      {/* monitor footer */}
      <div className="relative mx-auto grid max-w-[1240px] grid-cols-2 gap-6 px-8 pb-[60px] pt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/55 md:grid-cols-4 md:pb-[80px]">
        <div>
          <div className="text-cream/35">BPM</div>
          <div className="mt-1 font-display text-[28px] font-light not-italic text-cream">
            72
          </div>
        </div>
        <div>
          <div className="text-cream/35">Ritmo</div>
          <div className="mt-1 font-display text-[28px] font-light not-italic text-cream">
            Sinusal
          </div>
        </div>
        <div className="hidden md:block">
          <div className="text-cream/35">PR / QT</div>
          <div className="mt-1 font-display text-[28px] font-light not-italic text-cream">
            160 · 380
          </div>
        </div>
        <div className="hidden md:block">
          <div className="text-cream/35">Eixo</div>
          <div className="mt-1 font-display text-[28px] font-light not-italic text-cream">
            +60°
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pulse;
