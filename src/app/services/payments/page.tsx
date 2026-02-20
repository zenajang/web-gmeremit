"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";

export default function PaymentsPage() {
  const { t } = useTranslation("business");
  useLenis();

  const solutions = [
    {
      key: "sps",
      color: "#3b82f6",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
    },
    {
      key: "vas",
      color: "#8b5cf6",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  const featureKeys = [
    { key: "accounting", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { key: "pob", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
    { key: "flexibility", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
    { key: "dynamic", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { key: "netout", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { key: "technology", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
  ];

  const partnerLogos = [
    { name: "Hana Bank", src: "/images/payments/hanaBank.png" },
    { name: "Alipay", src: "/images/payments/alipay.svg" },
    { name: "Skyee", src: "/images/payments/skyee.png" },
    { name: "PayerMax", src: "/images/payments/payerMax.jpg" },
    { name: "Xe", src: "/images/payments/xe.svg" },
    { name: "Veem", src: "/images/payments/veem.webp" },
    { name: "Sendmn", src: "/images/payments/Sendmn.svg" },
    { name: "Cogolinks", src: "/images/payments/cogolinks.jpg" },
    { name: "BaoFu Global", src: "/images/payments/baofu.jpg" },
    { name: "Ripple", src: "/images/payments/ripple.svg" },
    { name: "PingPong", src: "/images/payments/pingpong.svg" },
    { name: "Tazapay", src: "/images/payments/tazapay.svg" },
    { name: "LianLian Pay", src: "/images/payments/lianlianpay.webp" },
    { name: "Terrapay", src: "/images/payments/terrapay.svg" },
    { name: "Ria", src: "/images/payments/ria.svg" },
    { name: "Thunes", src: "/images/payments/thunes.svg" },
  ];

  const processSteps = ["step1", "step2", "step3", "step4"];


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
              <h2 className="typo-sub-page-title mb-4">
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
              <h2 className="typo-sub-page-title mb-4">
                {t("features.title")}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featureKeys.map((f) => (
                <div
                  key={f.key}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-payments/20 hover:shadow-lg hover:shadow-payments/[0.04] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-payments/[0.08] flex items-center justify-center text-payments mb-5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="typo-base-title mb-2">
                    {t(`features.${f.key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
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
              <h2 className="typo-sub-page-title">
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
              <h2 className="typo-sub-page-title">
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
                      <span className="text-[42px] font-extrabold text-payments/15 leading-none">
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
