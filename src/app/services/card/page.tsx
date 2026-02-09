"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { useTranslation } from "@/hooks/useTranslation";

export default function CardPage() {
  const { t } = useTranslation("card");
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      infinite: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

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
      image: "/images/card/red.png",
      color: "#ed1c24",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      key: "black",
      image: "/images/card/black.png",
      color: "#1f2937",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
    {
      key: "white",
      image: "/images/card/white.png",
      color: "#6b7280",
      bg: "bg-gradient-to-br from-[#1f2937] to-[#374151]",
    },
    {
      key: "uniq",
      image: "/images/card/uniq.png",
      color: "#ed1c24",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
  ];

  const benefits = [
    {
      key: "atm",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "transit",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "global",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "everywhere",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
        </svg>
      ),
      color: "#ed1c24",
    },
    {
      key: "cashback",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      color: "#ed1c24",
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] bg-white min-h-screen">

        {/* ── Page Header ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937]/[0.05] via-white to-[#ed1c24]/[0.06]" />

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
                    className="group rounded-2xl p-6 text-center bg-white border border-gray-100 hover:shadow-xl hover:border-[#ed1c24]/20 hover:-translate-y-1 transition-all duration-300 fade-step"
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${benefit.color}12`, color: benefit.color }}
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

        {/* ── Card Products ── */}
        <section id="cards" ref={(el) => { sectionRefs.current[1] = el; }} className="py-24 lg:py-32 fade-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-28 lg:space-y-36">
              {cards.map((card, idx) => {
                const isEven = idx % 2 === 1;
                const featureList: string[] = t(`cards.${card.key}.features`) as unknown as string[];

                return (
                  <div
                    key={card.key}
                    className={`flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 fade-step`}
                  >
                    {/* Card Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-3xl blur-2xl opacity-20"
                          style={{ backgroundColor: card.color }}
                        />
                        <div className={`relative rounded-3xl overflow-hidden ${card.bg} p-8 lg:p-12`}>
                          <Image
                            src={card.image}
                            alt={`GME ${card.key} Card`}
                            width={1012}
                            height={1032}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority={idx === 0}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Card Info */}
                    <div className="w-full lg:w-1/2">
                      <h2
                        className="text-2xl lg:text-3xl font-bold mb-2"
                        style={{ color: card.color }}
                      >
                        {t(`cards.${card.key}.name`)}
                      </h2>
                      <p className="text-lg font-semibold text-[#191c1f] mb-4">
                        {t(`cards.${card.key}.subtitle`)}
                      </p>
                      <p className="text-gray-500 leading-relaxed mb-8">
                        {t(`cards.${card.key}.description`)}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {Array.isArray(featureList) && featureList.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: card.color }}
                            />
                            <span className="text-[15px] text-[#444]">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-colors"
                        style={{
                          backgroundColor: card.color,
                          color: "#fff",
                        }}
                      >
                        {t(`cards.${card.key}.cta`)}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
