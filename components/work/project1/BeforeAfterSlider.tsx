"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ArrowButton from "@/components/ArrowButton";

const slides = [
  {
    pc: "/work/project1/slide-1-pc.png",
    mobile: "/work/project1/slide-1-mo.png",
    title: "Main Page",
    description:
      "Redesigned layout to show more content per screen and encourage scrolling.",
  },
  {
    pc: "/work/project1/slide-2-pc.png",
    mobile: "/work/project1/slide-2-mo.png",
    title: "Product Detail Page",
    description:
      "Redesigned info and selection UX for usability; moved top reviews up to boost purchase intent.",
  },
  {
    pc: "/work/project1/slide-3-pc.png",
    mobile: "/work/project1/slide-3-mo.png",
    title: "Side Navigation Drawer",
    description:
      "Restructured category hierarchy for scalability as the product line grows.",
  },
  {
    pc: "/work/project1/slide-4-pc.png",
    mobile: "/work/project1/slide-4-mo.png",
    title: "Cross-platform Storyboarding",
    description:
      "Storyboarded interconnected flows across Client, CRM, Admin, and Affiliate.",
  },
];

const AUTO_PLAY_INTERVAL = 2000;
const MANUAL_PAUSE_INTERVAL = 6000;
const ANIMATION_DURATION = 400;

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const animationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoPlayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const manualPauseUntil = useRef(0);

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
    manualPauseUntil.current = Date.now() + MANUAL_PAUSE_INTERVAL;
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(newIndex, "previous");
  };

  const goToNext = () => {
    manualPauseUntil.current = Date.now() + MANUAL_PAUSE_INTERVAL;
    const newIndex = (currentIndex + 1) % slides.length;
    changeSlide(newIndex, "next");
  };

  useEffect(() => {
    if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);

    const remainingPause = Math.max(0, manualPauseUntil.current - Date.now());
    const delay = remainingPause > 0 ? remainingPause : AUTO_PLAY_INTERVAL;

    autoPlayTimer.current = setTimeout(() => {
      if (!isAnimating) {
        const newIndex = (currentIndex + 1) % slides.length;
        changeSlide(newIndex, "next");
      }
    }, delay);

    return () => {
      if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    return () => {
      if (animationTimer.current) clearTimeout(animationTimer.current);
      if (autoPlayTimer.current) clearTimeout(autoPlayTimer.current);
    };
  }, []);

  const currentSlide = slides[currentIndex];
  const incomingSlide = nextIndex !== null ? slides[nextIndex] : null;

  return (
    <section className="mb-20">
      <div className="overflow-hidden rounded-[4px] bg-white">
        <div className="relative aspect-[960/410] w-full overflow-hidden">
          <div
            className={`absolute inset-0 ${isAnimating
              ? direction === "next"
                ? "slide-out-left"
                : "slide-out-right"
              : ""
              }`}
          >
            <Image
              src={currentSlide.pc}
              alt={currentSlide.title}
              fill
              priority={currentIndex === 0}
              sizes="(max-width: 480px) 100vw, 960px"
              className="hidden object-cover min-[481px]:block"
            />
            <Image
              src={currentSlide.mobile}
              alt={currentSlide.title}
              fill
              sizes="100vw"
              className="object-cover min-[481px]:hidden"
            />
          </div>

          {incomingSlide && (
            <div
              className={`absolute inset-0 ${direction === "next" ? "slide-in-right" : "slide-in-left"
                }`}
            >
              <Image
                src={incomingSlide.pc}
                alt={incomingSlide.title}
                fill
                sizes="(max-width: 480px) 100vw, 960px"
                className="hidden object-cover min-[481px]:block"
              />
              <Image
                src={incomingSlide.mobile}
                alt={incomingSlide.title}
                fill
                sizes="100vw"
                className="object-cover min-[481px]:hidden"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-start justify-center gap-0.5 bg-[#E4E5E2] px-[14px] pb-[14px] pt-[10px] text-left min-[481px]:items-center min-[481px]:px-4 min-[481px]:pb-4 min-[481px]:pt-3 min-[481px]:text-center">
          <p className="w-full font-['Pretendard'] text-[13px] font-bold leading-[1.4] text-[#333333] min-[481px]:text-[14px]">
            {currentSlide.title}
          </p>
          <p className="w-full font-['Pretendard'] text-[13px] font-normal leading-[1.4] text-[#666666] min-[481px]:text-[14px]">
            {currentSlide.description}
          </p>
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
    </section>
  );
}
