interface ImpactCardProps {
  value: string;
  label: string;
}

function ImpactCard({ value, label }: ImpactCardProps) {
  return (
    <div className="flex flex-col items-start rounded-[2px] bg-white pt-3 px-4 pb-3 min-[481px]:pt-4 min-[481px]:px-6 min-[481px]:pb-5">
      <p className="type-headline-1 text-[#729188]">
        {value}
      </p>
      <p className="type-caption-2 text-[#666666]">
        {label}
      </p>
    </div>
  );
}

export default function ImpactCards() {
  const impacts = [
    { value: "+36%", label: "Checkout Completion" },
    { value: "-60%", label: "Operational Workload" },
    { value: "-80%", label: "Shipping Workload" },
    { value: "2d → 3h", label: "Onboarding Speed" },
  ];

  const isEven = impacts.length % 2 === 0;

  return (
    <section className="mb-20">
      <h2 className="mb-4 type-title-3 text-[#111111]">
        Business Impact
      </h2>

      <div
        className={`grid grid-cols-1 gap-3 min-[481px]:gap-[clamp(0.75rem,2.083vw,1.25rem)] ${
          isEven
            ? "min-[481px]:grid-cols-2 min-[900px]:grid-cols-4"
            : "min-[900px]:grid-cols-3"
        }`}
      >
        {impacts.map((impact, index) => (
          <ImpactCard
            key={`${impact.label}-${index}`}
            value={impact.value}
            label={impact.label}
          />
        ))}
      </div>
    </section>
  );
}
