import Image from "next/image";

const imgKorea = "/about/korea-flag.png";
const imgUsa = "/about/usa-flag.png";
const imgIllustArrowRight = "/about/arrow-right.svg";

export default function AboutHero() {
  return (
    <section className="pt-[60px] min-[481px]:pt-[80px] pb-12">
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative h-[24px] md:h-[32px] w-[39px] md:w-[52px] border border-[rgba(0,0,0,0.12)] overflow-hidden rounded-[2px]">
            <Image
              src={imgKorea}
              alt="South Korea flag"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative size-6 md:size-8">
            <Image
              src={imgIllustArrowRight}
              alt="Arrow right"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-[24px] md:h-[32px] w-[39px] md:w-[52px] border border-[rgba(0,0,0,0.12)] overflow-hidden rounded-[2px]">
            <Image
              src={imgUsa}
              alt="USA flag"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h1 className="hero-title font-serif text-[26px] md:text-[36px] leading-[1.4] text-[#111111] font-normal">
          29 years in Korea. 30th in the U.S.
        </h1>

        <p className="mt-2 font-['Pretendard'] text-[16px] md:text-[18px] leading-[1.48] md:leading-[1.56] text-[#333333] max-w-[960px]">
          I moved to the U.S. at 30 to start a new chapter in life. Starting over in a new environment taught me to stay curious, adapt quickly, and look at familiar problems from new perspectives.
        </p>
      </div>
    </section>
  );
}
