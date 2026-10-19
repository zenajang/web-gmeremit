import PublicLayout from "@/components/layout/PublicLayout";
import TelecomTemplate from "@/components/service/telecom/templates";
import { fetchTelecomPlans } from "@/components/service/telecom/api";
import { DEFAULT_TELECOM_SEQ } from "@/components/service/telecom/constants";

export const revalidate = 86400;

const TelecomPage = () => {
  const plansPromise = fetchTelecomPlans(DEFAULT_TELECOM_SEQ);

  return (
    <PublicLayout className="bg-gradient-to-b from-white via-white to-gray-100">
      <TelecomTemplate plansPromise={plansPromise} initialSeq={DEFAULT_TELECOM_SEQ} />
    </PublicLayout>
  );
};

export default TelecomPage;
