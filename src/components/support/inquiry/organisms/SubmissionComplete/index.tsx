import * as S from "./styles";
import { ActionButtons } from "@/components/support/inquiry/molecules";
import { useTranslation } from "@/hooks/useTranslation";

interface SubmissionCompleteProps {
  onReset: () => void;
}

const SubmissionComplete = ({ onReset }: SubmissionCompleteProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.InquirySubmissionCompleteWrapper}>
      <div className={S.InquirySubmissionCompleteCheck}>✓</div>
      <h2 className={S.InquirySubmissionCompleteTitle}>{t("common.services.complete.title")}</h2>
      <p className={S.InquirySubmissionCompleteDescription}>{t("support-inquiry.submission-complete.description")}</p>
      <ActionButtons primaryLabel={t("support-inquiry.submission-complete.reset")} onPrimary={onReset} align="center" />
    </div>
  );
};

export default SubmissionComplete;
