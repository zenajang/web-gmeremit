"use client";

import { useEffect, useRef } from "react";
import { getHeaderHeight } from "@/utils/scroll";

const SCROLL_DURATION = 700;
const COOLDOWN = 600;

// Trackpad sends many small deltaY events (pixel-level), mouse wheel sends
// fewer large ones. We use this heuristic to detect the input type per-event.
const MOUSE_WHEEL_MIN_DELTA = 50;

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function ScrollSnap() {
  const isAnimatingRef = useRef(false);
  const lastScrollTime = useRef(0);
  const accumulatorRef = useRef(0);
  const directionRef = useRef<"up" | "down" | null>(null);
  const rafIdRef = useRef<number>(0);
  const lastWheelTimeRef = useRef(0);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const getSections = () =>
      Array.from(document.querySelectorAll(".snap-section")) as HTMLElement[];

    const getCurrentIndex = (sections: HTMLElement[], scrollY: number) => {
      const headerHeight = getHeaderHeight();
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollY >= sections[i].offsetTop - headerHeight - 100) return i;
      }
      return 0;
    };

    const smoothScrollTo = (target: number) => {
      const start = window.scrollY;
      const distance = target - start;
      if (Math.abs(distance) < 2) return;

      isAnimatingRef.current = true;
      lastScrollTime.current = Date.now();
      let startTime: number | null = null;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / SCROLL_DURATION, 1);

        window.scrollTo(0, start + distance * easeInOutCubic(progress));

        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(animate);
        } else {
          isAnimatingRef.current = false;
        }
      };

      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(animate);
    };

    // Expose for SectionNav
    (window as unknown as Record<string, unknown>).__smoothScrollTo =
      smoothScrollTo;

    const scrollToIndex = (sections: HTMLElement[], index: number) => {
      const headerHeight = getHeaderHeight();
      const offset = sections[index].id === "testimonials" ? 40 : 0;
      const target =
        index === 0
          ? 0
          : Math.max(0, sections[index].offsetTop - headerHeight - offset);
      smoothScrollTo(target);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!desktopQuery.matches) return;
      e.preventDefault();

      if (isAnimatingRef.current) return;
      if (Date.now() - lastScrollTime.current < COOLDOWN) return;

      const now = Date.now();
      const timeSinceLast = now - lastWheelTimeRef.current;
      lastWheelTimeRef.current = now;

      const absDelta = Math.abs(e.deltaY);
      // Mouse wheel: large delta with gaps between events (>80ms)
      // Trackpad: small delta with rapid succession (<80ms)
      const isMouseWheel =
        absDelta >= MOUSE_WHEEL_MIN_DELTA && timeSinceLast > 80;
      const threshold = isMouseWheel ? 0 : 30;

      const direction = e.deltaY > 0 ? "down" : "up";

      if (directionRef.current === direction) {
        accumulatorRef.current += absDelta;
      } else {
        directionRef.current = direction;
        accumulatorRef.current = absDelta;
      }

      if (accumulatorRef.current < threshold) return;
      accumulatorRef.current = 0;

      const sections = getSections();
      if (!sections.length) return;

      const currentIndex = getCurrentIndex(sections, window.scrollY);

      if (direction === "down" && currentIndex < sections.length - 1) {
        scrollToIndex(sections, currentIndex + 1);
      } else if (direction === "up" && currentIndex > 0) {
        scrollToIndex(sections, currentIndex - 1);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (!desktopQuery.matches) return;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!desktopQuery.matches) return;
      if (isAnimatingRef.current) return;
      if (Date.now() - lastScrollTime.current < COOLDOWN) return;

      const deltaY = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(deltaY) < 50) return;

      const sections = getSections();
      if (!sections.length) return;
      const currentIndex = getCurrentIndex(sections, window.scrollY);

      if (deltaY > 0 && currentIndex < sections.length - 1) {
        scrollToIndex(sections, currentIndex + 1);
      } else if (deltaY < 0 && currentIndex > 0) {
        scrollToIndex(sections, currentIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      delete (window as unknown as Record<string, unknown>).__smoothScrollTo;
    };
  }, []);

  return null;
}
