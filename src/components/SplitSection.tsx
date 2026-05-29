import { ReactNode, useEffect, useRef, useState } from "react";
import HeartScrollSequence from "./HeartScrollSequence";

const clamp = (v: number) => Math.min(1, Math.max(0, v));

type Stage = { text: ReactNode };
type StageFrameRange = { start: number; end: number };

const STAGES: Stage[] = [
  {
    text: (
      <>
        Mais de duas décadas dedicadas à cirurgia cardiovascular, em serviços
        de referência do Nordeste. Uma carreira construída ao redor do paciente
        mais grave — aquele cujo coração já não responde a outras terapias e
        que precisa de uma{" "}
        <em className="font-light italic text-[#ff7a86]">equipe inteira</em>{" "}
        para atravessar a sala em segurança.
      </>
    ),
  },
  {
    text: (
      <>
        Cada caso começa por uma reunião: cardiologista assistente,
        hemodinamicista, intensivista e cirurgião analisando juntos exames,
        riscos e alternativas. A decisão raramente é tomada por uma só pessoa
        — ela nasce do{" "}
        <em className="font-light italic text-[#ff7a86]">
          consenso do heart team
        </em>
        , e o médico que acompanha o paciente continua dentro do plano.
      </>
    ),
  },
  {
    text: (
      <>
        Da primeira consulta ao pós-operatório, o trabalho é o mesmo: escutar
        com calma o que cada paciente tem a dizer, traduzir os exames em
        linguagem clara e devolver à família a sensação de que existe um plano.
        Tecnicamente, é cirurgia.{" "}
        <em className="font-light italic text-[#ff7a86]">
          Antes disso, é cuidado.
        </em>
      </>
    ),
  },
];

const FRAME_COUNT = 97;
const STAGE_FRAME_RANGES: StageFrameRange[] = [
  { start: 0, end: 31 }, // frames 1..32
  { start: 32, end: 63 }, // frames 33..64
  { start: 64, end: 96 }, // frames 65..97
];
const ACTIVE_END = 0.94; // até onde texto e coração progridem; depois disso, tudo repousa

const SplitSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      if (!track) {
        tickingRef.current = false;
        return;
      }
      const rect = track.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const pinnedDistance = -rect.top;
      const p = scrollable <= 0 ? 0 : clamp(pinnedDistance / scrollable);
      setProgress(p);
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // progresso "efetivo": 0..1 dentro do range ativo, satura em 1 depois disso
  const effective = clamp(progress / ACTIVE_END);
  const activeFrame = Math.round(effective * (FRAME_COUNT - 1));

  const stageStyle = (i: number) => {
    const range = STAGE_FRAME_RANGES[i];
    const isActive = activeFrame >= range.start && activeFrame <= range.end;
    const local = clamp((activeFrame - range.start) / Math.max(1, range.end - range.start));
    const translateY = isActive
      ? -8 + local * 16
      : activeFrame < range.start
        ? -28
        : 28;

    return {
      opacity: isActive ? 1 : 0,
      transform: `translate3d(0, ${translateY.toFixed(2)}px, 0)`,
      filter: isActive ? undefined : "blur(6px)",
      transition: "opacity 180ms ease, transform 180ms ease, filter 180ms ease",
      willChange: "transform, opacity, filter",
    } as const;
  };

  return (
    <section
      id="trajetoria"
      className="relative ml-[calc(50%_-_50vw)] w-screen overflow-x-clip bg-[#100d0c] text-[#f7efe8]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_20%,rgba(0,0,0,0.2)_100%),linear-gradient(90deg,rgba(0,0,0,0.42),transparent_32%,transparent_68%,rgba(0,0,0,0.36))]"
      />
      <div className="relative mx-auto max-w-[1240px] px-8">
        {/* título centralizado no topo */}
        <div className="pt-[100px] text-center md:pt-[140px]">
          <div className="mb-7 inline-flex items-center gap-4 font-mono text-[12px] uppercase tracking-[0.2em] text-[#b9aaa3]">
            <span className="inline-block h-px w-7 bg-[#8f7770]" />
            02 — Trajetória
            <span className="inline-block h-px w-7 bg-[#8f7770]" />
          </div>
          <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(40px,5.4vw,80px)] font-light leading-[1.02] tracking-[-0.025em] text-[#fbf6f0]">
            Três tempos do mesmo{" "}
            <em className="font-light italic text-[#ff7a86]">cuidado</em>.
          </h2>
        </div>

        {/* track scrollable — sticky por dentro */}
        <div
          ref={trackRef}
          className="relative mt-16 min-h-[360vh] md:mt-24 md:min-h-[420vh]"
        >
          <div className="sticky top-0 flex h-screen items-center">
            <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
              {/* texto à esquerda — cinematográfico */}
              <div>
                <div className="relative grid">
                  {STAGES.map((s, i) => {
                    const style = stageStyle(i);
                    return (
                      <p
                        key={i}
                        aria-hidden={style.opacity < 0.5}
                        className="col-start-1 row-start-1 max-w-[28ch] text-center font-display text-[clamp(22px,2.2vw,30px)] font-light leading-[1.4] tracking-[-0.005em] text-[#f6eee6]"
                        style={style}
                      >
                        {s.text}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* coração à direita — sem moldura, maior */}
              <div className="relative">
                <HeartScrollSequence progress={effective} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;
