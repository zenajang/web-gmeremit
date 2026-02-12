"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { useTranslation } from "@/hooks/useTranslation";

export default function RemittancePage() {
  const { t } = useTranslation("remittance");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
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

  const whyKeys = ["fastest", "cheapest", "secure"] as const;

  const featureItems = [
    {
      key: "app",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
    {
      key: "convenient",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
    },
    {
      key: "multilingual",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
        </svg>
      ),
    },
    {
      key: "branches",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];

  const processSteps = ["step1", "step2", "step3"] as const;

  const processIcons = [
    <svg key="p1" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>,
    <svg key="p2" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>,
    <svg key="p3" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>,
  ];

  const trustItems = ["moef", "fss", "efb", "partner"] as const;

  const trustIcons = [
    // 기획재정부 - 건물/정부 아이콘
    <svg key="t1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>,
    // 금감원 - 방패 체크 아이콘
    <svg key="t2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    // 전자금융업 - 문서 인증 아이콘
    <svg key="t3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>,
    // 글로벌 파트너
    <svg key="t4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>,
  ];

  const countries = [
    "Nepal", "Philippines", "Vietnam", "Indonesia", "India",
    "Bangladesh", "Sri Lanka", "Myanmar", "Cambodia", "Pakistan",
    "Thailand", "Mongolia", "Uzbekistan", "China", "Japan",
    "Nigeria", "Ghana", "Kenya", "Tanzania", "Ethiopia",
    "South Africa", "Egypt", "Morocco", "Uganda", "Cameroon",
    "United Kingdom", "Germany", "France", "Russia", "Turkey",
    "United States", "Canada", "Brazil", "Mexico", "Colombia",
    "Australia", "New Zealand", "Saudi Arabia", "UAE", "Jordan",
    "Peru", "Fiji", "Laos", "Tajikistan", "Kyrgyzstan", "Senegal", "Togo", "Benin",
  ];

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-white">

        {/* ── Page Header ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937]/[0.12] via-[#f5f5f5] to-[#ed1c24]/[0.14]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-[#ed1c24] tracking-wide uppercase mb-3">
                  {t("hero.badge")}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#191c1f] leading-tight mb-3">
                  {t("hero.title1")} <span className="text-[#ed1c24]">{t("hero.title2")}</span>
                </h1>
                <p className="text-gray-500 max-w-lg">
                  {t("hero.description")}
                </p>
              </div>
              <a
                href="#why"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ed1c24] text-white text-sm font-semibold rounded-lg hover:bg-[#c41920] transition-colors shrink-0"
              >
                {t("hero.cta")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Choose GME Remittance ── */}
        <section id="why" ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 lg:py-28 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[15px] lg:text-base text-gray-500 mb-1">{t("why.subtitle")}</p>
                <h2 className="text-[28px] lg:text-[36px] font-bold text-[#ed1c24] leading-tight">{t("why.title")}</h2>
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
                  <h3 className="text-[20px] font-bold text-[#191c1f] mb-1.5">{t(`why.items.${key}.title`)}</h3>
                  <p className="text-[16px] text-gray-400 leading-relaxed">{t(`why.items.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Transfer Methods ── */}
        <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-20 lg:py-28 bg-[#fafafa] fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#ed1c24] leading-tight mb-2">
                {t("features.title")}
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#191c1f] leading-tight mb-5">
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
                  className="group rounded-2xl bg-white border border-gray-200 p-6 hover:shadow-xl hover:border-[#ed1c24]/20 hover:-translate-y-1 transition-all duration-300 fade-step"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ed1c24]/10 flex items-center justify-center text-[#ed1c24] mb-4 group-hover:bg-[#ed1c24] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#191c1f] mb-2">
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
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#ed1c24] leading-tight mb-2">
                {t("process.title")}
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#191c1f] leading-tight mb-5">
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
                      <div className="w-full h-full bg-gradient-to-r from-[#ed1c24]/30 to-[#ed1c24]/10" />
                    </div>
                  )}

                  <div className="relative bg-white rounded-2xl border border-gray-200 p-7 text-center hover:shadow-lg transition-shadow duration-300">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ed1c24] to-[#ff6b6b] text-white mb-5 shadow-lg shadow-[#ed1c24]/20">
                      {processIcons[idx]}
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-[#ed1c24] text-sm font-bold flex items-center justify-center shadow-md border border-[#ed1c24]/20">
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

        {/* ── Trust / Compliance ── */}
        <section ref={(el) => { sectionRefs.current[3] = el; }} className="py-16 lg:py-20 fade-section">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-[#191c1f] p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                {t("trust.title")}
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto text-sm">
                {t("trust.desc")}
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {trustItems.map((key, idx) => (
                  <div
                    key={key}
                    className="rounded-xl bg-white/[0.08] border border-white/[0.08] p-5 hover:bg-white/[0.12] transition-colors duration-300 fade-step"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#ed1c24]/20 flex items-center justify-center text-[#ed1c24] mx-auto mb-3">
                      {trustIcons[idx]}
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {t(`trust.${key}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#ed1c24] leading-tight mb-2">
                {t("regions.title")}
              </h2>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#191c1f] leading-tight mb-5">
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
                    className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-sm sm:text-[15px] font-medium text-[#191c1f] whitespace-nowrap transition-opacity"
                    style={{ opacity }}
                  >
                    {country}
                  </span>
                );
              })}
            </div>
          
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}