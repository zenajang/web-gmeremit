import { ActionButtons } from "../../molecules";

interface SubmissionCompleteProps {
  onReset: () => void;
}

const SubmissionComplete = ({ onReset }: SubmissionCompleteProps) => (
  <div className="px-5 py-10 text-center">
    <div className="mx-auto mb-5 flex h-[66px] w-[66px] items-center justify-center rounded-full bg-primary text-[32px] text-white shadow-[0_10px_24px_rgb(237_28_36/0.3)]">
      ✓
    </div>
    <h2 className="mb-2.5 text-[22px] font-bold text-dark">문의가 접수되었습니다</h2>
    <p className="mb-6 text-gray-600">
      담당 부서에서 확인 후 입력하신 이메일로 답변드리겠습니다.
    </p>
    <ActionButtons primaryLabel="처음으로" onPrimary={onReset} align="center" />
  </div>
);

export default SubmissionComplete;
