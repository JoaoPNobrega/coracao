import { useEffect, useRef } from "react";

/**
 * Linha fina pulsante no topo da viewport que enche conforme o scroll.
 */
const ScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) {
        ticking.current = false;
        return;
      }
      const scroll = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (scroll / max) * 100 : 0;
      el.style.transform = `scaleX(${pct / 100})`;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[90] h-[2px] w-full"
    >
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-to-r from-burgundy via-ember to-burgundy"
        style={{
          transform: "scaleX(0)",
          boxShadow: "0 0 16px hsl(var(--ember) / 0.7)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
