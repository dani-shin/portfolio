"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CardData {
  title: string;
  images: string[];
}

interface ConceptCardsRowProps {
  cards: CardData[];
}

export default function ConceptCardsRow({ cards }: ConceptCardsRowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-[clamp(12px,calc(12px_+_(100vw_-_480px)_*_8_/_420),20px)] min-[769px]:grid-cols-3">
      {cards.map((card, cardIdx) => {
        const imageIndex = currentIndex % card.images.length;
        return (
          <div
            key={cardIdx}
            className="flex flex-col overflow-hidden rounded-[4px] border border-[#EBEBEB] bg-white"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F5F5F3]">
              {card.images.map((src, imgIdx) => {
                const isActive = imgIdx === imageIndex;
                return (
                  <div
                    key={src}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                  >
                    <Image
                      src={src}
                      alt={`${card.title} - concept draft ${imgIdx + 1}`}
                      fill
                      sizes="(min-width: 769px) 306px, 100vw"
                      className="object-cover"
                      priority={cardIdx === 0 && imgIdx === 0}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
