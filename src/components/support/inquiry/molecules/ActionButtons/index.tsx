import * as S from "./styles";

interface ActionButtonsProps {
  primaryLabel: string;
  onPrimary?: () => void;
  primaryType?: "button" | "submit";
  secondaryLabel?: string;
  onSecondary?: () => void;
  align?: "start" | "center";
}

const ActionButtons = ({
  primaryLabel,
  onPrimary,
  primaryType = "button",
  secondaryLabel,
  onSecondary,
  align = "start",
}: ActionButtonsProps) => (
  <div className={`${S.InquiryActionButtonsRow} ${align === "center" ? S.InquiryActionButtonsRowCenter : ""}`}>
    <button type={primaryType} onClick={onPrimary} className={S.InquiryActionButtonsPrimary}>
      {primaryLabel}
    </button>
    {secondaryLabel && (
      <button type="button" onClick={onSecondary} className={S.InquiryActionButtonsSecondary}>
        {secondaryLabel}
      </button>
    )}
  </div>
);

export default ActionButtons;
