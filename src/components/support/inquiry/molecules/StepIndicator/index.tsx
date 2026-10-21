import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface StepIndicatorProps {
  step: 1 | 2;
  onStepBack: () => void;
}

const StepIndicator = ({ step, onStepBack }: StepIndicatorProps) => {
  const { t } = useTranslation();

  return (
    <div className={S.InquiryStepIndicatorRow}>
      <button
        type="button"
        onClick={onStepBack}
        disabled={step === 1}
        className={`${S.InquiryStepIndicatorBase} ${
          step === 1 ? S.InquiryStepIndicatorCurrent : S.InquiryStepIndicatorDone
        }`}
      >
        {t("support-inquiry.step-indicator.steps.select")}
      </button>
      <div
        className={`${S.InquiryStepIndicatorBase} ${
          step === 2 ? S.InquiryStepIndicatorCurrent : S.InquiryStepIndicatorTodo
        }`}
      >
        {t("support-inquiry.step-indicator.steps.connect")}
      </div>
    </div>
  );
};

export default StepIndicator;
