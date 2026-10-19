"use client";

import { FaCheckCircle, FaMobileAlt, FaSimCard, FaTruck } from "react-icons/fa";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import {
  CrossCircleIcon,
  ExternalLinkIcon,
  UsimStep,
} from "@/components/service/telecom/molecules";
import { TelecomSection, TelecomSectionHeaderColor } from "@/components/service/telecom/styles";
import {
  GME_MOBILE_ESIM_URL,
  GME_MOBILE_USIM_URL,
  usimStepKeys,
} from "@/components/service/telecom/constants";

const usimStepIcons = [
  <FaSimCard key="step1" className={S.SimIntroStepIcon} />,
  <FaTruck key="step2" className={S.SimIntroStepIcon} />,
  <FaMobileAlt key="step3" className={S.SimIntroStepIcon} />,
  <FaCheckCircle key="step4" className={S.SimIntroStepIcon} />,
];

const SimIntro = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={TelecomSection}>
      <div className={S.SimIntroHeaderBox}>
        <SectionHeader
          title={t("services-telecom.telecom-page-client.process.title")}
          title2={t("services-telecom.telecom-page-client.process.title2")}
          colorClass={TelecomSectionHeaderColor}
        />
      </div>
      <div className={S.SimIntroScroller}>
        <div className={`${S.SimIntroCardBase} ${S.SimIntroEsimCard}`}>
          <div className={S.SimIntroEsimGlowTop} />
          <div className={S.SimIntroEsimGlowBottom} />
          <div className={S.SimIntroCardBody}>
            <span className={S.SimIntroEsimBadge}>
              {t("services-telecom.telecom-page-client.esim_intro.badge")}
            </span>
            <h3 className={S.SimIntroEsimTitle}>
              {t("services-telecom.telecom-page-client.esim_intro.title")}
            </h3>
            <p className={S.SimIntroEsimDescription}>
              {t("services-telecom.telecom-page-client.esim_intro.description")}
            </p>
            <div className={S.SimIntroTagList}>
              <span className={S.SimIntroTag}>
                <CrossCircleIcon className={S.SimIntroTagIcon} />
                {t("services-telecom.telecom-page-client.esim_intro.tag1")}
              </span>
              <span className={S.SimIntroTag}>
                <CrossCircleIcon className={S.SimIntroTagIcon} />
                {t("services-telecom.telecom-page-client.esim_intro.tag2")}
              </span>
              <span className={S.SimIntroTag}>
                <svg
                  className={S.SimIntroTagIcon}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {t("services-telecom.telecom-page-client.esim_intro.tag3")}
              </span>
            </div>
            <a
              href={GME_MOBILE_ESIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={S.SimIntroEsimCta}
            >
              {t("services-telecom.telecom-page-client.esim_intro.cta")}
              <ExternalLinkIcon className={S.SimIntroCtaIcon} />
            </a>
          </div>
        </div>

        <div className={`${S.SimIntroCardBase} ${S.SimIntroUsimCard}`}>
          <div className={S.SimIntroUsimGlow} />
          <div className={S.SimIntroCardBody}>
            <span className={S.SimIntroUsimBadge}>
              {t("services-telecom.telecom-page-client.usim_intro.badge")}
            </span>
            <h3 className={S.SimIntroUsimTitle}>
              {t("services-telecom.telecom-page-client.usim_intro.title")}
            </h3>
            <p className={S.SimIntroUsimDescription}>
              {t("services-telecom.telecom-page-client.usim_intro.description")}
            </p>

            <div className={S.SimIntroStepRow}>
              {usimStepKeys.map((labelKey, index) => (
                <UsimStep
                  key={labelKey}
                  labelKey={labelKey}
                  icon={usimStepIcons[index]}
                  hasArrow={index < usimStepKeys.length - 1}
                />
              ))}
            </div>

            <a
              href={GME_MOBILE_USIM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={S.SimIntroUsimCta}
            >
              {t("services-telecom.telecom-page-client.usim_intro.cta")}
              <ExternalLinkIcon className={S.SimIntroCtaIcon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimIntro;
