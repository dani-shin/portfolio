"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "@/components/ArrowButton";

const slides = [
  {
    image: "/work/sideproject1/sideproject-1-3-1.png",
    alt: "Applied Outcome slide 1",
  },
  {
    image: "/work/sideproject1/sideproject-1-3-2.png",
    alt: "Applied Outcome slide 2",
  },
  {
    image: "/work/sideproject1/sideproject-1-3-3.png",
    alt: "Applied Outcome slide 3",
  },
  {
    image: "/work/sideproject1/sideproject-1-3-4.png",
    alt: "Applied Outcome slide 4",
  },
  {
    image: "/work/sideproject1/sideproject-1-3-5.png",
    alt: "Applied Outcome slide 5",
  },
];

const ANIMATION_DURATION = 400;

export default function SideProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const animationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeSlide = (newIndex: number, newDirection: "next" | "previous") => {
    if (isAnimating || newIndex === currentIndex) return;

    setDirection(newDirection);
    setNextIndex(newIndex);
    setIsAnimating(true);

    animationTimer.current = setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setIsAnimating(false);
    }, ANIMATION_DURATION);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(newIndex, "previous");
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    changeSlide(newIndex, "next");
  };

  useEffect(() => {
    return () => {
      if (animationTimer.current) clearTimeout(animationTimer.current);
    };
  }, []);

  const currentSlide = slides[currentIndex];
  const incomingSlide = nextIndex !== null ? slides[nextIndex] : null;

  return (
    <div>
      <div className="overflow-hidden rounded-[4px] bg-white">
        <div className="relative aspect-[960/480] w-full overflow-hidden">
          <div
            className={`absolute inset-0 ${
              isAnimating
                ? direction === "next"
                  ? "slide-out-left"
                  : "slide-out-right"
                : ""
            }`}
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority={currentIndex === 0}
              sizes="(max-width: 480px) 100vw, 960px"
              className="object-contain"
            />
          </div>

          {incomingSlide && (
            <div
              className={`absolute inset-0 ${
                direction === "next" ? "slide-in-right" : "slide-in-left"
              }`}
            >
              <Image
                src={incomingSlide.image}
                alt={incomingSlide.alt}
                fill
                sizes="(max-width: 480px) 100vw, 960px"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-6">
        <ArrowButton
          direction="left"
          onClick={goToPrevious}
          ariaLabel="Previous slide"
        />

        <div className="flex items-center gap-1.5">
          <span className="type-title-3 text-[#333333]">{currentIndex + 1}</span>
          <span className="type-body-2 text-[#888888]">/ {slides.length}</span>
        </div>

        <ArrowButton
          direction="right"
          onClick={goToNext}
          ariaLabel="Next slide"
        />
      </div>
    </div>
  );
}
