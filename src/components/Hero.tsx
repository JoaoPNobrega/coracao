import EcgLine from "./EcgLine";

const Hero = () => {
  return (
    <section className="relative py-[90px] md:py-[110px] grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 items-center">
      <div className="flex flex-col">
        <div
          className="mb-9 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-muted opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .05s forwards" }}
        >
          <span className="inline-block h-px w-7 bg-muted" />
          Cirurgia cardiovascular · Recife — Pernambuco
        </div>

        <h1
          className="max-w-[15ch] font-display text-[clamp(44px,6vw,84px)] font-light leading-[0.96] tracking-[-0.035em] opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .25s forwards" }}
        >
          Alta complexidade cardiovascular, com{" "}
          <em className="font-light italic text-burgundy">ciência</em> e cuidado compartilhado.
        </h1>

        <p
          className="mt-10 max-w-[46ch] text-[17px] leading-[1.55] text-ink-soft opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .55s forwards" }}
        >
          Trajetória dedicada à cirurgia cardíaca de alta complexidade, com
          formação no IMIP, UFPE e pós-doutorado na Harvard Medical School.
          Atuação clínica, ensino, pesquisa e inovação — sempre em parceria
          com o médico assistente.
        </p>

        <div
          className="mt-10 opacity-0"
          style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .8s forwards" }}
        >
          <EcgLine />
        </div>
      </div>

      {/* Hero Image Container */}
      <div
        className="relative aspect-[4/3] md:aspect-[4/5] w-full overflow-hidden rounded-[2px] border border-line bg-[linear-gradient(180deg,hsl(30_18%_86%),#e2d8c9)] opacity-0 shadow-sm"
        style={{
          animation: "rise 1.1s cubic-bezier(.2,.7,.2,1) .4s forwards",
        }}
      >
        {/* Repeating fine pattern overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--ink) / 0.02) 0 2px, transparent 2px 14px)",
          }}
        />

        {/* Inset dashed line for medical/scientific technical diagram look */}
        <div className="pointer-events-none absolute inset-[12px] rounded-[1px] border border-dashed border-ink/15 z-10" />

        {/* Precise corner markings */}
        <span className="absolute left-0 top-0 h-3.5 w-3.5 border border-b-0 border-r-0 border-ink-soft/40 z-20" />
        <span className="absolute right-0 top-0 h-3.5 w-3.5 border border-b-0 border-l-0 border-ink-soft/40 z-20" />
        <span className="absolute bottom-0 left-0 h-3.5 w-3.5 border border-r-0 border-t-0 border-ink-soft/40 z-20" />
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 border border-l-0 border-t-0 border-ink-soft/40 z-20" />

        <img
          src="/hero_cardiologia.png"
          alt="Dr. Cristiano Berardo — cirurgião cardiovascular em Recife"
          className="h-full w-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
