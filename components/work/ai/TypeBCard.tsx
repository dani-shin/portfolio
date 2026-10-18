import Image from "next/image";
import VoiceWave from "./VoiceWave";

const ROWS = [
  {
    label: "Neither is speaking",
    labelSrc: "/work/project2/type-b-label-neither.png",
    pillSrc: "/work/project2/type-b-pill-neither.png",
    pillAlt: "Neither the AI nor the user is speaking",
    wave: null,
  },
  {
    label: "AI is speaking",
    labelSrc: "/work/project2/type-b-label-ai.png",
    pillSrc: "/work/project2/type-b-pill-ai.png",
    pillAlt: "The AI avatar is highlighted with a blue ring and a blue voice wave",
    wave: "blue",
  },
  {
    label: "User is speaking",
    labelSrc: "/work/project2/type-b-label-user.png",
    pillSrc: "/work/project2/type-b-pill-user.png",
    pillAlt: "The user avatar is highlighted with a coral ring and a coral voice wave",
    wave: "coral",
  },
] as const;

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 12"
      className="mx-auto hidden h-3 w-[18px] text-[#111111] min-[481px]:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h15M11 1l5 5-5 5" />
    </svg>
  );
}

export default function TypeBCard() {
  return (
    <section className="flex flex-col rounded-[4px] bg-[#D6E9F1] px-4 pt-5 pb-[42px]">
      <div className="text-center">
        <h4 className="type-subtitle-1 text-[#333333]">Type B</h4>
        <p className="type-caption-2 mt-1 text-[#666666]">Speaker-focused design</p>
      </div>

      <div className="mt-10 flex flex-1 items-center">
        <ul className="mx-auto flex w-full max-w-[398px] flex-col gap-5">
          {ROWS.map((row) => (
            <li
              key={row.label}
              className="grid grid-cols-1 justify-items-center gap-2 min-[481px]:grid-cols-[160fr_44fr_194fr] min-[481px]:items-center min-[481px]:justify-items-stretch min-[481px]:gap-0"
            >
              <Image
                src={row.labelSrc}
                alt={row.label}
                width={320}
                height={46}
                sizes="(min-width: 481px) 160px, 200px"
                className="h-auto w-[51%] max-w-[200px] min-[481px]:w-full min-[481px]:max-w-none"
              />

              <ArrowIcon />

              <div className="relative w-[67%] max-w-[260px] min-[481px]:w-full min-[481px]:max-w-none">
                <Image
                  src={row.pillSrc}
                  alt={row.pillAlt}
                  width={388}
                  height={128}
                  sizes="(min-width: 481px) 200px, 260px"
                  className="block h-auto w-full"
                />
                {row.wave && (
                  <VoiceWave
                    variant={row.wave}
                    className="absolute left-[34%] top-1/2 w-[33.2%] -translate-y-1/2"
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
