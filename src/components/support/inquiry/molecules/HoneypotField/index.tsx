import * as S from "./styles";

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const HoneypotField = ({ value, onChange }: HoneypotFieldProps) => (
  <div aria-hidden className={S.InquiryHoneypotFieldWrapper}>
    <label htmlFor="inquiry-address-url">주소</label>
    <input
      id="inquiry-address-url"
      name="address_url"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      tabIndex={-1}
      autoComplete="off"
    />
  </div>
);

export default HoneypotField;
