import Footer from "@/components/Footer";
import ProjectOverview from "@/components/work/sideproject3/ProjectOverview";
import ProjectInfoBox from "@/components/work/sideproject3/ProjectInfoBox";
import ConceptCardsRow from "@/components/work/sideproject3/ConceptCardsRow";
import Image from "next/image";

export default function SideProject3Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 flex flex-col">
        <div className="site-container">
          <ProjectOverview />

          <section className="mb-30">
            <div className="@container mb-4">
              <div className="flex flex-col @[576px]:flex-row @[576px]:items-center gap-0.5 @[576px]:gap-3">
                <h3 className="type-title-1 hidden text-[#111111] @[576px]:block">Project 01</h3>
                <h3 className="type-body-1 text-[#666666] @[576px]:hidden">Project 01</h3>
                <div className="hidden @[576px]:block h-4 w-[1px] bg-[#BBBBBB]" />
                <h3 className="type-title-1 text-[#111111]">Eco-Friendly Tote Bag Series</h3>
              </div>
            </div>

            <ProjectInfoBox
              items={[
                {
                  label: "Scope",
                  value: "Three tote bag designs (3 design versions).",
                },
                {
                  label: "Duration",
                  value: "2 weeks",
                },
                {
                  label: "Deliverables",
                  value: "AI files (bag design, logo), PNG logo, presentation deck",
                },
              ]}
            />

            <div className="mb-14">
              <h4 className="type-title-3 text-[#111111] mb-4">
                Concept drafts and revisions
              </h4>
              <ConceptCardsRow
                cards={[
                  {
                    title: "V1 (left-aligned typography)",
                    images: [
                      "/work/sideproject3/1-concept-1-1.png",
                      "/work/sideproject3/1-concept-1-2.png",
                      "/work/sideproject3/1-concept-1-3.png",
                      "/work/sideproject3/1-concept-1-4.png",
                      "/work/sideproject3/1-concept-1-5.png",
                      "/work/sideproject3/1-concept-1-6.png",
                    ],
                  },
                  {
                    title: "V2 (illustration-based)",
                    images: [
                      "/work/sideproject3/1-concept-2-1.png",
                      "/work/sideproject3/1-concept-2-2.png",
                      "/work/sideproject3/1-concept-2-3.png",
                      "/work/sideproject3/1-concept-2-4.png",
                      "/work/sideproject3/1-concept-2-5.png",
                      "/work/sideproject3/1-concept-2-6.png",
                    ],
                  },
                  {
                    title: "V3 (centered typography)",
                    images: [
                      "/work/sideproject3/1-concept-3-1.png",
                      "/work/sideproject3/1-concept-3-2.png",
                      "/work/sideproject3/1-concept-3-3.png",
                      "/work/sideproject3/1-concept-3-4.png",
                      "/work/sideproject3/1-concept-3-5.png",
                      "/work/sideproject3/1-concept-3-6.png",
                    ],
                  },
                ]}
              />
            </div>

            <div>
              <h4 className="type-title-3 text-[#111111] mb-4">
                Final product photos
              </h4>
              <div className="grid grid-cols-1 min-[281px]:grid-cols-2 min-[769px]:grid-cols-4 gap-[clamp(12px,2.5vw,20px)]">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="overflow-hidden rounded-[4px] bg-white aspect-square relative"
                  >
                    <Image
                      src={`/work/sideproject3/1-final-${n}.png`}
                      alt={`Final product photo ${n}`}
                      fill
                      sizes="(min-width: 769px) 220px, (min-width: 281px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-30">
            <div className="@container mb-4">
              <div className="flex flex-col @[576px]:flex-row @[576px]:items-center gap-0.5 @[576px]:gap-3">
                <h3 className="type-title-1 hidden text-[#111111] @[576px]:block">Project 02</h3>
                <h3 className="type-body-1 text-[#666666] @[576px]:hidden">Project 02</h3>
                <div className="hidden @[576px]:block h-4 w-[1px] bg-[#BBBBBB]" />
                <h3 className="type-title-1 text-[#111111]">Golf Boston Bag Design</h3>
              </div>
            </div>

            <ProjectInfoBox
              items={[
                {
                  label: "Scope",
                  value:
                    "Custom lettering built around the LS logo. The initial brief called for a lion character playing golf, but the direction shifted midway to a lettering-based design using the company’s “LS” logo, with the “O” styled as a golf ball, a hole-and-flag icon, sparkle graphics, and a partial LS logo mark.",
                },
                {
                  label: "Duration",
                  value: "3 weeks",
                },
                {
                  label: "Deliverables",
                  value: "AI file (bag design), presentation deck",
                },
              ]}
            />

            <div className="mb-14">
              <h4 className="type-title-3 text-[#111111] mb-4">
                1st Concept drafts and Mockup
              </h4>
              <div className="grid grid-cols-1 gap-[clamp(12px,calc(12px_+_(100vw_-_480px)_*_8_/_420),20px)] min-[769px]:grid-cols-2">
                <div className="overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                  <Image
                    src="/work/sideproject3/2-concept-1-1.png"
                    alt="1st concept draft"
                    width={470}
                    height={300}
                    className="w-full h-auto block object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                  <Image
                    src="/work/sideproject3/2-concept-1-2.png"
                    alt="1st bag mockup"
                    width={470}
                    height={300}
                    className="w-full h-auto block object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h4 className="type-title-3 text-[#111111] mb-4">
                2nd Concept drafts and Mockup
              </h4>
              <div className="grid grid-cols-1 gap-[clamp(12px,calc(12px_+_(100vw_-_480px)_*_8_/_420),20px)] min-[769px]:grid-cols-2">
                <div className="overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                  <Image
                    src="/work/sideproject3/2-concept-2-1.png"
                    alt="2nd concept draft"
                    width={470}
                    height={300}
                    className="w-full h-auto block object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                  <Image
                    src="/work/sideproject3/2-concept-2-2.png"
                    alt="2nd bag mockup"
                    width={470}
                    height={300}
                    className="w-full h-auto block object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="pb-12 min-[768px]:pb-[72px]">
            <div className="@container mb-4">
              <div className="flex flex-col @[576px]:flex-row @[576px]:items-center gap-0.5 @[576px]:gap-3">
                <h3 className="type-title-1 hidden text-[#111111] @[576px]:block">Project 03</h3>
                <h3 className="type-body-1 text-[#666666] @[576px]:hidden">Project 03</h3>
                <div className="hidden @[576px]:block h-4 w-[1px] bg-[#BBBBBB]" />
                <h3 className="type-title-1 text-[#111111]">Long Umbrella Design</h3>
              </div>
            </div>

            <ProjectInfoBox
              items={[
                {
                  label: "Scope",
                  value:
                    "Full design for a 70cm, 8-rib long umbrella, from concept and Pantone color selection through final mockups and a production guide.",
                },
                {
                  label: "Duration",
                  value: "2.5 weeks",
                },
                {
                  label: "Deliverables",
                  value: "AI file (umbrella design), presentation deck, production guide",
                },
              ]}
            />

            <div className="mb-14">
              <h4 className="type-title-3 text-[#111111] mb-4">
                Concept drafts and revisions
              </h4>
              <ConceptCardsRow
                cards={[
                  {
                    title: "Initial Design Concept",
                    images: [
                      "/work/sideproject3/3-concept-1-1.png",
                      "/work/sideproject3/3-concept-1-2.png",
                      "/work/sideproject3/3-concept-1-3.png",
                      "/work/sideproject3/3-concept-1-4.png",
                      "/work/sideproject3/3-concept-1-5.png",
                      "/work/sideproject3/3-concept-1-6.png",
                      "/work/sideproject3/3-concept-1-7.png",
                    ],
                  },
                  {
                    title: "2nd Design Concept",
                    images: [
                      "/work/sideproject3/3-concept-2-1.png",
                      "/work/sideproject3/3-concept-2-2.png",
                      "/work/sideproject3/3-concept-2-3.png",
                      "/work/sideproject3/3-concept-2-4.png",
                      "/work/sideproject3/3-concept-2-5.png",
                      "/work/sideproject3/3-concept-2-6.png",
                      "/work/sideproject3/3-concept-2-7.png",
                    ],
                  },
                  {
                    title: "Choose Pantone color",
                    images: [
                      "/work/sideproject3/3-concept-3-1.png",
                      "/work/sideproject3/3-concept-3-2.png",
                      "/work/sideproject3/3-concept-3-3.png",
                      "/work/sideproject3/3-concept-3-2-1.png",
                      "/work/sideproject3/3-concept-3-3-1.png",
                      "/work/sideproject3/3-concept-3-2-2.png",
                      "/work/sideproject3/3-concept-3-3-2.png",
                    ],
                  },
                ]}
              />
            </div>

            <div>
              <h4 className="type-title-3 text-[#111111] mb-4">
                Final production guide
              </h4>
              <div className="w-full overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                <Image
                  src="/work/sideproject3/sideproject-3-3-final.png"
                  alt="Final production guide for long umbrella"
                  width={960}
                  height={540}
                  className="w-full h-auto block object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
