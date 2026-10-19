import Link from "next/link";
import Button from "@/components/Button";

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
          Rebuilding the healthcare commerce ecosystem
        </h1>

        <div className="type-body-1 text-[#333333] space-y-6 mb-9">
          <p>
            As the sole Product Designer at Weglow, I led the redesign of the company's healthcare commerce ecosystem across four platforms: Client, CRM, Admin, and Affiliate. When I joined, the project had spent two and a half years building only a login flow. No one on the team had a full picture of how the services connected or which operational policies drove them. Development and operations also spoke past each other, using entirely different vocabularies for the same features.
          </p>
          <p>
            I stepped into that gap. I translated between teams, mapped connections no one had documented, and turned fragmented processes into a coherent system. Through drop-off analysis, user interviews, and competitive research, I identified the key friction points and partnered with both teams to design and ship practical, user-centered solutions across all four platforms.
          </p>
        </div>

        <Button href="https://www.vyneherb.co.kr/kr" variant="filled">
          Visit Website
        </Button>
      </div>
    </section>
  );
}
