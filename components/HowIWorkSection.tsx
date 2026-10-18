"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowButton from "@/components/ArrowButton";

interface ProjectCard {
  title: string;
  period: string;
  link?: string;
  image: string;
}

const page1Projects: ProjectCard[] = [
  {
    title: "Commerce (KOR, US)",
    period: "09.2024 - 10.2025",
    link: "https://www.vyneherb.co.kr/",
    image: "/about/project-commerce-1.png",
  },
  {
    title: "Wellness",
    period: "09.2025",
    link: "https://medi.vyneherb.co.kr/",
    image: "/about/project-healthcare.png",
  },
  {
    title: "Conversational AI",
    period: "08.2024",
    link: "https://play.google.com/store/apps/details?id=com.minirecord.miniai_artist",
    image: "/about/project-ai.png",
  },
  {
    title: "Total Car-life Platform",
    period: "07.2022 - 05.2023",
    link: "https://www.youtube.com/watch?v=3LfYdQPxlaA&list=PLbgDmvo3_vDoDI4wMM2iVtwgUk7Hoc_66&index=4",
    image: "/about/project-carlife.png",
  },
];

const page2Projects: ProjectCard[] = [
  {
    title: "Ship Monitoring",
    period: "04.2022 - 07.2022",
    link: "https://www.seadronix.com/product/aviss/",
    image: "/about/project-ship.png",
  },
  {
    title: "ADT OSS Integration",
    period: "07.2021 - 02.2022",
    link: "https://www.practicalsketch.com/main/portfolio/sk_shieldus_argos/sk_shieldus_argos.html",
    image: "/about/project-adt.png",
  },
  {
    title: "CTI Platform",
    period: "04.2021 - 06.2021",
    link: "https://s2w.inc/en/product/pd02",
    image: "/about/project-cti.png",
  },
  {
    title: "AI English Learning",
    period: "09.2020 - 08.2021",
    link: "https://www.lgcns.com/kr/moa/insight/detail.43800",
    image: "/about/project-english.png",
  },
];

export default function HowIWorkSection() {
  const [page, setPage] = useState<1 | 2>(1);
  const currentProjects = page === 1 ? page1Projects : page2Projects;

  return (
    <section className="py-12">
      <div className="flex flex-col items-start">
        <h2 className="font-['Pretendard'] type-title-3 text-[#111111] mb-1">
          How I work
        </h2>

        <div className="font-['Pretendard'] type-body-1 text-[#333333] mb-6 flex flex-col gap-6">
          <p>
            I’m drawn to problems where business rules, operational constraints, and user needs collide.{" "}
            <strong className="type-subtitle-1 text-[#111111]">The common thread across my work</strong>{" "}
            isn’t the industry, <strong className="type-subtitle-1 text-[#111111]">it’s the complexity.</strong>{" "}
            I enjoy turning that complexity into clear, usable products by working closely with product, engineering, and business teams.
          </p>
          <p>
            Over 4+ years, I’ve designed across B2B, B2C, and D2C products, from SaaS, web apps, and native apps to complex enterprise systems. My work has spanned healthcare, commerce, AI, cybersecurity, car-life ecosystem, intelligent ship monitoring, and education, with{" "}
            <strong className="type-subtitle-1 text-[#111111]">
              a consistent focus on making complex systems easier to understand, easier to use, and more valuable to the business.
            </strong>
          </p>
        </div>

        <div className="w-full grid grid-cols-2 min-[900px]:grid-cols-4 gap-[clamp(12px,calc(12px+(100vw-481px)*8/468),20px)] mb-4">
          {currentProjects.map((project, index) => {
            const cardContent = (
              <>
                <div className="relative w-full aspect-[223/128] bg-white overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-3 md:p-4 flex flex-col gap-0.5 md:gap-1">
                  <h3 className="font-['Pretendard'] type-subtitle-2 text-[#111111] truncate">
                    {project.title}
                  </h3>

                  <p className="font-['Pretendard'] type-caption-2 text-[#666666]">
                    {project.period}
                  </p>
                </div>
              </>
            );

            return project.link ? (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#D6D6D6] rounded-[2px] overflow-hidden shadow-[0px_6px_12px_0px_rgba(0,0,0,0.04)] flex flex-col cursor-pointer"
              >
                {cardContent}
              </a>
            ) : (
              <div
                key={index}
                className="bg-white border border-[#D6D6D6] rounded-[2px] overflow-hidden shadow-[0px_6px_12px_0px_rgba(0,0,0,0.04)] flex flex-col"
              >
                {cardContent}
              </div>
            );
          })}
        </div>

        <div className="w-full flex items-center justify-center gap-6">
          <ArrowButton
            direction="left"
            onClick={() => setPage((prev) => (prev === 1 ? 2 : 1))}
            ariaLabel="Previous page"
          />

          <div className="flex items-center gap-1.5 font-['Pretendard']">
            <span className="font-bold type-title-3 text-[#333333] w-4 text-center">
              {page}
            </span>
            <span className="font-normal type-body-2 text-[#888888]">
              / 2
            </span>
          </div>

          <ArrowButton
            direction="right"
            onClick={() => setPage((prev) => (prev === 2 ? 1 : 2))}
            ariaLabel="Next page"
          />
        </div>
      </div>
    </section>
  );
}