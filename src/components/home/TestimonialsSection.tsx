"use client";

import { HiUser } from "react-icons/hi2";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";

// Quotes stay in English as per user preference (actual user reviews)
const testimonials = [
  {
    quote: "I love how simple and quick the process is with GME Remittance. My family gets the money instantly, and I can track everything!",
    name: "Dos James",
    meta: "GME Remittance",
    tagKey: "easy_tracking",
  },
  {
    quote: "I was amazed at how simple it was to apply for a loan with GME. Their flexible terms and great customer service made all the difference.",
    name: "Yin Zaw",
    meta: "GME Loan",
    tagKey: "satisfied",
  },
  {
    quote: "I love the flexibility of my GME Card. Whether I'm shopping or paying bills, it works flawlessly and makes my life easier!",
    name: "Suni Lee",
    meta: "GME Card",
    tagKey: "fast_process",
  },
];

export default function TestimonialsSection() {
  const { t } = useTranslation("home.testimonials");

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[var(--surface-warm)] py-16 lg:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none text-[#ed1c24] opacity-[0.045]"
      >
        <div className="mx-auto flex max-w-[1800px] flex-col gap-6 px-6 py-8 text-5xl font-bold uppercase tracking-[0.22em] lg:text-7xl">
          {Array.from({ length: 2 }).map((_, row) => (
            <div
              key={row}
              className={`flex whitespace-nowrap ${row % 2 === 0 ? "-translate-x-6" : "-translate-x-24"}`}
            >
              {Array.from({ length: 6 }).map((__, i) => (
                <span key={i} className="mr-10">
                  Global Money Express
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#ed1c24] mb-3">TESTIMONIALS</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#191c1f]">{t("title")}</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mt-4">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 lg:gap-9">
          {testimonials.map((item, index) => (
            <div
              key={item.quote}
              className="flex h-full flex-col rounded-2xl border border-[var(--border-soft)] bg-white p-7 lg:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] text-[#6b7280]">
                    <HiUser className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-[#191c1f]">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.meta}</p>
                  </div>
                </div>
                <span className="rounded-full border border-[#ed1c24]/25 bg-[#ed1c24]/10 px-3.5 py-1.5 text-xs font-semibold text-[#c41920] shadow-[0_4px_10px_rgba(237,28,36,0.16)] ring-1 ring-[#ed1c24]/15">
                  {t(`tags.${item.tagKey}`)}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-1 text-[#ed1c24]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={`${index}-${starIndex}`} className="h-4 w-4" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-500">5.0</span>
              </div>

              <div className="relative mt-5 flex-1">
                <FaQuoteLeft className="absolute -left-1 -top-1 h-6 w-6 text-[#ed1c24]/20" />
                <p className="pl-7 text-base leading-relaxed text-gray-700">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
