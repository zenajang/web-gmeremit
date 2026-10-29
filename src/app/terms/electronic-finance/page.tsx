import ElectronicFinanceContent from "@/components/terms/ElectronicFinanceContent";
import ElectronicFinanceContentLegacy from "@/components/terms/ElectronicFinanceContent/legacy";

export const dynamic = "force-dynamic";

const ELECTRONIC_FINANCE_TERMS_OPEN_AT = new Date("2026-11-30T00:00:00+09:00");

const isElectronicFinanceTermsOpen = () =>
  Date.now() >= ELECTRONIC_FINANCE_TERMS_OPEN_AT.getTime();

const UelectronicUfinanceTermsPage = () => {
  return isElectronicFinanceTermsOpen() ? (
    <ElectronicFinanceContent />
  ) : (
    <ElectronicFinanceContentLegacy />
  );
};

export default UelectronicUfinanceTermsPage;
