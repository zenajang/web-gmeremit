"use client";

import { useEffect, useRef } from "react";

interface ScrollFadeInOptions {
  sectionThreshold?: number;
  stepThreshold?: number;
  rootMargin?: string;
}

export function useScrollFadeIn(options: ScrollFadeInOptions = {}) {
  const { sectionThreshold = 0.15, stepThreshold = 0.1, rootMargin } = options;
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

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
  }, []);

  return sectionRefs;
}
