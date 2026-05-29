import { useEffect, useRef } from "react";

/**
 * Camada de atmosfera global: blobs radiais que driftam lentamente +
 * faixa de gradiente vertical que reage ao scroll com parallax suave.
 *
 * Funciona em fundos escuros e claros via mix-blend-mode.
 */
const AmbientBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) {
        ticking.current = false;
        return;
      }
      const y = window.scrollY;
      el.style.setProperty("--py", `${y * 0.08}px`);
      el.style.setProperty("--py2", `${y * -0.04}px`);
      el.style.setProperty("--py3", `${y * 0.14}px`);
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[0] overflow-hidden"
      style={
        {
          "--py": "0px",
          "--py2": "0px",
          "--py3": "0px",
        } as React.CSSProperties
      }
    >
      {/* blob A — burgundy quente, canto superior esquerdo */}
      <div
        className="absolute -left-32 -top-40 h-[640px] w-[640px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--burgundy) / 0.35), hsl(var(--burgundy) / 0) 60%)",
          mixBlendMode: "screen",
          transform: "translate3d(0, var(--py), 0)",
          animation: "drift-a 28s ease-in-out infinite",
        }}
      />

      {/* blob B — ember vívido, canto superior direito */}
      <div
        className="absolute -right-40 top-1/4 h-[720px] w-[720px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--ember) / 0.30), hsl(var(--ember) / 0) 60%)",
          mixBlendMode: "screen",
          transform: "translate3d(0, var(--py2), 0)",
          animation: "drift-b 34s ease-in-out infinite",
        }}
      />

      {/* blob C — burgundy frio, meio-baixo */}
      <div
        className="absolute bottom-0 left-1/3 h-[560px] w-[560px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(352 70% 22% / 0.45), transparent 65%)",
          mixBlendMode: "screen",
          transform: "translate3d(0, var(--py3), 0)",
          animation: "drift-c 40s ease-in-out infinite",
        }}
      />

      {/* blob D — ember discreto, embaixo direita */}
      <div
        className="absolute -bottom-32 right-1/4 h-[460px] w-[460px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, hsl(var(--ember-soft) / 0.22), transparent 60%)",
          mixBlendMode: "screen",
          transform: "translate3d(0, var(--py2), 0)",
          animation: "drift-d 36s ease-in-out infinite",
        }}
      />

      {/* vinheta sutil nas bordas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      {/* noise extra (sutil, sobre o grain do body) */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
};

export default AmbientBackground;
