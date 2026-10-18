"use client";

import { useRef, useState } from "react";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/work/project2/ProjectOverview";
import ImpactCards from "@/components/work/project2/ImpactCards";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import CaseStudyContent from "@/components/work/project2/CaseStudyContent";
import CaseStudyContent02 from "@/components/work/project2/CaseStudyContent02";

export default function MiniRecordPage() {
  const [activeTabId, setActiveTabId] = useState("01");
  const tabSectionRef = useRef<HTMLDivElement>(null);

  const renderContent = () => {
    switch (activeTabId) {
      case "01":
        return <CaseStudyContent />;
      case "02":
        return <CaseStudyContent02 />;
      default:
        return <CaseStudyContent />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 flex flex-col">
        <div className="site-container">
          <ProjectOverview />
          <ImpactCards />
          <h2 className="type-title-3 mb-3 min-[481px]:mb-5 leading-[1.6] text-[#111111]">
            Case Studies
          </h2>
        </div>

        <div ref={tabSectionRef} className="relative">
          <CaseStudyTabs
            tabs={[
              { id: "01", number: "01", label: "Core Work" },
              { id: "02", number: "02", label: "Additional Contribution" },
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
  );
}
