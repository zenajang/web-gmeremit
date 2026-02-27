"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import CompanyTabs from "@/components/CompanyTabs";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";
import type { ReactNode } from "react";

const mainServices: {
  key: string;
  href: string;
  color: string;
  icon: ReactNode;
}[] = [
  {
    key: "b2b_payments",
    href: "/services/payments",
    color: "payments",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="#3b82f6" viewBox="0 0 24 24" strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    key: "personal_remittance",
    href: "/services/remittance",
    color: "primary",
    icon: (
      <svg className="w-8 h-8 stroke-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "easy_loan",
    href: "/services/loan",
    color: "loan",
    icon: (
      <svg className="w-8 h-8 stroke-loan" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    key: "gme_card",
    href: "/services/card",
    color: "cards",
    icon: (
      <Image src="/images/common/card.png" alt="Card" width={60} height={60} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
    ),
  },
];

const relatedServices: { key: string; img: string; alt: string }[] = [
  { key: "digital_wallet",  img: "/images/common/wallet.png", alt: "Wallet" },
  { key: "money_exchange",  img: "/images/common/coin.png",   alt: "Coin"   },
  { key: "mobile_topup",    img: "/images/common/phone.png",  alt: "Phone"  },
  { key: "gift_coupons",    img: "/images/common/gift.png",   alt: "Gift"   },
];

export default function ServicesPage() {
  const { t } = useTranslation("company.services");
  useLenis();

  return (
    <PublicLayout className="bg-white">
        <section className="pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CompanyTabs activeTab="services" />

            {/* Hero Section */}
            <div className="mb-5 sm:mb-16 flex items-center justify-between">
              <div>
                <p className="text-sm lg:text-lg text-gray-500 lg:mb-4 font-light">
                  {t("subtitle")}
                </p>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-dark">
                  {t("title")}
                </h1>
              </div>

              {/* GME Logo Icons - desktop only */}
              <div className="hidden lg:flex items-center gap-3 relative">
                <style jsx>{`
                  @keyframes wave {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-12px); }
                  }
                  .wave-1 { animation: wave 2s ease-in-out infinite; }
                  .wave-2 { animation: wave 2s ease-in-out infinite 0.2s; }
                  .wave-3 { animation: wave 2s ease-in-out infinite 0.4s; }
                  .wave-4 { animation: wave 2s ease-in-out infinite 0.6s; }
                `}</style>
                <div className="wave-1 w-16 h-16 rounded-3xl bg-primary flex items-center justify-center p-3 shadow-[0_20px_40px_-10px_rgba(237,28,36,0.5)]">
                  <Image src="/images/services/logo_white.png" alt="GME Logo" width={48} height={48} className="w-full h-full object-contain" priority />
                </div>
                <div className="wave-2 w-16 h-16 rounded-3xl bg-payments flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)]">
                  <span className="text-white text-3xl font-black">G</span>
                </div>
                <div className="wave-3 w-16 h-16 rounded-3xl bg-loan flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(245,158,11,0.5)]">
                  <span className="text-white text-3xl font-black">M</span>
                </div>
                <div className="wave-4 w-16 h-16 rounded-3xl bg-cards flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(31,41,55,0.6)]">
                  <span className="text-white text-3xl font-black">E</span>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-6 sm:space-y-8">
              {/* Main Services Label */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-primary to-primary/40 rounded-full"></div>
                <h2 className="typo-content-title">{t("core_services")}</h2>
              </div>

              {/* Main Services — 가로 카드 (모바일) / 세로 그리드 (데스크탑) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-10">
                {mainServices.map(({ key, href, color, icon }) => (
                  <div key={key} className={`bg-white border border-gray-200 rounded-[20px] p-4 sm:p-8 hover:border-${color}/30 hover:shadow-lg transition-all duration-300 sm:min-h-[280px] flex items-start gap-4 sm:flex-col sm:gap-0 sm:items-stretch`}>
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${color}/10 rounded-[18px] flex items-center justify-center shrink-0 sm:mb-6`}>
                      {icon}
                    </div>
                    <div className="flex-1 sm:flex sm:flex-col sm:flex-grow">
                      <div className="flex items-start justify-between mb-1 sm:mb-3">
                        <h3 className="typo-feature-title">{t(`${key}.title`)}</h3>
                        <Link href={href} className={`sm:hidden text-sm text-${color} font-semibold shrink-0 ml-2`}>
                          {t("learn_more")} ›
                        </Link>
                      </div>
                      <p className="text-gray-500 leading-relaxed text-sm sm:text-base sm:flex-grow">{t(`${key}.desc`)}</p>
                      <Link href={href} className={`hidden sm:inline-flex items-center text-${color} font-semibold mt-6`}>
                        {t("learn_more")} <span className="ml-1">›</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Plus separator */}
              <div className="flex justify-center my-5 sm:my-10">
                <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-2xl bg-primary/5 px-4 py-6 sm:px-10 sm:py-10 text-center">
                <p className="typo-card-title mb-6 sm:mb-8">{t("related_services")}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {relatedServices.map(({ key, img, alt }) => (
                    <div key={key} className="flex items-center gap-3 rounded-full bg-white border border-gray-100 shadow-sm pl-3 pr-4 py-2.5">
                      <Image src={img} alt={alt} width={28} height={28} className="w-10 h-10 object-contain shrink-0" />
                      <div className="text-left min-w-0">
                        <p className="text-[12px] sm:text-[13px] font-semibold text-dark truncate">{t(`${key}.title`)}</p>
                        <p className="text-[10px] sm:text-[11px] text-gray-400 truncate">{t(`${key}.desc`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
