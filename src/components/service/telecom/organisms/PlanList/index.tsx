"use client";

import { use, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { PlanCard, PlansSpinner } from "@/components/service/telecom/molecules";
import { fetchTelecomPlans } from "@/components/service/telecom/api";
import type { ApiPlan } from "@/components/service/telecom/types";

interface PlanListProps {
  plansPromise: Promise<ApiPlan[]>;
  selectedSeq: string;
}

const PlanList = ({ plansPromise, selectedSeq }: PlanListProps) => {
  const { t } = useTranslation();
  const initialPlans = use(plansPromise);

  const [plans, setPlans] = useState<ApiPlan[]>(initialPlans);
  const [isLoading, setIsLoading] = useState(false);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      return;
    }

    let cancelled = false;
    setIsLoading(true);
    fetchTelecomPlans(selectedSeq)
      .then((data) => {
        if (cancelled) return;
        setPlans(data);
      })
      .catch(() => {
        if (!cancelled) setPlans([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedSeq]);

  if (isLoading) return <PlansSpinner />;

  if (plans.length === 0) {
    return (
      <p className={S.PlanListEmpty}>
        {t("services-telecom.telecom-page-client.plans.empty")}
      </p>
    );
  }

  return (
    <div className={S.PlanListGrid}>
      {plans.map((plan) => (
        <PlanCard key={plan.GDCD} plan={plan} />
      ))}
    </div>
  );
};

export default PlanList;
