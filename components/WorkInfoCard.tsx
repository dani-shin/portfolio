import WorkInfoText, { type WorkInfoTextData } from "./WorkInfoText";

export default function WorkInfoCard({ items }: { items: WorkInfoTextData[] }) {
  return (
    <div className="space-y-5">
      {items.map((item) => (
        <WorkInfoText key={item.letter} {...item} />
      ))}
    </div>
  );
}