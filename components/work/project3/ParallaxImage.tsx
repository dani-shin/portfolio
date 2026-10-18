"use client";

import { useEffect, useRef } from "react";

interface ParallaxImageProps {
    pcSrc: string;
    mobileSrc: string;
    alt?: string;
}

export default function ParallaxImage({
    pcSrc,
    mobileSrc,
    alt = "",
}: ParallaxImageProps) {
    const boxRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const box = boxRef.current;
        const img = imgRef.current;
        if (!box || !img) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        let raf = 0;

        const update = () => {
            raf = 0;
            const rect = box.getBoundingClientRect();
            const vh = window.innerHeight;

            const travel = Math.max(0, img.offsetHeight - box.offsetHeight);

            const progress = reduceMotion
                ? 0.5
                : Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));

            const speed = 1.5;

            img.style.transform = `translate3d(0, ${-travel * progress * speed}px, 0)`;
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        document.addEventListener("scroll", onScroll, { passive: true, capture: true });
        window.addEventListener("resize", onScroll);
        img.addEventListener("load", onScroll);

        return () => {
            if (raf) cancelAnimationFrame(raf);
            document.removeEventListener("scroll", onScroll, { capture: true });
            window.removeEventListener("resize", onScroll);
            img.removeEventListener("load", onScroll);
        };
    }, []);

    return (
        <div
            ref={boxRef}
            className="relative ml-[calc(50%-50vw)] aspect-[360/136] w-screen overflow-hidden min-[481px]:ml-0 min-[481px]:aspect-[960/240] min-[481px]:w-full min-[481px]:max-w-[960px] min-[481px]:rounded-[4px]"
        >
            <picture>
                <source media="(max-width: 480px)" srcSet={mobileSrc} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    ref={imgRef}
                    src={pcSrc}
                    alt={alt}
                    draggable={false}
                    className="absolute left-0 top-0 block h-auto w-full max-w-none will-change-transform"
                />
            </picture>
        </div>
    );
}
