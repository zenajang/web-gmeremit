"use client";

import Image from "next/image";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import {
  CareersButtonIcon,
  CareersContainer,
  CareersRecruitButton,
} from "@/components/company/careers/styles";
import { CAREERS_RECRUIT_URL } from "@/components/company/careers/constants";

const CareersHeader = () => {
  const { t } = useTranslation();

  return (
    <section className={S.CareersHeaderSection}>
      <div className={S.CareersHeaderWatermark}>
        <Image
          src="/images/company/careers/icons/logo_icon.png"
          alt=""
          aria-hidden="true"
          width={400}
          height={400}
          className={S.CareersHeaderWatermarkImage}
        />
      </div>

      <div className={`${CareersContainer} ${S.CareersHeaderContainer}`}>
        <div className={S.CareersHeaderRow}>
          <div>
            <p className={S.CareersHeaderEyebrow}>Careers</p>
            <h1 className={S.CareersHeaderTitle}>{t("company-careers.header.title")}</h1>
            <p className={S.CareersHeaderDescription}>{t("company-careers.header.description")}</p>
          </div>
          <a
            href={CAREERS_RECRUIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${CareersRecruitButton} ${S.CareersHeaderButton}`}
          >
            {t("company-careers.header.button")}
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersHeader;
