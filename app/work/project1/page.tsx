"use client";

import { useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/work/project1/ProjectOverview";
import ImpactCards from "@/components/work/project1/ImpactCards";
import BeforeAfterSlider from "@/components/work/project1/BeforeAfterSlider";
import CaseStudyTabs from "@/components/CaseStudyTabs";
import CaseStudyContent from "@/components/work/project1/CaseStudyContent";
import CaseStudyContent02 from "@/components/work/project1/CaseStudyContent02";
import CaseStudyContent03 from "@/components/work/project1/CaseStudyContent03";
import CaseStudyContent04 from "@/components/work/project1/CaseStudyContent04";

export default function WeglowPage() {
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
      case "04":
        return <CaseStudyContent04 />;
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
          <BeforeAfterSlider />
          <h2 className="type-title-3 mb-3 min-[481px]:mb-5 leading-[1.6] text-[#111111]">
            Case Studies
          </h2>
        </div>

        <div ref={tabSectionRef} className="relative">
          <CaseStudyTabs
            tabs={[
              { id: "01", number: "01", label: "Purchase Conversion" },
              { id: "02", number: "02", label: "Telemedicine Flow" },
              { id: "03", number: "03", label: "Logistics Automation" },
              { id: "04", number: "04", label: "Settlement Redesign" },
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
