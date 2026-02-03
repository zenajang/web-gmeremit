import Link from "next/link";

interface CompanyTabsProps {
  activeTab: "ceo-message" | "history" | "services";
}

export default function CompanyTabs({ activeTab }: CompanyTabsProps) {
  const tabs = [
    { id: "ceo-message", label: "대표 인사말", href: "/company/ceo-message" },
    { id: "history", label: "연혁", href: "/company/history" },
    { id: "services", label: "서비스", href: "/company/services" },
  ];

  return (
    <div className="mb-12 lg:mb-16">
                  <div className="mb-8 lg:mb-12 relative">
              {/* Gradient Decoration Boxes */}
              <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-[#ed1c24]/20 via-[#ed1c24]/10 to-transparent rounded-2xl" />
              <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-[#ed1c24] to-[#ed1c24]/60 rounded-sm" />

              <p className="text-xs font-semibold text-[#ed1c24] tracking-[0.2em] mb-3 uppercase relative z-10">
                About Us
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#191c1f] tracking-tight relative z-10">
                회사 소개
              </h2>
            </div>
      <div className="flex gap-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={`px-6 py-3 text-md font-semibold border-b-2 transition-colors ${
              activeTab === tab.id
                ? "text-[#ed1c24] border-[#ed1c24]"
                : "text-[#888] hover:text-[#191c1f] border-transparent hover:border-gray-300"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
