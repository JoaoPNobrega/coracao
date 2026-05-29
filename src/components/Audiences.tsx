import { useEffect, useRef, useState, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const Audiences = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // tilt 3D sutil baseado na posição do mouse — instant ao seguir, suave ao reset
  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const inner = el.querySelector<HTMLDivElement>("[data-tilt-inner]");
    if (!inner) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 6;
    const ry = (x - 0.5) * 6;
    inner.style.transition = "transform 0ms";
    inner.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    // ponto de luz que segue o cursor
    inner.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
    inner.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
  };
  const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
    const inner = e.currentTarget.querySelector<HTMLDivElement>("[data-tilt-inner]");
    if (inner) {
      inner.style.transition = "transform 700ms cubic-bezier(.2,.7,.2,1)";
      inner.style.transform = "";
    }
  };

  return (
    <section
      ref={sectionRef}
      id="publicos"
      className="relative py-[120px] md:py-[160px]"
    >
      {/* decoração parallax */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-32 h-[460px] w-[460px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--ember-soft) / 0.10), transparent 60%)",
        }}
      />

      <div className="relative mb-14 max-w-[60ch]">
        <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          <span className="text-burgundy">04 —</span>
          Para quem
        </div>
        <h2 className="text-balance font-display text-[clamp(36px,4.2vw,64px)] font-light leading-[1.05] tracking-[-0.025em]">
          Dois caminhos,
          <br />o <em className="font-light italic text-burgundy">mesmo</em>{" "}
          cuidado.
        </h2>
      </div>

      <div className="relative grid gap-6 md:grid-cols-2">
        {/* Pacientes */}
        <div
          className="group [perspective:1000px]"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          style={{
            opacity: 0,
            animation: shown
              ? "card-rise-scale 1100ms cubic-bezier(.2,.7,.2,1) 0ms forwards"
              : undefined,
          }}
        >
          <article
            data-tilt-inner
            className="lg-base lg-cream lg-hover relative overflow-hidden rounded-[2rem] p-9 transition-transform duration-300 ease-out will-change-transform md:p-12"
          >
            {/* luz que segue o cursor */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--ember-soft) / 0.18), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy">
                  Pacientes & familiares
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  01 / 02
                </span>
              </div>

              <h3 className="mt-7 font-display text-[clamp(28px,3.2vw,40px)] font-light leading-[1.05] tracking-tight">
                Uma avaliação clara,
                <br />
                <em className="italic text-burgundy/90">
                  para uma decisão segura
                </em>
                .
              </h3>

              <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.6] text-ink-soft">
                Receber a indicação de uma cirurgia cardíaca gera dúvida e
                medo. A proposta é simples: entender o seu diagnóstico,
                discutir as alternativas e construir, com você e sua família, a
                melhor estratégia de cuidado.
              </p>

              <ul className="mt-7 grid gap-2 text-[14px] text-ink-soft">
                {[
                  "Consulta cardiovascular especializada",
                  "Segunda opinião em cirurgia cardíaca",
                  "Orientação sobre risco e prognóstico",
                  "Acompanhamento pré e pós-operatório",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-px w-3 bg-burgundy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="lg-base lg-cream lg-hover lg-sheen mt-10 inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em]"
              >
                <span>Agendar avaliação</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </div>

        {/* Médicos */}
        <div
          className="group [perspective:1000px]"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
          style={{
            opacity: 0,
            animation: shown
              ? "card-rise-scale 1100ms cubic-bezier(.2,.7,.2,1) 140ms forwards"
              : undefined,
          }}
        >
          <article
            data-tilt-inner
            className="lg-base lg-ink lg-hover relative overflow-hidden rounded-[2rem] p-9 text-cream transition-transform duration-300 ease-out will-change-transform md:p-12"
          >
            {/* luz cursor (ember) */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--ember) / 0.20), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#ff7a86]">
                  Médicos encaminhadores
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#b9aaa3]">
                  02 / 02
                </span>
              </div>

              <h3 className="mt-7 font-display text-[clamp(28px,3.2vw,40px)] font-light leading-[1.05] tracking-tight">
                Cuidado compartilhado,
                <br />
                <em className="italic text-[#ff7a86]/95">
                  de médico para médico
                </em>
                .
              </h3>

              <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.6] text-[#eaded6]/82">
                A discussão de casos complexos é parte central do trabalho.
                Comunicação clara no pré e pós-operatório, condutas alinhadas
                às diretrizes e respeito ao vínculo do paciente com o
                cardiologista assistente.
              </p>

              <ul className="mt-7 grid gap-2 text-[14px] text-[#eaded6]/82">
                {[
                  "Discussão de casos cirúrgicos complexos",
                  "Avaliação em heart team multidisciplinar",
                  "Retorno estruturado ao médico assistente",
                  "Disponibilidade para contato direto",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-px w-3 bg-[#ff7a86]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="lg-base lg-light lg-hover lg-sheen mt-10 inline-flex items-center gap-2 rounded-full px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em]"
              >
                <span>Discutir um caso</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Audiences;
