"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { scrollToSection } from "@/utils/scroll";

export default function MainServices() {
  const { t } = useTranslation("home.services");

  return (
    <section id="gme-payments" className="relative overflow-hidden bg-gray-100 min-h-screen py-16 lg:py-20 flex items-center snap-section">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Payments - Large Card */}
          <button
            onClick={() => scrollToSection("payments-section")}
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-payments p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(96,165,250,0.4)] hover:shadow-[0_45px_80px_-15px_rgba(96,165,250,0.5)] cursor-pointer text-left"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t("payments.title")}</h3>
              <p className="text-white/80 text-base lg:text-lg leading-relaxed max-w-md">
                {t("payments.desc1")}
                <br />
                {t("payments.desc2")}
              </p>
            </div>

            {/* Globe 3D + Decorations */}
            <div className="absolute top-1/2 right-6 lg:right-3 -translate-y-1/2">
              <Image
                src="/images/home/globe3d.png"
                alt="Global Payments"
                width={300}
                height={300}
                className="relative w-60 h-60 lg:w-75 lg:h-75 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
              />
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>

          {/* Remittance - Small Card */}
          <button
            onClick={() => scrollToSection("overseas-remittance")}
            className="group relative overflow-hidden rounded-3xl bg-primary p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(237,28,36,0.35)] hover:shadow-[0_45px_80px_-15px_rgba(237,28,36,0.45)] cursor-pointer text-left"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t("remittance.title")}</h3>
              <p className="text-white/80 text-base leading-relaxed">
                {t("remittance.desc1")}
                <br />
                {t("remittance.desc2")}
              </p>
            </div>

            <div className="absolute top-5/7 right-4 lg:-right-10 -translate-y-1/3">
              <div className="relative">
                <Image
                src="/images/home/remittance_3d.png"
                alt="Global Payments"
                width={300}
                height={300}
                className="relative w-60 h-60 lg:w-70 lg:h-70 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>

          {/* Loan - Small Card (Yellow) */}
          <button
            onClick={() => scrollToSection("online-loan")}
            className="group relative overflow-hidden rounded-3xl bg-loan p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(251,191,36,0.35)] hover:shadow-[0_45px_80px_-15px_rgba(251,191,36,0.45)] cursor-pointer text-left"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t("loan.title")}</h3>
              <p className="text-white/90 text-base leading-relaxed">
                {t("loan.desc1")}
                <br />
                {t("loan.desc2")}
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 lg:-right-5">
              <div className="relative">
                <Image
                  src="/images/home/loan_3d.png"
                  alt="Online Loan"
                  width={400}
                  height={400}
                  className="relative w-60 h-60 lg:w-65 lg:h-65 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>

          {/* Cards - Large Card (Black) */}
          <button
            onClick={() => scrollToSection("gme-cards")}
            className="group md:col-span-2 relative overflow-hidden rounded-3xl bg-cards p-8 lg:p-10 min-h-[320px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 shadow-[0_35px_60px_-15px_rgba(75,85,99,0.4)] hover:shadow-[0_45px_80px_-15px_rgba(75,85,99,0.5)] cursor-pointer text-left"
          >
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{t("card.title")}</h3>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-md">
                {t("card.desc1")}
                <br />
                {t("card.desc2")}
              </p>
            </div>

            {/* Card Illustration */}
            <div className="absolute top-1/2 right-8 lg:top-45 lg:right-0 -translate-y-1/2">
              <div className="relative">
                <Image
                src="/images/home/card_3d.png"
                alt="Global Payments"
                width={600}
                height={600}
                className="relative w-60 h-60 lg:w-100 lg:h-100 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
