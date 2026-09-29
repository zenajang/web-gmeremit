import * as S from "./styles";
import FieldLabel from "../FieldLabel";

interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const FormField = ({ id, label, value, onChange, placeholder, type = "text", required }: FormFieldProps) => (
  <div className={S.InquiryFormFieldWrapper}>
    <FieldLabel htmlFor={id} required={required}>
      {label}
    </FieldLabel>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={S.InquiryFormFieldInput}
    />
  </div>
);

export default FormField;
