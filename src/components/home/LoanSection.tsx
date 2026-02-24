"use client";

import { useTranslation } from "@/hooks/useTranslation";
import CTAButton from "@/components/ui/CTAButton";
import type { ReactNode } from "react";

const featureKeys = ["countries", "success", "support", "realtime", "simple"] as const;

const featureIcons: Record<string, ReactNode> = {
  countries: (
     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  success: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  support: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  realtime: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  simple: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
};

export default function LoanSection() {
  const { t } = useTranslation("home.loan");

  return (
    <section id="online-loan" className="relative min-h-screen overflow-hidden flex items-center snap-section">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffefb] via-[#fffdf7] to-[#fefce8]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-loan/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-loan-light/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-loan/[0.02] blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            {/* 입체적 그림자 */}
            <div className="absolute inset-0 rounded-3xl bg-loan/10 translate-x-3 translate-y-3 blur-lg" />
            <div className="absolute inset-0 rounded-3xl bg-loan/5 translate-x-5 translate-y-5 blur-xl" />
            <div className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            {/* Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-loan to-loan-light flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="typo-label">{t("card.title")}</p>
                  <p className="text-[11px] text-gray-400">{t("card.subtitle")}</p>
                </div>
              </div>
              <span className="rounded-full bg-loan/10 px-3 py-1 text-xs font-semibold text-loan">
                {t("card.quick_apply")}
              </span>
            </div>

            {/* Loan Stats */}
            <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-5 mb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-dark">{t("stats.title")}</span>
                <span className="text-[11px] text-gray-400">GME Finance</span>
              </div>
              <p className="text-3xl font-bold text-loan mb-1">{t("stats.value")}</p>
              <p className="text-xs text-gray-400">{t("stats.desc")}</p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-5 gap-2">
              {featureKeys.map((key) => (
                <div
                  key={key}
                  className="rounded-xl bg-gray-50 p-4 text-center hover:bg-gray-100 transition-colors duration-250 ease-out"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-loan mx-auto mb-2 shadow-sm">
                    {featureIcons[key]}
                  </div>
                  <p className="text-[12px] font-bold text-dark">{t(`features.${key}.label`)}</p>
                  <p className="text-[10px] text-gray-400">{t(`features.${key}.desc`)}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="w-full mt-4 bg-loan text-white font-semibold py-3 rounded-xl ">
              {t("button.apply")}
            </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="typo-eyebrow text-loan mb-3">GME FINANCE</p>
            <h2 className="typo-section-title mb-5">{t("title")}</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
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
