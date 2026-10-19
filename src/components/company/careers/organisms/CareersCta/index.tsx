"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { CareersButtonIcon, CareersRecruitButton } from "@/components/company/careers/styles";
import { CAREERS_RECRUIT_URL } from "@/components/company/careers/constants";

const CareersCta = () => {
  const { t } = useTranslation();

  return (
    <section className={S.CareersCtaSection}>
      <div className={S.CareersCtaContainer}>
        <h2 className={S.CareersCtaTitle}>{t("common.careers.cta.title")}</h2>
        <p className={S.CareersCtaSubtitle}>{t("common.careers.cta.subtitle")}</p>
        <div className={S.CareersCtaActions}>
          <a
            href={CAREERS_RECRUIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CareersRecruitButton} ${S.CareersCtaButton}`}
          >
            {t("common.careers.cta.openings")}
            <svg
              className={CareersButtonIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersCta;
