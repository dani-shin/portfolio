import Image from "next/image";
import WorkInfoCard from "@/components/WorkInfoCard";
import AiStateTypes from "@/components/work/ai/AiStateTypes";

function Connector() {
  return (
    <div aria-hidden className="flex h-5 w-full justify-center">
      <span className="h-full w-px bg-black/20" />
    </div>
  );
}

export default function CaseStudyContent02() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">1 Week</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Explored designs for distinguishing call states, and reviewed existing screens to fix inconsistencies and raise overall polish.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Exploring clearer call states</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          During a call, it was unclear who was speaking, and a pause while the AI prepared a reply looked the same as the AI not responding. I explored several designs for a speaker indicator and for distinct "speaking" and "thinking" animations.
        </p>
        <AiStateTypes />
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Aligning typography with OS guidelines and building a component library</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          Font sizes and line heights deviated from OS guidelines, and components had never been built. I redefined the Type Scale and Typography Hierarchy, then built a component library of input fields, dropdowns, buttons, and more, and applied it across all screens.
        </p>

        <div className="flex flex-col min-[769px]:flex-row gap-5">
          <div className="flex-1 flex flex-col min-w-0">
            <div className="w-full overflow-hidden rounded-[4px] bg-[#E2E4E5]">
              <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
                <p className="type-subtitle-2 w-full text-center text-[#333333]">
                  Before
                </p>
              </div>
              <div className="flex w-full justify-center">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet="/work/project2/guidelines-before-1-mo.png"
                  />
                  <img
                    src="/work/project2/guidelines-before-1-pc.png"
                    alt="question-to-product mapping"
                    className="block h-auto w-auto max-w-full min-[481px]:max-h-[442px] min-[481px]:max-w-full"
                    style={{ height: "auto" }}
                  />
                </picture>
              </div>
            </div>

            <Connector />

            <div className="bg-[#E2E4E5] rounded-[4px] overflow-hidden flex flex-col items-center w-full min-[769px]:max-w-[470px] mx-auto min-[769px]:mx-0">
              <div className="w-full flex items-center justify-center">
                <picture className="w-full flex justify-center">
                  <source media="(max-width: 430px)" srcSet="/work/project2/guidelines-before-2-mo.png" />
                  <img
                    src="/work/project2/guidelines-before-2-pc.png"
                    alt="Before typography settings"
                    className="block h-auto w-full object-contain"
                  />
                </picture>
              </div>
              <div className="w-full flex flex-row justify-center items-center pt-0 px-[clamp(24px,5vw,36px)] pb-[clamp(20px,3vw,24px)]">
                <p className="type-caption-2 text-[#666666] text-center w-full">
                  Text was uncomfortably small with automatic line heights. Loose layer elements caused frequent inconsistencies when reused across different screens.
                </p>
              </div>
            </div>

            <Connector />

            <div className="bg-[#E2E4E5] rounded-[4px] overflow-hidden flex flex-col min-[769px]:flex-row w-full min-[769px]:max-w-[470px] mx-auto min-[769px]:mx-0">
              <div className="w-full aspect-[320/176] min-[769px]:aspect-[272/226] min-[769px]:w-[58%] flex items-center justify-center shrink-0">
                <picture className="w-full h-full flex justify-center">
                  <source media="(max-width: 769px)" srcSet="/work/project2/guidelines-before-3-mo.png" />
                  <img
                    src="/work/project2/guidelines-before-3-pc.png"
                    alt="Before input fields"
                    className="block h-full w-full object-cover"
                  />
                </picture>
              </div>

              <div className="w-full flex flex-col justify-center items-center pt-0 px-[7.5%] pb-[6.25%] min-[769px]:w-[42%] min-[769px]:py-[5%] min-[769px]:pr-[6%] min-[769px]:pl-0 shrink-0">
                <p className="type-caption-2 text-[#666666] text-center min-[769px]:text-left w-full">
                  Placeholders mixed nouns and full instructions, and input fields used two different styles: underlined and boxed.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex flex-col min-w-0 mt-7 min-[769px]:mt-0">
            <div className="w-full overflow-hidden rounded-[4px] bg-[#D6E9F1]">
              <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
                <p className="type-subtitle-2 w-full text-center text-[#333333]">
                  After
                </p>
              </div>
              <div className="flex w-full justify-center">
                <picture>
                  <source
                    media="(max-width: 480px)"
                    srcSet="/work/project2/guidelines-after-1-mo.png"
                  />
                  <img
                    src="/work/project2/guidelines-after-1-pc.png"
                    alt="question-to-product mapping"
                    className="block h-auto w-auto max-w-full min-[481px]:max-h-[442px] min-[481px]:max-w-full"
                    style={{ height: "auto" }}
                  />
                </picture>
              </div>
            </div>

            <Connector />

            <div className="bg-[#D6E9F1] rounded-[4px] overflow-hidden flex flex-col items-center w-full min-[769px]:max-w-[470px] mx-auto min-[769px]:mx-0">
              <div className="w-full flex items-center justify-center">
                <picture className="w-full flex justify-center">
                  <source media="(max-width: 430px)" srcSet="/work/project2/guidelines-after-2-mo.png" />
                  <img
                    src="/work/project2/guidelines-after-2-pc.png"
                    alt="After typography settings"
                    className="block h-auto w-full object-contain"
                  />
                </picture>
              </div>
              <div className="w-full flex flex-row justify-center items-center pt-0 px-[clamp(24px,5vw,36px)] pb-[clamp(20px,3vw,24px)]">
                <p className="type-caption-2 text-[#666666] text-center w-full">
                  Text sizes and line heights now follow a clear scale. Reusable components like buttons and dropdowns ensure consistency across all screens.
                </p>
              </div>
            </div>

            <Connector />

            <div className="bg-[#D6E9F1] rounded-[4px] overflow-hidden flex flex-col min-[769px]:flex-row w-full min-[769px]:max-w-[470px] mx-auto min-[769px]:mx-0">
              <div className="w-full aspect-[320/176] min-[769px]:aspect-[272/226] min-[769px]:w-[58%] flex items-center justify-center shrink-0">
                <picture className="w-full h-full flex justify-center">
                  <source media="(max-width: 769px)" srcSet="/work/project2/guidelines-after-3-mo.png" />
                  <img
                    src="/work/project2/guidelines-after-3-pc.png"
                    alt="After input fields"
                    className="block h-full w-full object-cover"
                  />
                </picture>
              </div>

              <div className="w-full flex flex-col justify-center items-center pt-0 px-[7.5%] pb-[6.25%] min-[769px]:w-[42%] min-[769px]:py-[5%] min-[769px]:pr-[6%] min-[769px]:pl-0 shrink-0">
                <p className="type-caption-2 text-[#666666] text-center min-[769px]:text-left w-full">
                  Placeholder wording and input field styles are now unified, giving the whole service a consistent design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
