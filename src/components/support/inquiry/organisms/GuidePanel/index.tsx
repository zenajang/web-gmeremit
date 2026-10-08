import * as S from "./styles";
import { ActionButtons } from "@/components/support/inquiry/molecules";
import { useTranslation } from "@/hooks/useTranslation";

interface GuidePanelProps {
  title: string;
  description: string;
  items: string[];
  actionLabel: string;
  onAction: () => void;
  onReset: () => void;
}

const GuidePanel = ({ title, description, items, actionLabel, onAction, onReset }: GuidePanelProps) => {
  const { t } = useTranslation();

  return (
  <div className={S.InquiryGuidePanel}>
    <h2 className={S.InquiryGuidePanelTitle}>{title}</h2>
    <p className={S.InquiryGuidePanelDescription}>{description}</p>
    <ul className={S.InquiryGuidePanelList}>
      {items.map((item) => (
        <li key={item} className={S.InquiryGuidePanelItem}>
          <span className={S.InquiryGuidePanelBullet} />
          {item}
        </li>
      ))}
    </ul>
    <div className={S.InquiryGuidePanelActions}>
      <ActionButtons
        primaryLabel={actionLabel}
        onPrimary={onAction}
        secondaryLabel={t("support-inquiry.guide-panel.common.reset")}
        onSecondary={onReset}
        align="center"
      />
    </div>
  </div>
  );
};

export default GuidePanel;
