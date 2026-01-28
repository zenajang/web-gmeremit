"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";

type HighlightIcon = "charge" | "payment" | "notification" | "currency" | "rate" | "lock" | "limit" | "share" | "chart" | "team" | "connect" | "policy";

type HighlightItem = {
  text: string;
  icon: HighlightIcon;
};

type CardItem = {
  id: string;
  eyebrow: string;
  title: string;
  desc: string;
  highlights: HighlightItem[];
  ctaLabel: string;
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
};

const cards: CardItem[] = [
  {
    id: "remit",
    eyebrow: "GLOBAL REMIT",
    title: "송금 전용 카드",
    desc: "송금 잔액을 바로 카드로 연결해 국내외 어디서든 안전하게 사용할 수 있습니다.",
    highlights: [
      { text: "송금 잔액 즉시 충전", icon: "charge" },
      { text: "온라인/오프라인 결제", icon: "payment" },
      { text: "사용 내역 실시간 알림", icon: "notification" },
    ],
    ctaLabel: "송금 카드 소개 보기",
    ctaHref: "/personal/gme-card",
    image: "/images/card/black.png",
  },
  {
    id: "travel",
    eyebrow: "TRAVEL READY",
    title: "해외 결제 카드",
    desc: "해외 결제와 환전 수수료를 줄이고, 여행 중에도 지출을 투명하게 관리합니다.",
    highlights: [
      { text: "멀티 통화 결제", icon: "currency" },
      { text: "환율 우대 구간", icon: "rate" },
      { text: "분실 시 즉시 잠금", icon: "lock" },
    ],
    ctaLabel: "해외 결제 카드 보기",
    ctaHref: "/personal/gme-card",
    image: "/images/card/white.png",
  },
  {
    id: "team",
    eyebrow: "TEAM CONTROL",
    title: "가족/팀 카드",
    desc: "가족이나 팀원에게 카드 권한을 나눠주고, 한 곳에서 한도와 사용 내역을 관리하세요.",
    highlights: [
      { text: "카드별 한도 설정", icon: "limit" },
      { text: "카드 권한 공유", icon: "share" },
      { text: "지출 카테고리 분석", icon: "chart" },
    ],
    ctaLabel: "가족/팀 카드 보기",
    ctaHref: "/personal/gme-card",
    image: "/images/card/red.png",
  },
  {
    id: "business",
    eyebrow: "BUSINESS FLOW",
    title: "비즈니스 카드",
    desc: "정산과 지급을 하나의 흐름으로 연결하고, 팀 단위로 카드 지출을 통제할 수 있습니다.",
    highlights: [
      { text: "팀별 카드 발급", icon: "team" },
      { text: "지급/정산 연동", icon: "connect" },
      { text: "승인 정책 설정", icon: "policy" },
    ],
    ctaLabel: "비즈니스 카드 보기",
    ctaHref: "/business",
    image: "/images/card/uniq.png",
  },
];

const AUTO_DELAY = 8600;

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function CardsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, AUTO_DELAY);
    return () => window.clearInterval(timer);
  }, []);

  const activeCard = cards[activeIndex];

  const positions = useMemo(() => {
    return cards.map((_, index) => {
      const rawOffset = index - activeIndex;
      const wrappedOffset = mod(rawOffset + cards.length + 1, cards.length) - 1;
      return wrappedOffset;
    });
  }, [activeIndex]);

  return (
    <div className="grid gap-16 lg:min-h-[550px] lg:gap-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <div className="flex h-full max-w-xl flex-col lg:justify-between">
        <p className="text-xs font-semibold tracking-[0.32em] text-gray-400">{activeCard.eyebrow}</p>
        <h3 className="text-4xl sm:text-5xl font-bold text-[#191c1f] leading-[1.08]">{activeCard.title}</h3>
        <p className="text-xl text-gray-600 leading-relaxed">{activeCard.desc}</p>

        <div className="grid gap-3 mt-3">
          {activeCard.highlights.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-white px-4 py-3 text-sm text-gray-700 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#374151] to-[#1f2937] text-white shadow-[0_4px_12px_rgba(55,65,81,0.3)]">
                {highlightIcons[item.icon]}
              </span>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Link
            href={activeCard.ctaHref}
            className="group inline-flex items-center gap-3 text-[#374151] font-semibold bg-[#e5e7eb] hover:bg-[#d1d5db] px-5 py-3 rounded-xl transition-colors cursor-pointer"
          >
            {activeCard.ctaLabel}
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#374151] text-white transition-transform duration-300 group-hover:-rotate-45">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <div className="relative h-[420px] pb-6 sm:h-[460px] lg:h-full lg:min-h-[560px]">
        {cards.map((card, index) => {
          const offset = positions[index];
          if (Math.abs(offset) > 1) return null;
          const isActive = offset === 0;
          const absOffset = Math.abs(offset);
          const translateX = offset * 100;
          const translateY = absOffset === 0 ? 0 : 0 + absOffset * 55;
          const scale = isActive ? 1.06 : 0.78 - Math.min(absOffset, 2) * 0.08;
          const opacity = isActive ? 1 : 0.32;
          const baseTilt = index % 2 === 0 ? -1 : 1;
          const rotation = offset === 0 ? 0 : baseTilt * (8 + absOffset * 2);
          const zIndex = 30 - absOffset;
          const imageProps = isActive ? { priority: true } : { loading: "lazy" as const };

          return (
            <div
              key={card.id}
              className="pointer-events-none absolute inset-0 flex items-center justify-center px-4"
              style={{ zIndex, opacity }}
              aria-hidden={!isActive}
            >
              <div
                className="w-full max-w-[460px] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotation}deg)`,
                }}
              >
                <Image
                  src={card.image}
                  alt={`${card.title} 카드 이미지`}
                  width={520}
                  height={700}
                  {...imageProps}
                />
              </div>
            </div>
          );
        })}
        <div className="absolute top-133 left-1/2 flex -translate-x-1/2 items-center gap-3">
          {cards.map((card, index) => (
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
