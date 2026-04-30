"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import CTAButton from "@/components/ui/CTAButton";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiSimCard } from "react-icons/pi";
import { TbMoneybag } from "react-icons/tb";


const cards = [
  { icon: <PiSimCard className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />, titleKey: "usim", color: "from-mobile to-mobile-light" },
  { icon: <HiOutlineDevicePhoneMobile className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />, titleKey: "esim", color: "from-mobile-light to-mobile-lighter" },
  { icon: <TbMoneybag className="w-5 h-5 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />, titleKey: "plans", color: "from-mobile-lighter to-mobile-lightest" },
] as const;

export default function MobileSection() {
  const { t } = useTranslation("telecom");
  const containerRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setAnimate(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes cardBounce {
          0%, 8%, 100% { transform: translateY(0); }
          3% { transform: translateY(-12px); }
          6% { transform: translateY(-3px); }
        }
        @media (min-width: 1024px) {
          .mobile-card {
            height: var(--h-desktop) !important;
          }
        }
      `}</style>
      <section id="gme-mobile" className="relative overflow-x-clip overflow-y-visible flex items-center snap-section lg:min-h-[calc(100svh-var(--header-height))] py-10 sm:py-12 lg:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-[#f5f0ff] to-[#ede9fe]" />
        <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-mobile/[0.04] blur-3xl" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-mobile/[0.05] blur-3xl" />

        <div className="relative w-full max-w-content mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-[calc(100svh-var(--header-height))] flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-20 items-center">
            {/* Left - Tall cards side by side */}
            <div ref={containerRef} className="relative flex items-end justify-center gap-3 sm:gap-4 py-4 sm:py-8 min-h-[180px] sm:min-h-[280px] lg:min-h-[340px] order-2 lg:order-1">
              {cards.map((card, idx) => (
                <div
                  key={card.titleKey}
                  className="mobile-card relative rounded-2xl bg-white border border-gray-100 p-3 sm:p-5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 w-[calc(33%-8px)] sm:w-36 lg:w-40"
                  style={{
                    // @ts-expect-error CSS custom properties
                    '--h-mobile': `${160 + idx * 25}px`,
                    '--h-desktop': `${260 + idx * 40}px`,
                    height: 'var(--h-mobile)',
                    boxShadow: `0 ${12 + idx * 4}px ${30 + idx * 8}px rgba(91,33,182,${0.07 + idx * 0.03})`,
                    animation: animate ? `cardBounce 6s ease-in-out ${idx * 0.4}s infinite` : "none",
                  }}
                >
                  <div className={`w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 mt-auto shadow-lg`}>
                    {card.icon}
                  </div>
                  <h3 className="text-[11px] sm:text-sm lg:text-base font-bold text-dark mt-2 sm:mt-4 mb-0.5 sm:mb-1">
                    {t(`features.${card.titleKey}.title`)}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-gray-500 leading-relaxed mb-auto">
                    {t(`features.${card.titleKey}.description`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Right - Text + CTA */}
            <div className="order-1 lg:order-2">
              <p className="typo-eyebrow text-mobile mb-3">GME MOBILE</p>
              <h2 className="typo-section-title mb-3 lg:mb-5">
                {t("hero.title1")} <span className="text-mobile">{t("hero.title2")}</span>
              </h2>
              <p className="typo-section-subtitle text-gray-600 mb-3 sm:mb-5 lg:mb-8 break-keep">
                {t("hero.description")}
              </p>
              <CTAButton
                href="/services/telecom"
                label={t("hero.cta")}
                className="text-mobile bg-mobile/10 hover:bg-mobile/20"
                iconClassName="bg-mobile"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
