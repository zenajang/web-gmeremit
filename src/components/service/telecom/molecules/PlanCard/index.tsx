"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import type { ApiPlan } from "@/components/service/telecom/types";

const parsePrice = (value: string) => {
  const price = parseInt(value.replace(/,/g, ""), 10);
  return Number.isNaN(price) ? 0 : price;
};

interface PlanCardProps {
  plan: ApiPlan;
}

const PlanCard = ({ plan }: PlanCardProps) => {
  const { t } = useTranslation();

  const totalAmount = parsePrice(plan.TT_AMT);
  const discountAmount = parsePrice(plan.DISCOUNT);
  const hasDiscount = discountAmount > 0 && discountAmount !== totalAmount;
  const price = hasDiscount ? discountAmount : totalAmount;
  const originalPrice = hasDiscount ? totalAmount : 0;
  const hasQos = plan.QOSFG === "1" && plan.QOSAMT;

  const priceUnit = `${t("services-telecom.telecom-page-client.plans.currency")}/${t("services-telecom.telecom-page-client.plans.per_month")}`;

  return (
    <div className={S.PlanCardWrapper}>
      <div className={S.PlanCardHead}>
        <h3 className={S.PlanCardName}>{plan.GDNM}</h3>
        <div className={S.PlanCardBadgeRow}>
          {plan.GDDESC && <span className={S.PlanCardBadge}>{plan.GDDESC}</span>}
          {plan.MNO_CD && <span className={S.PlanCardCarrierBadge}>{plan.MNO_CD}</span>}
        </div>
      </div>

      <div className={S.PlanCardSpecList}>
        <div className={S.PlanCardSpecRow}>
          <span className={S.PlanCardSpecLabel}>
            {t("services-telecom.telecom-page-client.plans.data")}
          </span>
          <span className={S.PlanCardSpecValue}>
            {plan.DATAAMOUNT}
            {hasQos && ` + ${plan.QOSAMT}`}
          </span>
        </div>
        <div className={S.PlanCardSpecRow}>
          <span className={S.PlanCardSpecLabel}>
            {t("services-telecom.telecom-page-client.plans.voice")}
          </span>
          <span className={S.PlanCardSpecValue}>{plan.VOICEAMOUNT}</span>
        </div>
        <div className={S.PlanCardSpecRow}>
          <span className={S.PlanCardSpecLabel}>
            {t("services-telecom.telecom-page-client.plans.sms")}
          </span>
          <span className={S.PlanCardSpecValue}>{plan.LETTERAMOUNT}</span>
        </div>
      </div>

      <div className={S.PlanCardPriceBox}>
        {originalPrice > 0 && originalPrice !== price && (
          <p className={S.PlanCardOriginalPrice}>
            {originalPrice.toLocaleString()}
            {priceUnit}
          </p>
        )}
        <p className={S.PlanCardPrice}>
          {price.toLocaleString()}
          <span className={S.PlanCardPriceUnit}>{priceUnit}</span>
        </p>
      </div>
    </div>
  );
};

export default PlanCard;
