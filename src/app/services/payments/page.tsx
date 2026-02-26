"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";
import { solutions as solutionsData, paymentFeatureKeys, partnerLogos, paymentProcessSteps } from "@/data/payments";

export default function PaymentsPage() {
  const { t } = useTranslation("business");
  useLenis();

  const solutions = solutionsData.map((sol) => ({
    ...sol,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={sol.iconPath} />
      </svg>
    ),
  }));

  const featureKeys = paymentFeatureKeys;

  const processSteps = paymentProcessSteps;


  // Scroll fade-in animation
  const [partnersVisible, setPartnersVisible] = useState(false);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const processRef = useRef<HTMLDivElement | null>(null);
  const partnersRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));

    // Staggered animation for process steps (replays on re-enter)
    let timers: ReturnType<typeof setTimeout>[] = [];
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const steps = entry.target.querySelectorAll<HTMLElement>(".fade-step");
          if (entry.isIntersecting) {
            steps.forEach((step, i) => {
              const timer = setTimeout(() => {
                step.style.opacity = "1";
                step.style.transform = "translateY(0)";
              }, i * 280);
              timers.push(timer);
            });
          } else {
            timers.forEach(clearTimeout);
            timers = [];
            steps.forEach((step) => {
              step.style.opacity = "0";
              step.style.transform = "translateY(28px)";
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (processRef.current) processObserver.observe(processRef.current);

    // Partners section drop-down animation (replays on re-enter)
    const partnersObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setPartnersVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );
    if (partnersRef.current) partnersObserver.observe(partnersRef.current);

    return () => {
      observer.disconnect();
      processObserver.disconnect();
      partnersObserver.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <PublicLayout className="bg-white">

        <ServiceHeroSection translationKey="business" color="payments" ctaHref="https://developers.gmeremit.com/" ctaTextKey="hero.cta_docs" isExternal />

        {/* ── Core Solutions (SPS / VAS) ── */}
        <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-24 lg:py-32 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-payments tracking-wide uppercase mb-3">
                {t("solutions.label")}
              </span>
              <h2 className="typo-section-title mb-4">
                {t("solutions.title")}
              </h2>
              <p className="text-gray-500 max-w-lg mx-auto">
                {t("solutions.description")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {solutions.map((sol) => (
                <div
                  key={sol.key}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 lg:p-10 shadow-sm hover:shadow-xl hover:shadow-black/[0.06] hover:border-gray-300 transition-all duration-300 overflow-hidden"
                >
                  {/* Color accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${sol.color}, ${sol.color}88)` }} />
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${sol.color}10`, color: sol.color }}
                    >
                      {sol.icon}
                    </div>
                    <div>
                      <h3 className="typo-content-title">
                        {t(`solutions.${sol.key}.title`)}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: sol.color }}>
                        {t(`solutions.${sol.key}.subtitle`)}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                    {t(`solutions.${sol.key}.description`)}
                  </p>

                  <div className="grid grid-cols-2 gap-2.5">
                    {(t(`solutions.${sol.key}.features`) as unknown as string[]).map(
                      (feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <svg className="w-4 h-4 flex-shrink-0" style={{ color: sol.color }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Features ── */}
        <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-24 lg:py-32 bg-[#fafbfc] fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-payments tracking-wide uppercase mb-3">
                {t("features.label")}
              </span>
              <h2 className="typo-section-title mb-4">
                {t("features.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-5">
              {featureKeys.map((f) => (
                <div
                  key={f.key}
                  className="bg-white rounded-2xl p-4 lg:p-7 border border-gray-100 hover:border-payments/20 hover:shadow-lg hover:shadow-payments/[0.04] transition-all duration-300"
                >
                  {/* 모바일: 아이콘 + 제목 가로 정렬 */}
                  <div className="flex items-center gap-3 mb-1.5 lg:block">
                    <div
                      className="w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl flex-shrink-0 flex items-center justify-center lg:mb-5 shadow-sm"
                      style={{ backgroundColor: f.color }}
                    >
                      <svg className="w-4 h-4 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <h3 className="typo-base-title text-[15px] lg:text-base lg:mb-2">
                      {t(`features.${f.key}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed lg:pl-0 pl-[44px]">
                    {t(`features.${f.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="py-24 lg:py-32 bg-light">
          <div ref={partnersRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ opacity: partnersVisible ? 1 : 0, transform: partnersVisible ? "translateY(0)" : "translateY(-48px)", transition: "opacity 3s cubic-bezier(0.16, 1, 0.3, 1), transform 3s cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-payments tracking-wide uppercase mb-3">
                {t("partners.label")}
              </span>
              <h2 className="typo-section-title">
                {t("partners.title")}
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {partnerLogos.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center h-24 rounded-xl bg-white border border-gray-100/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 px-6"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={160}
                    height={56}
                    className="object-contain max-h-14 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-24 lg:py-32 bg-[#fafbfc]">
          <div ref={processRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 fade-step">
              <span className="inline-block text-sm font-semibold text-payments tracking-wide uppercase mb-3">
                {t("process.label")}
              </span>
              <h2 className="typo-section-title">
                {t("process.title")}
              </h2>
            </div>

            {/* Desktop: horizontal flow */}
            <div className="hidden lg:grid lg:grid-cols-4 gap-20">
              {processSteps.map((step, idx) => (
                <div key={step} className="relative fade-step">
                  {/* Connector arrow (between steps) */}
                  {idx < 3 && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-[50px] z-10 text-gray-300">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  )}
                  <div className="px-5">
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[42px] font-extrabold text-payments/35 leading-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-payments/25 to-transparent" />
                    </div>

                    {/* Text */}
                    <h3 className="text-[17px] font-bold text-dark mb-2">
                      {t(`process.${step}.title`)}
                    </h3>
                    <p className="text-[15px] text-gray-400 leading-relaxed">
                      {t(`process.${step}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet: vertical timeline */}
            <div className="lg:hidden space-y-0">
              {processSteps.map((step, idx) => (
                <div key={step} className="relative flex gap-5 fade-step">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-payments/[0.08] flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-payments">{idx + 1}</span>
                    </div>
                    {idx < 3 && <div className="w-px flex-1 bg-gradient-to-b from-payments/15 to-transparent min-h-[40px]" />}
                  </div>
                  {/* Content */}
                  <div className="pb-10">
                    <h3 className="text-[15px] font-bold text-dark mb-1.5 -mt-0.5">
                      {t(`process.${step}.title`)}
                    </h3>
                    <p className="text-[13px] text-gray-400 leading-relaxed">
                      {t(`process.${step}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-18 lg:py-20 bg-gradient-to-br from-[#1e3a5f] via-[#0f172a] to-[#2a0a0c] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-payments/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ed1c24]/[0.08] rounded-full blur-[120px]" />
            <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-[#ed1c24]/[0.04] rounded-full blur-[100px]" />
          </div>

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed">
              {t("cta.description")}
            </p>

            <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white/[0.05] border border-white/[0.08] backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ed1c24]/60" />
              <span className="text-sm text-gray-400">{t("cta.email")}</span>
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
