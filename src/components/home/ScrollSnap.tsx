"use client";

import { useEffect, useRef } from "react";

const sectionIds = [
  "hero", // snap-section으로 찾음
  "app",
  "gme-payments",
  "payments-section",
  "overseas-remittance",
  "online-loan",
  "gme-cards",
  "testimonials",
  "app-download",
];

export default function ScrollSnap() {
  const isScrolling = useRef(false);
  const scrollDirection = useRef<"up" | "down" | null>(null);
  const scrollAccumulator = useRef(0);

  useEffect(() => {
    // Header height + extra offset to show content a bit higher
    const headerHeight = window.innerWidth >= 1024 ? 72 : 64;
    const extraOffset = 10; // 섹션이 더 아래에서 시작하도록
    const effectiveHeaderHeight = headerHeight - extraOffset;
    const threshold = 40;

    // 섹션 요소들 가져오기
    const getSections = () => {
      return sectionIds.map((id) => {
        if (id === "hero") {
          return document.querySelector(".snap-section") as HTMLElement;
        }
        return document.getElementById(id);
      }).filter(Boolean) as HTMLElement[];
    };

    const smoothScrollTo = (target: number) => {
      isScrolling.current = true;

      const start = window.scrollY;
      const distance = target - start;
      const duration = 500;
      let startTime: number | null = null;

      const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start + distance * easeOutQuart(progress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setTimeout(() => {
            isScrolling.current = false;
            scrollAccumulator.current = 0;
          }, 150);
        }
      };

      requestAnimationFrame(animate);
    };

    const getCurrentSectionIndex = (sections: HTMLElement[], scrollY: number) => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop - headerHeight - 100;
        if (scrollY >= sectionTop) {
          return i;
        }
      }
      return 0;
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;

      const sections = getSections();
      if (sections.length === 0) return;

      const currentScrollY = window.scrollY;
      const direction = e.deltaY > 0 ? "down" : "up";

      // 스크롤 누적
      if (scrollDirection.current === direction) {
        scrollAccumulator.current += Math.abs(e.deltaY);
      } else {
        scrollDirection.current = direction;
        scrollAccumulator.current = Math.abs(e.deltaY);
      }

      if (scrollAccumulator.current < threshold) return;

      const currentIndex = getCurrentSectionIndex(sections, currentScrollY);

      if (direction === "down" && currentIndex < sections.length - 1) {
        const nextSection = sections[currentIndex + 1];
        const targetTop = nextSection.offsetTop - effectiveHeaderHeight;

        // 현재 위치가 다음 섹션에 가까우면 스킵
        if (currentScrollY < targetTop - 50) {
          e.preventDefault();
          smoothScrollTo(targetTop);
        }
        return;
      }

      if (direction === "up" && currentIndex > 0) {
        const prevSection = sections[currentIndex - 1];
        const targetTop = currentIndex === 1 ? 0 : prevSection.offsetTop - effectiveHeaderHeight;

        // 현재 섹션 상단 근처에 있을 때만 이전 섹션으로
        const currentSectionTop = sections[currentIndex].offsetTop - effectiveHeaderHeight;
        if (currentScrollY < currentSectionTop + 150) {
          e.preventDefault();
          smoothScrollTo(targetTop);
        }
        return;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}
