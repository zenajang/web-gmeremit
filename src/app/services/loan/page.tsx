"use client";

import { useState } from "react";
import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { loanBenefitKeys, loanBenefitImages, productKeys, commonTags, loanSteps, loanStepIconPaths } from "@/data/loan";

export default function LoanPage() {
  const { t } = useTranslation("loan");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useLenis();
  const sectionRefs = useScrollFadeIn();

  const benefits = loanBenefitKeys.map((key) => {
    const img = loanBenefitImages[key];
    return {
      key,
      icon: <Image src={img.src} alt={img.alt} width={42} height={42} className={img.className} />,
    };
  });

  const steps = loanSteps;

  const stepIcons = loanStepIconPaths.map((paths, i) => (
    <svg key={`s${i}`} className="w-6 h-6 lg:w-10 lg:h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths.main} stroke="#1F2937" />
      <path strokeLinecap="round" strokeLinejoin="round" d={paths.accent} stroke="#fbbf24" />
    </svg>
  ));

  const faqItems = t("faq.items") as unknown as { q: string; a: string }[];

  return (
    <PublicLayout className="bg-gradient-to-b from-white via-white to-amber-50/30">

        <ServiceHeroSection translationKey="loan" color="loan" gradientVia="gray-100" ctaHref="#products" />

        {/* ── Why Choose GME Loan ── */}
        <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 lg:py-28 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Stats Card */}
              <div className="w-full lg:w-5/12">
                <div className="relative">
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
                          <p className="typo-label">GME Finance</p>
                          <p className="text-[11px] text-gray-400">{t("hero.title1")} {t("hero.title2")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Loan Stats */}
                    <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-5 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-dark">{t("why.stats_label")}</span>
                        <span className="text-[11px] text-gray-400">GME Finance</span>
                      </div>
                      <p className="text-3xl font-bold text-loan mb-1">{t("why.stats_value")}</p>
                      <p className="text-xs text-gray-400">{t("why.stats_desc")}</p>
                    </div>

                    {/* Mini Feature Icons */}
                    <div className="grid grid-cols-5 gap-1 sm:gap-2">
                      {loanBenefitKeys.map((key) => {
                        const img = loanBenefitImages[key];
                        return (
                          <div
                            key={key}
                            className="rounded-xl bg-gray-50 p-1.5 sm:p-3 text-center hover:bg-gray-100 transition-colors duration-250 ease-out"
                          >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white flex items-center justify-center text-loan mx-auto mb-1 sm:mb-1.5 shadow-sm">
                              <Image src={img.src} alt={img.alt} width={24} height={24} className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
                            </div>
                            <p className="text-[9px] sm:text-[11px] font-bold text-dark leading-tight">{t(`why.${key}.title`)}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-7/12">
                <p className="text-sm font-semibold text-loan tracking-wide uppercase mb-3">
                  {t("why.badge")}
                </p>
                <h2 className="typo-section-title mb-4">
                  {t("why.title")}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {t("why.description")}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {benefits.map((item) => (
                    <div
                      key={item.key}
                      className="group rounded-xl p-4 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-loan/30 hover:-translate-y-0.5 transition-all duration-300 fade-step"
                    >
                      <p className="typo-label">{t(`why.${item.key}.title`)}</p>
                      <p className="text-xs text-gray-400">{t(`why.${item.key}.desc`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Loan Products ── */}
        <section id="products" ref={(el) => { sectionRefs.current[1] = el; }} className="py-20 lg:py-32 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="typo-section-title text-loan mb-2">
                {t("products.title")}
              </h2>
              <h2 className="typo-section-title mb-5">
                {t("products.title2")}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                {t("products.subtitle")}
              </p>
            </div>

            {/* Common Loan Conditions — Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
              {commonTags.map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f5f6f7] rounded-full text-sm text-gray-600 fade-step"
                >
                  <span className="font-semibold text-dark">{t(`details.${key}.label`)}</span>
                  <span className="text-gray-400">·</span>
                  {t(`details.${key}.value`)}
                </span>
              ))}
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {productKeys.map((key) => (
                <div
                  key={key}
                  className="bg-[#f5f6f7] rounded-2xl p-5 hover:bg-loan/[0.08] hover:border-loan/20 border border-transparent transition-all duration-200 fade-step"
                >
                  <h3 className="text-[17px] font-bold text-dark mb-1">
                    {t(`products.${key}.name`)}
                  </h3>
                  <p className="text-[14px] text-gray-400 leading-relaxed">
                    {t(`products.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Application Process ── */}
        <section ref={(el) => { sectionRefs.current[2] = el; }} className="py-16 lg:py-24 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="typo-section-title mb-3">
                {t("process.title")}
              </h2>
              <p className="max-w-2xl mx-auto text-lg font-semibold text-dark">
                {t("process.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map((step, idx) => (
                <div key={step} className="relative fade-step">
                  {/* Chevron connector */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-14 right-0 translate-x-1/2 z-10 items-center justify-center">
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}

                  <div className="text-center">
                    {/* Icon circle */}
                    <div className="inline-flex items-center justify-center w-16 h-16 lg:w-28 lg:h-28 rounded-full bg-gray-50 mb-3">
                      {stepIcons[idx]}
                    </div>

                    <p className="text-[13px] font-bold text-loan mb-0.5">
                      STEP 0{idx + 1}.
                    </p>
                    <h3 className="typo-card-title mb-1.5">
                      {t(`process.${step}.title`)}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {t(`process.${step}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section ref={(el) => { sectionRefs.current[3] = el; }} className="py-16 lg:py-24 fade-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="typo-section-title mb-3">
                {t("faq.title")}
              </h2>
            </div>

            <div className="space-y-3">
              {Array.isArray(faqItems) && faqItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-md fade-step"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="text-[15px] font-semibold text-dark pr-4">{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${openFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section ref={(el) => { sectionRefs.current[4] = el; }} className="py-16 lg:py-24 fade-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[#121212]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-loan-light/20 -translate-y-1/3 translate-x-1/3 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-loan-light/12 translate-y-1/3 -translate-x-1/3 blur-3xl" />

              <div className="relative text-center py-14 px-6 sm:px-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {t("cta.title")}
                </h2>
                <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                  {t("cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://apps.apple.com/us/app/gme-remit/id1439161261?l=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-loan text-dark font-semibold rounded-xl hover:bg-loan-light transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gmeremit.online.gmeremittance_native"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-xl hover:border-loan/30 hover:text-loan transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.49c-.56-.49-.88-1.29-.88-2.26V2.77c0-.97.32-1.77.88-2.26l.12-.05L14.1 11.3v.25L3.3 22.44l-.12.05zM17.75 15l-3.64-3.65L17.75 7.7l.13.07 4.33 2.46c1.24.7 1.24 1.85 0 2.55l-4.33 2.46-.13-.24zM14.1 11.3L3.3 1.51C3.72 1.09 4.38.98 5.14 1.42l11.63 6.63-2.67 3.25zM14.1 11.55l2.66 2.65L5.14 20.83c-.76.44-1.42.33-1.84-.25l10.8-9.03z" />
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
