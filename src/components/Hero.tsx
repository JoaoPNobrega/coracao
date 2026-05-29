import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative left-1/2 min-h-[92svh] w-screen -translate-x-1/2 overflow-hidden bg-[#100d0c] text-[#f8efe8]">
      <img
        src="/hero-cardiovascular-cinematic.png"
        alt="Dr. Cristiano Berardo em ambiente cirúrgico cardiovascular"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,8,7,0.86)_0%,rgba(10,8,7,0.7)_34%,rgba(10,8,7,0.22)_62%,rgba(10,8,7,0.08)_100%),linear-gradient(180deg,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0)_36%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-[1240px] flex-col px-8">
        <Navbar />

        <div className="flex flex-1 items-center pb-16 pt-20 md:pb-20">
          <div className="max-w-[680px]">
            <div
              className="mb-8 inline-flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em] text-[#d5c3bb] opacity-0"
              style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .05s forwards" }}
            >
              <span className="inline-block h-px w-7 bg-[#b99690]" />
              Cirurgia cardiovascular · Recife — Pernambuco
            </div>

            <h1
              className="max-w-[12ch] font-display text-[clamp(52px,8vw,118px)] font-light leading-[0.92] tracking-[-0.035em] opacity-0"
              style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .25s forwards" }}
            >
              Alta complexidade, cuidado{" "}
              <em className="font-light italic text-[#ff7a86]">preciso</em>.
            </h1>

            <p
              className="mt-8 max-w-[45ch] text-[18px] leading-[1.6] text-[#eaded6]/82 opacity-0"
              style={{ animation: "rise .9s cubic-bezier(.2,.7,.2,1) .55s forwards" }}
            >
              Cirurgia cardíaca de alta complexidade com ciência, equipe e
              decisão compartilhada do primeiro parecer ao pós-operatório.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
