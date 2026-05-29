import HeartScrollSequence from "./HeartScrollSequence";

const SplitSection = () => {
  return (
    <section
      id="trajetoria"
      className="grid items-start gap-14 py-[120px] md:grid-cols-[1.05fr_1fr] md:gap-20 md:py-[140px]"
    >
      {/* texto à esquerda */}
      <div className="md:sticky md:top-24">
        <div className="mb-7 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          <span className="text-burgundy">02 —</span>
          Trajetória
        </div>

        <h2 className="mb-7 max-w-[16ch] font-display text-[clamp(40px,4.6vw,68px)] font-light leading-[1.02] tracking-[-0.025em]">
          O coração estudado <em className="font-light italic text-burgundy">por inteiro</em>:
          ciência, técnica e escuta.
        </h2>

        <p className="mb-4 max-w-[46ch] text-[17px] leading-[1.6] text-ink-soft">
          A cirurgia cardiovascular de alta complexidade exige mais do que
          domínio técnico: pede leitura cuidadosa de cada caso, decisão
          compartilhada com o médico assistente e tempo para conversar com
          paciente e família. É assim que o trabalho é conduzido.
        </p>
        <p className="mb-4 max-w-[46ch] text-[17px] leading-[1.6] text-ink-soft">
          Atuação em serviços de referência em Pernambuco, com experiência em
          cirurgia valvar, coronariana, da aorta, transplante cardíaco,
          assistência circulatória e TAVI. Visão de heart team, integrada com
          cardiologia clínica, hemodinâmica e terapia intensiva.
        </p>

        <div className="mt-9 max-w-[42ch] border-l-2 border-burgundy/40 pl-5 font-display text-[18px] italic leading-snug">
          "A melhor cirurgia é a que se decide com calma, ciência e em equipe."
          <small className="mt-2 block font-mono text-[11px] not-italic uppercase tracking-[0.12em] text-muted">
            — Dr. Cristiano Berardo · Cirurgião cardiovascular
          </small>
        </div>
      </div>

      <HeartScrollSequence />
    </section>
  );
};

export default SplitSection;
