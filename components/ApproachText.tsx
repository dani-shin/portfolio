interface ApproachTextProps {
  title: string;
  children: React.ReactNode;
}

export default function ApproachText({ title, children }: ApproachTextProps) {
  return (
    <div className="fluid-compare-pt fluid-compare-px fluid-compare-pb flex w-full max-w-[960px] flex-col items-start gap-1 rounded-[4px] bg-[#D7DFDC]">
      <h4 className="type-subtitle-2 w-full text-[#333333]">{title}</h4>
      <p className="type-body-2 w-full text-[#333333]">{children}</p>
    </div>
  );
}