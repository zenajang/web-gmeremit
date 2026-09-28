interface ActionButtonsProps {
  primaryLabel: string;
  /** submit 버튼이면 onPrimary 없이 type 만 넘긴다 */
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
  <div className={`flex flex-col gap-2.5 sm:flex-row ${align === "center" ? "justify-center" : ""}`}>
    <button
      type={primaryType}
      onClick={onPrimary}
      className="cursor-pointer rounded-[10px] bg-primary-dark px-8 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary"
    >
      {primaryLabel}
    </button>
    {secondaryLabel && (
      <button
        type="button"
        onClick={onSecondary}
        className="cursor-pointer rounded-[10px] border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-600 transition-colors hover:bg-surface-1"
      >
        {secondaryLabel}
      </button>
    )}
  </div>
);

export default ActionButtons;
