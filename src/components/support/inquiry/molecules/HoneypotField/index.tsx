import * as S from "./styles";
import { useInquiryTranslation } from "@/hooks/useInquiryTranslation";

interface HoneypotFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const HoneypotField = ({ value, onChange }: HoneypotFieldProps) => {
  const { t } = useInquiryTranslation();

  return (
    <div aria-hidden className={S.InquiryHoneypotFieldWrapper}>
      <label htmlFor="inquiry-address-url">{t("form.honeypot")}</label>
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
