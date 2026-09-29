import * as S from "./styles";

interface FieldLabelProps {
  children: React.ReactNode;
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
