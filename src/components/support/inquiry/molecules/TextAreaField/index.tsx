import FieldLabel from "../FieldLabel";
import { FIELD_CLASS } from "../../constants";

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const TextAreaField = ({ id, label, value, onChange, placeholder, required }: TextAreaFieldProps) => (
  <div className="mb-5">
    <FieldLabel htmlFor={id} required={required}>
      {label}
    </FieldLabel>
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${FIELD_CLASS} min-h-[150px] resize-y`}
    />
  </div>
);

export default TextAreaField;
