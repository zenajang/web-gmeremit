"use client";

import { HiUser } from "react-icons/hi2";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useTranslation } from "@/hooks/useTranslation";
import { homeTestimonials as testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const { t } = useTranslation("home.testimonials");

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[var(--surface-warm)] py-16 lg:py-20 snap-section">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none text-primary opacity-[0.045]"
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
          <p className="typo-eyebrow text-primary mb-3">TESTIMONIALS</p>
          <h2 className="typo-section-title">{t("title")}</h2>
          <p className="typo-section-subtitle text-gray-600 max-w-2xl mx-auto mt-4">
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray">
                    <HiUser className="h-7 w-7" />
                  </div>
                  <div className="text-left">
                    <p className="text-base font-semibold text-dark">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.meta}</p>
                  </div>
                </div>
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary-dark shadow-[0_4px_10px_rgba(237,28,36,0.16)] ring-1 ring-primary/15">
                  {t(`tags.${item.tagKey}`)}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <FaStar key={`${index}-${starIndex}`} className="h-4 w-4" />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-500">5.0</span>
              </div>

              <div className="relative mt-5 flex-1">
                <FaQuoteLeft className="absolute -left-1 -top-1 h-6 w-6 text-primary/20" />
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
