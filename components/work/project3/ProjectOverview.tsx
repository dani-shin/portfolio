import Link from "next/link";
import Button from "@/components/Button";

export default function ProjectOverview() {
  return (
    <section className="pt-3 pb-20 min-[481px]:pt-5 min-[481px]:pb-20">
      <Link
        href="/"
        className="inline-flex h-9 w-[97px] items-center gap-2 rounded-[2px] py-1.5 pr-1.5 group"
      >
        <svg
          className="h-5 w-5 min-[600px]:h-6 min-[600px]:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 12H3"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M10 4L2 12L10 20"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
        <span className="type-body-2 text-[#111111]">All Work</span>
      </Link>

      <div className="mt-15 max-w-[960px] min-[481px]:mt-20">
        <h1 className="type-headline-1 text-[#111111] mb-4 max-w-[960px] min-[481px]:mb-6">
          Building a unified design system for Genesis's all-in-one app
        </h1>

        <div className="type-body-1 text-[#333333] space-y-6 mb-9">
          <p>
            MY GENESIS is Genesis's unified app that merged five separate apps into one, delivering a more seamless digital experience for customers. I led the design system for MY GENESIS, building a cohesive design language and component library across a cross-functional team of 5 designers, 1 publisher, and 20+ external developers. Building on that foundation, I directly designed the UX for the Mobility and Insight features, restructuring information hierarchy based on real user needs.
          </p>
          <p>
            This case study reflects the app's original 2023 launch version. The current version may differ in design and structure due to updates since then.
          </p>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-2 min-[481px]:items-start min-[481px]:gap-x-3 min-[481px]:gap-y-3">
          <Button
            href="https://www.youtube.com/watch?list=PLbgDmvo3_vDoDI4wMM2iVtwgUk7Hoc_66&t=27&v=sx-9AONNWV4&feature=youtu.be"
            variant="filled"
          >
            Watch Launch Video
          </Button>

          <Button href="https://www.genesis.com/kr/ko/members/my-genesis-app/overview.html" variant="outlined">
            View Current App
          </Button>
        </div>
      </div>
    </section>
  );
}
