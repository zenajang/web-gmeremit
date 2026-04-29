"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import SectionHeader from "@/components/ui/SectionHeader";
import DotLoader from "@/components/ui/DotLoader";
import { useLenis } from "@/hooks/useLenis";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { Suspense, use, useEffect, useRef, useState } from "react";
import {
  FcGlobe,
  FcMoneyTransfer,
  FcFlashOn,
  FcPhone,
} from "react-icons/fc";
import { MdSignalCellularAlt, MdQrCode2 } from "react-icons/md";
import { FaSimCard, FaTruck, FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import {
  TELECOM_CATEGORIES,
  type ApiPlan,
} from "./data";
import { getTelecomPlans } from "./actions";

const featureKeys = ["multilang", "affordable", "network", "activation", "esim", "intl_call"] as const;

const featureIcons: Record<string, React.ReactNode> = {
  multilang: <FcGlobe className="w-10 h-10" />,
  affordable: <FcMoneyTransfer className="w-10 h-10" />,
  network: <MdSignalCellularAlt className="w-10 h-10 text-mobile" />,
  esim: <MdQrCode2 className="w-10 h-10 text-mobile" />,
  activation: <FcFlashOn className="w-10 h-10" />,
  intl_call: <FcPhone className="w-10 h-10" />,
};

const parsePrice = (value: string) => {
  const n = parseInt(value.replace(/,/g, ""), 10);
  return Number.isNaN(n) ? 0 : n;
};

interface TelecomPageClientProps {
  plansPromise: Promise<ApiPlan[]>;
  initialSeq: string;
}

function PlansSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[450px] mt-8">
      <DotLoader />
    </div>
  );
}

