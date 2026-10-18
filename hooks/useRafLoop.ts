"use client";

import { useEffect, type RefObject } from "react";

type TickFactory = (svg: SVGSVGElement) => () => void;

const FRAME_MS = 1000 / 60;

export function useRafLoop(
  svgRef: RefObject<SVGSVGElement | null>,
  createTick: TickFactory
) {
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const tick = createTick(svg);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      tick();
      return;
    }

    let raf = 0;
    let last = 0;
    let running = false;

    const loop = (ts: number) => {
      raf = requestAnimationFrame(loop);
      if (ts - last < FRAME_MS - 2) return;
      last = ts;
      tick();
    };

    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    io.observe(svg);

    return () => {
      io.disconnect();
      stop();
    };
  }, [svgRef, createTick]);
}
