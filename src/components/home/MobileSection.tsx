"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import CTAButton from "@/components/ui/CTAButton";

const cards = [
  { icon: "📦", titleKey: "usim", color: "from-[#5b21b6] to-[#7c3aed]" },
  { icon: "📱", titleKey: "esim", color: "from-[#7c3aed] to-[#8b5cf6]" },
  { icon: "💰", titleKey: "plans", color: "from-[#8b5cf6] to-[#a78bfa]" },
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
      `}</style>
      <section id="gme-mobile" className="relative overflow-hidden flex items-center snap-section lg:min-h-screen py-10 sm:py-12 lg:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-[#f5f0ff] to-[#ede9fe]" />
        <div className="hidden lg:block absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5b21b6]/[0.04] blur-3xl" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#5b21b6]/[0.05] blur-3xl" />

        <div className="relative w-full max-w-content mx-auto px-4 sm:px-6 lg:px-8 lg:min-h-screen flex items-center">
          <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left - Tall cards side by side */}
            <div ref={containerRef} className="relative flex items-end justify-center gap-3 sm:gap-4 py-8 min-h-[240px] sm:min-h-[320px] lg:min-h-[340px]">
              {cards.map((card, idx) => (
                <div
                  key={card.titleKey}
                  className="relative rounded-2xl bg-white border border-gray-100 p-4 sm:p-5 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 w-28 sm:w-36 lg:w-40"
                  style={{
                    height: `${260 + idx * 40}px`,
                    boxShadow: `0 ${12 + idx * 4}px ${30 + idx * 8}px rgba(91,33,182,${0.07 + idx * 0.03})`,
                    animation: animate ? `cardBounce 6s ease-in-out ${idx * 0.4}s infinite` : "none",
                  }}
                >
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-3xl sm:text-4xl shrink-0 mt-auto shadow-lg`}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-dark mt-4 mb-1">
                    {t(`features.${card.titleKey}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-auto">
                    {t(`features.${card.titleKey}.description`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Right - Text + CTA */}
            <div>
              <p className="typo-eyebrow text-[#5b21b6] mb-3">GME MOBILE</p>
              <h2 className="typo-section-title mb-5">
                {t("hero.title1")} <span className="text-[#5b21b6]">{t("hero.title2")}</span>
              </h2>
              <p className="typo-section-subtitle text-gray-600 mb-5 sm:mb-8">
                {t("hero.description")}
              </p>
              <CTAButton
                href="/services/telecom"
                label={t("hero.cta")}
                className="text-[#5b21b6] bg-[#5b21b6]/10 hover:bg-[#5b21b6]/20"
                iconClassName="bg-[#5b21b6]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
