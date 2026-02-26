"use client";

import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { remittanceFeatureKeys, remittanceFeatureIconPaths, processStepKeys, processIconPaths, remittanceCountries } from "@/data/remittance";

export default function RemittancePage() {
  const { t } = useTranslation("remittance");
  useLenis();
  const sectionRefs = useScrollFadeIn();

  const whyKeys = ["fastest", "cheapest", "secure"] as const;

  const featureItems = remittanceFeatureKeys.map((key) => ({
    key,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        {remittanceFeatureIconPaths[key].map((d, i) => (
          <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
        ))}
      </svg>
    ),
  }));

  const processSteps = processStepKeys;

  const processIcons = processIconPaths.map((d, i) => (
    <svg key={`p${i}`} className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  ));

  const countries = remittanceCountries;

  return (
    <PublicLayout className="bg-white">

        <ServiceHeroSection translationKey="remittance" color="primary" ctaHref="#why" />

        {/* ── Why Choose GME Remittance ── */}
        <section id="why" ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 lg:py-28 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[15px] lg:text-base text-gray-500 mb-1">{t("why.subtitle")}</p>
                <h2 className="typo-section-title text-primary">{t("why.title")}</h2>
              </div>
            </div>

            {/* Full-width image */}
            <div className="relative rounded-xl overflow-hidden mb-10 lg:mb-14 h-[280px] sm:h-[360px] lg:h-[420px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gme_hand.jpg"
                alt="GME Remit 앱 사용 화면"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
              {/* Stats overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/12 to-transparent" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 flex flex-col gap-4">
                <div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{t("stats.achieved.value")}</p>
                  <p className="text-xs sm:text-sm text-white/70">{t("stats.achieved.label")}</p>
                </div>
                <div className="flex gap-6">
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">{t("stats.branches.value")}</p>
                    <p className="text-[11px] sm:text-xs text-white/70">{t("stats.branches.label")}</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">{t("stats.savings.value")}</p>
                    <p className="text-[11px] sm:text-xs text-white/70">{t("stats.savings.label")}</p>
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-white">{t("stats.languages.value")}</p>
                    <p className="text-[11px] sm:text-xs text-white/70">{t("stats.languages.label")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature descriptions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-7">
              {whyKeys.map((key) => (
                <div key={key} className="fade-step">
                  <h3 className="typo-feature-title mb-1.5">{t(`why.items.${key}.title`)}</h3>
                  <p className="text-[16px] text-gray-400 leading-relaxed">{t(`why.items.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Transfer Methods ── */}
        <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-20 lg:py-28 bg-gray-50 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="typo-section-title text-primary mb-2">
                {t("features.title")}
              </h2>
              <h2 className="typo-section-title mb-5">
                {t("features.title2")}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                {t("features.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featureItems.map((item) => (
                <div
                  key={item.key}
                  className="group rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 fade-step"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="typo-card-title mb-2">
                    {t(`features.${item.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {t(`features.${item.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section ref={(el) => { sectionRefs.current[2] = el; }} className="py-20 lg:py-28 fade-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="typo-section-title text-primary mb-2">
                {t("process.title")}
              </h2>
              <h2 className="typo-section-title mb-5">
                {t("process.title2")}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                {t("process.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {processSteps.map((step, idx) => (
                <div key={step} className="relative fade-step">
                  {/* Connector */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%)] w-full h-[2px] z-0">
                      <div className="w-full h-full bg-gradient-to-r from-primary/30 to-primary/10" />
                    </div>
                  )}

                  <div className="relative bg-white rounded-2xl border border-gray-200 p-7 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white mb-5 shadow-lg shadow-primary/20">
                      {processIcons[idx]}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-primary text-sm font-bold flex items-center justify-center shadow-md border border-primary/20">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="typo-card-title mb-2">
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

        {/* ── Trust / Compliance ── */}
        <section ref={(el) => { sectionRefs.current[3] = el; }} className="py-16 lg:py-20 fade-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="typo-section-title mb-3">
              {t("trust.title")}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              {t("trust.desc")}
            </p>
            <Image
              src="/images/license4.png"
              alt="GME License"
              width={1200}
              height={700}
              className="mx-auto mb-6 object-contain"
            />
            <p className="text-sm text-gray-400">
              * {t("trust.insurance")}
            </p>
          </div>
        </section>

        {/* ── Regions Coverage ── */}
        <section ref={(el) => { sectionRefs.current[4] = el; }} className="relative py-20 lg:py-28 overflow-hidden fade-section">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/worldmap.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="typo-section-title text-primary mb-2">
                {t("regions.title")}
              </h2>
              <h2 className="typo-section-title mb-5">
                {t("regions.title2")}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
                {t("regions.subtitle")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {countries.map((country, idx) => {
                const row = Math.floor(idx / 8);
                const opacity = row === 0 ? 1 : row === 1 ? 0.85 : row === 2 ? 0.6 : row === 3 ? 0.4 : row === 4 ? 0.25 : 0.1;
                return (
                  <span
                    key={country}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm sm:text-[15px] font-medium text-dark whitespace-nowrap transition-opacity"
                    style={{ opacity }}
                  >
                    {country}
                  </span>
                );
              })}
            </div>
          
          </div>
        </section>
    </PublicLayout>
  );
}