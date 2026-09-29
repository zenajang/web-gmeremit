import * as S from "./styles";
import { CategoryCard, FieldLabel } from "@/components/support/inquiry/molecules";
import { CATEGORIES } from "@/components/support/inquiry/constants";
import type { InquiryCategory } from "@/components/support/inquiry/types";

interface CategorySelectorProps {
  onSelect: (category: InquiryCategory) => void;
}

const CategorySelector = ({ onSelect }: CategorySelectorProps) => (
  <>
    <FieldLabel>어떤 문의이신가요?</FieldLabel>
    <div className={S.InquiryCategorySelectorGrid}>
      {CATEGORIES.map((category) => (
        <CategoryCard key={category.no} category={category} onSelect={onSelect} />
      ))}
    </div>
  </>
);

export default CategorySelector;
