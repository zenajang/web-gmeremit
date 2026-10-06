import * as S from "./styles";
import { ActionButtons } from "@/components/support/inquiry/molecules";
import { useInquiryTranslation } from "@/hooks/useInquiryTranslation";

interface SubmissionCompleteProps {
  onReset: () => void;
}

const SubmissionComplete = ({ onReset }: SubmissionCompleteProps) => {
  const { t } = useInquiryTranslation();

  return (
    <div className={S.InquirySubmissionCompleteWrapper}>
      <div className={S.InquirySubmissionCompleteCheck}>✓</div>
      <h2 className={S.InquirySubmissionCompleteTitle}>{t("complete.title")}</h2>
      <p className={S.InquirySubmissionCompleteDescription}>{t("complete.description")}</p>
      <ActionButtons primaryLabel={t("complete.reset")} onPrimary={onReset} align="center" />
    </div>
  );
};

export default SubmissionComplete;
