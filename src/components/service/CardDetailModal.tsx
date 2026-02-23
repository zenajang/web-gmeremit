"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { cards } from "@/data/cards";

interface CardDetailModalProps {
  selectedCard: string;
  onClose: () => void;
}

export default function CardDetailModal({ selectedCard, onClose }: CardDetailModalProps) {
  const { t } = useTranslation("card");

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const card = cards.find(c => c.key === selectedCard);
  if (!card) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        {/* Modal Header with Close Button */}
        <div className="sticky top-0 bg-white z-10 px-6 pt-6 pb-4 flex justify-end rounded-t-2xl">
          <button
            onClick={onClose}
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
                src={card.image}
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
              {card.displayName}
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
              {(t(`cards.${selectedCard}.details.mainBenefits.items`) as unknown as { title: string; desc: string }[]).map((item, idx) => (
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
                {(t("cards.easyG0.details.cardStatus.items") as unknown as { status: string; desc: string }[]).map((item, idx) => (
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
  );
}
