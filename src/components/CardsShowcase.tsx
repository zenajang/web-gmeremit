"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type HighlightIcon = "charge" | "payment" | "notification" | "currency" | "rate" | "lock" | "limit" | "share" | "chart" | "team" | "connect" | "policy" | "cashback" | "transport" | "design" | "gift";

type CardDef = {
  id: string;
  eyebrow: string;
  title: string;
  highlightIcons: HighlightIcon[];
  ctaHref: string;
  image: string;
};

const highlightIcons: Record<HighlightIcon, ReactNode> = {
  charge: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  payment: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  notification: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  currency: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  rate: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  lock: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  limit: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  share: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  chart: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    </svg>
  ),
  team: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  connect: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  policy: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  cashback: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
    </svg>
  ),
  transport: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 17a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zM6 3h12l2 5v9a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1V8l2-5zm0 5h12M9 3v5m6-5v5" />
    </svg>
  ),
  design: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  ),
  gift: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
};

const cardDefs: CardDef[] = [
  {
    id: "black",
    eyebrow: "PREMIUM",
    title: "Premium",
    highlightIcons: ["currency", "cashback", "payment", "gift"],
    ctaHref: "/services/card",
    image: "/images/card/Premium_front.png",
  },
  {
    id: "white",
    eyebrow: "THE WHITE",
    title: "The White",
    highlightIcons: ["cashback", "payment", "gift", "transport"],
    ctaHref: "/services/card",
    image: "/images/card/Pay_White_front.png",
  },
  {
    id: "red",
    eyebrow: "THE RED",
    title: "The Red",
    highlightIcons: ["cashback", "payment", "gift", "transport"],
    ctaHref: "/services/card",
    image: "/images/card/Pay_Red_front.png",
  },
  {
    id: "easyG0",
    eyebrow: "EASYGO",
    title: "EasyGo",
    highlightIcons: ["transport", "cashback", "payment", "gift"],
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
        <p className="text-xs font-semibold tracking-[0.32em] text-gray-400">{activeDef.eyebrow}</p>
        <h3 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08]">{activeDef.title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed">{t(`${activeDef.id}.desc`)}</p>

        <div className="grid gap-3 mt-3">
          {highlights.map((text: string, i: number) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border border-[var(--border-soft)] bg-white px-5 py-4 text-sm text-gray-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#374151] to-[#1f2937] text-white shadow-[0_4px_12px_rgba(55,65,81,0.3)]">
                {highlightIcons[activeDef.highlightIcons[i]]}
              </span>
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Link
            href={activeDef.ctaHref}
            className="group inline-flex items-center gap-3 text-[#374151] font-semibold bg-[#e5e7eb] hover:bg-[#d1d5db] px-5 py-3 rounded-xl transition-colors cursor-pointer"
          >
            {t(`${activeDef.id}.cta`)}
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#374151] text-white transition-transform duration-300 group-hover:-rotate-45">
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
                index === activeIndex ? "w-8 bg-[#ed1c24]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show ${card.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
