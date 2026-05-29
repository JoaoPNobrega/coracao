import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";
import Pulse from "@/components/Pulse";
import Specialties from "@/components/Specialties";
import Audiences from "@/components/Audiences";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <div className="relative z-[2] mx-auto max-w-[1240px] px-8">
        <Hero />
        <div className="h-px bg-line" />
        <SplitSection />
      </div>

      {/* Pulse é full-bleed (fundo escuro) */}
      <Pulse />

      <div className="relative z-[2] mx-auto max-w-[1240px] px-8">
        <Specialties />
        <div className="h-px bg-line" />
        <Audiences />
      </div>

      {/* Credentials tem fundo próprio (secondary), então sai do container */}
      <Credentials />

      <div className="relative z-[2] mx-auto max-w-[1240px] px-8">
        <Contact />
        <div className="h-px bg-line" />

        <footer className="grid gap-6 py-10 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:grid-cols-3">
          <span>© 2026 · Dr. Cristiano Berardo</span>
          <span className="md:text-center">Cirurgia cardiovascular · Recife — PE</span>
          <span className="md:text-right">drcristianoberardo.com.br</span>
        </footer>
      </div>
    </>
  );
};

export default Index;
