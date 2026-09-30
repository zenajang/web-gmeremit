import * as S from "./styles";
import { useInquiryTranslation } from "@/hooks/useInquiryTranslation";

interface StepIndicatorProps {
  step: 1 | 2;
  onStepBack: () => void;
}

const StepIndicator = ({ step, onStepBack }: StepIndicatorProps) => {
  const { t } = useInquiryTranslation();

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
        {t("steps.select")}
      </button>
      <div
        className={`${S.InquiryStepIndicatorBase} ${
          step === 2 ? S.InquiryStepIndicatorCurrent : S.InquiryStepIndicatorTodo
        }`}
      >
        {t("steps.connect")}
      </div>
    </div>
  );
};

export default StepIndicator;
