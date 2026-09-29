import * as S from "./styles";

interface StepIndicatorProps {
  step: 1 | 2;
  onStepBack: () => void;
}

const StepIndicator = ({ step, onStepBack }: StepIndicatorProps) => (
  <div className={S.InquiryStepIndicatorRow}>
    <button
      type="button"
      onClick={onStepBack}
      disabled={step === 1}
      className={`${S.InquiryStepIndicatorBase} ${
        step === 1 ? S.InquiryStepIndicatorCurrent : S.InquiryStepIndicatorDone
      }`}
    >
      1. 문의 유형 선택
    </button>
    <div
      className={`${S.InquiryStepIndicatorBase} ${
        step === 2 ? S.InquiryStepIndicatorCurrent : S.InquiryStepIndicatorTodo
      }`}
    >
      2. 상담 연결 · 접수
    </div>
  </div>
);

export default StepIndicator;
