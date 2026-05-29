/**
 * Filtros SVG globais reutilizáveis.
 *
 * Inclui o filtro de displacement do "liquid glass" no estilo Apple,
 * que pode ser combinado com backdrop-filter via `url(#lg-distort)`.
 */
const SvgDefs = () => {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <defs>
        {/* Distorção tipo "vidro líquido" — turbulência orgânica + displacement */}
        <filter
          id="lg-distort"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.007 0.007"
            numOctaves="2"
            seed="3"
            result="turb"
          />
          <feGaussianBlur in="turb" stdDeviation="2" result="softTurb" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softTurb"
            scale="32"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Grão fino quando aplicado como filter */}
        <filter id="grain-noise" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0" />
        </filter>

        {/* Máscara radial pra revealing efeitos */}
        <radialGradient id="lg-edge-light" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="60%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default SvgDefs;
