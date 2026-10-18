"use client";

import { useRef } from "react";
import { useRafLoop } from "@/hooks/useRafLoop";

const NUM_BARS = 12;
const BAR_W = 11;
const STEP = 19;

interface WaveConfig {
  color: string;
  minHeights: number[];
  silhouette: number[];
  speedBase: number;
  speedRange: number;
  startTime: number;
  env: [number, number];
  wave2: number;
  shift: { base: number; amp: number; left: number; right: number };
}

const BLUE: WaveConfig = {
  color: "#05AFF2",
  minHeights: [8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 8],
  silhouette: [0.62, 0.82, 0.98, 1.15, 0.72, 0.68, 0.82, 1.0, 1.2, 0.98, 0.8, 0.62],
  speedBase: 0.019,
  speedRange: 0.015,
  startTime: 10,
  env: [0.68, 1.15],
  wave2: 0.62,
  shift: { base: 0.82, amp: 0.38, left: 0.88, right: 0.72 },
};

const CORAL: WaveConfig = {
  color: "#FF6F61",
  minHeights: [6, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 6],
  silhouette: [0.35, 0.7, 0.95, 1.15, 0.65, 0.6, 0.8, 1.0, 1.2, 0.95, 0.65, 0.35],
  speedBase: 0.018,
  speedRange: 0.014,
  startTime: 0,
  env: [0.7, 1.1],
  wave2: 0.6,
  shift: { base: 0.8, amp: 0.4, left: 0.9, right: 0.75 },
};

function createWaveTick(svg: SVGSVGElement, cfg: WaveConfig) {
  const bars = svg.querySelectorAll<SVGRectElement>("[data-bar]");
  if (bars.length !== NUM_BARS) return () => {};

  const current = [...cfg.minHeights];
  const phases = Array.from({ length: NUM_BARS }, () => Math.random() * Math.PI * 2);
  const speeds = Array.from(
    { length: NUM_BARS },
    () => cfg.speedBase + Math.random() * cfg.speedRange
  );
  let time = cfg.startTime;

  return function tick() {
    time += 0.2;

    const slowEnvelope =
      (Math.sin(time * cfg.env[0]) + Math.sin(time * cfg.env[1]) * 0.6 + 1.6) / 3.2;

    bars.forEach((bar, i) => {
      phases[i] += speeds[i];
      const organic =
        (Math.sin(phases[i]) + Math.sin(phases[i] * cfg.wave2 + i) * 0.7 + 1.7) / 3.4;

      const balance =
        i < 5
          ? cfg.shift.base + cfg.shift.amp * Math.sin(time * cfg.shift.left)
          : cfg.shift.base + cfg.shift.amp * Math.cos(time * cfg.shift.right);

      const target =
        cfg.minHeights[i] + organic * slowEnvelope * cfg.silhouette[i] * balance * 64;

      const diff = target - current[i];
      current[i] += diff * (diff > 0 ? 0.2 : 0.1);

      const h = Math.max(cfg.minHeights[i], Math.min(74, current[i]));
      bar.setAttribute("height", h.toFixed(2));
      bar.setAttribute("y", (40 - h / 2).toFixed(2));
    });
  };
}

const CONFIGS = { blue: BLUE, coral: CORAL };
const TICKS = {
  blue: (svg: SVGSVGElement) => createWaveTick(svg, BLUE),
  coral: (svg: SVGSVGElement) => createWaveTick(svg, CORAL),
};

interface VoiceWaveProps {
  variant: "blue" | "coral";
  className?: string;
}

export default function VoiceWave({ variant, className = "" }: VoiceWaveProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const cfg = CONFIGS[variant];

  useRafLoop(svgRef, TICKS[variant]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 240 80"
      aria-hidden
      className={`block h-auto overflow-visible ${className}`}
    >
      {cfg.minHeights.map((h, i) => (
        <rect
          key={i}
          data-bar=""
          x={6 + i * STEP}
          y={40 - h / 2}
          width={BAR_W}
          height={h}
          rx={5.5}
          fill={cfg.color}
        />
      ))}
    </svg>
  );
}
