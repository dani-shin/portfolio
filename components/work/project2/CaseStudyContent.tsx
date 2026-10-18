import Image from "next/image";
import WorkInfoCard from "@/components/WorkInfoCard";
import WorkInfoText from "@/components/WorkInfoText";

export default function CaseStudyContent() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">3 Weeks</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Gave a team a shared blueprint and gave an AI a way to remember what matters to fans.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-4">Problem</h4>
        <div className="space-y-5">
          <WorkInfoCard
            items={[
              {
                letter: "A",
                title: "Immediate redirect",
                description:
                  "Upon payment completion, users are automatically taken to the questionnaire page, making it the clear and natural next step.",
                imageSrc: "/work/project2/problem-1-1.png",
              },
            ]}
          />
          <WorkInfoCard
            items={[
              {
                letter: "B",
                title: "Modal alert",
                description:
                  "If a user attempts to navigate away before finishing, a warning message appears explaining that their order can’t be shipped until the questionnaire is submitted.",
                imageSrc: "/work/project2/problem-1-2.png",
              },
            ]}
          />
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Constraint</h4>
        <p className="type-body-1 text-[#333333] mb-15">
          The AI could not carry the full conversation history because of the token limit,
          and removing the limit would have raised costs too much. With only one month on
          the project, I prioritized the changes with the biggest impact on team efficiency
          and user experience.
        </p>

        <h4 className="type-subtitle-1 text-[#111111] mb-4">Solution</h4>

        <div className="mb-12">
          <WorkInfoText
            letter="A"
            title="Storyboards"
            description="I created storyboards to map how features and pages connected. Developers could refer to one document instead of asking for the same flow to be explained again."
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D6E9F1]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                A sample page and completed storyboard
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project2/solution-1-a-mo.png"
                />

                <img
                  src="/work/project2/solution-1-a-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[310px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="mb-15">
          <WorkInfoText
            letter="B"
            title="Bookmark: user-controlled context"
            description={
              <>
                I tested the AI myself before the performance meetings, held two to three
                times a week, and shared feedback with the team. In those meetings, I worked with the AI developers and traced the cause to the token limit. To
                work within that limit, {" "}
                <strong> we settled on a bookmark feature that lets users choose which messages
                the AI always remembers,</strong>  whether their own or the AI’s. {" "}
                <strong>Only saved messages stay in context, so conversations remain natural without raising costs.</strong>
              </>
            }
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D6E9F1] flex flex-col md:flex-row">
            <div className="w-full overflow-hidden md:w-[calc(578/960*100%)]">
              <video
                className="block w-full aspect-[320/716] scale-[1.005] object-cover md:hidden"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/work/project2/solution-1-b-video-mo.mov" />
              </video>

              <video
                className="hidden w-full aspect-[578/458] scale-[1.005] object-cover md:block"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/work/project2/solution-1-b-video-pc.mov" />
              </video>
            </div>

            <div className="w-full md:w-[calc(382/960*100%)]">
              <picture className="block w-full">
                <source
                  media="(max-width: 767px)"
                  srcSet="/work/project2/solution-1-b-2-mo.png"
                />
                <img
                  src="/work/project2/solution-1-b-2-pc.png"
                  alt="Solution details"
                  className="block w-full object-cover aspect-[320/469] md:aspect-[382/458]"
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="max-w-[960px]">
          <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
          <ul>
            {[
              "Flow explanations dropped from about 12 to 4 per day between the designer and two front-end developers after introducing storyboards.",
              "Bookmark feature shipped in a new version, addressing the context loss found in testing the AI.",
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
      </div>
    </section>
  );
}
