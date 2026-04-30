import { fetchTelecomPlans, DEFAULT_TELECOM_SEQ } from "./data";
import TelecomPageClient from "./TelecomPageClient";

export const revalidate = 86400;

export default function TelecomPage() {
  const plansPromise = fetchTelecomPlans(DEFAULT_TELECOM_SEQ);

  return (
    <TelecomPageClient
      plansPromise={plansPromise}
      initialSeq={DEFAULT_TELECOM_SEQ}
    />
  );
}
