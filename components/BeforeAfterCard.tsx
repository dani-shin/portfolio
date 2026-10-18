export interface CompareItem {
  label: string;
  description: string;
  labelClassName?: string;
}

interface BeforeAfterCardProps {
  title: string;
  items: CompareItem[];
}

export default function BeforeAfterCard({ title, items }: BeforeAfterCardProps) {
  return (
    <div className="fluid-compare-pt fluid-compare-px fluid-compare-pb flex w-full max-w-[960px] flex-col justify-center gap-4 rounded-[4px] bg-white">
      <h4 className="type-subtitle-2 w-full text-[#111111]">{title}</h4>

      <div className="fluid-compare-gap flex w-full flex-col min-[769px]:flex-row min-[769px]:items-stretch">
        {items.map((item, i) => (
          <div key={item.label} className="contents">
            {i > 0 && (
              <div
                aria-hidden
                className="h-px w-full flex-none bg-[#D0D0D0] min-[769px]:h-auto min-[769px]:w-px"
              />
            )}

            <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 py-0.5 min-[769px]:gap-1">
              <p
                className={`type-subtitle-2 w-full ${
                  item.labelClassName ?? "text-[#333333]"
                }`}
              >
                {item.label}
              </p>
              <p className="type-body-2 w-full text-[#333333]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
