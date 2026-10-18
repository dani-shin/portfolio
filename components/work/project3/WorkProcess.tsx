import Image from "next/image";

export default function WorkProcess() {
    return <section>
        <div className="max-w-[960px] mb-6">
            <h4 className="type-subtitle-1 text-[#111111] mb-1">Work Process</h4>
            <p className="type-body-1 text-[#333333] mb-6">
                To quickly raise quality, we repeated the cycle below, from MVP selection to QA, multiple times throughout the project. Each round resolved the pain points identified during the previous round's testing. During GUI design, I built a design system to keep every screen consistent and improve efficiency for both designers and developers, which reduced design-related issues during QA.
            </p>
        </div>
        <div className="flex w-full justify-center mb-20">
            <picture>
                <source
                    media="(max-width: 480px)"
                    srcSet="/work/project3/work-process-diagram-mo.png"
                />

                <source
                    media="(max-width: 768px)"
                    srcSet="/work/project3/work-process-diagram-tb.png"
                />

                <img
                    src="/work/project3/work-process-diagram-pc.png"
                    alt="workprocess-diagram"
                    className="block h-auto w-auto max-w-full min-[769px]:max-h-[452px]"
                    style={{ height: "auto" }}
                />
            </picture>
        </div>
    </section>;
}