function PlansCards({
  plansPromise,
  selectedSeq,
}: {
  plansPromise: Promise<ApiPlan[]>;
  selectedSeq: string;
}) {
  const { t } = useTranslation("telecom");
  const initialPlans = use(plansPromise);

  const [plans, setPlans] = useState<ApiPlan[]>(initialPlans);
  const [plansLoading, setPlansLoading] = useState(false);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (!hasFetchedRef.current) {
      hasFetchedRef.current = true;
      return;
    }

    let cancelled = false;
    setPlansLoading(true);
    getTelecomPlans(selectedSeq)
      .then((data) => {
        if (cancelled) return;
        setPlans(data);
      })
      .catch(() => {
        if (!cancelled) setPlans([]);
      })
      .finally(() => {
        if (!cancelled) setPlansLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedSeq]);

  if (plansLoading) {
    return <PlansSpinner />;
  }

  if (plans.length === 0) {
    return <p className="text-center text-gray-400 py-10 min-h-[450px] mt-8 flex items-center justify-center">{t("plans.empty")}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 min-h-[450px]">
          {plans.map((plan) => {
            const ttAmt = parsePrice(plan.TT_AMT);
            const discountAmt = parsePrice(plan.DISCOUNT);
            const hasDiscount = discountAmt > 0 && discountAmt !== ttAmt;
            const price = hasDiscount ? discountAmt : ttAmt;
            const original = hasDiscount ? ttAmt : 0;
            const hasQos = plan.QOSFG === "1" && plan.QOSAMT;
            return (
              <div
                key={plan.GDCD}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-4 gap-2">
                  <h3 className="text-base font-bold text-dark truncate">{plan.GDNM}</h3>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {plan.GDDESC && (
                      <span className="px-2.5 py-1 bg-mobile/10 text-mobile text-xs font-semibold rounded-full">
                        {plan.GDDESC}
                      </span>
                    )}
                    {plan.MNO_CD && (
                      <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded-full">
                        {plan.MNO_CD}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("plans.data")}</span>
                    <span className="font-medium text-dark">
                      {plan.DATAAMOUNT}
                      {hasQos && ` + ${plan.QOSAMT}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("plans.voice")}</span>
                    <span className="font-medium text-dark">{plan.VOICEAMOUNT}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("plans.sms")}</span>
                    <span className="font-medium text-dark">{plan.LETTERAMOUNT}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  {original > 0 && original !== price && (
                    <p className="text-gray-400 text-xs line-through">
                      {original.toLocaleString()}
                      {t("plans.currency")}/{t("plans.per_month")}
                    </p>
                  )}
                  <p className="text-2xl font-bold text-mobile">
                    {price.toLocaleString()}
                    <span className="text-sm font-medium text-gray-500">
                      {t("plans.currency")}/{t("plans.per_month")}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
    </div>
  );
}

export default function TelecomPageClient({ plansPromise, initialSeq }: TelecomPageClientProps) {
  const { t } = useTranslation("telecom");
  useLenis();
  const { registerSectionRef } = useScrollFadeIn();
  const [selectedSeq, setSelectedSeq] = useState<string>(initialSeq);

  return (
    <PublicLayout className="bg-gradient-to-b from-white via-white to-gray-100">
      <ServiceHeroSection translationKey="telecom" color="purple" ctaHref="#plans" maxWidth="max-w-content" />

      {/* ── Features ── */}
      <section ref={registerSectionRef(0)} className="py-20 lg:py-28 fade-section">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("features.title")}
            colorClass="text-mobile"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
            {featureKeys.map((key) => (
              <div
                key={key}
                className="group rounded-xl p-6 text-center bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-mobile/30 hover:-translate-y-1 will-change-transform transition-[transform,box-shadow,border-color] duration-200 fade-step"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {featureIcons[key]}
                </div>
                <h3 className="text-[15px] font-bold text-dark mb-1">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section id="plans" ref={registerSectionRef(1)} className="py-20 lg:py-28 bg-[#f5f0ff]">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("plans.title")}
            description={t("plans.subtitle")}
            colorClass="text-mobile"
          />

          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {TELECOM_CATEGORIES.map((cat) => {
              const isActive = cat.seq === selectedSeq;
              return (
                <button
                  key={cat.seq}
                  type="button"
                  onClick={() => setSelectedSeq(cat.seq)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-colors cursor-pointer ${
                    isActive
                      ? "bg-mobile text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-mobile/40 hover:text-mobile"
                  }`}
                >
                  {t(cat.labelKey)}
                </button>
              );
            })}
          </div>

          <Suspense fallback={<PlansSpinner />}>
            <PlansCards plansPromise={plansPromise} selectedSeq={selectedSeq} />
          </Suspense>

          <div className="text-center mt-10">
            <a
              href="https://www.gmemobile.com/view/main/main.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mobile text-white text-sm font-semibold rounded-lg hover:bg-mobile-light transition-colors"
            >
              {t("plans.cta")}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── eSIM & USIM 소개 (가로 스크롤) ── */}
      <section ref={registerSectionRef(2)} className="py-20 lg:py-28 fade-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeader
            title={t("process.title")}
            title2={t("process.title2")}
            colorClass="text-mobile"
          />
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-0 lg:justify-center lg:overflow-visible pb-4 lg:pb-0">
          {/* eSIM 카드 */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-[600px] rounded-3xl bg-gradient-to-br from-mobile to-mobile-light p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="self-start inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider mb-5">
                {t("esim_intro.badge")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t("esim_intro.title")}</h3>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                {t("esim_intro.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-white/15 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5"><svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M4.93 4.93l14.14 14.14" /></svg>{t("esim_intro.tag1")}</span>
                <span className="px-3 py-1.5 bg-white/15 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5"><svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M4.93 4.93l14.14 14.14" /></svg>{t("esim_intro.tag2")}</span>
                <span className="px-3 py-1.5 bg-white/15 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5"><svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{t("esim_intro.tag3")}</span>
              </div>
              <a
                href="https://www.gmemobile.com/view/selfopen/esim_explain.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start inline-flex items-center gap-2 px-6 py-3 bg-white text-mobile font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                {t("esim_intro.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>

          {/* USIM 카드 */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-[600px] rounded-3xl bg-white border border-gray-200 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-mobile/[0.03] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col h-full">
              <span className="self-start inline-block px-3 py-1 bg-mobile/10 text-mobile rounded-full text-xs font-bold tracking-wider mb-5">
                {t("usim_intro.badge")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">{t("usim_intro.title")}</h3>
              <p className="text-gray-500 text-sm mb-5">{t("usim_intro.description")}</p>

              <div className="flex items-center justify-between mb-8">
                {[
                  { key: "usim_intro.step1", icon: <FaSimCard className="w-4 h-4 sm:w-6 sm:h-6" /> },
                  { key: "usim_intro.step2", icon: <FaTruck className="w-4 h-4 sm:w-6 sm:h-6" /> },
                  { key: "usim_intro.step3", icon: <FaMobileAlt className="w-4 h-4 sm:w-6 sm:h-6" /> },
                  { key: "usim_intro.step4", icon: <FaCheckCircle className="w-4 h-4 sm:w-6 sm:h-6" /> },
                ].map((item, idx) => (
                  <div key={item.key} className="contents">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center mb-2">
                        {item.icon}
                      </div>
                      <p className="text-[11px] sm:text-xs font-semibold text-dark text-center">{t(item.key)}</p>
                    </div>
                    {idx < 3 && (
                      <span className="text-gray-300 text-[10px] sm:text-xs">▶</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://www.gmemobile.com/view/selfopen/selfopen_explain.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start inline-flex items-center gap-2 px-6 py-3 bg-mobile text-white font-semibold rounded-xl hover:bg-mobile-light transition-colors"
              >
                {t("usim_intro.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={registerSectionRef(4)} className="py-16 lg:py-20 bg-[#f5f0ff] fade-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="typo-section-title mb-4 fade-step">{t("cta.title")}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 fade-step">{t("cta.description")}</p>
          <a
            href="https://www.gmemobile.com/view/main/main.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-mobile text-white font-semibold rounded-lg hover:bg-mobile-light transition-colors fade-step"
          >
            {t("cta.button")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </section>
    </PublicLayout>
  );
}
