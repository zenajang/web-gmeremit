import * as S from "./styles";

interface FieldLabelProps {
  children: React.ReactNode;
  /** 연결할 입력 요소의 id. 없으면 label 이 아닌 일반 텍스트로 렌더한다 */
  htmlFor?: string;
  required?: boolean;
}

const FieldLabel = ({ children, htmlFor, required }: FieldLabelProps) => {
  const content = (
    <>
      {children}
      {required && <span className={S.InquiryFieldLabelRequired}>*</span>}
    </>
  );

  return htmlFor ? (
    <label htmlFor={htmlFor} className={S.InquiryFieldLabel}>
      {content}
    </label>
  ) : (
    <span className={S.InquiryFieldLabel}>{content}</span>
  );
};

export default FieldLabel;
