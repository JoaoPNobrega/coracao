import AmbientBackground from "@/components/AmbientBackground";
import SvgDefs from "@/components/SvgDefs";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import Pulse from "@/components/Pulse";
import Specialties from "@/components/Specialties";
import Audiences from "@/components/Audiences";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <AmbientBackground />
      <SvgDefs />
      <ScrollProgress />

      {/* Hero — full-bleed (não tocar) */}
      <Hero />

      {/* Transição cinematográfica: foto da hero → escuro plano */}
      <div
        aria-hidden="true"
        className="relative z-[3] -mt-[200px] h-[280px] w-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(16,13,12,0.55) 40%, #100d0c 100%)",
        }}
      />

      {/* Bloco escuro: trajetória + princípio/formação */}
      <div className="relative z-[2] bg-[#100d0c]">
        <div className="mx-auto max-w-[1240px] px-8">
          <SplitSection />
        </div>
        <Pulse />
      </div>

      {/* Transição escuro → creme com luz de borda */}
      <div
        aria-hidden="true"
        className="relative h-[200px] w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, #100d0c 0%, rgba(16,13,12,0.45) 38%, hsl(var(--cream)) 100%)",
        }}
      >
        {/* glow ember sutil no meio da transição */}
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-60"
          style={{
            background:
              "radial-gradient(ellipse, hsl(var(--ember) / 0.25), transparent 70%)",
          }}
        />
      </div>

      {/* Bloco claro: áreas + públicos + contato */}
      <div className="relative z-[2] mx-auto max-w-[1240px] px-8">
        <Specialties />
        <Audiences />
        <Contact />

        {/* footer */}
        <footer className="relative border-t border-line/60 pb-12 pt-14">
          {/* decoração ECG sutil */}
          <div className="absolute inset-x-0 -top-px flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-burgundy to-transparent" />
          </div>

          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="font-display text-[28px] font-light leading-none tracking-tight text-ink">
                Dr. Cristiano Berardo
              </div>
              <p className="mt-3 max-w-[40ch] text-[14px] leading-[1.6] text-ink-soft">
                Cirurgia cardiovascular de alta complexidade, com ciência e
                cuidado compartilhado. Recife — Pernambuco.
              </p>
            </div>

            <div className="grid gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft md:justify-self-center">
              <a href="#trajetoria" className="transition-colors hover:text-burgundy">
                Trajetória
              </a>
              <a href="#areas" className="transition-colors hover:text-burgundy">
                Áreas
              </a>
              <a href="#publicos" className="transition-colors hover:text-burgundy">
                Públicos
              </a>
              <a href="#formacao" className="transition-colors hover:text-burgundy">
                Formação
              </a>
              <a href="#contato" className="transition-colors hover:text-burgundy">
                Contato
              </a>
            </div>

            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft md:text-right">
              <div>
                <a
                  href="https://wa.me/5581985390099"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-burgundy"
                >
                  (81) 98539-0099
                </a>
              </div>
              <div className="mt-1.5">
                <a
                  href="mailto:cristianoberardo@gmail.com"
                  className="transition-colors hover:text-burgundy"
                >
                  cristianoberardo@gmail.com
                </a>
              </div>
              <div className="mt-1.5">drcristianoberardo.com.br</div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-end justify-between gap-4 border-t border-line/40 pt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            <span>© 2026 · Dr. Cristiano Berardo</span>
            <span className="text-muted/80">
              CRM-PE · em exercício · Heart Team
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
