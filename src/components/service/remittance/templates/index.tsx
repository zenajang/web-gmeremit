"use client";

import ServiceHeroSection from "@/components/service/common/organisms/ServiceHeroSection";
import {
  RegionsCoverage,
  RemittanceProcess,
  TransferMethods,
  TrustCompliance,
  WhyRemittance,
} from "@/components/service/remittance/organisms";
import { useLenis } from "@/hooks/useLenis";

const RemittanceTemplate = () => {
  useLenis();

  return (
    <>
      <ServiceHeroSection
        translationKey="services-remittance.service-hero-section"
        color="primary"
        ctaHref="#why"
      />
      <WhyRemittance />
      <TransferMethods />
      <RemittanceProcess />
      <TrustCompliance />
      <RegionsCoverage />
    </>
  );
};

export default RemittanceTemplate;
