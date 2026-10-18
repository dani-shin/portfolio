import AboutHero from "@/components/AboutHero";
import HowIWorkSection from "@/components/HowIWorkSection";
import HowIUseAISection from "@/components/HowIUseAISection";
import OutsideOfWorkSection from "@/components/OutsideOfWorkSection";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 site-container">
        <AboutHero />
        <HowIWorkSection />
        <HowIUseAISection />
        <OutsideOfWorkSection />
      </main>
      <Footer />
    </div>
  );
}
