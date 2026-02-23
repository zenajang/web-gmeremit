"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";
import { benefitKeys, benefitImages, testimonials, whyGmeKeys, whyGmeIcons } from "@/data/careers";

export default function CareersPage() {
  const { t } = useTranslation("careers");
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

  useLenis();

  return (
    <PublicLayout className="bg-white">
        {/* Page Header */}
        <section className="relative border-b border-gray-100 overflow-hidden">
          <div className="absolute left-15 top-1/3 -translate-y-1/2 opacity-[0.08] pointer-events-none">
            <Image
              src="/images/company/careers/icons/logo_icon.png"
              alt=""
              width={400}
              height={400}
              className="w-[280px] lg:w-[380px] h-auto"
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-primary mb-2">Careers</p>
                <h1 className="typo-sub-page-title mb-3">{t("header.title")}</h1>
                <p className="text-gray-500 text-lg max-w-xl">
                  {t("header.description")}
                </p>
              </div>
              <a
                href="https://gme.career.greetinghr.com/ko/recruit"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                {t("header.button")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why GME */}
        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="typo-heading mb-10 text-center">{t("why_gme.title")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyGmeKeys.map((key, idx) => (
                <div key={key} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={whyGmeIcons[idx]} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-dark mb-2">{t(`why_gme.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{t(`why_gme.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="typo-heading mb-3 text-center">{t("benefits.title")}</h2>
            <p className="text-gray-500 text-center mb-10">{t("benefits.subtitle")}</p>

            <div className="space-y-6">
              {benefitKeys.map((key, index) => (
                <div
                  key={key}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-gray-50 rounded-2xl overflow-hidden`}
                >
                  <div className="lg:w-1/3 relative h-48 lg:h-auto">
                    <Image
                      src={benefitImages[index]}
                      alt={t(`benefits.${key}.title`)}
                      fill
                      className="object-cover"
                      style={key === 'health' ? { objectPosition: 'center 25%' } : undefined}
                    />
                  </div>
                  <div className="lg:w-2/3 p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-primary/20">0{index + 1}</span>
                      <h3 className="typo-feature-title">{t(`benefits.${key}.title`)}</h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed">{t(`benefits.${key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="typo-heading mb-3 text-center">{t("testimonials.title")}</h2>
            <p className="text-gray-500 text-center mb-10">{t("testimonials.subtitle")}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <div key={item.name} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 ring-2 ring-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-dark text-sm">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.position}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.quote}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <button
                    onClick={() => setSelectedTestimonial(item)}
                    className="mt-4 w-full flex justify-center cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Modal */}
        {selectedTestimonial && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <div
              className="relative bg-gradient-to-b from-white to-gray-50 rounded-2xl max-w-md w-full max-h-[85vh] overflow-y-auto shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.03)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors cursor-pointer text-gray-500 hover:text-gray-800 z-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="pt-10 pb-6 px-8 text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 ring-[3px] ring-white shadow-lg mb-4 mx-auto">
                  <Image
                    src={selectedTestimonial.image}
                    alt={selectedTestimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="typo-feature-title">{selectedTestimonial.name}</p>
                <p className="text-[13px] text-gray-400 mt-1">{selectedTestimonial.position}</p>
              </div>

              <div className="px-8 pb-10">
                <div className="relative bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <span className="absolute -top-3 left-6 text-primary/20 text-5xl font-serif leading-none">&ldquo;</span>
                  <p className="text-gray-600 text-[15px] leading-[1.85] pt-2">
                    {selectedTestimonial.quote}
                  </p>
                  <span className="absolute -bottom-4 right-6 text-primary/20 text-5xl font-serif leading-none rotate-180">&ldquo;</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="py-14 lg:py-20 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="typo-heading mb-4">{t("cta.title")}</h2>
            <p className="text-gray-500 mb-8">{t("cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://gme.career.greetinghr.com/ko/recruit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
              >
                {t("cta.openings")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
