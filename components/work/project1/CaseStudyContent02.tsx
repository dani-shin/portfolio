import Image from "next/image";
import WorkInfoText from "@/components/WorkInfoText";

function Connector() {
  return (
    <div aria-hidden className="flex h-5 w-full justify-center">
      <span className="h-full w-px bg-black/20" />
    </div>
  );
}

const IMAGE_SRC = "/work/project1/solution-2-b-1.png"

const RESULTS = [
  {
    label: "Provider-first flow",
    stat: "3/10",
    statinfo: "users backtracked",
    quote:
      "I had to go back and pick a different provider after finding no matching time slot in the next step.",
    bg: "bg-[#D7DFDC]",
    mobileHeight: "h-auto",
  },
  {
    label: "Time-first flow",
    stat: "0/10",
    statinfo: "users backtracked",
    quote:
      "Once I picked a time, I didn't really think much about which provider I chose.",
    bg: "bg-[#94F7E0]",
    mobileHeight: "h-auto",
  },
];

const INFO_IMAGE_PC = "/work/project1/solution-2-b-2-pc.png";
const INFO_IMAGE_MO = "/work/project1/solution-2-b-2-mo.png";

const INFO_ITEMS = [
  {
    title: "Design Response",
    description:
      "Redesigned the flow to let users select a time first, then choose from available providers.",
  },
  {
    title: "Feasibility Check",
    description:
      "Since not all providers could treat every product, a time-first flow could force users into multiple separate consultations for different products.",
  },
  {
    title: "Operational Decision",
    description:
      "Prioritized providers who could cover all products within a category, allowing users to address multiple needs in a single consultation.",
  },
];

