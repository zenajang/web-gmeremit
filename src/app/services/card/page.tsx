"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { useTranslation } from "@/hooks/useTranslation";
import { RiSubwayLine } from "react-icons/ri";

export default function CardPage() {
  const { t } = useTranslation("card");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCard) {
      // Simple overflow hidden approach
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

  // Scroll fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const steps = document.querySelectorAll(".fade-step");
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    steps.forEach((el) => stepObserver.observe(el));

    return () => {
      observer.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  const cards = [
    {
      key: "red",
      image: "/images/card/Pay_Red_front.png",
      color: "#ed1c24",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
        {
      key: "white",
      image: "/images/card/Pay_White_front.png",
      color: "#9ca3af",
      bg: "bg-gradient-to-br from-[#1f2937] to-[#374151]",
    },
    {
      key: "easyG0",
      image: "/images/card/EasyGo_front.png",
      color: "#4b5563",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      key: "black",
      image: "/images/card/Premium_front.png",
      color: "#1f2937",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },

    {
      key: "uniq",
      image: "/images/card/Uniq_front.png",
      color: "#ed1c24",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
  ];

  const benefits = [
    {
      key: "atm",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "transit",
      icon: <RiSubwayLine className="w-9 h-9" />,
      color: "#ed1c24",
    },
    {
      key: "global",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "everywhere",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "cashback",
      icon: (
        <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      color: "#ed1c24",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-gradient-to-b from-white via-white to-gray-100">

        {/* ── Page Header ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937]/[0.12] via-[#f5f5f5] to-[#ed1c24]/[0.14]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-[#ed1c24] tracking-wide uppercase mb-3">
                  {t("hero.badge")}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#191c1f] leading-tight mb-3">
                  {t("hero.title1")} <span className="text-[#ed1c24]">{t("hero.title2")}</span>
                </h1>
                <p className="text-gray-500 max-w-lg">
                  {t("hero.description")}
                </p>
              </div>
              <a
                href="#cards"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ed1c24] text-white text-sm font-semibold rounded-lg hover:bg-[#c41920] transition-colors shrink-0"
              >
                {t("hero.cta")}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

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
                <p className="text-sm font-semibold text-[#ed1c24] tracking-wide uppercase mb-3">
                  Powered by Mastercard
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-4">
                  {t("why.title")}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {t("why.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {benefits.map((benefit) => (
                    <span key={benefit.key} className="px-3.5 py-1.5 rounded-full bg-[#191c1f]/[0.06] text-[#555] text-[13px] font-medium">
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
                    className="group rounded-xl p-6 text-center bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#ed1c24]/30 hover:-translate-y-1 transition-all duration-300 fade-step"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${benefit.color}1A`, color: benefit.color }}
                    >
                      {benefit.icon}
                    </div>
                    <h3 className="text-[15px] font-bold text-[#191c1f] mb-1.5">
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
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-r from-transparent to-[#ed1c24]/20 fade-step" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-[2px] bg-gradient-to-l from-transparent to-[#ed1c24]/20 fade-step" />
                <div className="absolute left-[15%] top-0 w-1.5 h-1.5 rounded-full bg-[#ed1c24]/20 fade-step" />
                <div className="absolute right-[20%] top-2 w-1 h-1 rounded-full bg-[#ed1c24]/30 fade-step" />
                <div className="absolute left-[25%] bottom-0 w-1 h-1 rounded-full bg-gray-300 fade-step" />
                <div className="absolute right-[12%] bottom-1 w-1.5 h-1.5 rounded-full bg-gray-200 fade-step" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-4 fade-step">
                <span className="w-6 h-[2px] bg-[#ed1c24]/40 rounded-full" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed1c24]" />
                <span className="w-6 h-[2px] bg-[#ed1c24]/40 rounded-full" />
              </div>
              <h2 className="relative text-2xl lg:text-3xl font-bold text-[#191c1f] mb-5">
                원하는 혜택을 선택하세요
              </h2>
              <p className="relative text-gray-500 max-w-2xl mx-auto text-sm">
                다양한 GME 카드 중 나에게 맞는 혜택을 찾아보세요
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
                        <h3 className="text-base lg:text-lg font-bold text-[#191c1f] mb-0.5">
                          {t(`cards.${card.key}.name`)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {t(`cards.${card.key}.subtitle`)}
                        </p>
                      </div>
                      {card.key === "uniq" && (
                        <span className="px-3 py-1 bg-[#ed1c24] text-white text-xs font-bold rounded-full">
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
                          <span className="text-xl font-extrabold uppercase tracking-[0.2em] text-[#191c1f]/30 drop-shadow-sm">
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-1.5 mb-4">
                      {highlightFeatures.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5">
                          <span className="text-[#191c1f] text-xs">•</span>
                          <span className="text-xs text-[#444] leading-relaxed">{feature}</span>
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
                        className="w-full py-2.5 text-xs font-semibold rounded-lg transition-colors hover:opacity-90 cursor-pointer"
                        style={{
                          backgroundColor: card.color,
                          color: "#fff",
                        }}
                      >
                        자세히 보기
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

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
                <h2 className="text-lg lg:text-xl font-bold text-[#191c1f] text-center mb-1">
                  {t(`cards.${selectedCard}.name`)}
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
                <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                  {t(`cards.${selectedCard}.details.mainBenefits.title`)}
                </h3>
                <div className="grid gap-4">
                  {(t(`cards.${selectedCard}.details.mainBenefits.items`) as unknown as any[]).map((item, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4">
                      <h4 className="font-semibold text-[#191c1f] mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* User Guide */}
              <section>
                <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                  {t(`cards.${selectedCard}.details.userGuide.title`)}
                </h3>
                <div className="space-y-3 bg-gray-50 rounded-xl p-4">
                  <div>
                    <span className="font-semibold text-[#191c1f]">자격: </span>
                    <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.qualification`)}</span>
                  </div>
                  {selectedCard === "easyG0" ? (
                    <div>
                      <span className="font-semibold text-[#191c1f]">월회비: </span>
                      <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.monthlyFee`)}</span>
                    </div>
                  ) : (
                    <>
                      <div>
                        <span className="font-semibold text-[#191c1f]">연회비: </span>
                        <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.annualFee`)}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#191c1f]">충전방법: </span>
                        <span className="text-gray-600">{t(`cards.${selectedCard}.details.userGuide.chargeMethod`)}</span>
                      </div>
                    </>
                  )}
                  <div>
                    <span className="font-semibold text-[#191c1f]">사용한도: </span>
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
                <h3 className="text-xl font-bold text-[#191c1f] mb-4">
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
                <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                  {t(`cards.${selectedCard}.details.cautions.title`)}
                </h3>
                <ul className="space-y-2">
                  {(t(`cards.${selectedCard}.details.cautions.items`) as unknown as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#191c1f] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Foreign Payment */}
              <section>
                <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                  {t(`cards.${selectedCard}.details.foreignPayment.title`)}
                </h3>
                <ul className="space-y-2">
                  {(t(`cards.${selectedCard}.details.foreignPayment.items`) as unknown as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-[#191c1f] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Auto Payment */}
              <section>
                <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                  {t(`cards.${selectedCard}.details.autoPayment.title`)}
                </h3>
                <p className="text-sm text-gray-600">
                  {t(`cards.${selectedCard}.details.autoPayment.desc`)}
                </p>
              </section>

              {/* Transit Card - easyG0 only */}
              {selectedCard === "easyG0" && (
                <section>
                  <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                    {t("cards.easyG0.details.transitCard.title")}
                  </h3>
                  <div className="space-y-2 bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-[#191c1f]">한도: </span>
                      {t("cards.easyG0.details.transitCard.limit")}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-[#191c1f]">결제 시점: </span>
                      {t("cards.easyG0.details.transitCard.paymentTime")}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-[#191c1f]">사용 가능: </span>
                      {t("cards.easyG0.details.transitCard.availability")}
                    </p>
                  </div>
                </section>
              )}

              {/* Card Status - easyG0 only */}
              {selectedCard === "easyG0" && (
                <section>
                  <h3 className="text-xl font-bold text-[#191c1f] mb-4">
                    {t("cards.easyG0.details.cardStatus.title")}
                  </h3>
                  <div className="space-y-3">
                    {(t("cards.easyG0.details.cardStatus.items") as unknown as any[]).map((item, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg p-3">
                        <h4 className="font-semibold text-[#191c1f] mb-1">{item.status}</h4>
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
                    <p className="text-lg font-bold text-[#191c1f] mb-1">재고가 모두 소진되었습니다</p>
                    <p className="text-sm text-gray-500">많은 관심에 감사드립니다. 다른 카드를 확인해보세요.</p>
                  </div>
                ) : (
                <>
                <p className="text-center text-sm text-gray-500 mb-3">카드 신청은 GME 앱에서 가능합니다</p>
                <div className="flex gap-3">
                  <a
                    href="https://apps.apple.com/us/app/gme-remit/id1439161261?l=ko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#191c1f] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
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
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#191c1f] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
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

      <Footer />
    </>
  );
}
