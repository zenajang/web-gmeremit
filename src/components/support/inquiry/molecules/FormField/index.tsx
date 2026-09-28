import FieldLabel from "../FieldLabel";
import { FIELD_CLASS } from "../../constants";

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
  <div className="mb-5">
    <FieldLabel htmlFor={id} required={required}>
      {label}
    </FieldLabel>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={FIELD_CLASS}
    />
  </div>
);

export default FormField;
