import { CategoryCard, FieldLabel } from "../../molecules";
import { CATEGORIES } from "../../constants";
import type { InquiryCategory } from "../../types";

interface CategorySelectorProps {
  onSelect: (category: InquiryCategory) => void;
}

const CategorySelector = ({ onSelect }: CategorySelectorProps) => (
  <>
    <FieldLabel required>어떤 문의이신가요?</FieldLabel>
    <div className="grid gap-3 [grid-template-columns:repeat(auto-fill,minmax(210px,1fr))]">
      {CATEGORIES.map((category) => (
        <CategoryCard key={category.no} category={category} onSelect={onSelect} />
      ))}
    </div>
  </>
);

export default CategorySelector;
