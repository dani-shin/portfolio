interface InfoItem {
  label: string;
  value: React.ReactNode;
}

interface ProjectInfoBoxProps {
  items: InfoItem[];
}

export default function ProjectInfoBox({ items }: ProjectInfoBoxProps) {
  return (
    <div className="bg-white rounded-[4px] p-4 min-[481px]:p-6 mb-14">
      <dl className="flex flex-col gap-0.5">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3 min-[481px]:gap-4">
            <dt className="w-[82px] min-[481px]:w-[94px] shrink-0 type-subtitle-2 text-[#333333]">
              {item.label}
            </dt>
            <dd className="flex-1 type-body-2 text-[#666666]">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
