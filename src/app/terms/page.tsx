"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import { useState } from "react";
import LegalNameContent from "@/components/terms/LegalNameContent";
import RemittanceContent from "@/components/terms/RemittanceContent";
import OpenBankingContent from "@/components/terms/OpenBankingContent";
import ElectronicFinanceContent from "@/components/terms/ElectronicFinanceContent";
import GMEPayContent from "@/components/terms/GMEPayContent";

type TabKey = "legal" | "remittance" | "openbanking" | "electronic" | "gmepay";

const tabs: { key: TabKey; label: string }[] = [
  { key: "legal", label: "불법 · 탈법 차명거래 금지 실명 확인 동의" },
  { key: "remittance", label: "소액해외송금" },
  { key: "openbanking", label: "오픈뱅킹" },
  { key: "electronic", label: "전자금융거래" },
  { key: "gmepay", label: "지엠이페이" },
];

export default function TermsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("legal");

  return (
    <PublicLayout className="bg-white">
      {/* Hero Section */}
        <section className="pt-16 lg:pt-20 pb-8 lg:pb-10 animate-fadeIn">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex justify-center">
              <div className="relative inline-block">
                <div className="absolute -top-6 -left-2 w-20 h-20 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl" />
                <div className="absolute -top-4 left-0 w-4 h-4 bg-gradient-to-br from-primary to-primary/60 rounded-sm" />

                <h1 className="typo-page-title tracking-tight relative z-10">
                  이용약관
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tabs - Center aligned */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex flex-wrap gap-2 justify-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                      activeTab === tab.key
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-10">
              {activeTab === "legal" && <LegalNameContent />}
              {activeTab === "remittance" && <RemittanceContent />}
              {activeTab === "openbanking" && <OpenBankingContent />}
              {activeTab === "electronic" && <ElectronicFinanceContent />}
              {activeTab === "gmepay" && <GMEPayContent />}
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
