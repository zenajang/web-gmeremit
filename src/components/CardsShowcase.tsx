"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { cardDefs, type CardDef } from "@/data/cardsShowcase";
import CTAButton from "@/components/ui/CTAButton";

const AUTO_DELAY = 3000;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function CardsShowcase() {
  const { t, tArray } = useTranslation("home.cards");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const shouldAutoPlay = () => mediaQuery.matches;

    let timer: number | null = null;
    const start = () => {
      if (timer !== null) return;
      timer = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cardDefs.length);
      }, AUTO_DELAY);
    };
    const stop = () => {
      if (timer === null) return;
      window.clearInterval(timer);
      timer = null;
    };

    const sync = () => {
      const isDesktop = mediaQuery.matches;
      setIsMobile(!isDesktop);
      if (isDesktop) start();
      else stop();
    };

    sync();
    mediaQuery.addEventListener("change", sync);

    return () => {
      stop();
      mediaQuery.removeEventListener("change", sync);
    };
  }, []);

  const activeDef = cardDefs[activeIndex];
  const highlights = tArray(`${activeDef.id}.highlights`);

  const positions = useMemo(() => {
    return cardDefs.map((_: CardDef, index: number) => {
      const rawOffset = index - activeIndex;
      const wrappedOffset = mod(rawOffset + cardDefs.length + 1, cardDefs.length) - 1;
      return wrappedOffset;
    });
  }, [activeIndex]);

  return (
    <div className="grid gap-6 sm:gap-16 lg:min-h-[640px] lg:gap-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      {!isMobile && (
        <div className="flex h-full max-w-xl flex-col lg:justify-between">
          <p className="typo-eyebrow text-gray-400">{activeDef.eyebrow}</p>
          <h3 className="typo-section-title">{activeDef.title}</h3>
        <p className="typo-section-subtitle text-gray-600">{t(`${activeDef.id}.desc`)}</p>

          <div className="grid gap-3 mt-3">
            {highlights.map((text: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-gray-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-900 text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <CTAButton
              href={activeDef.ctaHref}
              label={t(`${activeDef.id}.cta`)}
              className="text-cards bg-gray-200 hover:bg-gray-300"
              iconClassName="bg-cards"
            />
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex h-full max-w-xl flex-col items-left text-left">
          <p className="typo-eyebrow text-gray-400 mb-2">{activeDef.eyebrow}</p>
          <h3 className="typo-section-title mb-5">{activeDef.title}</h3>
          <p className="typo-section-subtitle text-gray-600">{t(`${activeDef.id}.desc`)}</p>
        </div>
      )}

      <div className="relative h-[220px] pb-10 sm:pb-1 sm:h-[520px] lg:h-full lg:min-h-[640px]">
        {cardDefs.map((card, index) => {
          const offset = positions[index];
          if (Math.abs(offset) > 1) return null;
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const translateX = offset * (isMobile ? 80 : 150);
          const translateY = absOffset === 0 ? 0 : absOffset * (isMobile ? 16 : 30);
          const scale = isActive ? (isMobile ? 0.6 : 1) : (isMobile ? 0.38 : 0.65);
          const opacity = isActive ? 1 : 0.5;
          const rotation = offset === 0 ? 0 : Math.sign(offset) * (3 + absOffset * 1.5);
          const zIndex = 30 - absOffset;
          const imageProps = isActive ? { priority: true } : { loading: "lazy" as const };

          return (
            <div
              key={card.id}
              className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-[800ms] ease-out"
              style={{ zIndex, opacity }}
              aria-hidden={!isActive}
            >
              <div
                className="w-full max-w-[220px] sm:max-w-[260px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
                }}
              >
                <Image
                  src={card.image}
                  alt={`${card.title} ${t("image_alt")}`}
                  width={360}
                  height={480}
                  {...imageProps}
                />
              </div>
            </div>
          );
        })}
        <div className="absolute -bottom-8 sm:bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 z-40">
          {cardDefs.map((card, index) => (
            <button
              key={card.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 cursor-pointer rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show ${card.title}`}
            />
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="flex h-full max-w-xl flex-col items-center text-center">
          <div className="grid gap-3 mt-8 w-full">
            {highlights.map((text: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-gray-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gray-900 text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 w-full">
            <CTAButton
              href={activeDef.ctaHref}
              label={t(`${activeDef.id}.cta`)}
              className="text-cards bg-gray-200 hover:bg-gray-300"
              iconClassName="bg-cards"
            />
          </div>
        </div>
      )}
    </div>
  );
}
