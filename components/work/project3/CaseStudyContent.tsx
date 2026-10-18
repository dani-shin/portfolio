"use client";

import { useRef, useState } from "react";
import ArrowButton from "@/components/ArrowButton";
import WorkInfoCard from "@/components/WorkInfoCard";
import WorkInfoText from "@/components/WorkInfoText";

const slides = [
  {
    title: "01. Foundation",
    description:
      "Rules for structuring and configuring components",
    details:
      "(layout, adaptive design, variants setting, section, drawer)",
    pcImage: "/work/project3/process-a-1-pc.png",
    mobileImage: "/work/project3/process-a-1-mo.png",
    alt: "Component properties and states table",
  },
  {
    title: "02. Style",
    description:
      "Visual elements for a consistent brand experience",
    details:
      "(typography, color, icon, illustration, border, shadow...)",
    pcImage: "/work/project3/process-a-2-pc.png",
    mobileImage: "/work/project3/process-a-2-mo.png",
    alt: "Visual style and icon construction",
  },
  {
    title: "03. Component",
    description:
      "26 elements with usage guidelines",
    details:
      "(button, tab, chip, radio, checkbox, switch, slider, progress...)",
    pcImage: "/work/project3/process-a-3-pc.png",
    mobileImage: "/work/project3/process-a-3-mo.png",
    alt: "Example of Components",
  },
  {
    title: "04. Motion",
    description:
      "Animation patterns for interactive states",
    details:
      "(refresh, tab bar, charge graph, car state)",
    pcImage: "/work/project3/process-a-4-pc.png",
    mobileImage: "/work/project3/process-a-4-mo.png",
    alt: "Example of Animation",
  },
];

