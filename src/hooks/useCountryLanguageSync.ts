"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages, getLanguageByCode } from "@/lib/language";
import { getCountryTranslation } from "@/data/countryTranslations";

const FALLBACK_LANG_CODE = "en";

/**
 * 국가 랜딩에 들어오면 사이트 언어를 그 나라 언어로 맞춘다.
 * 그 언어가 사이트 언어 목록에 없으면(카자흐어·키르기스어·라오어·러시아어) 영어로 대체한다.
 * 국가가 바뀔 때만 동작하므로, 들어온 뒤 사용자가 직접 고른 언어는 덮어쓰지 않는다.
 */
export function useCountryLanguageSync(countryName: string) {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const nativeLangCode = getCountryTranslation(countryName)?.nativeLangCode;
    if (!nativeLangCode) return;

    const isSiteLanguage = languages.some((language) => language.code === nativeLangCode);
    setLanguage(getLanguageByCode(isSiteLanguage ? nativeLangCode : FALLBACK_LANG_CODE), {
      auto: true,
    });
  }, [countryName, setLanguage]);
}
