import * as S from "./styles";
import { ActionButtons } from "../../molecules";

interface SubmissionCompleteProps {
  onReset: () => void;
}

const SubmissionComplete = ({ onReset }: SubmissionCompleteProps) => (
  <div className={S.InquirySubmissionCompleteWrapper}>
    <div className={S.InquirySubmissionCompleteCheck}>✓</div>
    <h2 className={S.InquirySubmissionCompleteTitle}>문의가 접수되었습니다</h2>
    <p className={S.InquirySubmissionCompleteDescription}>담당 부서에서 확인 후 입력하신 이메일로 답변드리겠습니다.</p>
    <ActionButtons primaryLabel="처음으로" onPrimary={onReset} align="center" />
  </div>
);

export default SubmissionComplete;