export default function CaseStudyContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const totalPages = Math.ceil(slides.length / 2);

  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="spantype-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">6 Months</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Reduced average design time per screen from 40 min to 20–25 min (~45% reduction).
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          Genesis previously ran five separate apps, each built independently and shaped by its own visual language, differing in list layouts, background themes, navigation structures, and icon styles. Unifying them into one app meant starting without a shared foundation.
        </p>
        <div className="w-full overflow-hidden rounded-[4px] bg-[#E7DDD9] mb-7">
          <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
            <p className="type-subtitle-2 w-full text-center text-[#333333]">
              Before: Five Separate Apps
            </p>
          </div>

          <div className="flex w-full justify-center">
            <picture>
              <source
                media="(max-width: 480px)"
                srcSet="/work/project3/problem-1-mo.png"
              />

              <source
                media="(max-width: 768px)"
                srcSet="/work/project3/problem-1-1-tb.png"
              />

              <img
                src="/work/project3/problem-1-1-pc.png"
                alt="Before: five separate apps"
                className="block h-auto w-auto max-w-full min-[769px]:max-h-[452px]"
              />
            </picture>
          </div>
        </div>
        <p className="type-body-1 text-[#333333]">
          Without a design system, five designers on the new unified app each designed their assigned screens independently. This produced inconsistencies within the new app itself: buttons of the same importance ranged from 42px to 48px, and spacing values varied between 16px, 20px, and 24px with no clear rule. Unifying these under one set of standards took considerable time.
        </p>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Goals</h4>
        <p className="type-body-1 text-[#333333] mb-4">
          To solve this, I began building a design system focused on three goals:
        </p>
        <div className="grid w-full max-w-[960px] auto-rows-fr grid-cols-1 gap-3 min-[769px]:grid-cols-3 min-[769px]:gap-5 mb-6">
          {[
            "Consistency across screens",
            "Faster design workflows",
            "Scalability across the entire app",
          ].map((title, i) => (
            <div
              key={title}
              className="flex min-w-0 flex-col items-center justify-center gap-1 rounded-[2px] bg-white px-6 pb-[26px] pt-6"
            >
              <p className="type-body-2 w-full text-center text-[#666666]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                {title}
              </p>
            </div>
          ))}
        </div>
        <p className="type-body-1 text-[#333333]">
          From the start, I designed it to be understood and used by both designers and developers, not just one group.
        </p>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Process</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          I built the design system in three steps: structuring the chapters, defining the naming convention, and writing the guidelines for each component.
        </p>

        <div className="mb-12">
          <WorkInfoText
            letter="A"
            title="Structuring the chapters"
            description={
              <>
                I organized the design system into four chapters, starting with the foundational, most commonly applied areas so designers and developers could grasp them first when designing or developing the app. Since I was also designing two menus myself alongside building the system, I had a clear sense of which areas were truly foundational to daily work, and structured the chapters around that.
              </>
            }
          />

          <div className="mt-5">
            <div className="overflow-x-auto scrollbar-hide -mx-[20px] pl-[20px] scroll-pl-[20px] min-[481px]:-mx-[calc(20px+(100vw-481px)*20/338)] min-[481px]:pl-[calc(20px+(100vw-481px)*20/338)] min-[481px]:scroll-pl-[calc(20px+(100vw-481px)*20/338)] min-[577px]:mx-0 min-[577px]:px-0 min-[577px]:scroll-pl-0">
              <div
                ref={sliderRef}
                className="flex gap-[var(--gap)] [--gap:clamp(12px,3.5vw,20px)] snap-x snap-mandatory min-[577px]:grid min-[577px]:grid-cols-2 min-[577px]:w-full"
              >
                {slides.map((slide, index) => {
                  const isVisibleOnDesktop =
                    index >= currentPage * 2 && index < currentPage * 2 + 2;

                  return (
                    <article
                      key={slide.title}
                      className={`w-[80%] shrink-0 snap-start rounded-[4px] bg-[#E7DDD9] overflow-hidden min-[577px]:w-full ${isVisibleOnDesktop ? "" : "min-[577px]:hidden"
                        }`}
                    >
                      <div className="pt-5 px-4 pb-0">
                        <h3 className="type-subtitle-2 text-center font-semibold text-[#333333]">
                          {slide.title}
                        </h3>

                        <p className="type-body-2 mt-3 text-center text-[#333333]">
                          {slide.description}
                        </p>

                        <p className="type-caption-2 text-center text-sm text-[#666666]">
                          {slide.details}
                        </p>
                      </div>

                      <picture className="block w-full">
                        <source
                          media="(max-width: 576px)"
                          srcSet={slide.mobileImage}
                        />
                        <img
                          src={slide.pcImage}
                          alt={slide.alt}
                          className="block h-auto w-full"
                          draggable={false}
                        />
                      </picture>
                    </article>
                  );
                })}

                <div
                  aria-hidden
                  className="shrink-0 min-[577px]:hidden w-[calc(20px-var(--gap))] min-[481px]:w-[calc(calc(20px+(100vw-481px)*20/338)-var(--gap))]"
                />
              </div>
            </div>

            <div className="mt-4 hidden items-center justify-center gap-4 min-[577px]:flex">
              <ArrowButton
                direction="left"
                ariaLabel="Previous slides"
                onClick={() =>
                  setCurrentPage((page) => Math.max(0, page - 1))
                }
              />

              <div className="flex items-center gap-1.5">
                <span className="type-title-3 text-[#333333]">{currentPage + 1}</span>
                <span className="type-body-2 mx-2 text-[#888888]">/ {totalPages}</span>
              </div>

              <ArrowButton
                direction="right"
                ariaLabel="Next slides"
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(totalPages - 1, page + 1)
                  )
                }
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <WorkInfoText
            letter="B"
            title="Naming convention"
            description={
              <>
                Each component name follows one formula: a required Component name, followed by optional Type, Style, Size, Shape, Option, and State. This order matches how variants are set up in Figma, narrowing from the broadest distinction to the most specific one at each step, so designers and developers could navigate directly to the exact component they needed.
              </>
            }
          />
          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#E7DDD9]">
            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project3/process-b-mo.png"
                />

                <img
                  src="/work/project3/process-b-1-pc.png"
                  alt="Naming convention"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[460px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>

        <div>
          <WorkInfoText
            letter="C"
            title="Writing the guidelines"
            description={
              <>
                For each component, I combined some or all of six elements, common guidelines, construction, settings, type, sample, and usage, as needed, so anyone using a single component could see what combinations were possible, when to use it, and when not to, all in one place.
              </>
            }
          />
          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#E7DDD9]">
            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project3/process-c-mo.png"
                />

                <img
                  src="/work/project3/process-c-1-pc.png"
                  alt="Writing the guidelines"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[460px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Adoption <span className="text-[#888888]">&amp;</span> Outcome</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          Once the system was built, keeping it applied required ongoing effort.
          Every time it was updated, I announced the changes to the full team and reviewed
          every designer's screens to check whether they matched. When something hadn't been applied,
          I sent revision requests directly. The reverse also happened. When designers requested
          additions or changes to the system, I sat down with them to review their work and find
          a solution that stayed practical for their needs while still holding up across the rest of the app.
        </p>

        <div className="w-full overflow-hidden rounded-[4px] bg-[#E7DDD9] mb-7">
          <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
            <p className="type-subtitle-2 w-full text-center text-[#333333] mb-1">
              Design System Pages
            </p>
            <p className="type-caption-2 w-full text-center text-[#666666]">
              Actual pages from the deployed guide (blurred for confidentiality)
            </p>
          </div>

          <div className="flex w-full justify-center">
            <picture>
              <source
                media="(max-width: 480px)"
                srcSet="/work/project3/outcome-mo.png"
              />

              <img
                src="/work/project3/outcome-pc.png"
                alt="question-to-product mapping"
                className="block h-auto w-auto max-w-full min-[481px]:max-h-[378px] min-[481px]:max-w-full"
                style={{ height: "auto" }}
              />
            </picture>
          </div>
        </div>
        <p className="type-body-1 text-[#333333]">
          As a result, the design system covered all five menus with consistent standards,
          and design-related issues dropped significantly during QA, based on feedback from the QA team.
        </p>
      </div>

      <WorkInfoText
        title="Reflection"
        description={
          <>
            If I were to do this again, I'd simplify the naming convention further, reducing the number of optional properties to make it more intuitive at a glance.
          </>
        }
      />
    </section>
  );
}
