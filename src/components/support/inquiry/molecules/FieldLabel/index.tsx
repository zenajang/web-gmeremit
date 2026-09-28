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
      {required && <span className="ml-0.5 text-primary">*</span>}
    </>
  );
  const className = "mb-3.5 block text-[15px] font-bold text-dark";

  return htmlFor ? (
    <label htmlFor={htmlFor} className={className}>
      {content}
    </label>
  ) : (
    <span className={className}>{content}</span>
  );
};

export default FieldLabel;
