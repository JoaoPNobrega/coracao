import EcgLine from "./EcgLine";

const Hero = () => {
  return (
    <section className="relative py-[90px] md:py-[110px]">
      <div
        className="mb-9 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted opacity-0"
        style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .05s forwards" }}
      >
        <span className="inline-block h-px w-7 bg-muted" />
        Cardiologia clínica · Recife
      </div>

      <h1
        className="max-w-[14ch] font-display text-[clamp(56px,9vw,132px)] font-light leading-[0.96] tracking-[-0.035em] opacity-0"
        style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .25s forwards" }}
      >
        Cuidar do coração
        <br />é, antes de tudo, <em className="font-light italic text-burgundy">escutar</em>.
      </h1>

      <div className="mt-14 grid items-end gap-10 md:grid-cols-[1fr_auto]">
        <p
          className="max-w-[44ch] text-[17px] leading-[1.55] text-ink-soft opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .55s forwards" }}
        >
          Mais de vinte anos dedicados à medicina cardiovascular, combinando
          diagnóstico preciso e um acompanhamento humano, atento aos detalhes
          que outros deixam passar.
        </p>

        <div
          className="opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .8s forwards" }}
        >
          <EcgLine />
        </div>
      </div>
    </section>
  );
};

export default Hero;
