"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import SectionHeader from "@/components/ui/SectionHeader";
import { useLenis } from "@/hooks/useLenis";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import {
  FcGlobe,
  FcMoneyTransfer,
  FcFlashOn,
  FcPhone,
} from "react-icons/fc";
import { MdSignalCellularAlt, MdQrCode2 } from "react-icons/md";
import { FaSimCard, FaTruck, FaMobileAlt, FaCheckCircle } from "react-icons/fa";

const featureKeys = ["multilang", "affordable", "network", "activation", "esim", "intl_call"] as const;

const featureIcons: Record<string, React.ReactNode> = {
  multilang: <FcGlobe className="w-10 h-10" />,
  affordable: <FcMoneyTransfer className="w-10 h-10" />,
  network: <MdSignalCellularAlt className="w-10 h-10 text-[#5b21b6]" />,
  esim: <MdQrCode2 className="w-10 h-10 text-[#5b21b6]" />,
  activation: <FcFlashOn className="w-10 h-10" />,
  intl_call: <FcPhone className="w-10 h-10" />,
};

const plans = [
  { name: "GME+(200분/6GB)", data: "6GB", speed: "1Mbps", voice: "200분", sms: "100건", price: 3300, original: 14300, discount: "6개월" },
  { name: "GME 데이터3GB+", data: "3GB", speed: "1Mbps", voice: "200분", sms: "100건", price: 7700, original: 14300, discount: "평생" },
  { name: "GME+(100분/7GB)", data: "7GB", speed: "1Mbps", voice: "100분", sms: "100건", price: 10900, original: 14520, discount: "평생 요금제", isLifetime: true },
  { name: "GME free(4.5GB+1M)", data: "4.5GB", speed: "1Mbps", voice: "무제한 (부가 음성 300분)", sms: "무제한", price: 11000, original: 23650, discount: "12개월" },
  { name: "GME 플러스 15GB+3M", data: "15GB", speed: "3Mbps", voice: "100분", sms: "100건", price: 12100, original: 26950, discount: "7개월" },
  { name: "GME 스마트7GB+", data: "7GB", speed: "1Mbps", voice: "무제한", sms: "무제한", price: 14800, original: 19800, discount: "24개월" },
];


