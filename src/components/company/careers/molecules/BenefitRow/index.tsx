"use client";

import Image from "next/image";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface BenefitRowProps {
  itemKey: string;
  image: string;
  index: number;
}

const BenefitRow = ({ itemKey, image, index }: BenefitRowProps) => {
  const { t } = useTranslation();
  const isReversed = index % 2 === 1;

  return (
    <div
      className={`${S.BenefitRowWrapper} ${isReversed ? S.BenefitRowDirectionReversed : S.BenefitRowDirection}`}
    >
      <div className={S.BenefitRowImageBox}>
        <Image
          src={image}
          alt={t(`company-careers.benefits.${itemKey}.title`)}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className={S.BenefitRowImage}
          style={itemKey === "health" ? { objectPosition: "center 25%" } : undefined}
        />
      </div>
      <div className={S.BenefitRowBody}>
        <div className={S.BenefitRowHead}>
          <span className={S.BenefitRowNumber} aria-hidden="true">
            0{index + 1}
          </span>
          <h3 className={S.BenefitRowTitle}>{t(`company-careers.benefits.${itemKey}.title`)}</h3>
        </div>
        <p className={S.BenefitRowDescription}>
          {t(`company-careers.benefits.${itemKey}.description`)}
        </p>
      </div>
    </div>
  );
};

export default BenefitRow;
