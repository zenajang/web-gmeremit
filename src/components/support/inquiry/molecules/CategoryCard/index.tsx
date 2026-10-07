import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import type { InquiryCategory } from "@/components/support/inquiry/types";

interface CategoryCardProps {
  category: InquiryCategory;
  onSelect: (category: InquiryCategory) => void;
}

const CategoryCard = ({ category, onSelect }: CategoryCardProps) => {
  const { t } = useTranslation();

  return (
    <button type="button" onClick={() => onSelect(category)} className={S.InquiryCategoryCard}>
      <span className={S.InquiryCategoryCardNumber}>{category.no}</span>
      <span className={S.InquiryCategoryCardName}>{t(`support-inquiry.category-card.categories.${category.no}.name`)}</span>
      <span className={S.InquiryCategoryCardSub}>{t(`support-inquiry.category-card.categories.${category.no}.sub`)}</span>
    </button>
  );
};

export default CategoryCard;
