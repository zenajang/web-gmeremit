"use client";

import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { TransferMethodCard } from "@/components/service/remittance/molecules";
import {
  RemittanceContainer,
  RemittanceSectionHeaderColor,
} from "@/components/service/remittance/styles";
import { remittanceFeatureKeys } from "@/components/service/remittance/constants";

const TransferMethods = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={S.TransferMethodsSection}>
      <div className={RemittanceContainer}>
        <SectionHeader
          title={t("common.remittance.features.title")}
          title2={t("common.remittance.features.title2")}
          description={t("common.remittance.features.subtitle")}
          colorClass={RemittanceSectionHeaderColor}
        />

        <div className={S.TransferMethodsGrid}>
          {remittanceFeatureKeys.map((featureKey) => (
            <TransferMethodCard key={featureKey} featureKey={featureKey} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransferMethods;
