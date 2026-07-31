"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLanguageByCode } from "@/lib/language";

// 국가 랜딩 페이지에서만 표시 언어를 [영어 + 그 나라 locale]로 제한한다.
// 전역 언어가 허용 목록에 없으면(예: 한국어) 영어로 표시만 바꾸고,
// 페이지를 떠나면 원래 언어로 복원한다. 쿠키/전역 설정은 건드리지 않는다.
export default function CountryLangScope({ locale }: { locale: string }) {
  const { persistedLanguage, setLanguageOverride } = useLanguage();

  useEffect(() => {
    const allowed = new Set(["en", locale]);
    if (allowed.has(persistedLanguage.code)) {
      setLanguageOverride(null);
    } else {
      setLanguageOverride(getLanguageByCode("en"));
    }
    return () => setLanguageOverride(null);
  }, [persistedLanguage.code, locale, setLanguageOverride]);

  return null;
}
