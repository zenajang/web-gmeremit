import * as S from "./styles";

interface StepIndicatorProps {
  /** 현재 단계 (1 또는 2) */
  step: 1 | 2;
  /** 1단계로 되돌린다. 2단계에서만 쓰인다 */
  onStepBack: () => void;
}

/**
 * 1단계는 2단계에서 눌러 되돌아갈 수 있다.
 * 2단계는 유형을 고르기 전에는 보여줄 내용이 없어 누를 수 없다.
 */
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
