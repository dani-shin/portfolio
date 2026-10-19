"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PasswordModal from "@/components/PasswordModal";

interface Project {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  client: string;
  image: string;
  logo: string;
}

const LOCKED_HREF = "/work/project3";

const projects: Project[] = [
  {
    title: "weglow",
    subtitle: "Healthcare Commerce Ecosystem",
    period: "2024-2025",
    description:
      "Sole Product Designer for a multi-platform healthcare commerce ecosystem. Redesigned end-to-end purchasing workflows, increasing checkout completion by 36%.",
    client: "weglow",
    logo: "/work/main_work_logo_1.png",
    image: "/work/main_work_1.png",
  },
  {
    title: "Mini Record",
    subtitle: "Conversational AI for K-pop Fans",
    period: "2024",
    description:
      "Designed AI-powered K-pop fan experiences, cutting designer-developer communication frequency by 67% through storyboarding and improving conversational continuity with a bookmark memory feature.",
    client: "Mini Record",
    logo: "/work/main_work_logo_2.png",
    image: "/work/main_work_2.png",
  },
  {
    title: "PRACTICALSKETCH",
    subtitle: "Design Across Diverse Industries",
    period: "2020-2023",
    description:
      "I delivered 9 projects across both B2B and B2C products. My most significant engagement was leading the design system for Hyundai's Genesis APP, which reduced designer working hours by 45% and publishing time by 30%.",
    client: "PRACTICALSKETCH",
    logo: "/work/main_work_logo_3.png",
    image: "/work/main_work_3.png",
  },
];

export default function FeaturedProjects() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleLockedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const unlocked = sessionStorage.getItem("project3-unlocked") === "1";
    if (unlocked) router.push(LOCKED_HREF);
    else setShowModal(true);
  };

  return (
    <section className="py-8">
      <div className="flex flex-col gap-9">
        {projects.map((project, index) => {
          const href = `/work/project${index + 1}`;

          return (
            <Link
              key={index}
              href={href}
              className="block w-full"
              onClick={href === LOCKED_HREF ? handleLockedClick : undefined}
            >
              <article className="w-full bg-white rounded-[4px] shadow-[0_6px_12px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col min-[900px]:flex-row relative group">
                <div className="w-full pt-2 px-2 pb-0 min-[900px]:w-[512px] min-[900px]:p-4">
                  <div className="relative w-full aspect-square bg-[#F0F1EE] rounded-[2px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 px-5 py-14 min-[900px]:px-[clamp(20px,calc(20px+(100vw-900px)*20/140),40px)] min-[900px]:pt-20 flex flex-col justify-between relative">
                  <div
                    aria-hidden="true"
                    className="featured-arrow absolute top-4 right-4 w-9 h-9 min-[481px]:top-6 min-[481px]:right-6 min-[481px]:w-12 min-[481px]:h-12 rounded-full border border-[#111111] flex items-center justify-center text-[#111111]"
                  >
                    <svg
                      className="w-5 h-5 min-[481px]:w-6 min-[481px]:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 17L17 7M17 7H7M17 7v10"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col pr-0.5">
                    <div className="relative w-[clamp(280px,calc(280px+(100vw-360px)*100/1440),380px)] h-[clamp(40px,calc(40px+(100vw-360px)*24/1440),64px)] max-[360px]:w-full max-[360px]:h-[40px] overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={project.client}
                        fill
                        className="object-contain object-left max-[360px]:w-[280px] max-[360px]:left-0 max-[360px]:right-auto"
                      />
                    </div>

                    <h3 className="mt-[2px] min-[900px]:mt-0 text-[20px] max-[481px]:text-[18px] font-bold text-[#111111] leading-snug">
                      {project.subtitle}
                    </h3>

                    <span className="mt-[2px] text-sm text-[#666666]">
                      {project.period}
                    </span>

                    <p className="mt-4 min-[900px]:mt-5 text-[16px] max-[481px]:text-[14px] text-[#333333] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {showModal && (
        <PasswordModal
          onClose={() => setShowModal(false)}
          onSuccess={() => router.push(LOCKED_HREF)}
        />
      )}
    </section>
  );
}