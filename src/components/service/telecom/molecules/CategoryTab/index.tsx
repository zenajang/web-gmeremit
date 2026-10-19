"use client";

import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";

interface CategoryTabProps {
  labelKey: string;
  isActive: boolean;
  onSelect: () => void;
}

const CategoryTab = ({ labelKey, isActive, onSelect }: CategoryTabProps) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`${S.CategoryTabButton} ${isActive ? S.CategoryTabButtonActive : S.CategoryTabButtonInactive}`}
    >
      {t(labelKey)}
    </button>
  );
};

export default CategoryTab;
