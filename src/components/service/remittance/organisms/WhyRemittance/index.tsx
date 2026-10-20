"use client";

import Image from "next/image";
import * as S from "./styles";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { RemittanceStat } from "@/components/service/remittance/molecules";
import {
  RemittanceContainer,
  RemittanceSection,
} from "@/components/service/remittance/styles";
import { smallStatKeys, whyItemKeys } from "@/components/service/remittance/constants";

const WhyRemittance = () => {
  const { t } = useTranslation();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <section id="why" ref={registerSectionRef(0)} className={RemittanceSection}>
      <div className={RemittanceContainer}>
        <div className={S.WhyRemittanceHead}>
          <div>
            <p className={S.WhyRemittanceSubtitle}>{t("services-remittance.why.subtitle")}</p>
            <h2 className={S.WhyRemittanceTitle}>{t("services-remittance.why.title")}</h2>
          </div>
        </div>

        <div className={S.WhyRemittanceVisual}>
          <Image
            src="/images/gme_app_hand.jpg"
            alt="GME Remit 앱 사용 화면"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className={S.WhyRemittanceVisualImage}
            style={{ objectPosition: "100% 20%" }}
          />
          <div className={S.WhyRemittanceVisualScrim} />
          <div className={S.WhyRemittanceStatPanel}>
            <RemittanceStat statKey="achieved" isLarge />
            <div className={S.WhyRemittanceSmallStatRow}>
              {smallStatKeys.map((statKey) => (
                <RemittanceStat key={statKey} statKey={statKey} />
              ))}
            </div>
          </div>
        </div>

        <div className={S.WhyRemittanceItemGrid}>
          {whyItemKeys.map((key) => (
            <div key={key} className={S.WhyRemittanceItem}>
              <h3 className={S.WhyRemittanceItemTitle}>
                {t(`services-remittance.why.items.${key}.title`)}
              </h3>
              <p className={S.WhyRemittanceItemDescription}>
                {t(`services-remittance.why.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRemittance;
