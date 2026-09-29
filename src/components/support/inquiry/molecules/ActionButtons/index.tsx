import * as S from "./styles";
import DotLoader from "@/components/ui/DotLoader";

interface ActionButtonsProps {
  primaryLabel: string;
  onPrimary?: () => void;
  primaryType?: "button" | "submit";
  secondaryLabel?: string;
  onSecondary?: () => void;
  align?: "start" | "center";
  isLoading?: boolean;
}

const ActionButtons = ({
  primaryLabel,
  onPrimary,
  primaryType = "button",
  secondaryLabel,
  onSecondary,
  align = "start",
  isLoading = false,
}: ActionButtonsProps) => (
  <div className={`${S.InquiryActionButtonsRow} ${align === "center" ? S.InquiryActionButtonsRowCenter : ""}`}>
    <button
      type={primaryType}
      onClick={onPrimary}
      disabled={isLoading}
      aria-busy={isLoading}
      className={S.InquiryActionButtonsPrimary}
    >
      {isLoading ? <DotLoader /> : primaryLabel}
    </button>
    {secondaryLabel && (
      <button
        type="button"
        onClick={onSecondary}
        disabled={isLoading}
        className={S.InquiryActionButtonsSecondary}
      >
        {secondaryLabel}
      </button>
    )}
  </div>
);

export default ActionButtons;
