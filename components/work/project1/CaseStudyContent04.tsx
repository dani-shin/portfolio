import Image from "next/image";
import BeforeAfterCard from "@/components/BeforeAfterCard";

interface TwoColsItemProps {
  title: string;
  description: string;
  imageSrc: string;
}

function TwoColsItem({ title, description, imageSrc }: TwoColsItemProps) {
  return (
    <div className="bg-white rounded-[4px] overflow-hidden flex flex-col min-[800px]:flex-row">
      <div className="relative w-full aspect-[340/140] shrink-0 min-[800px]:w-[340px] min-[800px]:h-[140px] min-[800px]:aspect-auto">
        <Image
          src={imageSrc}
          alt={`${title} mockup`}
          fill
          sizes="(min-width: 800px) 340px, (min-width: 481px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="work-info-text flex flex-1 flex-col items-start justify-center gap-1 bg-white">
        <h4 className="w-full type-subtitle-2 text-[#111111] min-[481px]">
          {title}
        </h4>
        <p className="w-full type-body-2 text-[#333333] min-[481px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CaseStudyContent04() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">3 Months</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Designed a scalable commission and settlement management system, cutting new clinic onboarding time from 2 days to 3 hours.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333]">
          Weglow ran influencer-driven group purchase campaigns alongside its telemedicine business, requiring monthly commission calculations across doctors and influencers, each under different rules. Because these rules changed often due to healthcare regulations and partnership terms, every update required engineering support, creating a bottleneck as the partner network grew. My goal was to let the non-technical Operations team manage settlement policies independently, without depending on developers for every change.
        </p>
      </div>

      <div className="max-w-[960px] mb-16">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Constraint</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          The hard part wasn't building a settlement tool. It was that the settlement structure itself resisted standardization. Every calculation depended on three variables interacting at once:
        </p>

        <div className="space-y-5 mb-7">
          <TwoColsItem
            title="Settlement owner"
            description="Company-owned for general products, clinic-owned for telemedicine products."
            imageSrc="/work/project1/cs-4-1-mo.png"
          />
          <TwoColsItem
            title="Commission model"
            description="Percentage-based or fixed amount, depending on the product."
            imageSrc="/work/project1/cs-4-2-mo.png"
          />
          <TwoColsItem
            title="Commission rate"
            description="Varies by doctor role (e.g., Medical Director vs. Staff Physician) and influencer tier."
            imageSrc="/work/project1/cs-4-3-mo.png"
          />
        </div>

        <p className="type-body-1 text-[#333333] mb-15">
          With three variables combining freely, a single product could require a different calculation
          for nearly every partner. These rules reflected real contractual and regulatory obligations,
          so simplifying them wasn't an option. The system needed to support every combination while
          staying simple enough for non-technical users to configure without introducing calculation errors.
        </p>

        <h4 className="type-subtitle-1 text-[#111111] mb-1">Solution</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          As the designer, I focused on how to make this structure visible, so operators and doctors
          could process settlements smoothly and every flow connected without errors. I mapped out a
          settlement-completion flowchart, defining who takes which action at each step, and shared it
          with the team as our shared reference point.
        </p>
        <div className="w-full overflow-hidden rounded-[4px] bg-[#D7DFDC] mb-7">
          <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
            <p className="type-subtitle-2 w-full text-center text-[#333333]">
              Affiliate Settlement Flow
            </p>
          </div>

          <div className="flex w-full justify-center">
            <picture>
              <source
                media="(max-width: 480px)"
                srcSet="/work/project1/solution-4-main-mo.png"
              />
              <img
                src="/work/project1/solution-4-main-pc.png"
                alt="question-to-product mapping"
                className="block h-auto w-auto max-w-full min-[481px]:max-h-[622px] min-[481px]:max-w-full"
                style={{ height: "auto" }}
              />
            </picture>
          </div>
        </div>
        <p className="type-body-1 text-[#333333] mb-12">
          As shown in the flow above, the payer and payment method for affiliate settlements splits into
          two paths depending on product type. On top of that, doctors receive a separate settlement from
          the company every time they sell the telemedicine products.
          <br></br><br />
          My first approach configured commissions around the recipient: doctor commissions on the doctor's
          page, affiliate commissions on the affiliate's page. This made onboarding easy but didn't scale:
          as products, doctors, and affiliates grew, so did the redundant data entry. Working with the dev
          and operations teams, I pivoted to a three-layer model instead, where shared commissions are set
          once and inherit automatically, and exceptions require only minimal extra steps. That way, operators
          only had to touch a layer when a case actually deviated from the one above it.
        </p>

        <div className="mb-12">
          <BeforeAfterCard
            title="A. Product-Level Commission Rules"
            items={[
              {
                label: "1st layer - Default",
                labelClassName: "text-[#5C9E8B]",
                description:
                  "During product registration, operations sets one commission rate at the product level. This rate is fixed and applies to every general affiliate who sells that product, with no per-affiliate setup required.",
              },
              {
                label: "Why this approach",
                description:
                  "Since the rate is set once and inherited by every affiliate by default, the system handles the inheritance, not the admin, meaning the common case requires zero repeated configuration.",
              },
            ]}
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                General Product Commission
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-4-a-mo.png"
                />

                <img
                  src="/work/project1/solution-4-a-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[302px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <BeforeAfterCard
            title="B. Doctor Settlement Rules"
            items={[
              {
                label: "2nd layer - Negotiated",
                labelClassName: "text-[#5C9E8B]",
                description:
                  "For telemedicine products, the commission rate is negotiated with each clinic during contracting, then entered directly into Doctor Management. Each doctor's treatable products carry two linked values: what the doctor earns, and what they owe the affiliate who drove the sale.",
              },
              {
                label: "Why this approach",
                description:
                  "Entering negotiated terms straight into the admin, instead of relaying them to the dev team, removed a handoff step and kept settlement accurate to what was actually negotiated, while modeling the real payment flow from clinic to doctor to affiliate.",
              },
            ]}
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Telemedicine Commission Split
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-4-b-mo.png"
                />

                <img
                  src="/work/project1/solution-4-b-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[302px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <BeforeAfterCard
            title="C. Exceptional Affiliate Cases"
            items={[
              {
                label: "3rd layer - Override",
                labelClassName: "text-[#5C9E8B]",
                description:
                  "Most affiliates need no configuration at all. They simply inherit the default rate from Layer 1, or the doctor's payout rate from Layer 2. Only Power Influencers, whose contracts differ from the standard rate, require an override, set individually in Affiliate Management.",
              },
              {
                label: "Why this approach",
                description:
                  "Treating exceptions as opt-in overrides kept the interface simple for the common case while still fully supporting the negotiated contracts that made up the minority, without disturbing how commission flows for everyone else.",
              },
            ]}
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Additional commission for Power Influencers
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-4-c-mo.png"
                />

                <img
                  src="/work/project1/solution-4-c-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[302px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
        <ul>
          {[
            "Cut new clinic settlement onboarding from 2 days to 3 hours.",
            "Reduced settlement-related engineering tickets by 96%.",
            "Enabled Operations to manage commission policies independently, without engineering support.",
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
