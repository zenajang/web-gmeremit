"use client";

import { useTranslation } from "@/hooks/useTranslation";
import CTAButton from "@/components/ui/CTAButton";
import { loanBenefitImages } from "@/data/loan";

const featureKeys = ["countries", "success", "support", "realtime", "simple"] as const;

export default function LoanSection() {
  const { t } = useTranslation("home.loan");

  return (
    <section id="online-loan" className="relative overflow-hidden flex items-center snap-section lg:min-h-screen py-14 sm:py-16 lg:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffefb] via-[#fffdf7] to-[#fefce8]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-loan/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-loan-light/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-loan/[0.02] blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            {/* 입체적 그림자 */}
            <div className="absolute inset-0 rounded-3xl bg-loan/10 translate-x-3 translate-y-3 blur-lg" />
            <div className="absolute inset-0 rounded-3xl bg-loan/5 translate-x-5 translate-y-5 blur-xl" />
            <div className="relative rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-loan to-loan-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="typo-label">{t("card.title")}</p>
                  <p className="typo-caption">{t("card.subtitle")}</p>
                </div>
              </div>
              <span className="rounded-full bg-loan/10 px-3 py-1 text-xs font-semibold text-loan">
                {t("card.quick_apply")}
              </span>
            </div>

            {/* Loan Stats */}
            <div className="rounded-xl sm:rounded-2xl bg-yellow-50 border border-yellow-200 p-3 sm:p-5 mb-3 sm:mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-dark">{t("stats.title")}</span>
                <span className="typo-caption">GME Finance</span>
              </div>
              <p className="typo-stat text-loan mb-1">{t("stats.value")}</p>
              <p className="text-xs text-gray-400">{t("stats.desc")}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {featureKeys.map((key) => (
                <div
                  key={key}
                  className="rounded-xl bg-gray-50 p-3 sm:p-4 text-center hover:bg-gray-100 transition-colors duration-250 ease-out"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <img
                      src={loanBenefitImages[key].src}
                      alt={loanBenefitImages[key].alt}
                      className={loanBenefitImages[key].className}
                    />
                  </div>
                  <p className="text-xs font-bold text-dark">{t(`features.${key}.label`)}</p>
                  <p className="typo-micro text-gray-400">{t(`features.${key}.desc`)}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full mt-3 sm:mt-4 bg-loan text-white font-semibold py-2.5 sm:py-3 rounded-xl text-sm sm:text-base">
              {t("button.apply")}
            </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="typo-eyebrow text-loan mb-3">GME FINANCE</p>
            <h2 className="typo-section-title mb-5">{t("title")}</h2>
            <p className="typo-section-subtitle text-gray-600 mb-5 sm:mb-8">
              {t("description")}
            </p>
            <CTAButton
              href="/services/loan"
              label={t("button.detail")}
              className="text-loan bg-amber-100 hover:bg-amber-200"
              iconClassName="bg-loan"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
