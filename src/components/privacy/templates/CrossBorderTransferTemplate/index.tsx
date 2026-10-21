import PublicLayout from "@/components/layout/PublicLayout";
import CrossBorderTransferListContent from "@/components/privacy/CrossBorderTransferListContent";
import { LegalPageHero, PolicyPanel } from "@/components/privacy/organisms";

const CrossBorderTransferTemplate = () => {
  return (
    <PublicLayout className="bg-white">
      <LegalPageHero
        title="개인정보 국외 제공 업체 목록"
        subtitle="List of cross-border transfer personal information and company"
      />
      <PolicyPanel>
        <CrossBorderTransferListContent />
      </PolicyPanel>
    </PublicLayout>
  );
};

export default CrossBorderTransferTemplate;
