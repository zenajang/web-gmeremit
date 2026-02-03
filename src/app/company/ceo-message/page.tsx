"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CompanyTabs from "@/components/CompanyTabs";
import Image from "next/image";
import { useEffect } from "react";
import Lenis from "lenis";

export default function CEOPage() {
  // Lenis 부드러운 스크롤
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
  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen relative">
        {/* CEO Message Section */}
        <section className="pt-16 lg:pt-20 pb-16 lg:pb-24 relative">
          {/* Background - White top, Gray bottom */}
          <div className="absolute inset-0 bg-white"></div>
          <div className="absolute inset-x-0 top-[53%] bottom-0 bg-[#f5f6f7]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          

            {/* Navigation Tabs */}
            <CompanyTabs activeTab="ceo-message" />

            {/* Content Grid */}
            <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-16">
              {/* CEO Image */}
              <div className="relative">
                <div className="sticky top-[140px]">
                  {/* Card with Background */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-[#fafafa] via-[#fcfcfc] to-white p-8 shadow-sm">
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
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ed1c24] via-[#ed1c24]/80 to-transparent rounded-full" />
                        <p className="text-2xl font-bold text-[#191c1f] mb-1.5">
                          Sung Jong Hwa
                        </p>
                        <p className="text-sm text-[#888]">
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
                  <div className="absolute -left-6 top-0 w-1 h-32 bg-gradient-to-b from-[#ed1c24] to-[#ed1c24]/10 rounded-full hidden lg:block shadow-sm" />

                  {/* Quote icon */}
                  <div className="relative">
                    <svg className="absolute -left-2 -top-2 w-8 h-8 text-[#ed1c24]/10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-xl lg:text-3xl text-[#191c1f] leading-relaxed pl-10 italic font-light">
                      As a leading fintech company in South Korea, we invest in <span className="text-[#191c1f] font-semibold">cutting-edge technology</span> and our <span className="text-[#191c1f] font-semibold">people</span>, which will continue to achieve <span className="text-[#191c1f] font-semibold">mutual growth</span>, <span className="text-[#191c1f] font-semibold">customer success</span>, and bring the most convenient service to all.
                    </blockquote>
                  </div>

                  {/* Korean Content Section */}
                  <div className="pt-12 mt-20">
                    <div className="text-lg lg:text-2xl space-y-8 text-[#666] leading-relaxed font-light">
                      <p>
                        한국을 대표하는 핀테크 기업으로서, 저희는 <span className="text-[#191c1f] font-semibold">최첨단 기술</span>과 <span className="text-[#191c1f] font-semibold">인재</span>에 투자하며 <span className="text-[#191c1f] font-semibold">상호 성장</span>과 <span className="text-[#191c1f] font-semibold">고객 성공</span>을 위해 노력하고 있습니다.
                      </p>
                      <p>
                        글로벌 금융 서비스의 미래를 만들어가는 GME와 함께, 더욱 편리하고 혁신적인 서비스를 경험하시기 바랍니다.
                      </p>
                    </div>

                    {/* Signature */}
                    <div className="pt-18 text-right">
                      <div className="inline-block group">
                        <p className="text-xl font-bold text-[#191c1f] transition-colors duration-300 group-hover:text-[#ed1c24]">
                          Sung Jong Hwa
                        </p>
                        <div className="mt-2 h-0.5 w-full bg-gradient-to-r from-[#ed1c24] to-transparent rounded-full"></div>
                      </div>
                    </div>
                  </div>
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
