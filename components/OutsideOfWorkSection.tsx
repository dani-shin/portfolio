"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";

interface GalleryItem {
  image: string;
  secondImage?: string;
  alt: string;
}

const photographyPages: GalleryItem[][] = [
  [
    {
      image: "/about/outside-1st.png",
      alt: "Selfie with a camera"
    },
    {
      image: "/about/outside-2-1.png",
      secondImage: "/about/outside-2-2.png",
      alt: "Zaanse Schans, Netherlands",
    },
    {
      image: "/about/outside-3-1.png",
      secondImage: "/about/outside-3-2.png",
      alt: "Granada, Spain",
    },
  ],

  [
    { image: "/about/outside-4.png", alt: "Deoksugung Palace, South Korea" },
    { image: "/about/outside-5.png", alt: "Deoksugung Palace, South Korea" },
    { image: "/about/outside-6.png", alt: "Nara Deer Park, Japan" },
  ],

  [
    { image: "/about/outside-7.png", alt: "Camden Market, London" },
    { image: "/about/outside-8.png", alt: "Seattle, USA" },
    { image: "/about/outside-9.png", alt: "Saigon, Vietnam" },
  ],
];

const allItems: GalleryItem[] = photographyPages.flat();

export default function OutsideOfWorkSection() {
  const [page, setPage] = useState<1 | 2 | 3>(1);
  const [showSecondImage, setShowSecondImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecondImage((prev) => !prev);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handlePrevPage = () => {
    setPage((prev) => (prev === 1 ? 3 : ((prev - 1) as 1 | 2 | 3)));
  };

  const handleNextPage = () => {
    setPage((prev) => (prev === 3 ? 1 : ((prev + 1) as 1 | 2 | 3)));
  };

  return (
    <section className="py-12">
      <div className="flex flex-col items-start">
        <h2 className="font-['Pretendard'] type-title-3 text-[#111111] mb-1">
          Outside of work
        </h2>
        <div className="font-['Pretendard'] type-body-1 text-[#333333] mb-6 md:mb-6">
          <p>
            Photography and painting help me stay observant, a habit I bring back to my design work.
          </p>
          <p>Here are a few of my favorites:</p>
        </div>

        <div className="w-full">
          <div className="scrollbar-hide mx-[calc((100%_-_100vw)/2)] overflow-x-auto px-[calc((100vw_-_100%)/2)] min-[600px]:hidden">
            <div className="flex w-max flex-row items-start gap-3">
              {allItems.map((item, index) => (
                <div
                  key={`m-${index}`}
                  className="w-[208px] min-w-0 shrink-0 overflow-hidden rounded-[2px] border border-[#D0D0D0] bg-white"
                >
                  <div className="relative aspect-[208/276] w-full overflow-hidden bg-white">
                    <Image
                      src={showSecondImage && item.secondImage ? item.secondImage : item.image}
                      alt={showSecondImage && item.secondImage ? `${item.alt} sketch` : item.alt}
                      fill
                      sizes="208px"
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden min-[600px]:grid grid-cols-3 gap-5 mb-4 w-full">
            {photographyPages[page - 1].map((item, index) => (
              <div
                key={`pc-${page}-${index}`}
                className="shrink-0 min-w-0 overflow-hidden bg-white border border-[#D6D6D6] rounded-[4px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.04)]"
              >
                <div className="relative w-full aspect-[306/408] overflow-hidden bg-white">
                  <Image
                    src={showSecondImage && item.secondImage ? item.secondImage : item.image}
                    alt={showSecondImage && item.secondImage ? `${item.alt} sketch` : item.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden min-[600px]:flex w-full items-center justify-center gap-6">
          <ArrowButton direction="left" onClick={handlePrevPage} ariaLabel="Previous page" />

          <div className="flex items-center gap-1.5 font-['Pretendard']">
            <span className="font-bold type-title-3 text-[#333333] w-4 text-center">
              {page}
            </span>
            <span className="font-normal type-body-2 text-[#888888]">
              / 3
            </span>
          </div>

          <ArrowButton direction="right" onClick={handleNextPage} ariaLabel="Next page" />
        </div>
      </div>
    </section>
  );
}