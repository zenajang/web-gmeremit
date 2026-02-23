"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import { useState } from "react";
import TreatmentPolicyContent from "@/components/privacy/TreatmentPolicyContent";
import CollectionAgreementContent from "@/components/privacy/CollectionAgreementContent";

type TabKey = "treatment" | "collection";

const tabs: { key: TabKey; label: string }[] = [
  { key: "treatment", label: "개인정보 처리방침" },
  { key: "collection", label: "개인정보 수집·이용 동의" },
];

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("treatment");

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
                  개인정보처리방침
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
              {activeTab === "treatment" && <TreatmentPolicyContent />}
              {activeTab === "collection" && <CollectionAgreementContent />}
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
