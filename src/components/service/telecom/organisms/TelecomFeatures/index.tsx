"use client";

import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { TelecomFeatureCard } from "@/components/service/telecom/molecules";
import { TelecomSection, TelecomSectionHeaderColor } from "@/components/service/telecom/styles";
import { telecomFeatureKeys } from "@/components/service/telecom/constants";

const TelecomFeatures = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={TelecomSection}>
      <div className={S.TelecomFeaturesContainer}>
        <SectionHeader
          title={t("services-telecom.telecom-page-client.features.title")}
          colorClass={TelecomSectionHeaderColor}
        />
        <div className={S.TelecomFeaturesGrid}>
          {telecomFeatureKeys.map((featureKey) => (
            <TelecomFeatureCard key={featureKey} featureKey={featureKey} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TelecomFeatures;
