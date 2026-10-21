"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  RemittanceCardDescription,
  RemittanceCardTitle,
} from "@/components/service/remittance/styles";
import { remittanceFeatureIconPaths } from "@/components/service/remittance/constants";

interface TransferMethodCardProps {
  featureKey: string;
}

const TransferMethodCard = ({ featureKey }: TransferMethodCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.TransferMethodCardWrapper}>
      <div className={S.TransferMethodCardIconBox}>
        <svg
          className={S.TransferMethodCardIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          {remittanceFeatureIconPaths[featureKey].map((path) => (
            <path key={path} strokeLinecap="round" strokeLinejoin="round" d={path} />
          ))}
        </svg>
      </div>
      <h3 className={RemittanceCardTitle}>
        {t(`common.remittance.features.${featureKey}.title`)}
      </h3>
      <p className={RemittanceCardDescription}>
        {t(`common.remittance.features.${featureKey}.desc`)}
      </p>
    </div>
  );
};

export default TransferMethodCard;
