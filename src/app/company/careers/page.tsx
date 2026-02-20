"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";

const benefitKeys = ["education", "incentive", "team_building", "health", "vacation"] as const;
const benefitImages = [
  "/images/company/careers/perks/education-training.jpg",
  "/images/company/careers/perks/performance-incentives.jpg",
  "/images/company/careers/perks/team-building.jpg",
  "/images/company/careers/perks/health-checkup.png",
  "/images/company/careers/perks/annual.jpg",
];

const testimonials = [
  {
    name: "Jason Kim",
    position: "Strategic Planning Team",
    quote: "Unlike ordinary Korean Companies, GME is very flexible and fast in terms of decision making. That drive GME staffs to think more creative, energetic and enthusiastic in their tasks. Probably that is the main fuel of GME's great success in South Korean Remittance Market. Now, to step-up as a global company, we will follow the next 3 laws. 1) Equal Opportunity 2) Fair Process 3) Righteous Result.",
    image: "/images/company/careers/staff/jason.jpg",
  },
  {
    name: "Yukiko Ramadhanti Hadi",
    position: "Marketing Officer of Indonesia",
    quote: "Global Money Express has an environment that employees can access equal rewards, treatment, and opportunities to speak out opinions regardless of gender. 70% of women have leadership roles, especially in the marketing department. GME implements a transparent performance measurement that reflected on the results of the monthly and annual targets.",
    image: "/images/company/careers/staff/Yukiko.png",
  },
  {
    name: "Sundariya Munkhbileg",
    position: "Marketing Officer of Mongolia",
    quote: "Balancing career with motherhood is not very easy in Korea. However, if you find the right employer who gets it, it should not be very difficult. I am very happy to be part of GME. Its friendly coworkers and employers offering flexible working schedule made it possible for me to grow not only as a career woman, but as a mother too.",
    image: "/images/company/careers/staff/Sundarya.png",
  },
];

const whyGmeKeys = ["diversity", "agile", "fairness"] as const;
const whyGmeIcons = [
  "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.924 17.924 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z",
];

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
