const BG = "bg-[#E7DDD9]";

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 pb-3 pt-5">
      <h4 className="type-subtitle-2 w-full text-center text-[#333333]">
        {children}
      </h4>
    </div>
  );
}

function CardImage({
  pc,
  mobile,
  alt,
}: {
  pc: string;
  mobile: string;
  alt: string;
}) {
  return (
    <picture>
      <source media="(max-width: 768px)" srcSet={mobile} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pc} alt={alt} className="block h-auto w-full" />
    </picture>
  );
}

export default function BottomSheetSpecs() {
  return (
    <div className="ml-[calc(50%-50vw)] w-screen px-[20px] min-[481px]:px-[calc(20px+(100vw-481px)*20/338)] min-[577px]:ml-0 min-[577px]:w-full min-[577px]:px-0 mt-5">
      <div className="flex snap-x snap-mandatory scroll-pl-[20px] min-[481px]:scroll-pl-[calc(20px+(100vw-481px)*20/338)] min-[768px]:scroll-pl-10 gap-[clamp(12px,3.5vw,20px)] overflow-x-auto -mx-[20px] min-[481px]:-mx-[calc(20px+(100vw-481px)*20/338)] min-[768px]:-mx-10 px-[20px] min-[481px]:px-[calc(20px+(100vw-481px)*20/338)] min-[768px]:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-[577px]:mx-0 min-[577px]:grid min-[577px]:snap-none min-[577px]:grid-cols-2 min-[577px]:gap-x-5 min-[577px]:gap-y-6 min-[577px]:overflow-visible min-[577px]:px-0">
        <div
          className={`${BG} w-[80%] shrink-0 snap-start rounded-[4px] min-[577px]:w-auto`}
        >
          <CardTitle>Three-height bottom sheet</CardTitle>
          <CardImage
            pc="/work/project3/solution-2-a-1-pc.png"
            mobile="/work/project3/solution-2-a-1-1-mo.png"
            alt="Bottom sheet in Min, Default, and Max height states"
          />
          <p className="type-body-2 px-4 pt-4 pb-8 text-center text-[#333333] min-[577px]:px-[clamp(16px,3.75vw,36px)] min-[577px]:pb-[clamp(24px,4.375vw,42px)] min-[577px]:text-left">
            The bottom sheet has three height states, Min, Default, and Max, so
            the map stays visible while the user browses. The default height can
            vary by task. During route search, for example, it starts at Min to
            prioritize the map, and the user can switch heights anytime for more
            detail.
          </p>
        </div>

        <div
          className={`${BG} w-[80%] shrink-0 snap-start rounded-[4px] min-[577px]:w-auto`}
        >
          <CardTitle>Cross-platform height specs</CardTitle>
          <CardImage
            pc="/work/project3/solution-2-a-2-pc.png"
            mobile="/work/project3/solution-2-a-2-1-mo.png"
            alt="Height specs for Android and iOS"
          />
          <p className="type-body-2 px-4 pt-0 pb-8 text-center text-[#333333] min-[577px]:px-[clamp(16px,3.75vw,36px)] min-[577px]:pb-[clamp(24px,4.375vw,42px)] min-[577px]:text-left">
            Defined height values by platform and device size as design system
            specs, and shared them with the development team.
          </p>
        </div>

        <div
          className={`${BG} w-[80%] shrink-0 snap-start rounded-[4px] min-[577px]:col-span-2 min-[577px]:w-auto`}
        >
          <CardTitle>Full modal for detail</CardTitle>

          <div className="flex items-center flex-col min-[577px]:flex-row">
            <div className="min-[577px]:basis-1/2 min-[577px]:self-center">
              <CardImage
                pc="/work/project3/solution-2-a-3-pc.png"
                mobile="/work/project3/solution-2-a-3-mo.png"
                alt="Full modal for station detail and filters"
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 px-4 pb-8 pt-4 min-[577px]:justify-between min-[577px]:gap-8 min-[577px]:pb-[42px] min-[577px]:pl-0 min-[577px]:pr-[42px] min-[577px]:pt-9">
              <p className="type-body-2 text-center text-[#333333] min-[577px]:pl-1 min-[577px]:text-left">
                Detail-heavy screens, such as station info and filters, switch
                to a full modal that hides the map entirely so the user can
                focus on the information.
              </p>

              <div className="flex flex-col items-center gap-1.5 min-[577px]:items-start min-[577px]:gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/work/project3/solution-2-a-3-2.png"
                  alt="Route search and Send to car buttons"
                  className="block h-auto w-[155px] min-[577px]:w-[229px]"
                />
                <p className="text-center type-caption-2 text-[#666666] min-[577px]:pl-1 min-[577px]:text-left">
                  I kept the two core actions, route search and send to car, in
                  an easy-to-reach position in both the bottom sheet and the
                  modal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
