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
        <section className="pt-16 lg:pt-24 pb-16 lg:pb-20 relative z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="relative inline-block">
              <h1 className="typo-page-title mb-8 lg:mb-10">
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
              {supportStats.map((stat) => (
                <div key={stat.labelKey} className="flex flex-col items-center">
                  <div className="w-20 h-20 flex items-center justify-center mb-4">
                    <Image src={stat.image.src} alt={stat.image.alt} width={stat.image.width} height={stat.image.height} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{t(stat.labelKey)}</p>
                  <p className="text-4xl lg:text-5xl font-bold text-dark">
                    {t(stat.valueKey)}<span className="text-2xl lg:text-3xl ml-1">{t(stat.unitKey)}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex gap-2">
                {supportTabs.map((tab) => (
                  <Link
                    key={tab.key}
                    href={tab.href}
                    className={`px-8 py-3 text-base font-medium transition-all rounded-md ${
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
            <div className="bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-8 lg:p-12 shadow-sm">
              {children}
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
