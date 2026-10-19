"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { BenefitRow } from "@/components/company/careers/molecules";
import {
  CareersContainer,
  CareersSection,
  CareersSectionSubtitle,
  CareersSectionTitleWithSubtitle,
} from "@/components/company/careers/styles";
import { benefitImages, benefitKeys } from "@/components/company/careers/constants";

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className={CareersSection}>
      <div className={CareersContainer}>
        <h2 className={CareersSectionTitleWithSubtitle}>{t("company-careers.benefits.title")}</h2>
        <p className={CareersSectionSubtitle}>{t("company-careers.benefits.subtitle")}</p>

        <div className={S.BenefitsList}>
          {benefitKeys.map((key, index) => (
            <BenefitRow key={key} itemKey={key} image={benefitImages[index]} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