export default function CaseStudyContent02() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">2 Months</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Unified multiple medical category flows into one scalable system, cutting operational and development workload by over 60%.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333]">
          The platform offered both Korean traditional medicine and general medicine products, each with its own doctors, questionnaires, and consultation flow. When customers bought from both categories, they had to go through the entire booking process twice, from questionnaires to doctor selection. This created a fragmented experience for customers and extra work for internal teams.
        </p>
      </div>

      <h4 className="type-subtitle-1 text-[#111111] mb-4">How the questionnaire pipeline broke down</h4>
      <div className="w-full grid grid-cols-1 min-[768px]:grid-cols-3 gap-3 min-[768px]:gap-5 mb-15">
        <div className="bg-white rounded-[4px] p-5 min-[768px]:p-6 flex flex-col gap-1 min-[768px]:gap-2 text-[#333333]">
          <h3 className="font-['Pretendard'] type-subtitle-2">
            Creating questions
          </h3>
          <p className="font-['Pretendard'] type-body-2">
            For every new product, the ops team had to write 15–20 questions from scratch, even when many overlapped with existing ones.
          </p>
        </div>

        <div className="bg-white rounded-[4px] p-5 min-[900px]:p-6 flex flex-col gap-1 min-[900px]:gap-2 text-[#333333]">
          <h3 className="font-['Pretendard'] type-subtitle-2">
            Cleaning up duplicates
          </h3>
          <p className="font-['Pretendard'] type-body-2">
            The dev team then had to manually remove duplicate questions within each category so customers saw each one only once.
          </p>
        </div>

        <div className="bg-white rounded-[4px] p-5 min-[900px]:p-6 flex flex-col gap-1 min-[900px]:gap-2 text-[#333333]">
          <h3 className="font-['Pretendard'] type-subtitle-2">
            Using the questionnaire
          </h3>
          <p className="font-['Pretendard'] type-body-2">
            Because questionnaires were built separately per category, customers buying from both had to repeat the entire booking process twice.
          </p>
        </div>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Constraint</h4>
        <p className="type-body-1 text-[#333333] mb-9">
        The goal was twofold: minimize the questionnaire to only what was essential, and realign the booking flow with users’ natural mental model, where they choose an available time first and then select a doctor. But two structural problems made this harder than expected.
        </p>
        <p className="type-body-1 text-[#333333] mb-6">
          The first was scheduling logic. Each doctor supported a different set of products, schedules, and prescription categories, which meant users often had to make separate appointments for different categories.
        </p>

        <div className="mb-7 mx-[calc((100%_-_100vw)/2)] overflow-x-auto overscroll-x-contain px-[calc((100vw_-_100%)/2)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[900px]:mx-0 min-[900px]:w-full min-[900px]:max-w-[1040px] min-[900px]:overflow-visible min-[900px]:px-0">
          <picture className="flex w-max min-w-full items-start after:block after:w-[calc((100vw_-_100%)/2)] after:shrink-0 after:content-[''] min-[900px]:block min-[900px]:w-full min-[900px]:after:hidden">
            <source media="(max-width: 480px)" srcSet="/work/project1/cs-2-mo.png" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/work/project1/cs-2-pc.png"
              alt="Scheduling logic and questionnaire structure comparison table"
              draggable={false}
              className="block h-[278px] w-auto max-w-none shrink-0 select-none min-[481px]:h-auto min-[481px]:w-full min-[481px]:min-w-[820px] min-[481px]:max-w-[1040px]"
            />
          </picture>
        </div>

        <p className="type-body-1 text-[#333333] mb-15">
          The second was the product-centric questionnaire system. Every time a new product was added, developers had to manually find and remove duplicate questions, a process that wasn't scalable or sustainable.
        </p>

        <h4 className="type-subtitle-1 text-[#111111] mb-1">Solution</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          I redesigned both the questionnaire architecture and the booking flow around users’ mental model, rather than internal operational structure.
        </p>

        <div className="mb-12">
          <WorkInfoText
            letter="A"
            title="Unified questionnaire architecture"
            description="I worked with the development team through several rounds of discussion to find a structure that would reduce their workload and make it easier to add new products in the future. Instead of creating a separate set of questions for each product, we redesigned the system so that questions became the primary unit, and each question could be linked to as many products as needed."
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Question-to-product mapping
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-2-a-1-mo.png"
                />

                <img
                  src="/work/project1/solution-2-a-1-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[124px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>

          <Connector />

          <div className="w-full overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                One questionnaire, across categories
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-2-a-2-mo.png"
                />

                <img
                  src="/work/project1/solution-2-a-2-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[294px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="set-solution">
          <WorkInfoText
            letter="B"
            title="Time-first booking flow"
            description="To improve the telehealth booking flow, I started by looking at my own booking habits and noticed that I checked available times before choosing a doctor. This led me to hypothesize that the existing “provider-first” flow might not match users’ mental model, so I conducted research to see whether users actually thought this way."
          />

          <div className="flex w-full max-w-[960px] flex-col gap-3 mt-5 min-[769px]:grid min-[769px]:grid-cols-[308fr_306fr_306fr] min-[769px]:gap-5">
            <div className="fluid-card-px fluid-card-pt relative overflow-hidden rounded-[4px] bg-[#D7DFDC] pb-20 min-[769px]:pb-6">
              <div aria-hidden className="absolute inset-0">
                <Image
                  src={IMAGE_SRC}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 308px"
                  quality={75}
                  className="object-cover"
                />
              </div>

              <div aria-hidden className="absolute inset-0 bg-black/50 backdrop-blur-[1.5px]" />

              <div className="relative z-10">
                <p className="type-subtitle-2 text-white">
                  Comparative task-based usability testing
                </p>
                <p className="mt-1 type-body-2 text-white/80">
                  10 users · within-subject
                </p>
              </div>
            </div>

            {RESULTS.map((item) => (
              <div
                key={item.label}
                className={`fluid-card-px fluid-card-pt fluid-card-pb rounded-[4px] text-[#333333] ${item.bg}`}
              >
                <p className="type-subtitle-2">{item.label}</p>

                <p className="mt-0.5">
                  <span className="type-title-1">{item.stat}</span>
                  <span className="type-subtitle-1 ml-1">{item.statinfo}</span>
                </p>

                <p className="mt-6 font-['Avenir',sans-serif] text-[15px] font-normal italic leading-[1.46] min-[481px]:mt-10 min-[481px]:text-[16px] min-[481px]:leading-[1.48]">
                  {item.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Connector />

        <div className="w-full overflow-hidden rounded-[4px] bg-[#D7DFDC]">
          <div className="fluid-summary-pb w-full max-w-[960px] rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Key Insight
              </p>
            </div>

            <p className="type-body-1 px-4 text-center text-[#333333]">
              Users prioritize <strong>“available time slots”</strong> over choice of provider
            </p>
          </div>
        </div>

        <Connector />

        <div className="grid w-full max-w-[960px] grid-cols-1 overflow-hidden rounded-[4px] bg-[#D7DFDC] min-[769px]:grid-cols-2">
          <div className="flex w-full items-center justify-center bg-[#D7DFDC]">
            <Image
              src={INFO_IMAGE_MO}
              alt=""
              width={320}
              height={300}
              sizes="(max-width: 768px) 100vw, 0px"
              quality={75}
              className="block h-auto w-full min-[769px]:hidden"
            />

            <Image
              src={INFO_IMAGE_PC}
              alt=""
              width={480}
              height={420}
              sizes="(min-width: 960px) 480px, 50vw"
              quality={75}
              className="hidden h-auto w-full min-[769px]:block"
            />
          </div>

          <div className="fluid-info-pt fluid-info-px fluid-info-pb flex flex-col items-start justify-center gap-[clamp(16px,2.08vw,20px)]">
            {INFO_ITEMS.map((item, i) => (
              <div key={item.title} className="contents">
                {i > 0 && (
                  <div aria-hidden className="h-px w-full flex-none bg-black/20" />
                )}

                <div className="fluid-info-text-px flex w-full flex-col items-start gap-1">
                  <p className="type-subtitle-2 w-full text-[#333333]">
                    {item.title}
                  </p>
                  <p className="type-caption-2 w-full text-[#666666]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
        <ul>
          {[
            "Reduced operational and development workload by over 60%.",
            "Eliminated the need for developers to manually remove duplicate questions when adding new products.",
            "Removed backtracking by switching to a time-first flow, as confirmed in usability testing.",
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
