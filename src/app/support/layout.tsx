"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import PublicLayout from "@/components/layout/PublicLayout";
import { useLenis } from "@/hooks/useLenis";
import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";
import { supportTabs, supportStats, networkLines, networkNodes } from "@/data/support";

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { t } = useTranslation("support");

  useLenis([pathname]);

  return (
    <PublicLayout className="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* 전체 배경 패턴 */}
        <div className="absolute inset-0 pointer-events-none">
          {/* 도트 패턴 */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(var(--color-primary) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />
          {/* 장식 도형들 */}
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-3xl" />
          <div className="absolute top-20 -right-32 w-[400px] h-[400px] bg-primary/[0.07] rounded-full blur-3xl" />
          <div className="absolute bottom-40 -left-20 w-[350px] h-[350px] bg-primary/[0.07] rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-20 w-[300px] h-[300px] bg-primary/[0.07] rounded-full blur-3xl" />
          {/* 네트워크 연결선 패턴 */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {networkLines.map((line, i) => (
              <line key={`line-${i}`} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke="var(--color-primary)" strokeWidth="1" opacity={line.opacity} />
            ))}
            {networkNodes.map((node, i) => (
              <circle key={`node-${i}`} cx={node.cx} cy={node.cy} r={node.r} fill="var(--color-primary)" opacity={node.opacity} />
            ))}
          </svg>
        </div>

        {/* Hero Section */}
        <section className="pt-10 lg:pt-24 pb-8 lg:pb-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="relative inline-block">
              <h1 className="text-xl lg:text-5xl font-bold text-dark mb-6 lg:mb-10">
                {t("hero.title")}
              </h1>
              {/* 핀 장식 - 타이틀 오른쪽 상단 */}
              <img
                src="/images/support/pin.png"
                alt=""
                className="hidden lg:block absolute lg:-top-7 lg:-right-20 lg:w-24 lg:h-24 object-contain"
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
            <div className="space-y-2 mb-10 lg:mb-20">
              <p className="text-sm lg:text-lg text-gray-700">
                {t("hero.desc1")}
              </p>
              <p className="text-sm lg:text-lg text-gray-700">
                {t("hero.desc2")}
              </p>
              <p className="text-sm lg:text-lg text-gray-700">
                {t("hero.desc3")}
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 lg:gap-12 max-w-4xl mx-auto">
              {supportStats.map((stat) => (
                <div key={stat.labelKey} className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center mb-2 md:mb-4">
                    <Image src={stat.image.src} alt={stat.image.alt} width={stat.image.width} height={stat.image.height} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[11px] md:text-sm text-gray-600 mb-1 md:mb-2">{t(stat.labelKey)}</p>
                  <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark">
                    {t(stat.valueKey)}<span className="text-sm md:text-2xl lg:text-3xl ml-0.5">{t(stat.unitKey)}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 pb-12 lg:py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex justify-center mb-8 lg:mb-12">
              <div className="inline-flex gap-2 w-full sm:w-auto">
                {supportTabs.map((tab) => (
                  <Link
                    key={tab.key}
                    href={tab.href}
                    className={`flex-1 sm:flex-none text-center px-6 py-2.5 text-sm sm:text-base font-medium transition-all rounded-md ${
                      pathname === tab.href
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    {t(tab.labelKey)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-4 sm:p-8 lg:p-12 shadow-sm">
              {children}
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
