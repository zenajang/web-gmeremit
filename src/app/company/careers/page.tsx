"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Lenis from "lenis";

const benefits = [
  {
    title: "교육 및 성장 지원",
    description: "직무 관련 온라인 강의, 자격증 취득, 원어민 어학 수업, 컨퍼런스 참가비 등 자기계발에 필요한 비용을 전액 지원합니다.",
    image: "/images/company/careers/perks/education-training.jpg",
  },
  {
    title: "성과 인센티브",
    description: "월간/연간 목표 달성, 신규 아이디어 채택, 우수 사원 시상 등 다양한 성과 기반 인센티브와 포상 제도를 운영합니다.",
    image: "/images/company/careers/perks/performance-incentives.jpg",
  },
  {
    title: "팀 빌딩 & 문화",
    description: "월간 타운홀 미팅, 분기별 팀 단합 행사, 풋살/자전거 동호회, 힐링 콘서트 등 함께 성장하는 문화를 만들어갑니다.",
    image: "/images/company/careers/perks/team-building.jpg",
  },
  {
    title: "건강검진 지원",
    description: "정직원 대상 연 30만원 건강검진 비용을 지원하며, 구성원의 건강한 삶을 응원합니다.",
    image: "/images/company/careers/perks/health-checkup.png",
  },
  {
    title: "연차 및 특별휴가",
    description: "법정 연차 외에도 생일휴가, 기념일휴가, 경조휴가, 육아휴직 등 다양한 특별휴가 제도를 운영합니다.",
    image: "/images/company/careers/perks/annual.jpg",
  },
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

export default function CareersPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

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
      <main className="pt-[82px] lg:pt-[122px] bg-white">
        {/* Page Header - 세부 페이지 스타일 */}
        <section className="relative border-b border-gray-100 overflow-hidden">
          {/* Background Logo */}
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
                <p className="text-sm font-medium text-[#ed1c24] mb-2">Careers</p>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#191c1f] mb-3">GME와 함께 성장하세요</h1>
                <p className="text-[#666] text-lg max-w-xl">
                  200개국 고객에게 금융 서비스를 제공하는 글로벌 핀테크 기업에서 함께할 동료를 찾습니다.
                </p>
              </div>
              <a
                href="https://gme.career.greetinghr.com/ko/recruit"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#ed1c24] hover:bg-[#d91920] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                채용 공고 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Why GME - 간단하게 */}
        <section className="py-14 lg:py-20 bg-[#fafbfc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-10 text-center">GME가 특별한 이유</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#ed1c24]/10 flex items-center justify-center text-[#ed1c24] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.924 17.924 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191c1f] mb-2">다양성 존중</h3>
                <p className="text-sm text-[#666] leading-relaxed">14개국 이상의 다양한 국적 동료들과 함께 일하며, 서로 다른 관점에서 배웁니다.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#ed1c24]/10 flex items-center justify-center text-[#ed1c24] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191c1f] mb-2">빠른 의사결정</h3>
                <p className="text-sm text-[#666] leading-relaxed">수평적인 조직문화에서 빠르게 실행하고, 실패에서 배우며 성장합니다.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#ed1c24]/10 flex items-center justify-center text-[#ed1c24] mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191c1f] mb-2">공정한 기회</h3>
                <p className="text-sm text-[#666] leading-relaxed">성별, 국적에 관계없이 능력과 성과에 따라 공정하게 평가받습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits with Images */}
        <section className="py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-3 text-center">복지 제도</h2>
            <p className="text-[#666] text-center mb-10">GME 구성원의 성장과 행복을 지원합니다</p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-[#fafbfc] rounded-2xl overflow-hidden`}
                >
                  <div className="lg:w-2/5 relative h-56 lg:h-auto">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="lg:w-3/5 p-6 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-[#ed1c24]/20">0{index + 1}</span>
                      <h3 className="text-xl font-bold text-[#191c1f]">{benefit.title}</h3>
                    </div>
                    <p className="text-[#666] leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 lg:py-20 bg-[#fafbfc]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-3 text-center">구성원 이야기</h2>
            <p className="text-[#666] text-center mb-10">함께 일하는 동료들의 생생한 이야기</p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 ring-2 ring-gray-100">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#191c1f] text-sm">{t.name}</p>
                      <p className="text-xs text-[#888]">{t.position}</p>
                    </div>
                  </div>
                  <div className="relative">
                    <p className="text-[#555] text-sm leading-relaxed line-clamp-3">{t.quote}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <button
                    onClick={() => setSelectedTestimonial(t)}
                    className="mt-4 w-full flex justify-center cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#ed1c24]/10 flex items-center justify-center text-[#888] hover:text-[#ed1c24] transition-colors">
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
              className="relative bg-gradient-to-b from-white to-[#fafbfc] rounded-[28px] max-w-md w-full max-h-[85vh] overflow-y-auto shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.03)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - 우측 상단 */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors cursor-pointer text-[#666] hover:text-[#333] z-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Profile Header */}
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
                <p className="font-bold text-[#191c1f] text-xl">{selectedTestimonial.name}</p>
                <p className="text-[13px] text-[#888] mt-1">{selectedTestimonial.position}</p>
              </div>

              {/* Quote Content */}
              <div className="px-8 pb-10">
                <div className="relative bg-white rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                  <span className="absolute -top-3 left-6 text-[#ed1c24]/20 text-5xl font-serif leading-none">"</span>
                  <p className="text-[#555] text-[15px] leading-[1.85] pt-2">
                    {selectedTestimonial.quote}
                  </p>
                  <span className="absolute -bottom-4 right-6 text-[#ed1c24]/20 text-5xl font-serif leading-none rotate-180">"</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="py-14 lg:py-20 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#191c1f] mb-4">GME와 함께할 준비가 되셨나요?</h2>
            <p className="text-[#666] mb-8">현재 채용 중인 포지션을 확인하고 지원해보세요.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://gme.career.greetinghr.com/ko/recruit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ed1c24] hover:bg-[#d91920] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
              >
                채용 공고 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/company/about"
                className="inline-flex items-center justify-center gap-2 bg-[#f5f5f7] hover:bg-[#ebebed] text-[#191c1f] font-semibold px-8 py-3.5 rounded-xl transition-all duration-200"
              >
                회사 소개 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
