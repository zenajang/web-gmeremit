"use client";

import PublicLayout from "@/components/layout/PublicLayout";
import TreatmentPolicyContent20241202 from "@/components/privacy/LegacyTreatmentPolicyContent/Legacy20241202";
import { usePathname } from "next/navigation";

export default function PrivacyPolicy20241202Page() {
  const path = usePathname();
  const date = path.split("/").pop();
  
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
                <span className="block text-center text-lg font-medium text-gray-600">({date})</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-10">
              <TreatmentPolicyContent20241202 />
            </div>
          </div>
        </section>
    </PublicLayout>
  );
}
