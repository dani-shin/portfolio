"use client";

import { useEffect, useRef, useState } from "react";

export interface CaseStudyTab {
  id: string;
  number: string;
  label: string;
}

interface CaseStudyTabsProps {
  tabs: CaseStudyTab[];
  defaultTabId?: string;
  activeTabId?: string;
  onTabChange?: (id: string) => void;
  containerClassName?: string;
  headerSelector?: string;
  outerRef?: React.RefObject<HTMLElement | null>;
}

const ANIM_MS = 300;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const SCROLL_DELTA = 6;
const SETTLE_MS = 150;

function getScrollContainer(element: HTMLElement | null): HTMLElement | Window {
  if (typeof window === "undefined" || !element) return window;

  let parent = element.parentElement;
  while (
    parent &&
    parent !== document.body &&
    parent !== document.documentElement
  ) {
    const { overflowY } = window.getComputedStyle(parent);
    if (overflowY === "auto" || overflowY === "scroll") return parent;
    parent = parent.parentElement;
  }
  return window;
}

function getScrollTop(sc: HTMLElement | Window): number {
  if (sc === window) {
    return Math.max(
      window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0,
      0
    );
  }
  return (sc as HTMLElement).scrollTop;
}

function getAbsoluteTop(el: HTMLElement, sc: HTMLElement | Window): number {
  const rect = el.getBoundingClientRect();
  if (sc === window) return rect.top + getScrollTop(sc);

  const containerEl = sc as HTMLElement;
  return (
    rect.top - containerEl.getBoundingClientRect().top + containerEl.scrollTop
  );
}

export default function CaseStudyTabs({
  tabs,
  defaultTabId,
  activeTabId,
  onTabChange,
  containerClassName = "site-container",
  headerSelector = "header",
  outerRef,
}: CaseStudyTabsProps) {
  const navRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  const [innerActiveId, setInnerActiveId] = useState(
    defaultTabId ?? tabs[0]?.id ?? ""
  );
  const [headerHeight, setHeaderHeight] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  const currentId = activeTabId ?? innerActiveId;

  const heightRef = useRef(0);
  const visibleRef = useRef(true);
  const lockRef = useRef(false);
  const lastYRef = useRef(0);
  const settleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  heightRef.current = headerHeight;

  const setVisible = (v: boolean) => {
    if (visibleRef.current === v) return;
    visibleRef.current = v;
    setHeaderVisible(v);
  };

  const armUnlock = () => {
    if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
    settleTimerRef.current = setTimeout(() => {
      lockRef.current = false;
      lastYRef.current = getScrollTop(getScrollContainer(navRef.current));
    }, SETTLE_MS);
  };

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(headerSelector);
    if (!header) return;

    const pos = getComputedStyle(header).position;
    if (pos === "static" || pos === "relative") {
      header.style.position = "sticky";
    }
    header.style.top = "0px";
    header.style.zIndex = "100";
    header.style.transition = `top ${ANIM_MS}ms ${EASE}`;

    const measure = () => setHeaderHeight(header.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);

    return () => {
      ro.disconnect();
      header.style.position = "";
      header.style.top = "";
      header.style.zIndex = "";
      header.style.transition = "";
    };
  }, [headerSelector]);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(headerSelector);
    if (!header || headerHeight === 0) return;
    header.style.top = headerVisible ? "0px" : `${-headerHeight}px`;
  }, [headerVisible, headerHeight, headerSelector]);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const sc = getScrollContainer(nav);
    lastYRef.current = getScrollTop(sc);
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = getScrollTop(sc);
      const diff = y - lastYRef.current;

      if (y <= 0) {
        setVisible(true);
        lastYRef.current = y;
        return;
      }

      if (Math.abs(diff) < SCROLL_DELTA) return;

      if (diff < 0) {
        setVisible(true);
      } else if (visibleRef.current) {
        const docked =
          nav.getBoundingClientRect().top <= heightRef.current + 1;
        if (docked) setVisible(false);
      }

      lastYRef.current = y;
    };

    const onScroll = () => {
      if (lockRef.current) {
        armUnlock();
        return;
      }
      if (!raf) raf = requestAnimationFrame(update);
    };

    sc.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (settleTimerRef.current) clearTimeout(settleTimerRef.current);
      sc.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToTabMenu = () => {
    const anchor = outerRef?.current ?? anchorRef.current;
    if (!anchor) return;

    const sc = getScrollContainer(anchor);
    const top = Math.max(0, getAbsoluteTop(anchor, sc));

    lockRef.current = true;
    setVisible(false);
    armUnlock();

    sc.scrollTo({ top, behavior: "smooth" });
  };

  const handleSelect = (id: string) => {
    scrollToTabMenu();
    if (activeTabId === undefined) setInnerActiveId(id);
    onTabChange?.(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + dir + tabs.length) % tabs.length];
    handleSelect(next.id);
    document
      .getElementById(`case-tab-${next.id}`)
      ?.focus({ preventScroll: true });
  };

  return (
    <>
      <div
        ref={anchorRef}
        aria-hidden
        className="pointer-events-none absolute h-0 w-0"
      />

      <nav
        ref={navRef}
        aria-label="casestudylist"
        style={{
          top: headerVisible ? headerHeight : 0,
          transition: `top ${ANIM_MS}ms ${EASE}`,
        }}
        className="sticky z-[90] mb-8 min-[481px]:mb-9 border-b border-[#D6D6D6] bg-[rgba(240,241,238,0.88)] backdrop-blur-[6px] min-[900px]:border-b-0"
      >
        <div className={containerClassName}>
          <div className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div
              role="tablist"
              className="-ml-1 flex w-max min-w-full items-start justify-start gap-5"
            >
              {tabs.map((tab, index) => {
                const isActive = currentId === tab.id;

                return (
                  <button
                    key={tab.id}
                    id={`case-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleSelect(tab.id)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="group relative box-border flex h-[60px] shrink-0 items-start justify-center whitespace-nowrap px-1 py-5 transition-colors min-[481px]:h-16 min-[481px]:py-[19px]"
                  >
                    <span className="flex items-start gap-1.5">
                      <span
                        className={[
                          "min-w-[18px] text-center font-['Inter',sans-serif] text-[16px] italic leading-[1.26] transition-colors",
                          "min-[481px]:min-w-[20px] min-[481px]:text-[18px] min-[481px]:leading-[1.42]",
                          isActive
                            ? "text-[#FF027C]"
                            : "text-[#BBBBBB] group-hover:text-[#888888]",
                        ].join(" ")}
                      >
                        {tab.number}
                      </span>

                      <span
                        className={[
                          "type-body-2 transition-colors",
                          isActive
                            ? "text-[#111111]"
                            : "text-[#666666] group-hover:text-[#333333]",
                        ].join(" ")}
                      >
                        {tab.label}
                      </span>
                    </span>

                    {isActive && (
                      <span className="absolute inset-x-0 bottom-0 z-20 h-[2px] bg-[#111111]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className={`${containerClassName} pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-px bg-[#D6D6D6] min-[900px]:block`}
        />
      </nav>
    </>
  );
}
