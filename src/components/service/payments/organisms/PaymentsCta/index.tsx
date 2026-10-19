"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

const PaymentsCta = () => {
  const { t } = useTranslation();

  return (
    <section className={S.PaymentsCtaSection}>
      <div className={S.PaymentsCtaGlowLayer}>
        <div className={S.PaymentsCtaGlowTop} />
        <div className={S.PaymentsCtaGlowBottom} />
        <div className={S.PaymentsCtaGlowAccent} />
      </div>

      <div className={S.PaymentsCtaContainer}>
        <h2 className={S.PaymentsCtaTitle}>{t("common.payments.business.cta.title")}</h2>
        <p className={S.PaymentsCtaDescription}>
          {t("common.payments.business.cta.description")}
        </p>
      </div>
    </section>
  );
};

export default PaymentsCta;
