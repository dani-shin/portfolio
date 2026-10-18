"use client";

import { useId, useRef } from "react";
import { useRafLoop } from "@/hooks/useRafLoop";
import { AVATAR_R, sr } from "./avatarScale";

const CX = 180;
const CY = 180;
const MIN_INNER_R = 112;
const MIN_OUTER_R = 126;

function createSpeakingTick(svg: SVGSVGElement) {
  const inner = svg.querySelector<SVGCircleElement>("[data-inner]");
  const outer = svg.querySelector<SVGCircleElement>("[data-outer]");
  if (!inner || !outer) return () => {};

  let currentInnerR = 122;
  let currentOuterR = 142;
  let time = 0;
  let voiceBurst = 0.5;
  let burstTimer = 0;

  return function tick() {
    time += 0.08;

    burstTimer--;
    if (burstTimer <= 0) {
      voiceBurst = Math.random() > 0.2 ? 0.4 + Math.random() * 0.7 : 0.15;
      burstTimer = Math.floor(10 + Math.random() * 22);
    }

    const hum1 = Math.sin(time * 2.3) * 0.5 + 0.5;
    const hum2 = Math.sin(time * 3.7 + 1.2) * 0.5 + 0.5;
    const slowWave = Math.sin(time * 0.9) * 0.3 + 0.7;

    const innerEnergy = (hum1 * 0.6 + hum2 * 0.4) * voiceBurst * slowWave;
    const targetInnerR = MIN_INNER_R + innerEnergy * 32;

    const outerEnergy =
      (hum1 * 0.4 + hum2 * 0.6) * (voiceBurst * 0.85 + 0.15) * slowWave;
    const targetOuterR = MIN_OUTER_R + outerEnergy * 46;

    const innerDiff = targetInnerR - currentInnerR;
    currentInnerR += innerDiff * (innerDiff > 0 ? 0.18 : 0.09);

    const outerDiff = targetOuterR - currentOuterR;
    currentOuterR += outerDiff * (outerDiff > 0 ? 0.11 : 0.06);

    inner.setAttribute("r", sr(currentInnerR).toFixed(2));
    outer.setAttribute("r", sr(currentOuterR).toFixed(2));
  };
}

interface SpeakingAvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function SpeakingAvatar({
  src,
  alt = "",
  className = "",
}: SpeakingAvatarProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");

  useRafLoop(svgRef, createSpeakingTick);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 360 360"
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={`block h-auto w-full overflow-visible ${className}`}
    >
      <defs>
        <clipPath id={`clip-${uid}`}>
          <circle cx={CX} cy={CY} r={AVATAR_R} />
        </clipPath>
      </defs>

      <circle
        data-outer=""
        cx={CX}
        cy={CY}
        r={sr(142)}
        fill="#FFFFFF"
        fillOpacity="0.16"
      />
      <circle
        data-inner=""
        cx={CX}
        cy={CY}
        r={sr(122)}
        fill="#FFFFFF"
        fillOpacity="0.16"
      />

      <image
        href={src}
        x={CX - AVATAR_R}
        y={CY - AVATAR_R}
        width={AVATAR_R * 2}
        height={AVATAR_R * 2}
        preserveAspectRatio="xMidYMid slice"
        clipPath={`url(#clip-${uid})`}
      />
    </svg>
  );
}
