import * as S from "./styles";
import FieldLabel from "@/components/support/inquiry/molecules/FieldLabel";

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const TextAreaField = ({ id, label, value, onChange, placeholder, required }: TextAreaFieldProps) => (
  <div className={S.InquiryTextAreaFieldWrapper}>
    <FieldLabel htmlFor={id} required={required}>
      {label}
    </FieldLabel>
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={S.InquiryTextAreaFieldInput}
    />
  </div>
);

export default TextAreaField;
