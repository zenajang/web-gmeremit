"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface RemittanceStatProps {
  statKey: string;
  isLarge?: boolean;
}

const RemittanceStat = ({ statKey, isLarge = false }: RemittanceStatProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <p className={isLarge ? S.RemittanceStatLargeValue : S.RemittanceStatSmallValue}>
        {t(`services-remittance.stats.${statKey}.value`)}
      </p>
      <p className={isLarge ? S.RemittanceStatLargeLabel : S.RemittanceStatSmallLabel}>
        {t(`services-remittance.stats.${statKey}.label`)}
      </p>
    </div>
  );
};

export default RemittanceStat;
