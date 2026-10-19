"use client";

import { Suspense, useState } from "react";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";
import {
  CategoryTab,
  ExternalLinkIcon,
  PlansSpinner,
} from "@/components/service/telecom/molecules";
import PlanList from "@/components/service/telecom/organisms/PlanList";
import {
  TelecomContainer,
  TelecomPrimaryLink,
  TelecomSectionHeaderColor,
  TelecomSectionTinted,
} from "@/components/service/telecom/styles";
import {
  GME_MOBILE_HOME_URL,
  TELECOM_CATEGORIES,
} from "@/components/service/telecom/constants";
import type { ApiPlan } from "@/components/service/telecom/types";

interface TelecomPlansProps {
  plansPromise: Promise<ApiPlan[]>;
  initialSeq: string;
}

const TelecomPlans = ({ plansPromise, initialSeq }: TelecomPlansProps) => {
  const { t } = useTranslation();
  const [selectedSeq, setSelectedSeq] = useState(initialSeq);

  return (
    <section id="plans" className={TelecomSectionTinted}>
      <div className={TelecomContainer}>
        <SectionHeader
          title={t("services-telecom.telecom-page-client.plans.title")}
          description={t("services-telecom.telecom-page-client.plans.subtitle")}
          colorClass={TelecomSectionHeaderColor}
        />

        <div className={S.TelecomPlansTabList}>
          {TELECOM_CATEGORIES.map((category) => (
            <CategoryTab
              key={category.seq}
              labelKey={category.labelKey}
              isActive={category.seq === selectedSeq}
              onSelect={() => setSelectedSeq(category.seq)}
            />
          ))}
        </div>

        <Suspense fallback={<PlansSpinner />}>
          <PlanList plansPromise={plansPromise} selectedSeq={selectedSeq} />
        </Suspense>

        <div className={S.TelecomPlansCtaBox}>
          <a
            href={GME_MOBILE_HOME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${TelecomPrimaryLink} ${S.TelecomPlansCtaButton}`}
          >
            {t("services-telecom.telecom-page-client.plans.cta")}
            <ExternalLinkIcon className={S.TelecomPlansCtaIcon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TelecomPlans;
