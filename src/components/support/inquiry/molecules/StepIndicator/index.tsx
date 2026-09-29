import * as S from "./styles";

interface StepIndicatorProps {
  step: 1 | 2;
  onStepBack: () => void;
}

const StepIndicator = ({ step, onStepBack }: StepIndicatorProps) => (
  <div className={S.InquiryStepIndicatorRow}>
    {step === 1 ? (
      <div className={`${S.InquiryStepIndicatorBase} ${S.InquiryStepIndicatorCurrent}`}>1. 문의 유형 선택</div>
    ) : (
      <button
        type="button"
        onClick={onStepBack}
        className={`${S.InquiryStepIndicatorBase} ${S.InquiryStepIndicatorDone} cursor-pointer hover:text-primary`}
      >
        1. 문의 유형 선택
      </button>
    )}
    <div className={`${S.InquiryStepIndicatorBase} ${step === 2 ? S.InquiryStepIndicatorCurrent : S.InquiryStepIndicatorTodo}`}>2. 상담 연결 · 접수</div>
  </div>
);

export default StepIndicator;
