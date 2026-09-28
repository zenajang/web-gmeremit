import type { InquiryCategory } from "../../types";

interface CategoryCardProps {
  category: InquiryCategory;
  onSelect: (category: InquiryCategory) => void;
}

const CategoryCard = ({ category, onSelect }: CategoryCardProps) => (
  <button
    type="button"
    onClick={() => onSelect(category)}
    className="group cursor-pointer rounded-xl border border-gray-200 bg-white px-4 pt-4.5 pb-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-surface-warm hover:shadow-[0_8px_20px_rgb(237_28_36/0.08)]"
  >
    <span className="mb-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-dark text-[13px] font-bold text-white transition-colors group-hover:bg-primary">
      {category.no}
    </span>
    <span className="block text-[15px] font-bold text-dark">{category.name}</span>
    <span className="mt-1 block text-[12.5px] text-gray">{category.sub}</span>
  </button>
);

export default CategoryCard;
