"use client";

import ServiceHeroSection from "@/components/service/common/organisms/ServiceHeroSection";
import {
  SimIntro,
  TelecomCta,
  TelecomFeatures,
  TelecomPlans,
} from "@/components/service/telecom/organisms";
import { useLenis } from "@/hooks/useLenis";
import type { ApiPlan } from "@/components/service/telecom/types";

interface TelecomTemplateProps {
  plansPromise: Promise<ApiPlan[]>;
  initialSeq: string;
}

const TelecomTemplate = ({ plansPromise, initialSeq }: TelecomTemplateProps) => {
  useLenis();

  return (
    <>
      <ServiceHeroSection
        translationKey="services-telecom.service-hero-section"
        color="purple"
        ctaHref="#plans"
        maxWidth="max-w-content"
      />
      <TelecomFeatures />
      <TelecomPlans plansPromise={plansPromise} initialSeq={initialSeq} />
      <SimIntro />
      <TelecomCta />
    </>
  );
};

export default TelecomTemplate;
