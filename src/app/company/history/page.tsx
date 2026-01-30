"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const historyData = [
  {
    year: "2024",
    events: [
      { month: "03", text: "GME Mobile(MVNO) Launched with LGU+" },
      { month: "06", text: "GMEBiz(Overseas Corporate Payments) Launched" },
    ],
  },
  {
    year: "2023",
    events: [
      { month: "02", text: "Achieved $1.6 Billion in Overseas Remittance" },
      { month: "05", text: "GME Card Service Launched with BC card & Master card", highlight: true },
      { month: "09", text: "GME Mobile(MVNO) License granted", highlight: true },
    ],
  },
  {
    year: "2022",
    events: [
      { month: "03", text: "Achieved $1.5 Billion in Overseas Remittance" },
      { month: "06", text: "Start Payment Business" },
      { month: "11", text: "Foreign currency business license granted", highlight: true },
    ],
  },
  {
    year: "2021",
    events: [
      { month: "04", text: "Achieved $1.4 Billion in Overseas Remittance" },
      { month: "07", text: "Mobile Coupon Service Launched" },
      { month: "10", text: "Granted PG License", highlight: true },
    ],
  },
  {
    year: "2020",
    events: [
      { month: "02", text: "Achieved $1 Billion in Remittance" },
      { month: "05", text: "Mobile Top-up Service Launched" },
      { month: "08", text: "Granted Prepaid E-Payment License", highlight: true },
    ],
  },
  {
    year: "2019",
    events: [
      { month: "03", text: "Domestic Transfer Service Launched" },
      { month: "06", text: "12 Nationwide Branches Opened", highlight: true },
      { month: "09", text: "3 Nationwide Centers Opened", highlight: true },
    ],
  },
  {
    year: "2018",
    events: [
      { month: "04", text: "Achieved $40 Million in Remittance" },
      { month: "10", text: "Selected as Seoul City Recommended Remittance Operator", highlight: true },
    ],
  },
  {
    year: "2017",
    events: [
      { month: "03", text: "First Online Service Launched" },
      { month: "06", text: "First Service Provider in Korea", highlight: true },
      { month: "09", text: "First Remittance License in Korea", highlight: true },
    ],
  },
  {
    year: "2016",
    events: [
      { month: "08", text: "Establishment of GME", highlight: true },
    ],
  },
];

export default function HistoryPage() {
  const [activeYear, setActiveYear] = useState("2024");
  const [activeEvent, setActiveEvent] = useState<string | null>(null);
  const yearRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const setupObservers = () => {
      // 연도 observer
      historyData.forEach((item) => {
        const ref = yearRefs.current[item.year];
        if (ref) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  setActiveYear(item.year);
                }
              });
            },
            {
              root: null,
              rootMargin: "-30% 0px -60% 0px",
              threshold: 0,
            }
          );
          observer.observe(ref);
          observers.push(observer);
        }
      });

      // 이벤트 observer
      historyData.forEach((yearData) => {
        yearData.events.forEach((_, eventIndex) => {
          const eventKey = `${yearData.year}-${eventIndex}`;
          const ref = eventRefs.current[eventKey];
          if (ref) {
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    setActiveEvent(eventKey);
                  }
                });
              },
              {
                root: null,
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0,
              }
            );
            observer.observe(ref);
            observers.push(observer);
          }
        });
      });
    };

    requestAnimationFrame(setupObservers);

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[122px] bg-white min-h-screen">
        {/* History Section */}
        <section className="py-16 lg:py-24" ref={containerRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16">
              {/* Left - Sticky Year Display */}
              <div className="lg:sticky lg:top-[140px] lg:h-fit">
                <div className="mb-8">
                  <p className="text-xs font-semibold text-[#ed1c24] tracking-[0.2em] mb-3 uppercase">
                    Our Journey
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#191c1f] leading-tight">
                    끊임없는 도전,<br />새로운 시작
                  </h2>
                </div>

                {/* Large Year Number with accent */}
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-20 bg-gradient-to-b from-[#ed1c24] to-[#ed1c24]/20 rounded-full" />
                  <span
                    key={activeYear}
                    className="block text-[100px] lg:text-[140px] font-black text-[#191c1f] leading-none tracking-tighter transition-all duration-500"
                  >
                    {activeYear}
                  </span>
                </div>

                {/* Since Badge - horizontal layout */}
                <div className="mt-10 lg:mt-14 flex items-baseline gap-2">
                  <span className="text-3xl lg:text-4xl font-light text-[#ccc] italic">since</span>
                  <span className="text-4xl lg:text-5xl font-black text-[#e5e5e5]">2016</span>
                </div>
              </div>

              {/* Right - Timeline */}
              <div className="relative isolate">
                {/* Top mask */}
                <div className="sticky top-[122px] z-30 h-[18px] bg-white pointer-events-none" />

                {/* Timeline Items */}
                <div className="space-y-0 relative z-10">
                  {historyData.map((yearData, yearIndex) => (
                    <div
                      key={yearData.year}
                      ref={(el) => { yearRefs.current[yearData.year] = el; }}
                      className="relative"
                    >
                      {/* Year Header */}
                      <div className={`sticky top-[140px] z-40 bg-white py-3 ${yearIndex === 0 ? '' : 'mt-8'}`}>
                        <div className="flex items-center gap-3">
                          <span className="text-xl font-bold text-[#191c1f]">{yearData.year}</span>
                          <div className="flex-1 h-px bg-gradient-to-r from-[#ed1c24]/30 via-gray-200 to-transparent" />
                        </div>
                      </div>

                      {/* Events */}
                      <div className="py-4">
                        {yearData.events.map((event, eventIndex) => {
                          const eventKey = `${yearData.year}-${eventIndex}`;
                          const isActive = activeEvent === eventKey;

                          return (
                            <div
                              key={eventIndex}
                              ref={(el) => { eventRefs.current[eventKey] = el; }}
                              className={`flex items-start gap-5 py-4 transition-all duration-300 origin-left ${
                                isActive ? 'scale-[1.02]' : ''
                              }`}
                            >
                              {/* Month + Dot */}
                              <div className="flex items-center gap-4 shrink-0">
                                <span className={`font-bold w-8 transition-all duration-300 ${
                                  isActive
                                    ? 'text-[#ed1c24] text-xl'
                                    : 'text-[#888] text-lg'
                                }`}>
                                  {event.month}
                                </span>
                                <div className={`rounded-full transition-all duration-300 ${
                                  isActive
                                    ? 'w-3.5 h-3.5 bg-[#ed1c24] shadow-[0_0_0_4px_rgba(237,28,36,0.15)]'
                                    : event.highlight
                                      ? 'w-2.5 h-2.5 bg-[#ed1c24]'
                                      : 'w-2.5 h-2.5 bg-[#ccc]'
                                }`} />
                              </div>

                              {/* Event Text */}
                              <p className={`leading-relaxed pt-0.5 transition-all duration-300 ${
                                isActive
                                  ? 'text-[#191c1f] font-semibold text-[16px]'
                                  : event.highlight
                                    ? 'text-[#191c1f] font-medium text-[15px]'
                                    : 'text-[#666] text-[15px]'
                              }`}>
                                {event.text}
                              </p>
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
      </main>
      <Footer />
    </>
  );
}
