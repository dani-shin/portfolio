"use client";

import Footer from "@/components/Footer";
import ProjectOverview from "@/components/work/sideproject2/ProjectOverview";
import Image from "next/image";

export default function SideProject2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 flex flex-col">
        <div className="site-container">
          <ProjectOverview />

          <section className="pb-12 min-[768px]:pb-[72px]">
            <div className="flex w-full justify-between items-start gap-[clamp(12px,calc(12px+(100vw-320px)*28/520),40px)] min-[840px]:gap-[40px]">
              <div className="flex-1 max-w-[400px] min-w-0 flex flex-col gap-[clamp(8px,calc(8px_+_(100vw_-_375px)_*_8_/_393),16px)]">
                <div className="flex items-center gap-3 min-[481px]:gap-4">
                  <span className="type-title-3 text-[#111111] shrink-0">Before</span>
                  <div className="flex-1 h-[1px] bg-[#D0D0D0]" />
                </div>
                <div className="w-full overflow-hidden rounded-[4px] bg-white">
                  <Image
                    src="/work/sideproject2/sideproject-2-before.png"
                    alt="Before redesign"
                    width={400}
                    height={800}
                    className="w-full h-auto block"
                  />
                </div>
              </div>

              <div className="flex-1 max-w-[400px] min-w-0 flex flex-col gap-4">
                <div className="flex items-center gap-3 min-[481px]:gap-4">
                  <span className="type-title-3 text-[#111111] shrink-0">After</span>
                  <div className="flex-1 h-[1px] bg-[#D0D0D0]" />
                </div>
                <div className="w-full overflow-hidden rounded-[4px] bg-white">
                  <Image
                    src="/work/sideproject2/sideproject-2-after.png"
                    alt="After redesign"
                    width={400}
                    height={800}
                    className="w-full h-auto block"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
