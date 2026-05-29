const EcgLine = () => {
  return (
    <div className="relative h-[110px] w-full max-w-[420px] md:w-[38vw]" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--ink) / 0.06) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--ink) / 0.06) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          maskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        }}
      />
      <svg
        viewBox="0 0 420 110"
        preserveAspectRatio="none"
        className="block h-full w-full overflow-visible"
      >
        <path
          d="M0,55 L60,55 L90,55 L110,55 L120,30 L130,80 L140,15 L150,90 L160,55 L210,55 L240,55 L260,55 L270,40 L285,72 L300,55 L360,55 L420,55"
          fill="none"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-ember animate-draw animate-pulseStroke"
          style={{
            strokeDasharray: 1200,
            strokeDashoffset: 1200,
            filter: "drop-shadow(0 0 6px hsl(var(--ember) / 0.35))",
            animation:
              "draw 4.5s cubic-bezier(.6,.05,.2,1) .6s forwards, pulseStroke 1.4s ease-in-out 5s infinite",
          }}
        />
      </svg>
      <span
        className="absolute right-[6%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-ember opacity-0"
        style={{
          animation: "appear .4s ease 5s forwards, ping 1.4s ease-out 5s infinite",
        }}
      />
    </div>
  );
};

export default EcgLine;
