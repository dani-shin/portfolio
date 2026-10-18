import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F1EE]">
      <main className="flex-1 site-container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <Image
            src="/error/404.png"
            alt="404 error"
            width={160}
            height={320}
            className="w-[clamp(100px,20vw,160px)] h-auto"
          />

          <div className="w-full max-w-[320px] mx-5 md:w-[262px] md:max-w-none md:mx-auto text-center type-body-2 text-[#666666]">
            <p>Sorry for the inconvenience.</p>
            <p>Please try refreshing the page again.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
