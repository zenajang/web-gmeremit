"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import CompanyTabs from "@/components/CompanyTabs";
import { useEffect, useLayoutEffect, useRef, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";
import { historyData } from "@/data/history";

export default function HistoryPage() {
  const { t } = useTranslation("company.history");
  const [activeYear, setActiveYear] = useState("2024");
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  const pathname = usePathname();
  const yearRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const currentEventIndexRef = useRef(0);
  const scrollRafRef = useRef<number | null>(null);

  // 경로 변경 시 항상 맨 위로
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useLenis([pathname]);

  // history-snap 클래스 관리
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("history-snap");
    return () => {
      root.classList.remove("history-snap");
    };
  }, [pathname]);

  // 전체 이벤트 리스트 생성
  const allEvents = useMemo(() =>
    historyData.flatMap((yearData) =>
      yearData.events.map((_, eventIndex) => `${yearData.year}-${eventIndex}`)
    ), []
  );

  // currentEventIndex가 변경될 때 ref 업데이트
  useEffect(() => {
    currentEventIndexRef.current = currentEventIndex;
  }, [currentEventIndex]);

  // 기본 스크롤 유지 + 스크롤 위치로 현재 이벤트 업데이트
  useEffect(() => {

    const updateActiveByScroll = () => {
      const viewportCenter = window.innerHeight / 2 + 50;
      let closestIndex = currentEventIndexRef.current;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < allEvents.length; i += 1) {
        const key = allEvents[i];
        const el = eventRefs.current[key];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      }

      if (closestIndex !== currentEventIndexRef.current) {
        currentEventIndexRef.current = closestIndex;
        setCurrentEventIndex(closestIndex);
      }
    };

    const handleScroll = () => {
      if (scrollRafRef.current !== null) return;
      scrollRafRef.current = window.requestAnimationFrame(() => {
        updateActiveByScroll();
        scrollRafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const timer = setTimeout(updateActiveByScroll, 120);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      if (scrollRafRef.current !== null) {
        cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = null;
      }
    };
  }, [allEvents]);

  // 현재 인덱스에 따라 activeEvent 업데이트
  useEffect(() => {
    const eventKey = allEvents[currentEventIndex];
    if (eventKey) {
      setActiveEvent(eventKey);
      const [year] = eventKey.split('-');
      setActiveYear(year);
    }
  }, [currentEventIndex, allEvents]);

  // 페이지 로드 시 자동 스크롤 비활성화 (헤더-탭 간격 유지)

  return (
    <>
      <style jsx global>{`
        html.history-snap {
          /* scroll-snap 비활성화 - Lenis가 완전히 제어 */
        }
        .snap-center {
          /* snap 제거 */
        }
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeSoftIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <PublicLayout className="bg-white">
        <div className="pt-10 sm:pt-16 lg:pt-20">
          {/* History Section */}
          <section className="pb-[10vh]" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Navigation Tabs */}
              <CompanyTabs activeTab="history" />

              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0 lg:gap-16">
              {/* Left - Sticky Year Display */}
              <div className="lg:sticky lg:top-[160px] lg:h-fit">
                {/* 타이틀 & 년도 영역 */}
                <div className="relative p-3 pb-0 sm:p-8 lg:p-10 mb-0 sm:mb-8">
                  {/* 장식용 작은 이미지 */}
                  <div className="absolute top-3 right-5 w-32 h-20 lg:w-64 lg:h-45 rounded-md overflow-hidden shadow-lg opacity-90">
                    <img
                      src="/images/branch_bg.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="relative z-10 typo-heading leading-tight mb-6">
                    {t("title_line1")}<br />{t("title_line2")}
                  </h3>

                  {/* Large Year Number with accent */}
                  <div className="relative">
                    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-primary to-primary/20 rounded-full" />
                    <span
                      key={activeYear}
                      className="block text-[60px] sm:text-[100px] lg:text-[140px] font-black text-dark leading-none tracking-tighter transition-all duration-500"
                    >
                      {activeYear}
                    </span>
                  </div>

                  {/* Since Badge */}
                  <div className="mt-3 sm:mt-6 flex items-baseline gap-2 ml-6 sm:ml-16 italic">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-400">since</span>
                    <span className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-300">2016</span>
                  </div>
                </div>
                {/* Active Event Images */}
                {activeEvent && (() => {
                  const [year, eventIndex] = activeEvent.split('-');
                  const yearData = historyData.find(y => y.year === year);
                  const event = yearData?.events[parseInt(eventIndex)];
                  return event?.images && event.images.length > 0 ? (
                    <div className={`hidden lg:block mt-10 space-y-4 ${event.images.length > 1 ? 'max-w-[580px]' : 'max-w-[270px]'}`}>
                      {/* Visual Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/40 rounded-full" />
                        <span className="text-md font-semibold text-primary tracking-wider">{year}. {event.month}</span>
                      </div>

                      {event.images.length > 1 ? (
                        <div className="flex gap-3 w-full animate-[fadeSoftIn_0.8s_ease-out_forwards]" style={{ opacity: 0 }}>
                          {event.images.map((imageSrc, idx) => {
                            return (
                              <div
                                key={`${activeEvent}-${idx}`}
                                className="group relative flex-1 transition-all duration-500"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                              >
                                <div className="relative w-full overflow-visible transition-all duration-300 hover:scale-[1.02]">
                                  <img
                                    src={imageSrc}
                                    alt={`${t(`events.${event.textKey}`)} ${idx + 1}`}
                                    className="w-full h-auto object-contain transition-all duration-500 group-hover:scale-[1.02] opacity-95 cursor-pointer rounded-lg"
                                    style={{ filter: 'drop-shadow(0 8px 24px rgba(25,28,31,0.12))' }}
                                    onClick={() => setModalImageSrc(imageSrc)}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        event.images.map((imageSrc, idx) => (
                          <div
                            key={`${activeEvent}-${idx}`}
                            className="group relative animate-[fadeSoftIn_0.8s_ease-out_forwards]"
                            style={{ animationDelay: `${idx * 0.12}s`, opacity: 0 }}
                          >
                            <div className="relative w-full lg:w-full overflow-visible transition-all duration-300 hover:scale-[1.02]">
                              <img
                                src={imageSrc}
                                alt={`${t(`events.${event.textKey}`)} ${idx + 1}`}
                                className="w-full h-auto object-contain transition-all duration-500 opacity-95 group-hover:scale-[1.02] cursor-pointer rounded-lg"
                                style={{ filter: 'drop-shadow(0 8px 24px rgba(25,28,31,0.12))' }}
                                onClick={() => setModalImageSrc(imageSrc)}
                              />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  ) : null;
                })()}
              </div>

              {/* Right - Timeline */}
              <div className="relative isolate ml-0 lg:ml-20">

                {/* Timeline Items */}
                <div className="space-y-0 relative z-10">
                  {historyData.map((yearData, yearIndex) => (
                    <div
                      key={yearData.year}
                      ref={(el) => { yearRefs.current[yearData.year] = el; }}
                      className="relative"
                    >
                      {/* Year Header */}
                      <div className={`sticky top-[60px] sm:top-[140px] z-40 py-3 ${yearIndex === 0 ? '' : 'mt-8'}`}>
                        <div className="absolute -top-10 inset-x-0 bottom-0 bg-white -mx-4" />
                        <div className="relative flex items-center gap-3">
                          <span className="typo-stat">{yearData.year}</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-primary/30 via-gray-200 to-transparent" />
                        </div>
                      </div>

                      {/* Events */}
                      <div className="py-4">
                        {yearData.events.map((event, eventIndex) => {
                          const eventKey = `${yearData.year}-${eventIndex}`;
                          const isActive = activeEvent === eventKey;
                          const hasImages = !!event.images && event.images.length > 0;

                          return (
                            <div
                              key={eventIndex}
                              ref={(el) => { eventRefs.current[eventKey] = el; }}
                              className={`flex items-start gap-3 sm:gap-5 py-3 sm:py-4 transition-all duration-300 origin-left snap-center ${
                                isActive ? 'scale-[1.02]' : ''
                              }`}
                            >
                              {/* Month + Dot */}
                              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                                <span className={`font-bold w-6 sm:w-8 transition-all duration-300 ${
                                  isActive
                                    ? 'text-primary text-base sm:text-xl'
                                    : 'text-gray-400 text-sm sm:text-lg'
                                }`}>
                                  {event.month}
                                </span>
                                <div className={`rounded-full transition-all duration-300 ${
                                  isActive
                                    ? 'w-3.5 h-3.5 bg-primary shadow-[0_0_0_4px_rgba(237,28,36,0.15)]'
                                    : 'w-2.5 h-2.5 bg-gray-300'
                                }`} />
                              </div>

                              {/* Event Text */}
                              <div className="flex items-start gap-3 w-full">
                                <p className={`leading-relaxed pt-0.5 transition-all duration-300 flex-1 ${
                                  isActive
                                    ? 'text-dark font-semibold text-[13px] sm:text-[16px]'
                                    : 'text-gray-500 text-[12px] sm:text-[15px]'
                                }`}>
                                  {t(`events.${event.textKey}`)}
                                </p>
                                {hasImages && (
                                  <span className="shrink-0 mt-1 inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] text-primary">
                                    VIEW
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </section>
        </div>
        {modalImageSrc && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setModalImageSrc(null)}
        >
          <div className="relative max-h-[85vh] max-w-[90vw]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              aria-label="Close image"
              className="cursor-pointer absolute -right-3 -top-3 h-10 w-10 rounded-full bg-white/95 text-dark shadow-lg transition hover:scale-[1.05]"
              onClick={() => setModalImageSrc(null)}
            >
              ×
            </button>
            <img
              src={modalImageSrc}
              alt="History preview"
              className="max-h-[85vh] max-w-[90vw] rounded-xl bg-white object-contain shadow-2xl"
            />
          </div>
        </div>
        )}
      </PublicLayout>
    </>
  );
}
