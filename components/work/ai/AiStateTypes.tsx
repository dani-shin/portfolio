import ThinkingAvatar from "./ThinkingAvatar";
import SpeakingAvatar from "./SpeakingAvatar";
import TypeBCard from "./TypeBCard";

export default function AiStateTypes() {
  return (
    <div className="grid grid-cols-1 gap-5 min-[768px]:grid-cols-2">
      <section className="flex flex-col rounded-[4px] bg-gradient-to-b from-[#213745] to-[#18222B] px-4 pt-5 pb-[42px]">
        <div className="text-center">
          <h4 className="type-subtitle-1 text-white">Type A</h4>
          <p className="type-caption-2 mt-2 text-white/70">
            Animation-focused design for AI states
          </p>
        </div>

        <div className="mx-auto mt-6 grid w-full max-w-[720px] grid-cols-2 gap-1 min-[769px]:gap-3">
          <figure className="flex flex-col items-center">
            <ThinkingAvatar
              src="/work/project2/profile-artist.png"
              alt="Profile image with a liquid border animation while the AI is thinking"
              className="max-w-[300px]"
            />
            <figcaption className="type-caption-1 text-center text-white">
              Thinking of a reply
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center">
            <SpeakingAvatar
              src="/work/project2/profile-artist.png"
              alt="Profile image with pulsing circles while the AI is speaking"
              className="max-w-[300px]"
            />
            <figcaption className="type-caption-1 text-center text-white">
              Speaking
            </figcaption>
          </figure>
        </div>
      </section>

      <TypeBCard />
    </div>
  );
}
