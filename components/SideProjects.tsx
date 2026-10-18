import Image from "next/image";
import Link from "next/link";

interface SideProject {
  title: string;
  date: string;
  image: string;
  href: string;
}

const sideProjects: SideProject[] = [
  {
    title: "UX Psychology Study Through App Analysis",
    date: "06.2023",
    image: "/work/side_project_1_1.png",
    href: "/work/sideproject1",
  },
  {
    title: "Redesigned e-commerce subpages",
    date: "04.2024",
    image: "/work/side_project_2.png",
    href: "/work/sideproject2",
  },
  {
    title: "Branded Merchandise Design for LS Securities",
    date: "05.2024 - 07.2026",
    image: "/work/side_project_3.png",
    href: "/work/sideproject3",
  },
];

export default function SideProjects() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-6">
        <h2 className="type-title-1 text-[#111111]">Side Projects</h2>

        <div className="scrollbar-hide mx-[calc((100%_-_100vw)/2)] overflow-x-auto px-[calc((100vw_-_100%)/2)] min-[900px]:mx-0 min-[900px]:overflow-visible min-[900px]:px-0">
          <div className="flex gap-3 min-[900px]:grid min-[900px]:grid-cols-[repeat(3,minmax(0,1fr))] min-[900px]:gap-5">
            {sideProjects.map((project) => (
              <Link
                key={project.href}
                href={project.href}
                className="block w-[80%] shrink-0 min-[900px]:w-full"
              >
                <article className="flex h-full w-full flex-col overflow-hidden rounded-[4px] border border-[#D6D6D6] bg-white shadow-[0_6px_12px_rgba(0,0,0,0.04)]">
                  <div className="w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={306}
                      height={174}
                      className="block h-auto w-full"
                    />
                  </div>

                  <div className="flex flex-col items-start gap-1 p-4">
                    <h3 className="type-subtitle-1 self-stretch text-[#111111]">
                      {project.title}
                    </h3>
                    <span className="type-body-2 self-stretch text-[#666666]">
                      {project.date}
                    </span>
                  </div>
                </article>
              </Link>
            ))}

            <div
              aria-hidden
              className="w-[calc((100vw_-_100%)/2_-_12px)] shrink-0 min-[900px]:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}