"use client";

import { useRef, useState } from "react";
import ProjectGate from "@/components/ProjectGate";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/work/project3/ProjectOverview";
import ImpactCards from "@/components/work/project3/ImpactCards";
import WorkProcess from "@/components/work/project3/WorkProcess";
import ParallaxImage from "@/components/work/project3/ParallaxImage";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import CaseStudyContent from "@/components/work/project3/CaseStudyContent";
import CaseStudyContent02 from "@/components/work/project3/CaseStudyContent02";
import CaseStudyContent03 from "@/components/work/project3/CaseStudyContent03";

export default function PracticalSketchPage() {
  const [activeTabId, setActiveTabId] = useState("01");
  const tabSectionRef = useRef<HTMLDivElement>(null);

  const renderContent = () => {
    switch (activeTabId) {
      case "01":
        return <CaseStudyContent />;
      case "02":
        return <CaseStudyContent02 />;
      case "03":
        return <CaseStudyContent03 />;
      default:
        return <CaseStudyContent />;
    }
  };

  return (
    <ProjectGate>
      <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
        <main className="flex-1 flex flex-col">
          <div className="site-container">
            <ProjectOverview />
            <ImpactCards />
            <WorkProcess />
            <div className="mb-20">
              <ParallaxImage
                pcSrc="/work/project3/parallax-image.png"
                mobileSrc="/work/project3/parallax-image.png"
                alt="MyGenesis-app-pages"
              />
            </div>
            <h2 className="type-title-3 mb-3 min-[481px]:mb-5 leading-[1.6] text-[#111111]">
              Case Studies
          </h2>
          </div>

          <div ref={tabSectionRef} className="relative">
            <CaseStudyTabs
              tabs={[
                { id: "01", number: "01", label: "Design System" },
                { id: "02", number: "02", label: "Map-Based UX" },
                { id: "03", number: "03", label: "Spending Insight" },
              ]}
              activeTabId={activeTabId}
              onTabChange={(id) => {
                setActiveTabId(id);
              }}
              outerRef={tabSectionRef}
            />
            <div className="site-container">
              {renderContent()}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProjectGate>
  );
}
