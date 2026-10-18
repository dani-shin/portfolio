import Image from "next/image";

const partners = [
  { name: "Hyundai", logo: "/work/logo_hyundai.png" },
  { name: "SK shieldus", logo: "/work/logo_skshieldus.png" },
  { name: "LG CNS", logo: "/work/logo_lgcns.png" },
  { name: "SZW", logo: "/work/logo_s2w.png" },
  { name: "SAMCHONSA", logo: "/work/logo_seadronix.png" },
  { name: "LS Securities", logo: "/work/logo_lssecurities.png" },
  { name: "EGIM", logo: "/work/logo_egim.png" },
  { name: "weglow", logo: "/work/logo_weglow.png" },
];

export default function WorkedWith() {
  return (
    <section className="py-12">
      <div className="flex flex-col gap-6">
        <h2 className="type-title-1 text-[#111111]">
          Worked With
        </h2>

        <div className="border-t border-b border-[#D0D0D0] py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="h-[60px] bg-[#F0F1EE] rounded-[4px] flex items-center justify-center overflow-hidden"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={225}
                  height={60}
                  className="h-[48px] w-auto max-w-[180px] object-contain object-left min-[768px]:h-[60px] min-[768px]:max-w-[225px]"
                />
              </div>
            ))}
          </div>
        </div>

        <a
          href="https://www.linkedin.com/in/happyhaeby/?skipRedirect=true"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-[4px] shadow-[0_6px_12px_rgba(0,0,0,0.04)] px-[clamp(20px,calc(20px+(100vw-480px)*22/1010),42px)] pt-4 pb-5 flex flex-col gap-6 mt-4 md:pt-6 md:pb-7 md:gap-9"
        >
          <p className="type-body-2 text-[#333333] leading-relaxed">
            “ Dani showed a strong sense of responsibility in understanding the intent behind product requirements, the purpose of each feature, and the overall user flow before translating them into UX/UI design. She also made a consistent effort to communicate effectively with stakeholders in challenging situations and thoughtfully explored ways to make the experience easier and more intuitive for users while balancing business and product requirements. ”
            </p>

          <div className="flex items-end justify-between pt-2">
            <div>
              <span className="font-bold type-body-1 text-[#111111] text-base">Haebin Lee</span>
              <span className="type-caption-2 text-[#666666] block">
                UX Designer @ Practical Sketch
      </span>
            </div>

            <Image
              src="/work/logo_linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0"
            />
          </div>
        </a>
      </div>
    </section>
  );
}