"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PublicLayout from "@/components/layout/PublicLayout";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useTranslation } from "@/hooks/useTranslation";
import { RiSubwayLine } from "react-icons/ri";
import { cards, cardBenefitKeys, cardBenefitIconPaths } from "@/data/cards";

export default function CardPage() {
  const { t } = useTranslation("card");
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  useLenis();
  const sectionRefs = useScrollFadeIn();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedCard]);

  const benefits = cardBenefitKeys.map((key) => ({
    key,
    icon: key === "transit" ? (
      <RiSubwayLine className="w-9 h-9" />
    ) : (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={cardBenefitIconPaths[key]} />
      </svg>
    ),
    color: "#ed1c24",
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
                <h2 className="typo-heading mb-4">
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
                    className="group rounded-xl p-6 text-center bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 fade-step"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${benefit.color}1A`, color: benefit.color }}
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
              <h2 className="relative typo-heading mb-5">
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
                    className="bg-white rounded-xl border border-gray-200 p-4 lg:p-5 hover:shadow-lg transition-all duration-300 fade-step"
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
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            {/* Modal Header with Close Button */}
            <div className="sticky top-0 bg-white z-10 px-6 pt-6 pb-4 flex justify-end rounded-t-2xl">
              <button
                onClick={() => setSelectedCard(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Card Image Section */}
            <div className="px-6 pb-4">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[180px] mb-3">
                  <Image
                    src={cards.find(c => c.key === selectedCard)!.image}
                    alt={`GME ${selectedCard} Card`}
                    width={450}
                    height={280}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    style={{
                      filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.25))'
                    }}
                  />
                </div>
                <h2 className="typo-feature-title text-center mb-1">
                  {cards.find(c => c.key === selectedCard)?.displayName}
                </h2>
                <p className="text-xs text-gray-500 text-center">
                  {t(`cards.${selectedCard}.subtitle`)}
                </p>
                {selectedCard === "black" && (
                  <span className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 bg-gray-900 text-white text-xs font-bold rounded-full tracking-wide">
                    SOLD OUT
                  </span>
                )}
              </div>
            </div>

            <div className="h-px bg-gray-200 mx-6"></div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Main Benefits */}
              <section>
                <h3 className="typo-feature-title mb-4">
                  {t(`cards.${selectedCard}.details.mainBenefits.title`)}
                </h3>
                <div className="grid gap-4">
                  {(t(`cards.${selectedCard}.details.mainBenefits.items`) as unknown as any[]).map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-dark mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* User Guide */}
              <section>
                <h3 className="typo-feature-title mb-4">
                  {t(`cards.${selectedCard}.details.userGuide.title`)}
                </h3>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div>
                    <span className="font-semibold text-dark">{t("labels.qualification")}: </span>
                    <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.qualification`)}</span>
                  </div>
                  {selectedCard === "easyG0" ? (
                    <div>
                      <span className="font-semibold text-dark">{t("labels.monthly_fee")}: </span>
                      <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.monthlyFee`)}</span>
                    </div>
                  ) : (
                    <>
                      <div>
                        <span className="font-semibold text-dark">{t("labels.annual_fee")}: </span>
                        <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.annualFee`)}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-dark">{t("labels.charge_method")}: </span>
                        <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.chargeMethod`)}</span>
                      </div>
                    </>
                  )}
                  <div>
                    <span className="font-semibold text-dark">{t("labels.usage_limit")}: </span>
                    <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.limit`)}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">{t(`cards.${selectedCard}.details.userGuide.contact.center`)}</p>
                    <p className="text-sm text-gray-600">{t(`cards.${selectedCard}.details.userGuide.contact.website`)}</p>
                  </div>
                </div>
              </section>

              {/* Delivery */}
              <section>
                <h3 className="typo-feature-title mb-4">
                  {t(`cards.${selectedCard}.details.delivery.title`)}
                </h3>
                <div className="flex gap-3">
                  {(t(`cards.${selectedCard}.details.delivery.methods`) as unknown as string[]).map((method, idx) => (
                    <div key={idx} className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                      {method}
                    </div>
                  ))}
                </div>
              </section>

              {/* Cautions */}
              <section>
                <h3 className="typo-feature-title mb-4">
                  {t(`cards.${selectedCard}.details.cautions.title`)}
                </h3>
                <ul className="space-y-2">
                  {(t(`cards.${selectedCard}.details.cautions.items`) as unknown as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-dark mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Foreign Payment */}
              <section>
                <h3 className="typo-feature-title mb-4">
                  {t(`cards.${selectedCard}.details.foreignPayment.title`)}
                </h3>
                <ul className="space-y-2">
                  {(t(`cards.${selectedCard}.details.foreignPayment.items`) as unknown as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-dark mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Auto Payment */}
              <section>
                <h3 className="typo-feature-title mb-4">
                  {t(`cards.${selectedCard}.details.autoPayment.title`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`cards.${selectedCard}.details.autoPayment.desc`)}
                </p>
              </section>

              {/* Transit Card - easyG0 only */}
              {selectedCard === "easyG0" && (
                <section>
                  <h3 className="typo-feature-title mb-4">
                    {t("cards.easyG0.details.transitCard.title")}
                  </h3>
                  <div className="space-y-2 bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-dark">{t("labels.limit")}: </span>
                      {t("cards.easyG0.details.transitCard.limit")}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-dark">{t("labels.payment_time")}: </span>
                      {t("cards.easyG0.details.transitCard.paymentTime")}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-dark">{t("labels.availability")}: </span>
                      {t("cards.easyG0.details.transitCard.availability")}
                    </p>
                  </div>
                </section>
              )}

              {/* Card Status - easyG0 only */}
              {selectedCard === "easyG0" && (
                <section>
                  <h3 className="typo-feature-title mb-4">
                    {t("cards.easyG0.details.cardStatus.title")}
                  </h3>
                  <div className="space-y-3">
                    {(t("cards.easyG0.details.cardStatus.items") as unknown as any[]).map((item, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-semibold text-dark mb-1">{item.status}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* App Download CTA */}
              <div className="pt-4">
                {selectedCard === "black" ? (
                  <div className="text-center py-6 bg-gray-50 rounded-xl">
                    <p className="typo-card-title mb-1">{t("modal.sold_out_title")}</p>
                    <p className="text-sm text-gray-500">{t("modal.sold_out_desc")}</p>
                  </div>
                ) : (
                <>
                <p className="text-center text-sm text-gray-500 mb-3">{t("modal.app_guide")}</p>
                <div className="flex gap-3">
                  <a
                    href="https://apps.apple.com/us/app/gme-remit/id1439161261?l=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-dark text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
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
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-dark text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.49c-.56-.49-.88-1.29-.88-2.26V2.77c0-.97.32-1.77.88-2.26l.12-.05L14.1 11.3v.25L3.3 22.44l-.12.05zM17.75 15l-3.64-3.65L17.75 7.7l.13.07 4.33 2.46c1.24.7 1.24 1.85 0 2.55l-4.33 2.46-.13-.24zM14.1 11.3L3.3 1.51C3.72 1.09 4.38.98 5.14 1.42l11.63 6.63-2.67 3.25zM14.1 11.55l2.66 2.65L5.14 20.83c-.76.44-1.42.33-1.84-.25l10.8-9.03z" />
                    </svg>
                    Google Play
                  </a>
                </div>
                </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </PublicLayout>
  );
}
