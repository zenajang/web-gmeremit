"use client";

import { useEffect, useRef } from "react";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";
import { SolutionCard } from "@/components/service/payments/molecules";
import {
  PaymentsContainer,
  PaymentsSectionHeaderColor,
  PaymentsSectionHeaderSpacing,
} from "@/components/service/payments/styles";
import { solutions } from "@/components/service/payments/constants";

const CoreSolutions = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={S.CoreSolutionsSection}>
      <div className={PaymentsContainer}>
        <SectionHeader
          label={t("services-payments.solutions.label")}
          title={t("services-payments.solutions.title")}
          description={t("services-payments.solutions.description")}
          colorClass={PaymentsSectionHeaderColor}
          className={PaymentsSectionHeaderSpacing}
        />

        <div className={S.CoreSolutionsGrid}>
          {solutions.map((solution) => (
            <SolutionCard key={solution.key} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSolutions;
