"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import type { PaymentFeature } from "@/components/service/payments/types";

interface FeatureCardProps {
  feature: PaymentFeature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.FeatureCardWrapper}>
      <div className={S.FeatureCardHead}>
        <div className={S.FeatureCardIconBox} style={{ backgroundColor: feature.color }}>
          <svg
            className={S.FeatureCardIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
          </svg>
        </div>
        <h3 className={S.FeatureCardTitle}>
          {t(`services-payments.features.${feature.key}.title`)}
        </h3>
      </div>
      <p className={S.FeatureCardDescription}>
        {t(`services-payments.features.${feature.key}.description`)}
      </p>
    </div>
  );
};

export default FeatureCard;
