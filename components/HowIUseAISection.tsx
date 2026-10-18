"use client";

export default function HowIUseAISection() {
  return (
    <section className="py-12">
      <div className="flex flex-col items-start">
        <h2 className="font-['Pretendard'] type-title-3 text-[#111111] mb-1">
          How I use AI
        </h2>
        <div className="font-['Pretendard'] type-body-1 text-[#333333] mb-6">
          <p>
            AI is part of how I work, not to replace judgment, but to move faster and think more broadly.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 min-[900px]:grid-cols-2 gap-3 min-[900px]:gap-5">
          <div className="bg-white rounded-[4px] p-5 min-[900px]:p-6 flex flex-col gap-1 min-[900px]:gap-2">
            <h3 className="font-['Pretendard'] type-subtitle-1 text-[#111111]">
              Research &amp; Validation
            </h3>
            <p className="font-['Pretendard'] type-body-2 text-[#333333]">
              ChatGPT, Claude, and Gemini help me quickly cross-check regional and industry-specific regulations, turning a multi-day compliance review into a same-day gut check before I commit design direction.
            </p>
          </div>

          <div className="bg-white rounded-[4px] p-5 min-[900px]:p-6 flex flex-col gap-1 min-[900px]:gap-2">
            <h3 className="font-['Pretendard'] type-subtitle-1 text-[#111111]">
              Prototyping
            </h3>
            <p className="font-['Pretendard'] type-body-2 text-[#333333]">
              Figma Make helps me explore multiple structural directions for complex, nested UI flows in hours instead of days. I still design the interaction logic myself, but it removes the friction of testing &quot;what if&quot; layouts early.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
