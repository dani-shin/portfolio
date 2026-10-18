"use client";

import { useId, useRef } from "react";
import { useRafLoop } from "@/hooks/useRafLoop";

const CX = 180;
const CY = 180;
const AVATAR_R = 105;
const BASE_R = 117;
const NUM_POINTS = 14;
const RING_R = 128;

interface Drop {
  active: boolean;
  angle: number;
  speed: number;
  offset: number;
  velocity: number;
  radius: number;
  targetRadius: number;
  lifeTimer: number;
}

function getBorderRadiusAtAngle(angle: number, time: number) {
  const swell1 = Math.sin(angle - time * 0.45) * 6.5;
  const swell2 = Math.cos(angle * 2 + time * 0.3) * 3.5;
  return BASE_R + swell1 + swell2;
}

function createSmoothClosedPath(pts: { x: number; y: number }[]) {
  const len = pts.length;
  let d = `M ${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)} `;

  for (let i = 0; i < len; i++) {
    const p0 = pts[(i - 1 + len) % len];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % len];
    const p3 = pts[(i + 2) % len];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    d += `C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)} `;
  }
  return d + "Z";
}

function createThinkingTick(svg: SVGSVGElement) {
  const wavyPath = svg.querySelector<SVGPathElement>("[data-wavy]");
  const dropElements = svg.querySelectorAll<SVGCircleElement>("[data-drop]");
  if (!wavyPath || dropElements.length < 2) return () => {};

  const points = Array.from({ length: NUM_POINTS }, (_, i) => ({
    angle: (i * Math.PI * 2) / NUM_POINTS,
    phase: Math.random() * Math.PI * 2,
    speed: 0.035 + Math.random() * 0.025,
  }));

  const drops: Drop[] = [
    {
      active: true,
      angle: 0,
      speed: 0.013,
      offset: 12,
      velocity: 1.8,
      radius: 13,
      targetRadius: 13,
      lifeTimer: 999999,
    },
    {
      active: false,
      angle: Math.PI,
      speed: 0.015,
      offset: -8,
      velocity: 0,
      radius: 0,
      targetRadius: 0,
      lifeTimer: 0,
    },
  ];

  let time = 0;

  return function tick() {
    time += 0.04;

    const coords = points.map((p, i) => {
      p.phase += p.speed;
      const baseDynamicR = getBorderRadiusAtAngle(p.angle, time);
      const ripple =
        Math.sin(p.phase) * 2.8 + Math.cos(time * 1.6 + i * 1.7) * 1.8;
      const finalR = Math.max(
        AVATAR_R + 3.5,
        Math.min(130, baseDynamicR + ripple)
      );
      return {
        x: CX + Math.cos(p.angle) * finalR,
        y: CY + Math.sin(p.angle) * finalR,
      };
    });
    wavyPath.setAttribute("d", createSmoothClosedPath(coords));

    drops.forEach((drop, idx) => {
      if (idx === 1) {
        if (!drop.active) {
          if (Math.random() < 0.01) {
            drop.active = true;
            drop.angle = drops[0].angle + Math.PI * (0.5 + Math.random());
            drop.speed = 0.011 + Math.random() * 0.008;
            drop.offset = -6;
            drop.velocity = 2.4 + Math.random() * 1.2;
            drop.targetRadius = 9.5 + Math.random() * 4.5;
            drop.lifeTimer = 160 + Math.random() * 180;
          }
        } else {
          drop.lifeTimer--;
          if (drop.lifeTimer <= 0) {
            drop.targetRadius = 0;
            drop.velocity -= 0.15;
            if (drop.radius < 1.2 || drop.offset < -8) {
              drop.active = false;
              drop.radius = 0;
            }
          }
        }
      }

      const airSlowdown = drop.offset > 14 ? 0.65 : 1.0;
      drop.angle +=
        (drop.speed + Math.sin(time + idx * 2) * 0.003) * airSlowdown;

      if (drop.active && drop.targetRadius > 0) {
        if (drop.offset <= 2 && Math.random() < 0.055) {
          const isBigJump = Math.random() < 0.45;
          drop.velocity = isBigJump
            ? 2.6 + Math.random() * 0.9
            : 1.5 + Math.random() * 0.8;
          drop.targetRadius = (idx === 0 ? 10.5 : 8.5) + Math.random() * 4.5;
        }

        drop.offset += drop.velocity;

        const gravity = drop.offset > 15 ? 0.065 : 0.095;
        drop.velocity -= gravity;

        if (drop.offset < -5) {
          drop.offset = -5;
          drop.velocity = Math.abs(drop.velocity) * 0.45;
        }

        if (drop.offset > 26) {
          drop.offset = 26;
          drop.velocity *= -0.35;
        }
      }

      const currentSurfaceR = getBorderRadiusAtAngle(drop.angle, time);
      const finalDist = currentSurfaceR - 3 + drop.offset;

      drop.radius += (drop.targetRadius - drop.radius) * 0.12;

      dropElements[idx].setAttribute(
        "cx",
        (CX + Math.cos(drop.angle) * finalDist).toFixed(2)
      );
      dropElements[idx].setAttribute(
        "cy",
        (CY + Math.sin(drop.angle) * finalDist).toFixed(2)
      );
      dropElements[idx].setAttribute(
        "r",
        Math.max(0, drop.radius).toFixed(2)
      );
    });
  };
}

interface ThinkingAvatarProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function ThinkingAvatar({
  src,
  alt = "",
  className = "",
}: ThinkingAvatarProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const uid = useId().replace(/:/g, "");

  useRafLoop(svgRef, createThinkingTick);

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
        <filter id={`goo-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7.5" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -11"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>

        <clipPath id={`clip-${uid}`}>
          <circle cx={CX} cy={CY} r={AVATAR_R} />
        </clipPath>
      </defs>

      <circle
        cx={CX}
        cy={CY}
        r={RING_R}
        fill="#FFFFFF"
        fillOpacity="0.24"
      />

      <g filter={`url(#goo-${uid})`} fill="#FFFFFF">
        <path data-wavy="" d="" />
        <circle data-drop="" cx={CX} cy={CY} r="0" />
        <circle data-drop="" cx={CX} cy={CY} r="0" />
      </g>

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
