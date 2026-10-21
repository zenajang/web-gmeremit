import PublicLayout from "@/components/layout/PublicLayout";
import ElectronicFinanceContent20261021 from "@/components/terms/ElectronicFinanceContent/20261021";
import { LegalPageHero, PolicyPanel } from "@/components/privacy/organisms";

const LegacyElectronicFinanceTemplate = () => {
  return (
    <PublicLayout className="bg-white">
      <LegalPageHero title="전자금융거래 이용약관" subtitle="2026.10.21 이전 약관" />
      <PolicyPanel>
        <ElectronicFinanceContent20261021 />
      </PolicyPanel>
    </PublicLayout>
  );
};

export default LegacyElectronicFinanceTemplate;
