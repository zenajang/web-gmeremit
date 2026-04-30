"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { languages, type Language } from "@/lib/language";

interface LanguageOptionListProps {
  onSelectComplete?: () => void;
  renderItem: (
    args: {
      lang: Language;
      isSelected: boolean;
      index: number;
      selectLanguage: () => void;
    }
  ) => React.ReactNode;
}

export default function LanguageOptionList({
  onSelectComplete,
  renderItem,
}: LanguageOptionListProps) {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <>
      {languages.map((lang, index) => {
        const isSelected = currentLanguage.code === lang.code;

        const selectLanguage = () => {
          setLanguage(lang);
          onSelectComplete?.();
        };

        return renderItem({ lang, isSelected, index, selectLanguage });
      })}
    </>
  );
}
