"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { useTranslation } from "@/hooks/useTranslation";

export default function LoanPage() {
  const { t } = useTranslation("loan");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const steps = document.querySelectorAll(".fade-step");
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    steps.forEach((el) => stepObserver.observe(el));

    return () => {
      observer.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  const benefits = [
    {
      key: "countries",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: "success",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      key: "support",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      key: "realtime",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      key: "simple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const productKeys = ["gme_loan", "house_loan", "business_loan", "student_loan", "property_loan", "vacation_loan", "car_loan"];

  const commonTags = ["max_amount", "duration", "visa_period", "contract", "early_settlement"];

  const steps = ["step1", "step2", "step3", "step4", "step5"];

  const stepIcons = [
    // 1. GME 앱 신청
    <svg key="s1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>,
    // 2. 서류 제출
    <svg key="s2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>,
    // 3. 서류 검증
    <svg key="s3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>,
    // 4. 승인
    <svg key="s4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // 5. 대출금 지급
    <svg key="s5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
  ];

  const faqItems = t("faq.items") as unknown as { q: string; a: string }[];

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-gradient-to-b from-white via-white to-amber-50/30">

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937]/[0.12] via-[#f5f5f5] to-[#f59e0b]/[0.14]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-[#f59e0b] tracking-wide uppercase mb-3">
                  {t("hero.badge")}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#191c1f] leading-tight mb-3">
                  {t("hero.title1")} <span className="text-[#f59e0b]">{t("hero.title2")}</span>
                </h1>
                <p className="text-gray-500 max-w-lg">
                  {t("hero.description")}
                </p>
              </div>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f59e0b] text-white text-sm font-semibold rounded-lg hover:bg-[#d97706] transition-colors shrink-0"
              >
                {t("hero.cta")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Choose GME Loan ── */}
        <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 lg:py-28 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* Stats Card */}
              <div className="w-full lg:w-5/12">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-[#f59e0b]/10 translate-x-3 translate-y-3 blur-lg" />
                  <div className="absolute inset-0 rounded-3xl bg-[#f59e0b]/5 translate-x-5 translate-y-5 blur-xl" />
                  <div className="relative rounded-3xl border border-[#eee] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#191c1f]">GME Finance</p>
                          <p className="text-[11px] text-[#999]">{t("hero.title1")} {t("hero.title2")}</p>
                        </div>
                      </div>
                    </div>

                    {/* Loan Stats */}
                    <div className="rounded-2xl bg-[#fefce8] border border-[#fef08a] p-5 mb-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-[#191c1f]">{t("why.stats_label")}</span>
                        <span className="text-[11px] text-[#999]">GME Finance</span>
                      </div>
                      <p className="text-3xl font-bold text-[#f59e0b] mb-1">{t("why.stats_value")}</p>
                      <p className="text-xs text-[#888]">{t("why.stats_desc")}</p>
                    </div>

                    {/* Mini Feature Icons */}
                    <div className="grid grid-cols-5 gap-2">
                      {benefits.map((item) => (
                        <div
                          key={item.key}
                          className="rounded-xl bg-[#f8f9fa] p-3 text-center hover:bg-[#f0f1f3] transition-colors duration-250 ease-out"
                        >
                          <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#f59e0b] mx-auto mb-1.5 shadow-sm">
                            {item.icon}
                          </div>
                          <p className="text-[11px] font-bold text-[#191c1f]">{t(`why.${item.key}.title`)}</p>
                          <p className="text-[9px] text-[#888]">{t(`why.${item.key}.desc`)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-7/12">
                <p className="text-sm font-semibold text-[#f59e0b] tracking-wide uppercase mb-3">
                  {t("why.badge")}
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-4">
                  {t("why.title")}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {t("why.description")}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {benefits.map((item) => (
                    <div
                      key={item.key}
                      className="group rounded-xl p-4 bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#f59e0b]/30 hover:-translate-y-0.5 transition-all duration-300 fade-step"
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 bg-[#f59e0b]/10 text-[#f59e0b] group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <p className="text-sm font-bold text-[#191c1f]">{t(`why.${item.key}.title`)}</p>
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
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#f59e0b] leading-tight mb-2">
                {t("products.title")}
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#191c1f] leading-tight mb-5">
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
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f5f6f7] rounded-full text-sm text-[#444] fade-step"
                >
                  <span className="font-semibold text-[#191c1f]">{t(`details.${key}.label`)}</span>
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
                  className="bg-[#f5f6f7] rounded-2xl p-5 hover:bg-[#f59e0b]/[0.08] hover:border-[#f59e0b]/20 border border-transparent transition-all duration-200 fade-step"
                >
                  <h3 className="text-[17px] font-bold text-[#191c1f] mb-1">
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-3">
                {t("process.title")}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                {t("process.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {steps.map((step, idx) => (
                <div key={step} className="relative fade-step">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] bg-gradient-to-r from-[#f59e0b]/30 to-[#f59e0b]/10" />
                  )}

                  <div className="text-center">
                    {/* Step number + icon */}
                    <div className="relative inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br from-[#f59e0b] to-[#fbbf24] text-white mb-4 shadow-lg shadow-[#f59e0b]/20">
                      {stepIcons[idx]}
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-white text-[#f59e0b] text-sm font-bold flex items-center justify-center shadow-md">
                        {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#191c1f] mb-2">
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
              <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-3">
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
                    <span className="text-[15px] font-semibold text-[#191c1f] pr-4">{item.q}</span>
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
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#fbbf24]/20 -translate-y-1/3 translate-x-1/3 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-[#fbbf24]/12 translate-y-1/3 -translate-x-1/3 blur-3xl" />

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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f59e0b] text-[#191c1f] font-semibold rounded-xl hover:bg-[#fbbf24] transition-colors"
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-xl hover:border-[#f59e0b]/30 hover:text-[#f59e0b] transition-colors"
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
      </main>
      <Footer />
    </>
  );
}