export default function TelecomPage() {
  const { t } = useTranslation("telecom");
  useLenis();
  const { registerSectionRef } = useScrollFadeIn();

  return (
    <PublicLayout className="bg-gradient-to-b from-white via-white to-gray-100">
      <ServiceHeroSection translationKey="telecom" color="purple" ctaHref="#plans" maxWidth="max-w-content" />

      {/* ── Features ── */}
      <section ref={registerSectionRef(0)} className="py-20 lg:py-28 fade-section">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("features.title")}
            colorClass="text-[#5b21b6]"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 mt-12">
            {featureKeys.map((key) => (
              <div
                key={key}
                className="group rounded-xl p-6 text-center bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#5b21b6]/30 hover:-translate-y-1 will-change-transform transition-[transform,box-shadow,border-color] duration-200 fade-step"
              >
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {featureIcons[key]}
                </div>
                <h3 className="text-[15px] font-bold text-dark mb-1">
                  {t(`features.${key}.title`)}
                </h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">
                  {t(`features.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section id="plans" ref={registerSectionRef(1)} className="py-20 lg:py-28 bg-[#f5f0ff] fade-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title={t("plans.title")}
            description={t("plans.subtitle")}
            colorClass="text-[#5b21b6]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg will-change-transform transition-shadow duration-200 fade-step"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-dark">{plan.name}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 bg-[#5b21b6]/10 text-[#5b21b6] text-xs font-semibold rounded-full">
                      {plan.discount}{!("isLifetime" in plan) && ` ${t("plans.discount")}`}
                    </span>
                    <span className="px-2 py-0.5 bg-black text-white text-[10px] font-bold rounded-full">LGU+</span>
                  </div>
                </div>

                <div className="space-y-2 mb-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("plans.data")}</span>
                    <span className="font-medium text-dark">{plan.data} + {plan.speed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("plans.voice")}</span>
                    <span className="font-medium text-dark">{plan.voice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{t("plans.sms")}</span>
                    <span className="font-medium text-dark">{plan.sms}</span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-400 text-xs line-through">{plan.original.toLocaleString()}원/{t("plans.per_month")}</p>
                  <p className="text-2xl font-bold text-[#5b21b6]">
                    {plan.price.toLocaleString()}<span className="text-sm font-medium text-gray-500">원/{t("plans.per_month")}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.gmemobile.com/view/main/main.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b21b6] text-white text-sm font-semibold rounded-lg hover:bg-[#7c3aed] transition-colors"
            >
              {t("plans.cta")}
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── eSIM & USIM 소개 (가로 스크롤) ── */}
      <section ref={registerSectionRef(2)} className="py-20 lg:py-28 fade-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <SectionHeader
            title={t("process.title")}
            title2={t("process.title2")}
            colorClass="text-[#5b21b6]"
          />
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-0 lg:justify-center lg:overflow-visible pb-4 lg:pb-0">
          {/* eSIM 카드 */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-[600px] rounded-3xl bg-gradient-to-br from-[#5b21b6] to-[#7c3aed] p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold tracking-wider mb-5">
                {t("esim_intro.badge")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{t("esim_intro.title")}</h3>
              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                {t("esim_intro.description")}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 bg-white/15 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5"><svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M4.93 4.93l14.14 14.14" /></svg>유심 교체 없이</span>
                <span className="px-3 py-1.5 bg-white/15 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5"><svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M4.93 4.93l14.14 14.14" /></svg>배송 없이</span>
                <span className="px-3 py-1.5 bg-white/15 rounded-lg text-xs sm:text-sm font-medium inline-flex items-center gap-1.5"><svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>셀프개통으로 바로 사용가능!</span>
              </div>
              <a
                href="https://www.gmemobile.com/view/selfopen/esim_explain.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#5b21b6] font-semibold rounded-xl hover:bg-white/90 transition-colors"
              >
                {t("esim_intro.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>

          {/* USIM 카드 */}
          <div className="snap-center shrink-0 w-[85vw] sm:w-[70vw] lg:w-[600px] rounded-3xl bg-white border border-gray-200 p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#5b21b6]/[0.03] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-[#5b21b6]/10 text-[#5b21b6] rounded-full text-xs font-bold tracking-wider mb-5">
                {t("usim_intro.badge")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-4">{t("usim_intro.title")}</h3>
              <p className="text-gray-500 text-sm mb-5">{t("usim_intro.description")}</p>

              <div className="flex items-center justify-between mb-8">
                {[
                  { key: "usim_intro.step1", icon: <FaSimCard className="w-4 h-4 sm:w-6 sm:h-6" /> },
                  { key: "usim_intro.step2", icon: <FaTruck className="w-4 h-4 sm:w-6 sm:h-6" /> },
                  { key: "usim_intro.step3", icon: <FaMobileAlt className="w-4 h-4 sm:w-6 sm:h-6" /> },
                  { key: "usim_intro.step4", icon: <FaCheckCircle className="w-4 h-4 sm:w-6 sm:h-6" /> },
                ].map((item, idx) => (
                  <div key={item.key} className="contents">
                    <div className="flex flex-col items-center flex-1">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center mb-2">
                        {item.icon}
                      </div>
                      <p className="text-[11px] sm:text-xs font-semibold text-dark text-center">{t(item.key)}</p>
                    </div>
                    {idx < 3 && (
                      <span className="text-gray-300 text-[10px] sm:text-xs">▶</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="https://www.gmemobile.com/view/selfopen/selfopen_explain.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5b21b6] text-white font-semibold rounded-xl hover:bg-[#7c3aed] transition-colors"
              >
                {t("usim_intro.cta")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={registerSectionRef(4)} className="py-16 lg:py-20 bg-[#f5f0ff] fade-section">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="typo-section-title mb-4 fade-step">{t("cta.title")}</h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8 fade-step">{t("cta.description")}</p>
          <a
            href="https://www.gmemobile.com/view/main/main.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#5b21b6] text-white font-semibold rounded-lg hover:bg-[#7c3aed] transition-colors fade-step"
          >
            {t("cta.button")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </section>
    </PublicLayout>
  );
}
