"use client";

import * as S from "./styles";
import type { SupportFaqItem } from "@/components/support/faq/types";

interface FaqAccordionItemProps {
  item: SupportFaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqAccordionItem = ({ item, isOpen, onToggle }: FaqAccordionItemProps) => {
  return (
    <div className={S.SupportFaqAccordionItemWrapper}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={S.SupportFaqAccordionItemButton}
      >
        <span className={S.SupportFaqAccordionItemQuestion}>{item.q}</span>
        <svg
          className={
            isOpen ? S.SupportFaqAccordionItemChevronOpen : S.SupportFaqAccordionItemChevron
          }
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={isOpen ? S.SupportFaqAccordionItemPanelOpen : S.SupportFaqAccordionItemPanel}>
        <div className={S.SupportFaqAccordionItemPanelBody}>
          <div className={S.SupportFaqAccordionItemDivider} />
          <p className={S.SupportFaqAccordionItemAnswer}>{item.a}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordionItem;
