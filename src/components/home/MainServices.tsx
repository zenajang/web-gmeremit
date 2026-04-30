"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { scrollToSection } from "@/utils/scroll";

function ServiceCard({
  onClick,
  bgColor,
  shadowColor,
  className: extraClass = "",
  children,
}: {
  onClick: () => void;
  bgColor: string;
  shadowColor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-10 min-h-[180px] sm:min-h-[300px] lg:min-h-[330px] flex flex-col justify-between transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1 cursor-pointer text-left ${bgColor} ${extraClass}`}
      style={{ boxShadow: `0 35px 60px -15px ${shadowColor}` }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 45px 80px -15px ${shadowColor}`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 35px 60px -15px ${shadowColor}`; }}
    >
      {children}
    </button>
  );
}

function ArrowCircle({ className = "bg-white/20" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white transition-transform duration-300 ease-out group-hover:translate-x-1 ${className}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </span>
  );
}

export default function MainServices() {
  const { t } = useTranslation("home.services");

  return (
    <section id="gme-payments" className="relative overflow-hidden bg-gray-100 py-10 sm:py-12 lg:py-16 flex items-center snap-section lg:min-h-[calc(100svh-var(--header-height))]">
      <div className="relative w-full max-w-content mx-auto px-4 sm:px-6 lg:px-0">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="typo-section-title">
            {t("title1")}
            <br />
            {t("title2")}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {/* Remittance */}
          <ServiceCard onClick={() => scrollToSection("overseas-remittance")} bgColor="bg-primary" shadowColor="rgba(237,28,36,0.4)" className="md:col-span-2">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">{t("remittance.title")}</h3>
              <p className="typo-card-desc text-white/80">
                {t("remittance.desc1")}
                <br />
                {t("remittance.desc2")}
              </p>
            </div>

            <div className="absolute top-4/6 sm:top-5/7 -right-4 sm:right-4 lg:-right-5 -translate-y-1/3">
              <div className="relative">
                <Image
                src="/images/home/remittance_3d.png"
                alt="Overseas Remittance"
                width={400}
                height={400}
                className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-65 lg:h-65 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <ArrowCircle />
            </div>
          </ServiceCard>

          {/* Payments */}
          <ServiceCard onClick={() => scrollToSection("payments-section")} bgColor="bg-payments" shadowColor="rgba(96,165,250,0.4)" className="md:col-span-2">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">{t("payments.title")}</h3>
              <p className="typo-card-desc text-white/80 max-w-md">
                {t("payments.desc1")}
                <br />
                {t("payments.desc2")}
              </p>
            </div>

            {/* Globe 3D */}
            <div className="absolute top-3/4 lg:top-3/4 right-3 sm:right-6 lg:right-3 -translate-y-1/2">
              <Image
                src="/images/home/globe3d.png"
                alt="B2B Payments"
                width={300}
                height={300}
                className="relative w-28 h-28 sm:w-56 sm:h-56 lg:w-50 lg:h-50 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
              />
            </div>

            <div className="relative z-10">
              <ArrowCircle />
            </div>
          </ServiceCard>

          {/* Cards */}
          <ServiceCard onClick={() => scrollToSection("gme-cards")} bgColor="bg-cards" shadowColor="rgba(75,85,99,0.45)" className="md:col-span-2">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">{t("card.title")}</h3>
              <p className="typo-card-desc text-white/70 max-w-md">
                {t("card.desc1")}
                <br />
                {t("card.desc2")}
              </p>
            </div>

            <div className="absolute top-3/4 lg:top-3/4 right-3 sm:right-4 lg:right-5 -translate-y-1/2">
              <div className="relative">
                <Image
                  src="/images/home/card_3d.png"
                  alt="GME Card"
                  width={400}
                  height={400}
                  className="relative w-32 h-32 sm:w-56 sm:h-56 lg:w-60 lg:h-60 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <ArrowCircle className="bg-white/10" />
            </div>
          </ServiceCard>

          {/* Mobile */}
          <ServiceCard onClick={() => scrollToSection("gme-mobile")} bgColor="bg-mobile" shadowColor="rgba(91,33,182,0.4)" className="md:col-span-3">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">{t("mobile.title")}</h3>
              <p className="typo-card-desc text-white/80">
                {t("mobile.desc1")}
                <br />
                {t("mobile.desc2")}
              </p>
            </div>

            <div className="absolute -bottom-3 sm:-bottom-5 right-4 lg:right-5 ">
              <div className="relative">
                <Image
                  src="/images/home/mobile_3d.png"
                  alt="GME Mobile"
                  width={300}
                  height={300}
                  className="relative w-26 h-26 sm:w-56 sm:h-56 lg:w-55 lg:h-55 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <ArrowCircle />
            </div>
          </ServiceCard>

          {/* Loan */}
          <ServiceCard onClick={() => scrollToSection("online-loan")} bgColor="bg-loan" shadowColor="rgba(251,191,36,0.4)" className="md:col-span-3">
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">{t("loan.title")}</h3>
              <p className="typo-card-desc text-white/90">
                {t("loan.desc1")}
                <br />
                {t("loan.desc2")}
              </p>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-5 right-0 sm:right-4 lg:-right-5">
              <div className="relative">
                <Image
                  src="/images/home/loan_3d.png"
                  alt="Online Loan"
                  width={400}
                  height={400}
                  className="relative w-33 h-33 sm:w-56 sm:h-56 lg:w-65 lg:h-65 object-contain [filter:drop-shadow(8px_8px_16px_rgba(0,0,0,0.35))]"
                />
              </div>
            </div>

            <div className="relative z-10">
              <ArrowCircle />
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
