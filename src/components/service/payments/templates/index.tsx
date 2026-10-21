"use client";

import ServiceHeroSection from "@/components/service/common/organisms/ServiceHeroSection";
import {
  CoreSolutions,
  PaymentPartners,
  PaymentProcess,
  PaymentsCta,
  ServiceFeatures,
} from "@/components/service/payments/organisms";
import { useLenis } from "@/hooks/useLenis";

const PaymentsTemplate = () => {
  useLenis();

  return (
    <>
      <ServiceHeroSection
        translationKey="services-payments.service-hero-section"
        color="payments"
        ctaTextKey="cta_contact"
      />
      <CoreSolutions />
      <ServiceFeatures />
      <PaymentPartners />
      <PaymentProcess />
      <PaymentsCta />
    </>
  );
};

export default PaymentsTemplate;
