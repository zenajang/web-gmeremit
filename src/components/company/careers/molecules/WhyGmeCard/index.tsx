"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { CareersCardBox } from "@/components/company/careers/styles";

interface WhyGmeCardProps {
  itemKey: string;
  iconPath: string;
}

const WhyGmeCard = ({ itemKey, iconPath }: WhyGmeCardProps) => {
  const { t } = useTranslation();

  return (
    <div className={CareersCardBox}>
      <div className={S.WhyGmeCardIconBox}>
        <svg
          className={S.WhyGmeCardIcon}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <h3 className={S.WhyGmeCardTitle}>{t(`company-careers.why_gme.${itemKey}.title`)}</h3>
      <p className={S.WhyGmeCardDescription}>
        {t(`company-careers.why_gme.${itemKey}.description`)}
      </p>
    </div>
  );
};

export default WhyGmeCard;
