"use client";

import * as S from "./styles";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { ExternalLinkIcon } from "@/components/service/telecom/molecules";
import { TelecomLinkIcon, TelecomPrimaryLink } from "@/components/service/telecom/styles";
import { GME_MOBILE_HOME_URL } from "@/components/service/telecom/constants";

const TelecomCta = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section ref={registerSectionRef(0)} className={S.TelecomCtaSection}>
      <div className={S.TelecomCtaContainer}>
        <h2 className={S.TelecomCtaTitle}>{t("common.telecom-page-client.cta.title")}</h2>
        <p className={S.TelecomCtaDescription}>
          {t("common.telecom-page-client.cta.description")}
        </p>
        <a
          href={GME_MOBILE_HOME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${TelecomPrimaryLink} ${S.TelecomCtaButton}`}
        >
          {t("common.telecom-page-client.cta.button")}
          <ExternalLinkIcon className={TelecomLinkIcon} />
        </a>
      </div>
    </section>
  );
};

export default TelecomCta;
