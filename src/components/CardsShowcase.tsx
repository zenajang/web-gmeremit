"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type CardDef = {
  id: string;
  eyebrow: string;
  title: string;
  ctaHref: string;
  image: string;
};

const cardDefs: CardDef[] = [
  {
    id: "black",
    eyebrow: "PREMIUM",
    title: "Premium",
    ctaHref: "/services/card",
    image: "/images/card/Premium_front.png",
  },
  {
    id: "white",
    eyebrow: "THE WHITE",
    title: "The White",
    ctaHref: "/services/card",
    image: "/images/card/Pay_White_front.png",
  },
  {
    id: "red",
    eyebrow: "THE RED",
    title: "The Red",
    ctaHref: "/services/card",
    image: "/images/card/Pay_Red_front.png",
  },
  {
    id: "easyG0",
    eyebrow: "EASYGO",
    title: "EasyGo",
    ctaHref: "/services/card",
    image: "/images/card/EasyGo_front.png",
  },
];

const AUTO_DELAY = 3000;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function CardsShowcase() {
  const { t, tArray } = useTranslation("home.cards");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardDefs.length);
    }, AUTO_DELAY);
    return () => window.clearInterval(timer);
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
    <div className="grid gap-16 lg:min-h-[640px] lg:gap-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="flex h-full max-w-xl flex-col lg:justify-between">
        <p className="typo-eyebrow text-gray-400">{activeDef.eyebrow}</p>
        <h3 className="typo-section-title">{activeDef.title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed">{t(`${activeDef.id}.desc`)}</p>

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
          <Link
            href={activeDef.ctaHref}
            className="group inline-flex items-center gap-3 text-cards font-semibold bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-xl transition-colors cursor-pointer"
          >
            {t(`${activeDef.id}.cta`)}
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cards text-white transition-transform duration-300 group-hover:-rotate-45">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="relative h-[480px] pb-6 sm:h-[520px] lg:h-full lg:min-h-[640px]">
        {cardDefs.map((card, index) => {
          const offset = positions[index];
          if (Math.abs(offset) > 1) return null;
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const translateX = offset * 150;
          const translateY = absOffset === 0 ? 0 : absOffset * 30;
          const scale = isActive ? 1.06 : 0.65;
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
                className="w-full max-w-[260px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
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
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
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
    </div>
  );
}
