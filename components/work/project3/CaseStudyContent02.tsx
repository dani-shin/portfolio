import WorkInfoCard from "@/components/WorkInfoCard";
import WorkInfoText from "@/components/WorkInfoText";
import BottomSheetSpecs from "@/components/work/project3/BottomSheetSpecs";

export default function CaseStudyContent02() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">3 Months</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Redesigned the map interaction model for a mobility menu carrying more features and information than the existing system could support.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          The map had to be treated as a core asset, not a background, with every UI decision protecting the user's view of it while still surfacing complex information. But some mobility flows competed with the map for screen space. A full-screen modal was fine for reading, but the wrong tool when the user still needed to see and interact with the map underneath.
        </p>
        <WorkInfoText
          title="Issues with the existing bottom sheet"
          description="The existing bottom sheet wasn't built for the new features this project added. At max height, it covered the search bar at the top of the screen. It also only had two states, default and max, with no minimized option, so there was no way to shrink it enough to see the route during navigation."
          imageSrc="/work/project3/problem-2-pc.png"
          mobileImageSrc="/work/project3/problem-2-mo.png"
          imageWidth={388}
          imageHeight={372}
          mobileImageRatio="320 / 354"
        />
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Constraint</h4>
        <p className="type-body-1 text-[#333333]">
          Bottom sheet heights needed to work across both iOS and Android, and across a range of device sizes on each platform, so a single fixed height wouldn't hold up.
        </p>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Solution</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          I broke the solution down into two decisions: how information is presented relative to the map, and how that information stays visually legible once multiple data sources appear on screen at once.
        </p>

        <div className="mb-12">
          <WorkInfoText
            letter="A"
            title="Bottom sheet for browsing, Modal for reading"
            description={
              <>
                I noticed that not every screen has the same relationship to the map. Search, saved places, and vehicle status are tasks users do while looking at the map. Detail pages, like charging station specs or filters, are tasks done instead of looking at the map.
              </>
            }
          />
          <BottomSheetSpecs />
        </div>

        <div className="mb-15">
          <WorkInfoText
            letter="B"
            title="A marker system for multiple, simultaneous GPS sources"
            description={
              <>
                As the menu integrated five separate services, the map had to carry far more information at once, fuel type, car washes, vehicle ownership, and more, all needing to read clearly and stay visually distinct even when several appeared on screen together.
              </>
            }
          />
          <div className="ml-[calc(50%-50vw)] w-screen px-[20px] min-[481px]:px-[calc(20px+(100vw-481px)*20/338)] min-[577px]:ml-0 min-[577px]:w-full min-[577px]:px-0 mt-5">
            <div className="flex snap-x snap-mandatory gap-[var(--gap)] [--gap:clamp(12px,3.5vw,20px)] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-[20px] pl-[20px] scroll-pl-[20px] min-[481px]:-mx-[calc(20px+(100vw-481px)*20/338)] min-[481px]:pl-[calc(20px+(100vw-481px)*20/338)] min-[481px]:scroll-pl-[calc(20px+(100vw-481px)*20/338)] min-[577px]:mx-0 min-[577px]:grid min-[577px]:snap-none min-[577px]:grid-cols-2 min-[577px]:gap-x-5 min-[577px]:gap-y-6 min-[577px]:overflow-visible min-[577px]:pl-0 min-[577px]:scroll-pl-0">
              <div className="flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-[4px] bg-[#E7DDD9] min-[577px]:w-auto">
                <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
                  <p className="type-subtitle-2 w-full text-center text-[#333333] mb-1">
                    Map marker design
                  </p>
                  <p className="type-body-2 w-full text-center text-[#333333]">
                    Built a differentiated marker system, varying color, shape, and iconography by data type.
                  </p>
                </div>

                <div className="mt-auto flex w-full justify-center">
                  <picture className="w-full">
                    <source
                      media="(max-width: 768px)"
                      srcSet="/work/project3/solution-2-b-1-mo.png"
                    />

                    <img
                      src="/work/project3/solution-2-b-1-pc.png"
                      alt="Map marker design"
                      className="block h-auto w-full max-w-full"
                      style={{ height: "auto" }}
                    />
                  </picture>
                </div>
              </div>

              <div className="flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-[4px] bg-[#E7DDD9] min-[577px]:w-auto">
                <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
                  <p className="type-subtitle-2 w-full text-center text-[#333333] mb-1">
                    Reusable marker structure
                  </p>
                  <p className="type-body-2 w-full text-center text-[#333333]">
                    I used consistent sizing and a single SVG source per marker, so developers could swap states by changing color alone.
                  </p>
                </div>

                <div className="mt-auto flex w-full justify-center">
                  <picture className="w-full">
                    <source
                      media="(max-width: 768px)"
                      srcSet="/work/project3/solution-2-b-2-mo.png"
                    />

                    <img
                      src="/work/project3/solution-2-b-2-pc.png"
                      alt="Reusable marker structure"
                      className="block h-auto w-full max-w-full"
                      style={{ height: "auto" }}
                    />
                  </picture>
                </div>
              </div>

              <div
                aria-hidden
                className="shrink-0 min-[577px]:hidden w-[calc(20px-var(--gap))] min-[481px]:w-[calc(calc(20px+(100vw-481px)*20/338)-var(--gap))]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
        <ul>
          {[
            "The three-height bottom sheet and modal split resolved the navigation visibility issue, giving users a minimized state that keeps the route visible during turn-by-turn guidance.",
            "The interaction patterns and height rules I defined were adopted across other map-based menus in the app, including charging, maintenance, car wash, and valet services.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 type-body-1 text-[#333333]">
              <span className="flex h-6 w-4 flex-none items-center justify-center py-1 min-[481px]:h-7 min-[481px]:py-1.5">
                <span className="h-1 w-1 rounded-full bg-[#111111]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="w-full mt-6 overflow-hidden rounded-[4px] bg-[#E7DDD9]">
          <div className="flex w-full justify-center">
            <picture>
              <source
                media="(max-width: 480px)"
                srcSet="/work/project3/outcome-2-mo.png"
              />

              <img
                src="/work/project3/outcome-2-pc.png"
                alt="Naming convention"
                className="block h-auto w-auto max-w-full min-[481px]:max-h-[390px] min-[481px]:max-w-full"
                style={{ height: "auto" }}
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
