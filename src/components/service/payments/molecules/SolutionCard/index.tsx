"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import type { PaymentSolution } from "@/components/service/payments/types";

interface SolutionCardProps {
  solution: PaymentSolution;
}

const SolutionCard = ({ solution }: SolutionCardProps) => {
  const { t, tArray } = useTranslation();

  return (
    <div className={S.SolutionCardWrapper}>
      <div
        className={S.SolutionCardAccent}
        style={{ background: `linear-gradient(90deg, ${solution.color}, ${solution.color}88)` }}
      />
      <div className={S.SolutionCardHead}>
        <div
          className={S.SolutionCardIconBox}
          style={{ backgroundColor: `${solution.color}10`, color: solution.color }}
        >
          <svg
            className={S.SolutionCardIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={solution.iconPath} />
          </svg>
        </div>
        <div>
          <h3 className={S.SolutionCardTitle}>
            {t(`services-payments.solutions.${solution.key}.title`)}
          </h3>
          <p className={S.SolutionCardSubtitle} style={{ color: solution.color }}>
            {t(`services-payments.solutions.${solution.key}.subtitle`)}
          </p>
        </div>
      </div>

      <p className={S.SolutionCardDescription}>
        {t(`services-payments.solutions.${solution.key}.description`)}
      </p>

      <div className={S.SolutionCardFeatureList}>
        {tArray(`services-payments.solutions.${solution.key}.features`).map((feature: string) => (
          <div key={feature} className={S.SolutionCardFeature}>
            <svg
              className={S.SolutionCardFeatureIcon}
              style={{ color: solution.color }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionCard;
