"use client";

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import CTAButton from "@/components/ui/CTAButton";
import type { ReactNode } from "react";

const featureKeys = ["optimized", "security", "global", "fast"] as const;

const featureIcons: ReactNode[] = [
  <Image key="coin" src="/images/common/coin.png" alt="Coin" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />,
  <Image key="shield" src="/images/common/shield.png" alt="Shield" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />,
  <Image key="globe" src="/images/common/globe.png" alt="Globe" width={90} height={90} className="w-20 h-20 sm:w-30 sm:h-30 object-contain" />,
  <Image key="fast" src="/images/common/speed.png" alt="Speed" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />,
];

export default function RemittanceSection() {
  const { t } = useTranslation("home.remittance");
  return (
    <section id="overseas-remittance" className="relative overflow-hidden flex items-center snap-section lg:min-h-screen py-14 sm:py-16 lg:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#fffafa] via-[#fff8f8] to-[#fff5f5]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.05] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          <div>
            <p className="typo-eyebrow text-primary mb-3">REMITTANCE</p>
            <h2 className="typo-section-title mb-5">{t("title")}</h2>
            <p className="typo-section-subtitle text-gray-600 mb-5 sm:mb-8">
              {t("description")}
            </p>
            <CTAButton
              href="/services/remittance"
              label={t("button.detail")}
              className="text-primary bg-red-100 hover:bg-red-200"
              iconClassName="bg-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-7">
            {featureKeys.map((key, index) => (
              <div key={key} className="relative flip-card h-32 sm:h-72 w-full">
                {/* 입체적 그림자 */}
                <div className="absolute inset-0 rounded-2xl bg-primary/8 translate-x-2 translate-y-2 blur-md" />
                <div className="absolute inset-0 rounded-2xl bg-primary/4 translate-x-4 translate-y-4 blur-lg" />
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-face rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(237,28,36,0.08),0_4px_12px_rgba(237,28,36,0.05)]">
                    <div className="absolute inset-0 bg-white backdrop-blur-xl border border-gray-200" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/10 to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(255,255,255,0.18)]" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
                    <div className="absolute top-4 right-4 w-16 h-[1px] bg-gradient-to-r from-white/60 to-transparent rotate-45" />
                    <div className="absolute top-8 right-8 w-12 h-[1px] bg-gradient-to-r from-white/40 to-transparent rotate-45" />

                    <div className="relative h-full p-3 sm:p-8 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div className="w-9 h-9 sm:w-15 sm:h-15 rounded-lg sm:rounded-xl bg-gradient-to-br from-white to-[#f8f9fa] flex items-center justify-center shadow-lg">
                          {featureIcons[index]}
                        </div>
                        <span className="text-[9px] sm:text-sm font-semibold text-primary bg-primary/10 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full backdrop-blur-sm">{t(`features.${key}.sub`)}</span>
                      </div>
                      <div>
                        <p className="text-xs sm:text-2xl font-bold text-dark mb-0.5 sm:mb-1">{t(`features.${key}.title`)}</p>
                        <p className="text-[10px] sm:text-base text-gray-500 leading-snug sm:leading-relaxed">{t(`features.${key}.desc`)}</p>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-face flip-card-back rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(237,28,36,0.25),0_4px_12px_rgba(0,0,0,0.1)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-1px_0_rgba(255,255,255,0.15)]" />
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 w-20 h-[1px] bg-gradient-to-r from-white/30 to-transparent -rotate-45" />

                    <div className="relative h-full p-3 sm:p-8 flex flex-col justify-center text-white overflow-hidden">
                      <p className="text-xs sm:text-2xl font-bold mb-1 sm:mb-2">{t(`features.${key}.back_title`)}</p>
                      <p className="text-[10px] sm:text-base leading-snug sm:leading-relaxed text-white/90 line-clamp-3 sm:line-clamp-none">{t(`features.${key}.back_desc`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
