"use client";

import { useTranslation } from "@/hooks/useTranslation";
import CTAButton from "@/components/ui/CTAButton";
import type { ReactNode } from "react";

const statKeys = ["cost_saving", "partners", "success_rate"] as const;

const statTextColors: Record<string, string> = {
  cost_saving: "text-payments",
  partners: "text-payments",
  success_rate: "text-success",
};

const transactionDefs: { key: string; icon: string; amount: string; timePre?: string; timeKey: string; statusKey: string; statusColorClass: string }[] = [
  { key: "b2b", icon: "💼", amount: "₩128,500,000", timeKey: "just_now", statusKey: "completed", statusColorClass: "text-success" },
  { key: "partner", icon: "🏢", amount: "₩45,200,000", timePre: "2", timeKey: "mins_ago", statusKey: "processing", statusColorClass: "text-loan" },
  { key: "merchant", icon: "🛒", amount: "₩18,700,000", timePre: "5", timeKey: "mins_ago", statusKey: "completed", statusColorClass: "text-success" },
];

const featureKeys = ["sps", "vas", "smb"] as const;

const featureIcons: Record<string, ReactNode> = {
  sps: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  vas: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  smb: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function PaymentsSection() {
  const { t } = useTranslation("home.global_payments");

  return (
    <section id="payments-section" className="relative overflow-hidden flex items-center snap-section lg:min-h-screen py-14 sm:py-16 lg:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fafbff] via-[#f5f8ff] to-[#eff6ff]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-payments/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-payments-light/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-payments/[0.02] blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center">
          <div className="order-1 lg:order-2">
            <p className="typo-eyebrow text-payments mb-3">PAYMENTS</p>
            <h2 className="typo-section-title mb-5">{t("title")}</h2>
            <p className="typo-section-subtitle text-gray-600 mb-5 sm:mb-8">
              {t("description")}
            </p>
            <CTAButton
              href="/services/payments"
              label={t("button.detail")}
              className="text-payments bg-blue-100 hover:bg-blue-200"
              iconClassName="bg-payments"
            />
          </div>

          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* 입체적 그림자 */}
              <div className="absolute inset-0 rounded-3xl bg-payments/10 translate-x-3 translate-y-3 blur-lg" />
              <div className="absolute inset-0 rounded-3xl bg-payments/5 translate-x-5 translate-y-5 blur-xl" />
              <div className="relative rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-payments to-payments-light flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="typo-label">{t("card.title")}</p>
                    <p className="typo-caption">{t("card.subtitle")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold text-success">{t("card.status")}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
                {statKeys.map((key) => (
                  <div key={key} className="rounded-xl bg-gray-50 p-3 sm:p-5">
                    <p className="typo-caption mb-1">{t(`stats.${key}`)}</p>
                    <p className="typo-card-title">{t(`stats.${key}_value`)}</p>
                    <p className={`typo-micro mt-0.5 ${statTextColors[key]}`}>{t(`stats.${key}_change`)}</p>
                  </div>
                ))}
              </div>

              {/* Transaction List */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                  <p className="typo-caption font-semibold">{t("transactions.title")}</p>
                </div>
                <div className="divide-y divide-gray-200">
                  {transactionDefs.map((tx) => (
                    <div key={tx.key} className="flex items-center justify-between px-3 py-3 sm:px-4 sm:py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{tx.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-dark">{t(`transactions.${tx.key}`)}</p>
                          <p className="typo-caption">
                            {tx.timePre ? `${tx.timePre} ${t(`transactions.${tx.timeKey}`)}` : t(`transactions.${tx.timeKey}`)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="typo-label">{tx.amount}</p>
                        <p className={`typo-micro ${tx.statusColorClass}`}>{t(`transactions.${tx.statusKey}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Cards */}
              <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {featureKeys.map((key) => (
                  <div key={key} className="rounded-xl bg-gray-50 p-4 text-center">
                    <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-payments mx-auto mb-2 shadow-sm">
                      {featureIcons[key]}
                    </div>
                    <p className="text-xs font-bold text-dark">{t(`features.${key}`)}</p>
                    <p className="typo-micro text-gray-400 mt-0.5">{t(`features.${key}_desc`)}</p>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
