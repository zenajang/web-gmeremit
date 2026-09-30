import * as S from "./styles";
import { useInquiryTranslation } from "@/hooks/useInquiryTranslation";
import type { InquiryCategory } from "@/components/support/inquiry/types";

interface CategoryCardProps {
  category: InquiryCategory;
  onSelect: (category: InquiryCategory) => void;
}

const CategoryCard = ({ category, onSelect }: CategoryCardProps) => {
  const { t } = useInquiryTranslation();

  return (
    <button type="button" onClick={() => onSelect(category)} className={S.InquiryCategoryCard}>
      <span className={S.InquiryCategoryCardNumber}>{category.no}</span>
      <span className={S.InquiryCategoryCardName}>{t(`categories.${category.no}.name`)}</span>
      <span className={S.InquiryCategoryCardSub}>{t(`categories.${category.no}.sub`)}</span>
    </button>
  );
};

export default CategoryCard;
