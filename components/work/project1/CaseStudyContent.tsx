import Image from "next/image";
import WorkInfoCard from "@/components/WorkInfoCard";

interface FlowCardProps {
  bgClass: string;
  videoSrc: string;
  videoPoster?: string;
  imagePc: string;
  imageMo: string;
  alt: string;
}

function FlowCard({
  bgClass,
  videoSrc,
  videoPoster,
  imagePc,
  imageMo,
  alt,
}: FlowCardProps) {
  return (
    <div
      className={`flex aspect-[320/328] overflow-hidden rounded-[4px] min-[480px]:aspect-[470/360] ${bgClass}`}
    >
      <div className="flex w-1/2 shrink-0 items-center justify-center px-3 py-6 min-[480px]:w-[53.19%] min-[480px]:p-0">
        <div className="relative aspect-[126/280] h-full shrink-0 overflow-hidden rounded-[6px] border-[3px] border-white bg-white [filter:drop-shadow(0_8px_8px_rgba(0,0,0,0.08))] min-[480px]:aspect-[142/316] min-[480px]:h-[87.78%]">
          <video
            src={videoSrc}
            poster={videoPoster}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 block h-full w-full scale-[1.001] object-cover"
          />
          <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_4px_rgba(0,0,0,0.1)]" />
        </div>
      </div>

      <div className="relative w-1/2 shrink-0 bg-white min-[480px]:w-[46.81%]">
        <Image
          src={imageMo}
          alt={alt}
          fill
          sizes="(min-width: 480px) 0px, 160px"
          className="object-cover min-[480px]:hidden"
        />
        <Image
          src={imagePc}
          alt={alt}
          fill
          sizes="(min-width: 900px) 220px, 46vw"
          className="hidden object-cover min-[480px]:block"
        />
      </div>
    </div>
  );
}

export default function CaseStudyContent() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">1 Month</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Identified a major drop-off point in the checkout flow and redesigned the payment step, increasing checkout completion by 36%.
        </h3>
      </div>

      <div className="max-w-[960px] mb-6">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333]">
          Weglow sells products that require a medical prescription, meaning customers must complete a medical questionnaire before their order can be fulfilled. The original flow required this step before payment, and a significant number of users were dropping off at this point, never completing their purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-5 mb-15">
        <FlowCard
          bgClass="bg-[#E4E5E2]"
          videoSrc="/work/project1/problem-1-video.mov"
          imagePc="/work/project1/problem-1-pc.png"
          imageMo="/work/project1/problem-1-mo.png"
          alt="Before flow"
        />
        <FlowCard
          bgClass="bg-[#D7DFDC]"
          videoSrc="/work/project1/problem-2-video.mov"
          imagePc="/work/project1/problem-2-pc.png"
          imageMo="/work/project1/problem-2-mo.png"
          alt="After flow"
        />
      </div>

      <div className="max-w-[960px] mb-16">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Constraint</h4>
        <p className="type-body-1 text-[#333333] mb-15">
          My proposed fix was simple: move payment first, questionnaire second. But this introduced a critical risk. Since prescription products can’t be shipped without a completed medical consultation, any customer who pays but skips the questionnaire ends up with an unshippable order. This would not only frustrate users but also create a wave of cancellations and customer support requests on the operations side.
        </p>

        <h4 className="type-subtitle-1 text-[#111111] mb-1">Solution</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          I moved forward with the reordered flow and designed a three-layer system to ensure every paying customer completes the questionnaire.
        </p>

        <div className="space-y-5">
          <WorkInfoCard
            items={[
              {
                letter: "A",
                title: "Immediate redirect",
                description:
                  "Upon payment completion, users are automatically taken to the questionnaire page, making it the clear and natural next step.",
                imageSrc: "/work/project1/solution-1-1.png",
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
                imageSrc: "/work/project1/solution-1-2.png",
              },
            ]}
          />

          <WorkInfoCard
            items={[
              {
                letter: "C",
                title: "Automated follow-up message",
                description:
                  "For users who close the page entirely, an automated reminder is sent via direct messaging channel after a set period of inactivity, prompting them to return and complete the step.",
                imageSrc: "/work/project1/solution-1-3.png",
              },
            ]}
          />
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
        <ul>
          {[
            "+36% increase in checkout completion rate.",
            "Prevented post-payment questionnaire abandonment.",
            "Reduced friction in the telemedicine purchase flow.",
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
