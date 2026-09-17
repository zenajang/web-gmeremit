"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/common/organisms/ServiceHeroSection";
import { CardBenefits, CardGrid } from "@/components/service/card/organisms";
import { useLenis } from "@/hooks/useLenis";

export default function CardPageTemplate() {
  useLenis();

  return (
    <PublicLayout className="bg-gradient-to-b from-white via-white to-gray-100">
      <ServiceHeroSection translationKey="card" color="primary" ctaHref="#cards" maxWidth="max-w-content" />
      <CardBenefits />
      <CardGrid />
    </PublicLayout>
  );
}
