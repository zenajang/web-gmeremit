"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyTabs from "@/components/CompanyTabs";
import Lenis from "lenis";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";

export default function ServicesPage() {
  const { t } = useTranslation("company.services");

  // Lenis 부드러운 스크롤
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] bg-white min-h-screen">
        <section className="pt-16 lg:pt-20 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CompanyTabs activeTab="services" />

            {/* Hero Section with Title and Icons */}
            <div className="mb-16 flex items-center justify-between">
              <div>
                <p className="text-base lg:text-lg text-[#666] mb-4 font-light">
                  {t("subtitle")}
                </p>
                <h1 className="text-3xl lg:text-5xl font-bold text-[#191c1f]">
                  {t("title")}
                </h1>
              </div>

              {/* GME Logo Icons - Using all 4 MainServices colors with Wave Animation */}
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
                {/* White Logo - Red (Primary GME Brand) */}
                <div className="wave-1 w-16 h-16 rounded-3xl bg-[#ed1c24] flex items-center justify-center p-3 shadow-[0_20px_40px_-10px_rgba(237,28,36,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(237,28,36,0.6)] transition-all duration-300">
                  <Image
                    src="/images/services/logo_white.png"
                    alt="GME Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
                {/* G - Blue */}
                <div className="wave-2 w-16 h-16 rounded-3xl bg-[#3b82f6] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(59,130,246,0.6)] transition-all duration-300">
                  <span className="text-white text-3xl font-black">G</span>
                </div>
                {/* M - Yellow */}
                <div className="wave-3 w-16 h-16 rounded-3xl bg-[#f59e0b] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_25px_50px_-10px_rgba(245,158,11,0.6)] transition-all duration-300">
                  <span className="text-white text-3xl font-black">M</span>
                </div>
                {/* E - Black */}
                <div className="wave-4 w-16 h-16 rounded-3xl bg-[#1f2937] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(31,41,55,0.6)] hover:shadow-[0_25px_50px_-10px_rgba(31,41,55,0.7)] transition-all duration-300">
                  <span className="text-white text-3xl font-black">E</span>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="space-y-8">
              {/* Main Services Label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-8 bg-gradient-to-b from-[#ed1c24] to-[#ed1c24]/40 rounded-full"></div>
                <h2 className="text-2xl font-bold text-[#191c1f]">{t("core_services")}</h2>
              </div>

              {/* First Row - 4 Main Services (Larger & Prominent) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* B2B Payments */}
                <div className="bg-white border border-[#e5e7eb] rounded-[20px] p-8 hover:border-[#3b82f6]/30 hover:shadow-lg transition-all duration-300 min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-[18px] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="#3b82f6" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1f] mb-3">
                    {t("b2b_payments.title")}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6 flex-grow">
                    {t("b2b_payments.desc")}
                  </p>
                  <Link href="/services/payments" className="inline-flex items-center text-[#3b82f6] font-semibold hover:gap-2 transition-all">
                    {t("learn_more")} <span className="ml-1">›</span>
                  </Link>
                </div>

                {/* Personal Remittance */}
                <div className="bg-white border border-[#e5e7eb] rounded-[20px] p-8 hover:border-[#ed1c24]/30 hover:shadow-lg transition-all duration-300 min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-[#ed1c24]/10 rounded-[18px] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="#ed1c24" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1f] mb-3">
                    {t("personal_remittance.title")}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6 flex-grow">
                    {t("personal_remittance.desc")}
                  </p>
                  <Link href="#" className="inline-flex items-center text-[#ed1c24] font-semibold hover:gap-2 transition-all">
                    {t("learn_more")} <span className="ml-1">›</span>
                  </Link>
                </div>

                {/* Easy Loan */}
                <div className="bg-white border border-[#e5e7eb] rounded-[20px] p-8 hover:border-[#f59e0b]/30 hover:shadow-lg transition-all duration-300 min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-[#f59e0b]/10 rounded-[18px] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="#f59e0b" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1f] mb-3">
                    {t("easy_loan.title")}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6 flex-grow">
                    {t("easy_loan.desc")}
                  </p>
                  <Link href="#" className="inline-flex items-center text-[#f59e0b] font-semibold hover:gap-2 transition-all">
                    {t("learn_more")} <span className="ml-1">›</span>
                  </Link>
                </div>

                {/* GME Card */}
                <div className="bg-white border border-[#e5e7eb] rounded-[20px] p-8 hover:border-[#1f2937]/30 hover:shadow-lg transition-all duration-300 min-h-[280px] flex flex-col">
                  <div className="w-16 h-16 bg-[#1f2937]/10 rounded-[18px] flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="#1f2937" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1f] mb-3">
                    {t("gme_card.title")}
                  </h3>
                  <p className="text-[#666] leading-relaxed mb-6 flex-grow">
                    {t("gme_card.desc")}
                  </p>
                  <Link href="/services/card" className="inline-flex items-center text-[#1f2937] font-semibold hover:gap-2 transition-all">
                    {t("learn_more")} <span className="ml-1">›</span>
                  </Link>
                </div>
              </div>

              {/* Plus separator */}
              <div className="flex justify-center my-10">
                <div className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>

              {/* Related Services */}
              <div className="rounded-2xl bg-[#ed1c24]/[0.05] px-10 py-10 text-center">
                <p className="text-lg font-bold text-[#191c1f] mb-8">{t("related_services")}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 shadow-sm pl-3 pr-5 py-2.5">
                    <svg className="w-7 h-7 text-[#ed1c24] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                    </svg>
                    <div className="text-left min-w-0">
                      <p className="text-[13px] font-semibold text-[#191c1f] truncate">{t("digital_wallet.title")}</p>
                      <p className="text-[11px] text-[#999] truncate">{t("digital_wallet.desc")}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 shadow-sm pl-3 pr-5 py-2.5">
                    <svg className="w-7 h-7 text-[#ed1c24] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-left min-w-0">
                      <p className="text-[13px] font-semibold text-[#191c1f] truncate">{t("money_exchange.title")}</p>
                      <p className="text-[11px] text-[#999] truncate">{t("money_exchange.desc")}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 shadow-sm pl-3 pr-5 py-2.5">
                    <svg className="w-7 h-7 text-[#ed1c24] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    <div className="text-left min-w-0">
                      <p className="text-[13px] font-semibold text-[#191c1f] truncate">{t("mobile_topup.title")}</p>
                      <p className="text-[11px] text-[#999] truncate">{t("mobile_topup.desc")}</p>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-3 rounded-full bg-white border border-gray-100 shadow-sm pl-3 pr-5 py-2.5">
                    <svg className="w-7 h-7 text-[#ed1c24] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.25 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    <div className="text-left min-w-0">
                      <p className="text-[13px] font-semibold text-[#191c1f] truncate">{t("gift_coupons.title")}</p>
                      <p className="text-[11px] text-[#999] truncate">{t("gift_coupons.desc")}</p>
                    </div>
                  </div>
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
