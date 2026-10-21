"use client";

import { useState } from "react";
import * as S from "./styles";
import { useTranslation } from "@/hooks/useTranslation";
import { FaqAccordionItem } from "@/components/support/faq/molecules";
import { SUPPORT_FAQ_NAMESPACE } from "@/components/support/faq/constants";
import type { SupportFaqItem } from "@/components/support/faq/types";

const SupportFaqTemplate = () => {
  const { t, tObject } = useTranslation(SUPPORT_FAQ_NAMESPACE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = tObject<SupportFaqItem[]>("items");
  if (!Array.isArray(items)) return null;

  return (
    <div>
      <div className={S.SupportFaqTemplateHead}>
        <h2 className={S.SupportFaqTemplateTitle}>{t("title")}</h2>
      </div>

      <div className={S.SupportFaqTemplateList}>
        {items.map((item, index) => (
          <FaqAccordionItem
            key={item.q}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SupportFaqTemplate;
