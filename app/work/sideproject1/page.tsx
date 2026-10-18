"use client";

import Footer from "@/components/Footer";
import ProjectOverview from "@/components/work/sideproject1/ProjectOverview";
import SideProjectSlider from "@/components/work/sideproject1/SideProjectSlider";
import Button from "@/components/Button";
import Image from "next/image";

export default function SideProject1Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 flex flex-col">
        <div className="site-container">
          <ProjectOverview />

          <section className="mb-20">
            <div className="@container mb-1">
              <div className="flex flex-col @[300px]:flex-row @[300px]:items-center gap-0 @[300px]:gap-3">
                <h3 className="type-title-3 text-[#111111]">Theory + Analysis</h3>
                <div className="hidden @[300px]:block h-4 w-[1px] bg-[#BBBBBB]" />
                <span className="type-body-1 text-[#666666]">Week 1 - 3</span>
              </div>
            </div>
            <p className="type-body-1 text-[#333333] mb-6 max-w-[960px]">
              Studied roughly 45 psychology principles relevant to UX and analyzed how each was applied in H.point, the loyalty app for Hyundai Department Store Group.
            </p>
            <div className="w-full overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
              <picture>
                <source
                  media="(max-width: 480px)"
                  srcSet="/work/sideproject1/sideproject-1-1-mo.png"
                />
                <img
                  src="/work/sideproject1/sideproject-1-1-pc.png"
                  alt="Theory and analysis of H.point app"
                  className="w-full h-auto block"
                />
              </picture>
            </div>
          </section>

          <section className="mb-20">
            <div className="@container">
              <div className="flex flex-col @[300px]:flex-row @[300px]:items-center gap-0 @[300px]:gap-3 mb-4 min-[481px]:mb-6">
                <h3 className="type-title-3 text-[#111111]">Review Day Presentation</h3>
                <div className="hidden @[300px]:block h-4 w-[1px] bg-[#BBBBBB]" />
                <span className="type-body-1 text-[#666666]">Week 4</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 min-[769px]:grid-cols-2">
              <article className="flex h-full flex-col overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                <div className="w-full overflow-hidden">
                  <Image
                    src="/work/sideproject1/sideproject-1-2-1.png"
                    alt="Presented analysis at an open event"
                    width={470}
                    height={264}
                    className="block h-auto w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-3 min-[481px]:gap-6 min-[481px]:px-6 min-[481px]:pb-6 min-[481px]:pt-5">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="type-subtitle-1 text-[#111111]">
                      Presented my analysis at an open event
                    </h4>
                    <p className="type-body-2 text-[#333333]">
                      Structured the talk around the Hook Model to walk the audience through
                      the app&apos;s UX psychology step by step.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <Button
                      href="https://www.figma.com/proto/BkiIXwV4FlLWkOdoAOb8nD/UX-psychology?node-id=614-4829&viewport=554%2C357%2C0.02&t=PDQbwkXWEpLYJN2R-1&scaling=contain&content-scaling=fixed&page-id=614%3A4828"
                      variant="outlined"
                    >
                      View Presentation
                    </Button>
                  </div>
                </div>
              </article>

              <article className="flex h-full flex-col overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white">
                <div className="w-full overflow-hidden">
                  <Image
                    src="/work/sideproject1/sideproject-1-2-2.png"
                    alt="Designed the event's promotional poster"
                    width={470}
                    height={264}
                    className="w-full h-auto block object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 px-4 pb-4 pt-3 min-[481px]:gap-6 min-[481px]:px-6 min-[481px]:pb-6 min-[481px]:pt-5">
                  <div className="flex flex-col gap-0.5">
                    <h4 className="type-subtitle-1 text-[#111111]">
                      Designed the event&apos;s promotional poster
                    </h4>
                    <p className="type-body-2 text-[#333333]">
                      Created Instagram post and story graphics to promote the Review Day event ahead of the presentation.
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Button
                      href="https://www.instagram.com/p/Cu55vqWPEg7/?igsi=emw0b21ybzI2ajdj"
                      variant="outlined"
                    >
                      View Post
                    </Button>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="pb-12 min-[768px]:pb-[72px]">
            <div className="flex items-center gap-3 mb-1">
              <h3 className="type-title-3 text-[#111111]">Applied Outcome</h3>
            </div>
            <p className="type-body-1 text-[#333333] mb-6 max-w-[960px]">
              Used these principles on MOGA, LG CNS&apos;s premium home appliance community app, to strengthen design rationale and make a more persuasive case to stakeholders during decision-making.
            </p>
            <SideProjectSlider />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
