"use client";

import { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";
import { PartnerLogoItem } from "@/components/service/payments/molecules";
import {
  PaymentsContainer,
  PaymentsSectionHeaderColor,
  PaymentsSectionHeaderSpacing,
} from "@/components/service/payments/styles";
import { partnerLogos } from "@/components/service/payments/constants";

const PaymentPartners = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const partnersRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const partners = partnersRef.current;
    if (!partners) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(partners);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={S.PaymentPartnersSection}>
      <div
        ref={partnersRef}
        className={PaymentsContainer}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-48px)",
          transition: S.PaymentPartnersTransition,
        }}
      >
        <SectionHeader
          label={t("services-payments.partners.label")}
          title={t("services-payments.partners.title")}
          colorClass={PaymentsSectionHeaderColor}
          className={PaymentsSectionHeaderSpacing}
        />

        <div className={S.PaymentPartnersGrid}>
          {partnerLogos.map((partner) => (
            <PartnerLogoItem key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentPartners;
