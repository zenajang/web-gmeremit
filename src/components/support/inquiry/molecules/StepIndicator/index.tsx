interface StepIndicatorProps {
  /** 현재 단계 (1 또는 2) */
  step: 1 | 2;
  /** 1단계로 되돌린다. 2단계에서만 쓰인다 */
  onStepBack: () => void;
}

const base = "flex-1 border-b-[3px] pb-2.5 text-center text-[13px] transition-colors";
const current = "border-primary font-bold text-primary";
const done = "border-gray-300 font-medium text-gray-600";
const todo = "border-gray-200 font-medium text-gray-400";

/**
 * 1단계는 2단계에서 눌러 되돌아갈 수 있다.
 * 2단계는 유형을 고르기 전에는 보여줄 내용이 없어 누를 수 없다.
 */
const StepIndicator = ({ step, onStepBack }: StepIndicatorProps) => (
  <div className="mb-7 flex gap-2">
    {step === 1 ? (
      <div className={`${base} ${current}`}>1. 문의 유형 선택</div>
    ) : (
      <button type="button" onClick={onStepBack} className={`${base} ${done} cursor-pointer hover:text-primary`}>
        1. 문의 유형 선택
      </button>
    )}
    <div className={`${base} ${step === 2 ? current : todo}`}>2. 상담 연결 · 접수</div>
  </div>
);

export default StepIndicator;
