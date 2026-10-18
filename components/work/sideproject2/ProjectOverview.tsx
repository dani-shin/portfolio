import Link from "next/link";
import Button from "@/components/Button";

export default function ProjectOverview() {
  return (
    <section className="pt-3 pb-20 min-[481px]:pt-5 min-[481px]:pb-20">
      <Link
        href="/"
        className="inline-flex h-9 w-[97px] items-center gap-2 rounded-[2px] py-1.5 pr-1.5 group"
      >
        <svg
          className="h-5 w-5 min-[600px]:h-6 min-[600px]:w-6"
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
        <span className="type-body-2 text-[#111111]">All Work</span>
      </Link>

      <div className="mt-15 max-w-[960px] min-[481px]:mt-20">
        <h1 className="type-headline-1 text-[#111111] mb-4 max-w-[960px] min-[481px]:mb-6">
          Redesigned e-commerce subpages
        </h1>

        <div className="type-body-1 text-[#333333] mb-9">
          <p>
            In April 2024, I spent 2 weeks redesigning the product detail page for EGIM, a premium handmade seaweed brand. I audited the existing page, keeping essential information, cutting repetitive content, and identifying gaps that needed new sections to better reflect the brand's premium identity. The result replaced a cluttered, unstructured layout with a cleaner design that paired imagery, icons, and copy to communicate product information more effectively.
          </p>
        </div>

        <Button href="https://egim.kr/product/%EC%9D%B4%EA%B9%80-10-%ED%95%A0%EC%9D%B8%EC%A0%84/30/category/1/display/6/?icid=MAIN.product_listmain_5" variant="filled">
          Visit Website
        </Button>
      </div>
    </section>
  );
}
