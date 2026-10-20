"use client";

import { usePathname } from "next/navigation";
import PublicLayout from "@/components/layout/PublicLayout";
import TreatmentPolicyContent20241202 from "@/components/privacy/LegacyTreatmentPolicyContent/Legacy20241202";
import { LegalPageHero, PolicyPanel } from "@/components/privacy/organisms";

const LegacyPrivacyPolicyTemplate = () => {
  const pathname = usePathname();
  const revisionDate = pathname.split("/").pop();

  return (
    <PublicLayout className="bg-white">
      <LegalPageHero title="개인정보처리방침" subtitle={revisionDate} />
      <PolicyPanel>
        <TreatmentPolicyContent20241202 />
      </PolicyPanel>
    </PublicLayout>
  );
};

export default LegacyPrivacyPolicyTemplate;
