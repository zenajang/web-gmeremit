"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { scrollToSection } from "@/utils/scroll";

const supportedCountries = [
  { code: "PH", flag: "🇵🇭" },
  { code: "VN", flag: "🇻🇳" },
  { code: "NP", flag: "🇳🇵" },
  { code: "ID", flag: "🇮🇩" },
  { code: "TH", flag: "🇹🇭" },
  { code: "MM", flag: "🇲🇲" },
  { code: "CN", flag: "🇨🇳" },
  { code: "JP", flag: "🇯🇵" },
  { code: "US", flag: "🇺🇸" },
  { code: "BD", flag: "🇧🇩" },
  { code: "LK", flag: "🇱🇰" },
  { code: "PK", flag: "🇵🇰" },
];

export default function HeroMain() {
  const { t } = useTranslation("home.hero");

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden snap-section">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-10 w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 lg:pt-40 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a3c520] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a3c520]" />
              </span>
              <span className="text-sm font-semibold text-primary">{t("badge")}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-[1.18] tracking-tight mb-6">
              {t("title1")}
              <br />
              <span className="text-primary">{t("title2")}</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              {t("description1")}
              <br />
              {t("description2")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <button
                onClick={() => scrollToSection("app-download")}
                className="group inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 ease-out shadow-[0_8px_24px_rgba(237,28,36,0.3)] hover:shadow-[0_12px_32px_rgba(237,28,36,0.4)] hover:-translate-y-0.5 cursor-pointer"
              >
                {t("app_download", { ns: "button" })}
                <svg className="w-5 h-5 transition-transform duration-250 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button
                onClick={() => scrollToSection("gme-payments")}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-dark font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 ease-out cursor-pointer"
              >
                {t("button.learn_more")}
              </button>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gray-200/60 rounded-full px-4 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-3.5 h-3.5 ${i < 4 ? "text-loan-light" : "text-loan-light/70"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="typo-label">4.7</span>
                <span className="w-px h-3 bg-gray-300" />
                <span className="text-xs text-gray-500">{t("rating")}</span>
              </div>
            </div>
          </div>
          {/* Right - Supported Countries Grid */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="typo-card-title">{t("countries.title")}</h3>
                  <p className="text-sm text-gray-400">{t("countries.subtitle")}</p>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 bg-success rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-green-800">{t("countries.realtime")}</span>
                </div>
              </div>

              {/* Countries Grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {supportedCountries.slice(0, 11).map((country) => (
                  <div
                    key={country.code}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-b from-white to-slate-50 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-xs font-medium text-cards">{t(`countries.names.${country.code}`)}</span>
                  </div>
                ))}
                <div
                  className="relative flex flex-col items-center justify-center gap-1 p-3 rounded-xl bg-gradient-to-b from-red-50 to-red-100 border border-red-200/40 shadow-[0_2px_8px_rgba(237,28,36,0.08),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(237,28,36,0.05)] hover:shadow-[0_4px_12px_rgba(237,28,36,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/70 via-transparent to-primary/5 pointer-events-none" />
                  <div className="absolute top-0 left-3 right-3 h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
                  <span className="relative text-xl font-bold text-primary">+188</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100">
                <Link
                  href="/services/remittance"
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  {t("countries.view_all")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-black/[0.03]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/20 to-transparent pointer-events-none" />
              <p className="relative text-xs text-gray-500 mb-1">{t("stats.total_amount")}</p>
              <p className="relative typo-content-title">4.2<span className="text-sm font-medium text-gray-400 ml-0.5">{t("stats.trillion")}</span></p>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary/80 backdrop-blur-xl text-white rounded-2xl px-5 py-4 shadow-[0_8px_32px_rgba(237,28,36,0.3)] border border-white/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
              <p className="relative text-xs opacity-90 mb-1">{t("stats.avg_time")}</p>
              <p className="relative text-2xl font-bold">10<span className="text-sm font-medium opacity-90 ml-0.5">{t("stats.seconds")}</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-45 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <div className="w-1 h-2.5 rounded-full bg-gray-400 animate-[scrollMouse_1.5s_ease-in-out_infinite]" />
        </div>
        <span className="text-[11px] text-gray-400 font-medium tracking-wide">SCROLL</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
