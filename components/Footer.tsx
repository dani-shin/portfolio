export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F1EE] border-t border-[#D3D4D1] h-[114px] min-[600px]:h-[120px] flex items-center mt-12 min-[600px]:mt-[72px]">
      <div className="site-container flex flex-col min-[600px]:flex-row items-start min-[600px]:items-center min-[600px]:justify-between gap-2 min-[600px]:gap-4 text-[#111111]">
        <div className="flex items-center gap-2 min-[600px]:gap-4">
          <a
            href="https://www.linkedin.com/in/dani-shin/"
            target="_blank"
            rel="noopener noreferrer"
            className="type-body-2 hover:text-[#666666] transition-colors"
          >
            LinkedIn
          </a>
          <span className="w-px h-3 min-[600px]:h-4 bg-black/[0.24]" aria-hidden="true"></span>
          <a
            href="mailto:deshin.hi5@gmail.com"
            className="type-body-2 hover:text-[#666666] transition-colors"
          >
            deshin.hi5@gmail.com
          </a>
        </div>
        <p className="type-caption-2 text-[#666666]">
          © Dani Shin All rights reserved.
        </p>
      </div>
    </footer>
  );
}