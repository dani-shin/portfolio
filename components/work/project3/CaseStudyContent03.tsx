import WorkInfoCard from "@/components/WorkInfoCard";
import WorkInfoText from "@/components/WorkInfoText";

const slides = [
  {
    title: "Insight Main Screen",
    pcImage: "/work/project3/solution-3-a-1-pc.png",
    mobileImage: "/work/project3/solution-3-a-1-mo.png",
    alt: "Insight Main Screen",
  },
  {
    title: "Tooltip Behavior by Bar Position",
    pcImage: "/work/project3/solution-3-a-2-pc.png",
    mobileImage: "/work/project3/solution-3-a-2-mo.png",
    alt: "Tooltip Behavior by Bar Position",
  },
  {
    title: "Payment Type Differentiation",
    pcImage: "/work/project3/solution-3-a-3-pc.png",
    mobileImage: "/work/project3/solution-3-a-3-mo.png",
    alt: "Payment Type Differentiation",
  },
];

export default function CaseStudyContent03() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">2 Months</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Designed a dashboard that visualizes spending across various payment types and categories, making it easy for users to understand at a glance.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333]">
          Five separate service apps were merging into one, adding new payment types and a wider range of spending categories to car log. I needed a way to present all of this clearly, without overwhelming users with too many numbers at once. That meant structuring the dashboard to fit what each screen actually needed to show.
        </p>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Constraint</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          Working with the PM, we agreed to split the dashboard across two screens: a summary on Insight's main screen, and a detailed breakdown on the spending-analysis page. As the designer, I had to figure out how to keep tooltip labels from getting cut off at the screen edge, and how to visually fit up to 9 categories into a single bar graph without losing clarity.
        </p>

        <div className="flex flex-col gap-5 min-[577px]:flex-row min-[577px]:items-stretch">
          <div className="flex flex-1 flex-col overflow-hidden rounded-[4px] bg-[#E7DDD9]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Tooltip at the screen edge
              </p>
            </div>
            <div className="mt-auto flex w-full justify-center">
              <picture className="w-full">
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project3/cs-3-1-mo.png"
                />
                <img
                  src="/work/project3/cs-3-1-pc.png"
                  alt="Fitting 9 categories into a bar"
                  className="block h-auto w-full max-w-full"
                />
              </picture>
            </div>
          </div>

          <div className="flex flex-1 flex-col overflow-hidden rounded-[4px] bg-[#E7DDD9]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                9 categories
              </p>
            </div>
            <div className="mt-auto flex w-full justify-center">
              <picture className="w-full">
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project3/cs-3-2-mo.png"
                />
                <img
                  src="/work/project3/cs-3-2-pc.png"
                  alt="Tooltip at the screen edge"
                  className="block h-auto w-full max-w-full"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-4">Solution</h4>
        <div className="mb-12">
          <WorkInfoText
            letter="A"
            title="Keeping the main dashboard readable as data grew"
            description={
              <>
                The main screen shows a 6-month summary, and had to stay clear as both the numbers and the payment types behind them grew more complex. Tooltip position hadn't been defined for the first and last bars, so large values could get cut off at the screen edge. I worked with the publisher to define clear rules for each case and documented this as a guide for development. I also gave each payment type a distinct icon and color, so users could tell them apart at a glance.
              </>
            }
          />
          <div className="scrollbar-hide mt-5 overflow-x-auto -mx-[20px] px-[20px] scroll-pl-[20px] min-[481px]:-mx-[calc(20px+(100vw-481px)*20/338)] min-[481px]:px-[calc(20px+(100vw-481px)*20/338)] min-[481px]:scroll-pl-[calc(20px+(100vw-481px)*20/338)] min-[577px]:mx-0 min-[577px]:w-full min-[577px]:overflow-visible min-[577px]:px-0 min-[577px]:scroll-pl-0">
            <div className="flex snap-x snap-mandatory gap-[var(--gap)] [--gap:clamp(12px,calc(12px_+_(100vw_-_480px)_*_8_/_420),20px)] min-[577px]:grid min-[577px]:snap-none min-[577px]:grid-cols-3 min-[577px]:gap-5">
              {slides.map((slide) => (
                <article
                  key={slide.title}
                  className="w-[80%] shrink-0 snap-start overflow-hidden rounded-[4px] bg-[#E7DDD9] min-[577px]:w-full"
                >
                  <div className="px-4 pb-3 pt-5">
                    <h4 className="type-subtitle-2 w-full text-center text-[#333333]">
                      {slide.title}
                    </h4>
                  </div>

                  <picture className="block w-full">
                    <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
                    <img
                      src={slide.pcImage}
                      alt={slide.alt}
                      draggable={false}
                      className="block h-auto w-full"
                    />
                  </picture>
                </article>
              ))}

              <div
                aria-hidden
                className="shrink-0 w-[calc(20px_-_var(--gap))] min-[481px]:w-[calc(calc(20px+(100vw-481px)*20/338)_-_var(--gap))] min-[577px]:hidden"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <WorkInfoText
            letter="B"
            title="Designing for category density on the detail page"
            description={
              <>
                The detail page shows a 12-month category breakdown. Showing every category with equal weight made the chart harder to read as more were added. I prototyped and tested several versions, including a pie chart, before settling on a stacked bar chart with distinct colors that held up at scale.
              </>
            }
          />
          <div className="flex w-full flex-col overflow-hidden rounded-[4px] mt-5 bg-[#E7DDD9] min-[901px]:flex-row">
            <div className="w-full min-[901px]:w-[58.95%] min-[901px]:shrink-0">
              <picture className="flex h-full w-full items-center justify-center">
                <source media="(max-width: 480px)" srcSet="/work/project3/solution-3-b-1-mo.png" />
                <img
                  src="/work/project3/solution-3-b-1-pc.png"
                  alt="Chart comparison"
                  className="block h-auto w-full object-contain object-center min-[901px]:h-full"
                />
              </picture>
            </div>

            <div className="flex w-full flex-col min-[481px]:flex-row min-[901px]:w-[41.05%] min-[901px]:shrink-0 min-[901px]:flex-col">
              <picture className="block w-full min-[481px]:w-[42.4%] min-[481px]:shrink-0 min-[901px]:w-full">
                <source media="(max-width: 480px)" srcSet="/work/project3/solution-3-b-2-mo.png" />
                <source media="(max-width: 900px)" srcSet="/work/project3/solution-3-b-2-tb.png" />
                <img
                  src="/work/project3/solution-3-b-2-pc.png"
                  alt="Bar chart solution"
                  className="block h-full w-full object-cover min-[481px]:h-full"
                />
              </picture>

              <div className="flex flex-1 items-center justify-center pt-1 pb-[clamp(32px,4vw,36px)] pl-[clamp(32px,4vw,38px)] pr-[clamp(32px,5.5vw,50px)] min-[481px]:pt-[26px] min-[481px]:pr-[48px] min-[481px]:pb-[36px] min-[481px]:pl-[12px] min-[901px]:pt-1 min-[901px]:pb-[36px] min-[901px]:pl-[38px] min-[901px]:pr-[50px]">
                <p className="type-caption-2 text-[#333333]">
                  I tried keeping colors close to the primary shade, but categories became hard to tell apart. A pie chart wasn't much better, it got cluttered comparing 12 months of data. A bar chart with distinct colors ended up working best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
        <ul>
          {[
            "Delivered a chart system built to scale, new payment types or spending categories can be added without redesigning the layout.",
            "Documented the tooltip edge-case rules as an exact implementation guide, removing ambiguity for development.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 type-body-1 text-[#333333]">
              <span className="flex h-6 w-4 flex-none items-center justify-center py-1 min-[481px]:h-7 min-[481px]:py-1.5">
                <span className="h-1 w-1 rounded-full bg-[#111111]" />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
