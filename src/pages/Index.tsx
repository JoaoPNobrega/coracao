import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SplitSection from "@/components/SplitSection";

const Index = () => {
  return (
    <main className="relative z-[2] mx-auto max-w-[1240px] px-8">
      <Navbar />
      <Hero />
      <div className="h-px bg-line" />
      <SplitSection />
      <div className="h-px bg-line" />

      <footer className="flex justify-between py-9 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
        <span>© 2026 · Vasconcelos Cardiologia</span>
        <span>Recife — PE</span>
      </footer>
    </main>
  );
};

export default Index;
