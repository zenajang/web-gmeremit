import * as S from "./styles";
import type { InquiryCategory } from "@/components/support/inquiry/types";

interface CategoryCardProps {
  category: InquiryCategory;
  onSelect: (category: InquiryCategory) => void;
}

const CategoryCard = ({ category, onSelect }: CategoryCardProps) => (
  <button type="button" onClick={() => onSelect(category)} className={S.InquiryCategoryCard}>
    <span className={S.InquiryCategoryCardNumber}>{category.no}</span>
    <span className={S.InquiryCategoryCardName}>{category.name}</span>
    <span className={S.InquiryCategoryCardSub}>{category.sub}</span>
  </button>
);

export default CategoryCard;
