"use client";

import { useEffect, useRef } from "react";
import * as S from "./styles";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslation } from "@/hooks/useTranslation";
import { ProcessStepDesktop, ProcessStepMobile } from "@/components/service/payments/molecules";
import {
  PaymentsContainer,
  PaymentsSectionHeaderColor,
} from "@/components/service/payments/styles";
import { paymentProcessSteps } from "@/components/service/payments/constants";

const STEP_DELAY_MS = 280;

const PaymentProcess = () => {
  const { t } = useTranslation();
  const processRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const process = processRef.current;
    if (!process) return;

    let timers: ReturnType<typeof setTimeout>[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const steps = entry.target.querySelectorAll<HTMLElement>(".fade-step");
          if (entry.isIntersecting) {
            steps.forEach((step, index) => {
              timers.push(
                setTimeout(() => {
                  step.style.opacity = "1";
                  step.style.transform = "translateY(0)";
                }, index * STEP_DELAY_MS)
              );
            });
            return;
          }

          timers.forEach(clearTimeout);
          timers = [];
          steps.forEach((step) => {
            step.style.opacity = "0";
            step.style.transform = "translateY(28px)";
          });
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(process);

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className={S.PaymentProcessSection}>
      <div ref={processRef} className={PaymentsContainer}>
        <SectionHeader
          label={t("services-payments.process.label")}
          title={t("services-payments.process.title")}
          colorClass={PaymentsSectionHeaderColor}
          className={S.PaymentProcessHeaderSpacing}
        />

        <div className={S.PaymentProcessDesktopList}>
          {paymentProcessSteps.map((step, index) => (
            <ProcessStepDesktop
              key={step}
              step={step}
              index={index}
              hasConnector={index < paymentProcessSteps.length - 1}
            />
          ))}
        </div>

        <div className={S.PaymentProcessMobileList}>
          {paymentProcessSteps.map((step, index) => (
            <ProcessStepMobile
              key={step}
              step={step}
              index={index}
              hasConnector={index < paymentProcessSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentProcess;
