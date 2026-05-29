import { ArrowUpRight } from "lucide-react";

const Audiences = () => {
  return (
    <section id="publicos" className="py-[120px] md:py-[140px]">
      <div className="mb-14 max-w-[60ch]">
        <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          <span className="text-burgundy">04 —</span>
          Para quem
        </div>
        <h2 className="font-display text-[clamp(36px,4vw,60px)] font-light leading-[1.05] tracking-[-0.025em]">
          Dois caminhos,
          <br />
          o <em className="font-light italic text-burgundy">mesmo</em> cuidado.
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
        {/* Pacientes */}
        <article className="bg-cream p-9 md:p-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy">
            Pacientes & familiares
          </span>
          <h3 className="mt-5 font-display text-[32px] font-light leading-[1.1] tracking-tight">
            Uma avaliação clara,
            <br />
            <em className="italic">para uma decisão segura</em>.
          </h3>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.6] text-ink-soft">
            Receber a indicação de uma cirurgia cardíaca gera dúvida e medo.
            A proposta é simples: entender o seu diagnóstico, discutir as
            alternativas e construir, com você e sua família, a melhor
            estratégia de cuidado.
          </p>
          <ul className="mt-7 space-y-2 text-[14px] text-ink-soft">
            {[
              "Consulta cardiovascular especializada",
              "Segunda opinião em cirurgia cardíaca",
              "Orientação sobre risco e prognóstico",
              "Acompanhamento pré e pós-operatório",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-px w-3 bg-burgundy" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="group mt-10 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink hover:text-burgundy"
          >
            Agendar avaliação
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </article>

        {/* Médicos */}
        <article className="bg-popover p-9 md:p-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy">
            Médicos encaminhadores
          </span>
          <h3 className="mt-5 font-display text-[32px] font-light leading-[1.1] tracking-tight">
            Cuidado compartilhado,
            <br />
            <em className="italic">de médico para médico</em>.
          </h3>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.6] text-ink-soft">
            A discussão de casos complexos é parte central do trabalho.
            Comunicação clara no pré e pós-operatório, condutas alinhadas às
            diretrizes e respeito ao vínculo do paciente com o cardiologista
            assistente.
          </p>
          <ul className="mt-7 space-y-2 text-[14px] text-ink-soft">
            {[
              "Discussão de casos cirúrgicos complexos",
              "Avaliação em heart team multidisciplinar",
              "Retorno estruturado ao médico assistente",
              "Disponibilidade para contato direto",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-px w-3 bg-burgundy" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="group mt-10 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink hover:text-burgundy"
          >
            Discutir um caso
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Audiences;
