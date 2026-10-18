import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 site-container flex flex-col">
        <section className="pt-15 md:pt-20 pb-24 md:pb-[120px] flex-1">
          <div className="flex flex-col gap-1 md:gap-2 w-full md:w-2/3">
            <h1 className="hero-title font-serif text-[26px] md:text-[36px] leading-[1.4] text-[#111111] font-normal">
              Let&apos;s chat!
            </h1>

            <p className="type-headline-2 text-[#111111] font-normal">
              Whether it&apos;s a project, a question, or just want to say hi,
              I&apos;m always up for a good conversation.
            </p>
          </div>

          <div className="mt-20 flex flex-col text-[#333333] font-['Pretendard']">
            <p className="mb-1 type-subtitle-1 text-[#111111]">Dani Shin</p>
            <p className="type-body-1">Product Designer · 4+ years</p>
            <p className="type-body-1">Based in the U.S.</p>
            <p className="type-body-1">No visa sponsorship needed.</p>
            <p>Currently open to new opportunities, and happy chats too.</p>
          </div>

          <div className="mt-6">
            <Button href="mailto:deshin.hi5@gmail.com">Contact Me</Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
