import { useCallback, useEffect, useRef, useState } from "react";

const FRAME_COUNT = 97;
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 720;

const getFrameSrc = (index: number) =>
  `/heart-frames/frame_${String(index + 1).padStart(4, "0")}.webp`;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const HeartScrollSequence = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const frameRef = useRef(0);
  const tickingRef = useRef(false);
  const [activeFrame, setActiveFrame] = useState(0);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const image = imagesRef.current[frameIndex];

    if (!canvas || !image?.complete || image.naturalWidth === 0) {
      return;
    }

    if (currentFrameRef.current === frameIndex) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    context.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    context.drawImage(image, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    currentFrameRef.current = frameIndex;
    setActiveFrame(frameIndex);
  }, []);

  const ensureFrame = useCallback(
    (frameIndex: number) => {
      const existing = imagesRef.current[frameIndex];

      if (existing) {
        return existing;
      }

      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        if (frameIndex === frameRef.current || frameIndex === 0) {
          drawFrame(frameIndex);
        }
      };

      image.src = getFrameSrc(frameIndex);
      imagesRef.current[frameIndex] = image;
      return image;
    },
    [drawFrame],
  );

  useEffect(() => {
    let cancelled = false;
    let timeoutId: number | undefined;
    let nextFrame = 1;

    ensureFrame(0);

    const preloadBatch = () => {
      if (cancelled) {
        return;
      }

      for (let count = 0; count < 4 && nextFrame < FRAME_COUNT; count += 1) {
        ensureFrame(nextFrame);
        nextFrame += 1;
      }

      if (nextFrame < FRAME_COUNT) {
        timeoutId = window.setTimeout(preloadBatch, 90);
      }
    };

    timeoutId = window.setTimeout(preloadBatch, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [ensureFrame]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateFrameFromScroll = () => {
      const section = sectionRef.current;

      if (!section) {
        tickingRef.current = false;
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const progress =
        scrollableDistance <= 0 ? 0 : clamp(Math.abs(Math.min(rect.top, 0)) / scrollableDistance);
      const nextFrame = prefersReducedMotion ? 0 : Math.round(progress * (FRAME_COUNT - 1));

      frameRef.current = nextFrame;
      ensureFrame(Math.max(0, nextFrame - 1));
      ensureFrame(nextFrame);
      ensureFrame(Math.min(FRAME_COUNT - 1, nextFrame + 1));
      drawFrame(nextFrame);
      tickingRef.current = false;
    };

    const requestTick = () => {
      if (tickingRef.current) {
        return;
      }

      tickingRef.current = true;
      window.requestAnimationFrame(updateFrameFromScroll);
    };

    requestTick();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, [drawFrame, ensureFrame]);

  return (
    <div ref={sectionRef} className="relative min-h-[185vh] md:min-h-[220vh]">
      <div className="sticky top-8 flex min-h-[calc(100vh-4rem)] items-center md:top-20 md:min-h-[calc(100vh-6rem)]">
        <div
          className="relative w-full overflow-hidden rounded-[2px] border border-line bg-[radial-gradient(circle_at_50%_44%,hsl(var(--secondary))_0,hsl(var(--cream))_58%,hsl(36_24%_88%)_100%)]"
          aria-label="Animação anatômica do coração controlada pelo scroll"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, hsl(var(--ink) / 0.025) 0 2px, transparent 2px 14px)",
            }}
          />
          <canvas
            ref={canvasRef}
            width={FRAME_WIDTH}
            height={FRAME_HEIGHT}
            className="relative z-10 block aspect-video h-auto w-full"
          />
          <div className="absolute bottom-0 left-0 z-20 h-px w-full bg-ink/10">
            <div
              className="h-full bg-burgundy"
              style={{ width: `${((activeFrame + 1) / FRAME_COUNT) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartScrollSequence;
