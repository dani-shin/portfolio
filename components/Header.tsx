"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "#resume" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const emptySubscribe = () => () => {};
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#") || href !== pathname) return;

    e.preventDefault();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";

    if (open) {
      setOpen(false);
      setTimeout(() => window.scrollTo({ top: 0, behavior }), 50);
      return;
    }

    window.scrollTo({ top: 0, behavior });
  };

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 600px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const linkClass =
    "group relative h-9 px-4 flex items-center justify-center rounded-[20px] text-[16px] leading-[148%] font-normal text-[#111111]";

  return (
    <header className="sticky top-0 z-50 w-full h-14 min-[600px]:h-16 bg-[rgba(240,241,238,0.88)] backdrop-blur-[6px]">
      <div className="site-container h-full flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Dani Shin"
            width={100}
            height={26}
            className="w-[100px] h-[26px] min-[600px]:w-[122px] min-[600px]:h-[32px]"
            priority
          />
        </Link>

        <nav className="hidden min-[600px]:flex items-center gap-2">
          {menus.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={(e) => handleLinkClick(e, href)}
              className={linkClass}
            >
              <span
                className={`absolute left-1 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full transition-colors ${
                  isActive(href)
                    ? "bg-[#FF027C]"
                    : "bg-transparent group-hover:bg-[#BBBBBB]"
                }`}
                aria-hidden="true"
              />
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(true)}
          className="min-[600px]:hidden -mr-1.5 h-9 w-20 pl-3 pr-1.5 flex items-center justify-center gap-0.5 rounded-[20px] text-[14px] leading-[146%] font-normal text-[#111111]"
        >
          <span>Menu</span>
          <span className="w-6 h-6 flex items-center justify-center">
            <Image src="/icons/menu.svg" alt="" width={24} height={24} />
          </span>
        </button>
      </div>

      {mounted &&
        createPortal(
          <div className="min-[600px]:hidden z-[100]">
            <div
              aria-hidden="true"
              onClick={() => setOpen(false)}
              className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[5px] transition-opacity duration-300 ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />

            <aside
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              inert={!open}
              className={`fixed right-0 top-0 z-[70] h-dvh w-[285px] bg-[#F0F1EE] transition-transform duration-300 ${
                open ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-[14px] top-[10px] flex h-9 w-9 items-center justify-center p-[6px]"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#111111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                >
                  <path d="M5 5L19 19M19 5L5 19" />
                </svg>
              </button>

              <nav className="absolute left-0 top-[62px] flex w-full flex-col items-start gap-3 px-6">
                {menus.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-current={isActive(href) ? "page" : undefined}
                    onClick={(e) => {
                      handleLinkClick(e, href);
                      setOpen(false);
                    }}
                    className={linkClass}
                  >
                    <span
                      className={`absolute left-1 top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full transition-colors ${
                        isActive(href)
                          ? "bg-[#FF027C]"
                          : "bg-transparent group-hover:bg-[#BBBBBB]"
                      }`}
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                ))}
              </nav>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
}
