import { ActionButtons } from "../../molecules";

interface GuidePanelProps {
  title: string;
  description: string;
  items: string[];
  actionLabel: string;
  onAction: () => void;
  onReset: () => void;
}

const GuidePanel = ({ title, description, items, actionLabel, onAction, onReset }: GuidePanelProps) => (
  <div className="rounded-xl border border-gray-200 bg-surface-1 p-6 text-center sm:p-8">
    <h2 className="mb-2 text-[21px] font-bold text-dark">{title}</h2>
    <p className="text-[14.5px] text-gray-600">{description}</p>
    <ul className="mx-auto mt-5 max-w-[420px] text-left text-sm text-gray-700">
      {items.map((item) => (
        <li key={item} className="relative py-1.5 pl-5">
          <span className="absolute left-1 top-3.5 h-[5px] w-[5px] rounded-full bg-primary" />
          {item}
        </li>
      ))}
    </ul>
    <div className="mt-6">
      <ActionButtons
        primaryLabel={actionLabel}
        onPrimary={onAction}
        secondaryLabel="유형 다시 선택"
        onSecondary={onReset}
        align="center"
      />
    </div>
  </div>
);

export default GuidePanel;
