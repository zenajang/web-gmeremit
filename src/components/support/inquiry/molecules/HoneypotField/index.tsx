import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const HoneypotField = ({ value, onChange }: HoneypotFieldProps) => {
  const { t } = useTranslation();

  return (
    <div aria-hidden className={S.InquiryHoneypotFieldWrapper}>
      <label htmlFor="inquiry-address-url">{t("support-inquiry.honeypot-field.form.honeypot")}</label>
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
};

export default HoneypotField;
