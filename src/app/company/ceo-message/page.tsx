"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import CompanyTabs from "@/components/CompanyTabs";
import Image from "next/image";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";

export default function CEOPage() {
  const { t } = useTranslation("company.ceo_message");
  useLenis();
  return (
    <PublicLayout className="bg-white">
      {/* CEO Message Section */}
        <section className="pt-10 sm:pt-16 lg:pt-20 pb-10 sm:pb-16 lg:pb-24 relative">
          {/* Background - White top, Gray bottom */}
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute inset-x-0 top-[61%] sm:top-[53%] bottom-0 bg-gray-100"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">


            {/* Navigation Tabs */}
            <CompanyTabs activeTab="ceo-message" />

            {/* Content Grid */}
            <div className="grid lg:grid-cols-[340px_1fr] gap-0 lg:gap-16">
              {/* CEO Image */}
              <div className="hidden lg:block relative">
                <div className="sticky top-[140px]">
                  {/* Card with Background */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 via-white to-white p-5 sm:p-8 shadow-sm">
                    <div className="relative">
                      {/* Image */}
                      <div className="relative w-full max-w-[250px] mx-auto lg:mx-0 group">
                        <Image
                          src="/images/company/ceo-message/Ceo-picture.png"
                          alt="Sung Jong Hwa - CEO of GME Remit"
                          width={280}
                          height={350}
                          className="w-full h-auto object-contain scale-x-[-1] rounded-md transition-all duration-300"
                          style={{ filter: 'drop-shadow(0 4px 16px rgba(25,28,31,0.06))' }}
                          priority
                        />
                      </div>

                      {/* CEO Info */}
                      <div className="text-center lg:text-left pt-4 relative">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full" />
                        <p className="typo-content-title mb-1.5">
                          Sung Jong Hwa
                        </p>
                        <p className="text-sm text-gray-400">
                          CEO, Global Money Express Co., Ltd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="relative">
                <div className="space-y-6 relative">
                  {/* Accent Line */}
                  <div className="absolute -left-6 top-0 w-1 h-32 bg-gradient-to-b from-primary to-primary/10 rounded-full hidden lg:block shadow-sm" />

                  {/* Quote icon */}
                  <div className="relative">
                    <svg className="absolute -left-2 -top-2 w-8 h-8 text-primary/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-lg sm:text-xl lg:text-3xl text-dark leading-relaxed pl-8 sm:pl-10 italic font-light">
                      As a leading fintech company in South Korea, we invest in <span className="text-dark font-semibold">cutting-edge technology</span> and our <span className="text-dark font-semibold">people</span>, which will continue to achieve <span className="text-dark font-semibold">mutual growth</span>, <span className="text-dark font-semibold">customer success</span>, and bring the most convenient service to all.
                    </blockquote>
                  </div>

                  {/* Translated Content Section */}
                  <div className="pt-10 sm:pt-12 mt-0 sm:mt-20">
                    <div className="text-base sm:text-lg lg:text-2xl sm:space-y-8 text-gray-500 leading-relaxed font-light">
                      <p>{t("paragraph1")}</p>
                      <p>{t("paragraph2")}</p>
                    </div>

                    {/* Signature */}
                    <div className="pt-5 sm:pt-18 text-right">
                      <div className="inline-block group">
                        <p className="typo-feature-title transition-colors duration-300 group-hover:text-primary">
                          Sung Jong Hwa
                        </p>
                        <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
