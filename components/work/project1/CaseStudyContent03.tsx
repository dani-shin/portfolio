import Image from "next/image";
import BeforeAfterCard from "@/components/BeforeAfterCard";
import ApproachText from "@/components/ApproachText";

function Connector() {
  return (
    <div aria-hidden className="flex h-5 w-full justify-center">
      <span className="h-full w-px bg-black/20" />
    </div>
  );
}

export default function CaseStudyContent03() {
  return (
    <section className="pb-12">
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 border border-[#BBBBBB] px-3 py-1.25 rounded-[2px] mb-8">
          <span className="type-body-2 text-[#666666]">Duration</span>
          <span className="type-body-2 text-[#111111]">3 Months</span>
        </div>

        <h3 className="type-title-1 text-[#111111] max-w-[960px]">
          Automated the shipping workflow, reducing related workload by 80%.
        </h3>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Problem</h4>
        <p className="type-body-1 text-[#333333]">
          Every morning, the operations team lost about 4hours to manual, repetitive shipping work before they could start anything else. They exported completed orders into spreadsheets for the warehouse, switched between multiple systems to process returns and exchanges, and manually handled prescription updates requested by doctors. The time sink meant the team had little bandwidth left for higher-value work like marketing and process improvement.
        </p>
      </div>

      <div className="mb-15 grid w-full max-w-[960px] grid-cols-1 gap-y-9 min-[769px]:grid-cols-[1.1fr_1fr] min-[769px]:grid-rows-[auto_auto_1fr] min-[769px]:gap-x-5 min-[769px]:gap-y-6">
        <div className="min-w-0 min-[769px]:col-start-1 min-[769px]:row-start-1">
          <h4 className="type-subtitle-1 mb-1 text-[#111111]">Constraint</h4>
          <p className="type-body-1 text-[#333333]">
            The shipping workflow spanned three disconnected systems, each owned
            by a different stakeholder group.
          </p>
          <p className="type-body-1 text-[#666666]">
            * WMS(Warehouse Management System)
          </p>
        </div>

        <div className="min-w-0 min-[769px]:col-start-2 min-[769px]:row-span-3 min-[769px]:row-start-1 min-[769px]:self-center">
          <img
            src="/work/project1/cs-3.png"
            alt="Three stakeholders: Operations (Internal Admin), Warehouse (WMS), and Doctors (Doctor CRM) connected in a cycle"
            className="mx-auto block h-auto w-full max-w-[460px] min-[769px]:max-w-none"
          />
        </div>

        <div className="min-w-0 min-[769px]:col-start-1 min-[769px]:row-start-2">
          <p className="type-body-1 text-[#333333]">
            The real challenge wasn't automating individual tasks. It was
            designing automation that kept data synchronized across three systems
            with different owners, without breaking existing operational
            workflows or introducing new failure points along the way.
          </p>
        </div>
      </div>

      <div className="max-w-[960px] mb-15">
        <h4 className="type-subtitle-1 text-[#111111] mb-1">Solution</h4>
        <p className="type-body-1 text-[#333333] mb-6">
          I spent time observing daily operations and interviewing the operations team to understand where manual work was creating the most friction versus where it was actually necessary as a safety check. That research surfaced three automation opportunities with the highest operational impact.
        </p>

        <div className="mb-12">
          <BeforeAfterCard
            title="A. Automated Order Dispatch"
            items={[
              {
                label: "Before",
                description:
                  "Operations manually reviewed paid orders, built a spreadsheet, and sent it to the warehouse. This task alone took about 1.5 hours.",
              },
              {
                label: "After",
                description:
                  "I partnered with engineering to integrate directly with the Warehouse API, automatically transmitting paid orders on a fixed schedule (11 AM and 1 PM daily) and eliminating the manual work entirely.",
              },
            ]}
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                The automated order-to-dispatch flow
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-3-a-mo.png"
                />

                <img
                  src="/work/project1/solution-3-a-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[264px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>

            <div className="fluid-subinfo-px fluid-subinfo-pb fluid-subinfo-gap flex w-full flex-col items-center justify-center bg-[#D7DFDC]">
              <div aria-hidden className="h-px w-full flex-none bg-black/20" />

              <p className="type-body-2 w-full max-w-[696px] text-center text-[#666666]">
                * Telehealth-prescribed orders are held from the carrier until the doctor confirms the prescription.
              </p>
            </div>
          </div>

          <Connector />

          <ApproachText title="Why this approach">
            We chose a twice-daily batch over a real-time push after confirming it
            matched the warehouse’s existing intake rhythm, so the change required no
            adjustment on their end. Beyond the system design, <strong>I identified a critical
            edge case:</strong> orders with telehealth prescriptions couldn’t ship before doctor
            confirmation. <strong>I designed a safeguard into the flow</strong> that holds those orders
            until review is complete, ensuring automation never outpaces patient safety.
          </ApproachText>
        </div>

        <div className="mb-12">
          <BeforeAfterCard
            title="B. Unified Return &amp; Exchange Workflow"
            items={[
              { label: "Before", description: "Operations and warehouse teams worked in separate systems, manually relaying inspection results and approvals back and forth. This took about 1.5 hours." },
              { label: "After", description: "I consolidated the warehouse system and Internal Admin into a single shared workflow, with dedicated views for each team. This cut related work time from 1.5 hours to about 40 minutes." },
            ]}
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Exchange and return inspection process
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-3-b-mo.png"
                />

                <img
                  src="/work/project1/solution-3-b-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[416px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
          <Connector />
          <ApproachText title="Why this approach">
            Rather than forcing one team onto the other's tool, <strong>I designed role-specific interfaces on top of a shared data layer.</strong> Each team sees only what's relevant to their step, while the underlying record stays in sync.
          </ApproachText>
        </div>

        <div className="mb-12">
          <BeforeAfterCard
            title="C. Automated Prescription Update"
            items={[
              { label: "Before", description: "Doctors manually notified operations of prescription changes, and operations then updated the order before shipment. This multi-step handoff took about 1 hour." },
              { label: "After", description: "I added a product adjustment feature directly to the Doctor CRM, syncing prescription updates straight to the warehouse via API. This removed the manual handoff entirely, cutting the process to about 10 minutes." },
            ]}
          />

          <div className="w-full mt-5 overflow-hidden rounded-[4px] bg-[#D7DFDC]">
            <div className="flex flex-col items-center justify-center px-4 pt-5 pb-3">
              <p className="type-subtitle-2 w-full text-center text-[#333333]">
                Added a prescription option change feature to the Doctor CRM
              </p>
            </div>

            <div className="flex w-full justify-center">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/project1/solution-3-c-mo.png"
                />

                <img
                  src="/work/project1/solution-3-c-pc.png"
                  alt="question-to-product mapping"
                  className="block h-auto w-auto max-w-full min-[481px]:max-h-[332px] min-[481px]:max-w-full"
                  style={{ height: "auto" }}
                />
              </picture>
            </div>
          </div>
          <Connector />
          <ApproachText title="Why this approach">
            I removed operations from a step where they added no real value. They were a manual relay, not a decision point. The CRM already held the source of truth for prescription accuracy, so I let the system carry that data forward instead of routing it through a person.
          </ApproachText>
        </div>
      </div>

      <div className="max-w-[960px]">
        <h4 className="type-subtitle-1 text-[#333333] mb-1">Outcome</h4>
        <ul>
          {[
            "80% reduction in shipping-related operational workload, from 4 hours to under 1 hour daily (measured via time-tracking logs before/after launch.)",
            "56% faster return and exchange processing, driven by consolidating Operations and Warehouse into a single workflow.",
            "Eliminated manual handoffs between Operations, Warehouse, and Doctor CRM.",
            "Freed operations to shift focus from repetitive manual work to higher-value initiatives like marketing and process improvement.",
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
