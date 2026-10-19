"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { AboutUsSection, AboutUsSectionTitle } from "@/components/company/about-us/styles";
import { ABOUT_US_NAMESPACE, aboutMediaLinks } from "@/components/company/about-us/constants";

const RecognitionMedia = () => {
  const { t } = useTranslation(ABOUT_US_NAMESPACE);

  return (
    <section className={AboutUsSection}>
      <h2 className={AboutUsSectionTitle}>{t("media.title")}</h2>
      <div className={S.RecognitionMediaList}>
        {aboutMediaLinks.map((link) => (
          <a
            key={link.id}
            className={S.RecognitionMediaItem}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={S.RecognitionMediaType}>{t(`media.items.${link.id}.type`)}</span>
            <span className={S.RecognitionMediaTitle}>{t(`media.items.${link.id}.title`)}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default RecognitionMedia;
