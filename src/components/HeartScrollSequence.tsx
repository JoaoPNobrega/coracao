import { useCallback, useEffect, useRef } from "react";

const FRAME_COUNT = 97;
const FRAME_WIDTH = 1280;
const FRAME_HEIGHT = 720;

const getFrameSrc = (index: number) =>
  `/heart-frames/frame_${String(index + 1).padStart(4, "0")}.webp`;

interface HeartScrollSequenceProps {
  progress: number; // 0..1
}

const HeartScrollSequence = ({ progress }: HeartScrollSequenceProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const desiredFrameRef = useRef(0);

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
    if (!context) return;

    context.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    context.drawImage(image, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    currentFrameRef.current = frameIndex;
  }, []);

  // pré-carrega todos os frames
  useEffect(() => {
    let cancelled = false;

    const images = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        if (cancelled) return;
        if (index === desiredFrameRef.current || index === 0) {
          drawFrame(index);
        }
      };
      image.src = getFrameSrc(index);
      return image;
    });

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, [drawFrame]);

  // desenha o frame correspondente ao progresso
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nextFrame = prefersReducedMotion
      ? 0
      : Math.round(progress * (FRAME_COUNT - 1));
    desiredFrameRef.current = nextFrame;
    drawFrame(nextFrame);
  }, [progress, drawFrame]);

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        width={FRAME_WIDTH}
        height={FRAME_HEIGHT}
        className="relative z-10 block aspect-video h-auto w-full [filter:drop-shadow(0_34px_38px_rgb(0_0_0_/_0.58))_drop-shadow(0_8px_16px_hsl(var(--burgundy)_/_0.26))_drop-shadow(0_0_22px_hsl(var(--ember)_/_0.18))]"
      />
    </div>
  );
};

export default HeartScrollSequence;
