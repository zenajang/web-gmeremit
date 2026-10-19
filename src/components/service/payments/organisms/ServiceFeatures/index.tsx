"use client";

import { useEffect, useRef } from "react";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";
import { FeatureCard } from "@/components/service/payments/molecules";
import {
  PaymentsContainer,
  PaymentsSectionHeaderColor,
  PaymentsSectionHeaderSpacing,
} from "@/components/service/payments/styles";
import { paymentFeatureKeys } from "@/components/service/payments/constants";

const ServiceFeatures = () => {
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
    <section ref={sectionRef} className={S.ServiceFeaturesSection}>
      <div className={PaymentsContainer}>
        <SectionHeader
          label={t("services-payments.features.label")}
          title={t("services-payments.features.title")}
          colorClass={PaymentsSectionHeaderColor}
          className={PaymentsSectionHeaderSpacing}
        />

        <div className={S.ServiceFeaturesGrid}>
          {paymentFeatureKeys.map((feature) => (
            <FeatureCard key={feature.key} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
