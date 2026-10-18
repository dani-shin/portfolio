import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import WorkedWith from "@/components/WorkedWith";
import SideProjects from "@/components/SideProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 site-container">
        <Hero />
        <FeaturedProjects />
        <WorkedWith />
        <SideProjects />
      </main>
      <Footer />
    </div>
  );
}
