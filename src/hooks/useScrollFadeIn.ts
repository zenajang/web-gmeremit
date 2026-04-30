"use client";

import { useCallback, useEffect, useRef } from "react";

interface ScrollFadeInOptions {
  sectionThreshold?: number;
  stepThreshold?: number;
  rootMargin?: string;
}

export function useScrollFadeIn(options: ScrollFadeInOptions = {}) {
  const { sectionThreshold = 0.15, stepThreshold = 0.1, rootMargin } = options;
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const refCallbacks = useRef<Record<number, (element: HTMLElement | null) => void>>(
    {}
  );

  const registerSectionRef = useCallback((index: number) => {
    if (!refCallbacks.current[index]) {
      refCallbacks.current[index] = (element: HTMLElement | null) => {
        sectionRefs.current[index] = element;
      };
    }

    return refCallbacks.current[index];
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: sectionThreshold, ...(rootMargin && { rootMargin }) }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));

    const steps = document.querySelectorAll(".fade-step");
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: stepThreshold }
    );
    steps.forEach((el) => stepObserver.observe(el));

    return () => {
      observer.disconnect();
      stepObserver.disconnect();
    };
  }, [rootMargin, sectionThreshold, stepThreshold]);

  return { registerSectionRef };
}
