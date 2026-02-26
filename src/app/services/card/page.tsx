"use client";

import { useState } from "react";
import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import CardDetailModal from "@/components/service/CardDetailModal";
import { useLenis } from "@/hooks/useLenis";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { FcMoneyTransfer, FcShop,FcGlobe, FcDonate,FcAutomotive } from "react-icons/fc";
import { cards, cardBenefitKeys } from "@/data/cards";

const benefitIcons: Record<string, React.ReactNode> = {
  atm:        <FcMoneyTransfer  className="w-10 h-10" />,
  transit:    <FcAutomotive    className="w-10 h-10" />,
  global:     <FcGlobe className="w-10 h-10" />,
  everywhere: <FcShop className="w-10 h-10" />,
  cashback:   <FcDonate className="w-10 h-10"/>,
};

export default function CardPage() {
  const { t } = useTranslation("card");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  useLenis();
  const sectionRefs = useScrollFadeIn();

  const benefits = cardBenefitKeys.map((key) => ({
    key,
    icon: benefitIcons[key],
  }));

  return (
    <PublicLayout className="bg-gradient-to-b from-white via-white to-gray-100">

        <ServiceHeroSection translationKey="card" color="primary" ctaHref="#cards" />

        {/* ── Discover + Why Choose ── */}
        <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 lg:py-28 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Discover */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/card/cards_all.png"
                  alt="GME Cards Collection"
                  width={1069}
                  height={540}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-3">
                  Powered by Mastercard
                </p>
                <h2 className="typo-section-title mb-4">
                  {t("why.title")}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {t("why.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit) => (
                    <span key={benefit.key} className="px-3.5 py-1.5 rounded-full bg-dark/[0.06] text-gray-600 text-[13px] font-medium">
                      {t(`why.${benefit.key}.title`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Choose - Benefits */}
            <div className="mt-16 lg:mt-24">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.key}
                    className="group rounded-xl p-6 text-center bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 will-change-transform transition-[transform,box-shadow,border-color] duration-200 fade-step"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-[15px] font-bold text-dark mb-1.5">
                      {t(`why.${benefit.key}.title`)}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {t(`why.${benefit.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Card Products Grid ── */}
        <section id="cards" ref={(el) => { sectionRefs.current[1] = el; }} className="py-16 lg:py-24 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Title */}
            <div className="relative text-center mb-10 lg:mb-12 overflow-visible">
              {/* 장식 요소 */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent to-primary/20 fade-step" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-l from-transparent to-primary/20 fade-step" />
                <div className="absolute left-[15%] top-0 w-1.5 h-1.5 rounded-full bg-primary/20 fade-step" />
                <div className="absolute right-[20%] top-2 w-1 h-1 rounded-full bg-primary/30 fade-step" />
                <div className="absolute left-[25%] bottom-0 w-1 h-1 rounded-full bg-gray-300 fade-step" />
                <div className="absolute right-[12%] bottom-1 w-1.5 h-1.5 rounded-full bg-gray-200 fade-step" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-4 fade-step">
                <span className="w-6 h-[2px] bg-primary/40 rounded-full" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="w-6 h-[2px] bg-primary/40 rounded-full" />
              </div>
              <h2 className="relative typo-section-title mb-5">
                {t("grid.title")}
              </h2>
              <p className="relative text-gray-500 max-w-2xl mx-auto text-sm">
                {t("grid.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 [&>*:nth-last-child(2)]:lg:col-start-1 [&>*:nth-last-child(2)]:lg:col-end-2 [&>*:nth-last-child(1)]:lg:col-start-2 [&>*:nth-last-child(1)]:lg:col-end-3">
              {cards.map((card, idx) => {
                const featureList: string[] = t(`cards.${card.key}.features`) as unknown as string[];
                const highlightFeatures = Array.isArray(featureList) ? featureList.slice(0, 3) : [];

                return (
                  <div
                    key={card.key}
                    className="bg-white rounded-xl border border-gray-200 p-4 lg:p-5 hover:shadow-md will-change-transform transition-shadow duration-200 fade-step"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="typo-card-title mb-0.5">
                          {card.displayName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {t(`cards.${card.key}.subtitle`)}
                        </p>
                      </div>
                      {card.key === "uniq" && (
                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                          Coming Soon
                        </span>
                      )}
                      {card.key === "black" && (
                        <span className="px-3 py-1 bg-gray-900 text-white text-xs font-bold rounded-full">
                          Sold Out
                        </span>
                      )}
                    </div>

                    {/* Card Image */}
                    <div className="relative mb-4 flex items-center justify-center py-5">
                      {/* 원형 배경 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 rounded-full bg-gray-100"></div>
                      </div>
                      {/* 카드 이미지 */}
                      <Image
                        src={card.image}
                        alt={`GME ${card.key} Card`}
                        width={450}
                        height={280}
                        className={`relative z-10 w-auto h-44 object-contain ${card.key === "uniq" ? "blur-[0.5px] opacity-80" : ""}`}
                        priority={idx === 0}
                      />
                      {/* Coming Soon 블러 오버레이 */}
                      {card.key === "uniq" && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                          <span className="text-xl font-extrabold uppercase tracking-[0.2em] text-dark/30 drop-shadow-sm">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1.5 mb-4">
                      {highlightFeatures.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-dark text-xs">•</span>
                          <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    {card.key === "uniq" ? (
                      <button
                        disabled
                        className="w-full py-2.5 text-xs font-semibold rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedCard(card.key)}
                        className="w-full py-2.5 text-xs font-semibold rounded-lg bg-gray-700 text-white transition-colors hover:bg-gray-800 cursor-pointer"
                      >
                        {t("grid.detail")}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      {/* Card Detail Modal */}
      {selectedCard && ["red", "black", "white", "easyG0"].includes(selectedCard) && (
        <CardDetailModal selectedCard={selectedCard} onClose={() => setSelectedCard(null)} />
      )}

    </PublicLayout>
  );
}
