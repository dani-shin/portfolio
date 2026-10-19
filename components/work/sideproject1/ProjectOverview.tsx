import Link from "next/link";

export default function ProjectOverview() {
  return (
    <section className="pt-3 pb-20 min-[481px]:pt-5 min-[481px]:pb-20">
      <Link
        href="/"
        className="inline-flex h-9 w-fit items-center gap-2 whitespace-nowrap rounded-[2px] py-1.5 pr-1.5 group"
      >
        <svg
          className="h-5 w-5 shrink-0 min-[600px]:h-6 min-[600px]:w-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M21 12H3"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
          <path
            d="M10 4L2 12L10 20"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
        <span className="type-body-2 whitespace-nowrap text-[#111111]">All Work</span>
      </Link>

      <div className="mt-15 max-w-[960px] min-[481px]:mt-20">
        <h1 className="type-headline-1 text-[#111111] mb-4 max-w-[960px] min-[481px]:mb-6">
          UX Psychology Study Through App Analysis
        </h1>

        <div className="type-body-1 text-[#333333]">
          <p>
            A 4-week self-organized study group applying behavioral psychology principles to real-world app design, followed by a public presentation open to anyone interested in UX psychology.
          </p>
        </div>
      </div>
    </section>
  );
}
