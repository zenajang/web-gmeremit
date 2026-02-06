"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RiCustomerService2Fill } from "react-icons/ri";
import Lenis from "lenis";
import { useTranslation } from "@/hooks/useTranslation";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useTranslation("support");

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
  }, [pathname]);

  const tabs = [
    { key: "branches", labelKey: "tabs.branches", href: "/support/branches" },
    { key: "social-channels", labelKey: "tabs.social_channels", href: "/support/social-channels" },
  ];

  return (
    <>
      <Header />
      <main className="pt-[82px] lg:pt-[120px] min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* 전체 배경 패턴 */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 도트 패턴 */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#ed1c24 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          {/* 장식 도형들 */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#ed1c24]/[0.07] rounded-full blur-3xl" />
          <div className="absolute top-20 -right-32 w-[400px] h-[400px] bg-[#ed1c24]/[0.07] rounded-full blur-3xl" />
          <div className="absolute bottom-40 -left-20 w-[350px] h-[350px] bg-[#ed1c24]/[0.07] rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-20 w-[300px] h-[300px] bg-[#ed1c24]/[0.07] rounded-full blur-3xl" />
          {/* 네트워크 연결선 패턴 - 불규칙 배치 */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 연결선들 - 다양한 길이와 각도 */}
            <line x1="3%" y1="12%" x2="9%" y2="24%" stroke="#ed1c24" strokeWidth="1" opacity="0.07" />
            <line x1="9%" y1="24%" x2="6%" y2="38%" stroke="#ed1c24" strokeWidth="1" opacity="0.06" />
            <line x1="9%" y1="24%" x2="2%" y2="19%" stroke="#ed1c24" strokeWidth="1" opacity="0.08" />
            <line x1="94%" y1="8%" x2="97%" y2="18%" stroke="#ed1c24" strokeWidth="1" opacity="0.07" />
            <line x1="97%" y1="18%" x2="91%" y2="28%" stroke="#ed1c24" strokeWidth="1" opacity="0.06" />
            <line x1="5%" y1="68%" x2="8%" y2="82%" stroke="#ed1c24" strokeWidth="1" opacity="0.08" />
            <line x1="8%" y1="82%" x2="3%" y2="91%" stroke="#ed1c24" strokeWidth="1" opacity="0.06" />
            <line x1="93%" y1="65%" x2="98%" y2="78%" stroke="#ed1c24" strokeWidth="1" opacity="0.07" />
            <line x1="98%" y1="78%" x2="95%" y2="88%" stroke="#ed1c24" strokeWidth="1" opacity="0.08" />
            <line x1="98%" y1="78%" x2="92%" y2="72%" stroke="#ed1c24" strokeWidth="1" opacity="0.05" />
            {/* 노드들 - 다양한 크기와 투명도 */}
            <circle cx="3%" cy="12%" r="2" fill="#ed1c24" opacity="0.08" />
            <circle cx="9%" cy="24%" r="5" fill="#ed1c24" opacity="0.13" />
            <circle cx="6%" cy="38%" r="3" fill="#ed1c24" opacity="0.09" />
            <circle cx="2%" cy="19%" r="2" fill="#ed1c24" opacity="0.07" />
            <circle cx="94%" cy="8%" r="3" fill="#ed1c24" opacity="0.1" />
            <circle cx="97%" cy="18%" r="4" fill="#ed1c24" opacity="0.11" />
            <circle cx="91%" cy="28%" r="2" fill="#ed1c24" opacity="0.08" />
            <circle cx="5%" cy="68%" r="3" fill="#ed1c24" opacity="0.09" />
            <circle cx="8%" cy="82%" r="5" fill="#ed1c24" opacity="0.12" />
            <circle cx="3%" cy="91%" r="2" fill="#ed1c24" opacity="0.08" />
            <circle cx="93%" cy="65%" r="2" fill="#ed1c24" opacity="0.07" />
            <circle cx="98%" cy="78%" r="4" fill="#ed1c24" opacity="0.11" />
            <circle cx="95%" cy="88%" r="3" fill="#ed1c24" opacity="0.1" />
            <circle cx="92%" cy="72%" r="2" fill="#ed1c24" opacity="0.06" />
          </svg>
        </div>

        {/* Hero Section */}
        <section className="pt-16 lg:pt-24 pb-16 lg:pb-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="relative inline-block">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#191c1f] mb-8 lg:mb-10">
                {t("hero.title")}
              </h1>
              {/* 핀 장식 - 타이틀 오른쪽 상단 */}
              <img
                src="/images/support/pin.png"
                alt=""
                className="absolute -top-2 -right-8 lg:-top-7 lg:-right-20 w-10 h-10 lg:w-24 lg:h-24 object-contain"
                style={{
                  animation: "float 1.5s ease-in-out infinite",
                }}
              />
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-6px); }
                }
              `}</style>
            </div>
            <div className="space-y-2 mb-16 lg:mb-20">
              <p className="text-base lg:text-lg text-gray-700">
                {t("hero.desc1")}
              </p>
              <p className="text-base lg:text-lg text-gray-700">
                {t("hero.desc2")}
              </p>
              <p className="text-base lg:text-lg text-gray-700">
                {t("hero.desc3")}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {/* 지점 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-full h-full text-[#ed1c24]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 21V10L12 3L20 10V21H14V14H10V21H4M12 1L2 9V21H8V14H16V21H22V9L12 1Z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-2">{t("stats.branches_label")}</p>
                <p className="text-4xl lg:text-5xl font-bold text-[#191c1f]">
                  {t("stats.branches_value")}<span className="text-2xl lg:text-3xl ml-1">{t("stats.branches_unit")}</span>
                </p>
              </div>

              {/* 서비스 제공 국가 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <RiCustomerService2Fill className="w-full h-full text-[#ed1c24]" />
                </div>
                <p className="text-sm text-gray-600 mb-2">{t("stats.countries_label")}</p>
                <p className="text-4xl lg:text-5xl font-bold text-[#191c1f]">
                  {t("stats.countries_value")}<span className="text-2xl lg:text-3xl ml-1">{t("stats.countries_unit")}</span>
                </p>
              </div>

              {/* 제공 서비스 */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-full h-full text-[#ed1c24]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3V9H21V3M13 21H21V11H13M3 21H11V15H3M3 13H11V3H3V13Z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 mb-2">{t("stats.services_label")}</p>
                <p className="text-4xl lg:text-5xl font-bold text-[#191c1f]">
                  {t("stats.services_value")}<span className="text-2xl lg:text-3xl ml-1">{t("stats.services_unit")}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex gap-2">
                {tabs.map((tab) => (
                  <Link
                    key={tab.key}
                    href={tab.href}
                    className={`px-8 py-3 text-base font-medium transition-all rounded-md ${
                      pathname === tab.href
                        ? "bg-[#ed1c24] text-white shadow-lg shadow-[#ed1c24]/30"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    {t(tab.labelKey)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-8 lg:p-12 shadow-sm">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
