"use client";

import { useCallback, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCountryTranslation } from "@/data/countryTranslations";

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

/**
 * 국가 랜딩페이지 전용 번역 훅.
 * 진입 시엔 그 나라 고유 언어(nativeLangCode)로 보여주고,
 * 사이트 언어를 바꾸면 해당 언어 파일이 있는 경우에만 그걸로 전환됨(없으면 고유 언어 유지).
 */
export function useCountryTranslation(countryName: string) {
  const { currentLanguage } = useLanguage();
  const entry = useMemo(() => getCountryTranslation(countryName), [countryName]);

  const activeData = useMemo(() => {
    if (!entry) return {};
    return entry.files[currentLanguage.code] ?? entry.files[entry.nativeLangCode] ?? {};
  }, [entry, currentLanguage.code]);

  const t = useCallback(
    (key: string, params?: Record<string, string>): string => {
      const value = getNestedValue(activeData, key);
      if (typeof value !== "string") return key;
      if (!params) return value;
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replaceAll(`{${paramKey}}`, paramValue),
        value
      );
    },
    [activeData]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(activeData, key);
      return Array.isArray(value) ? (value as string[]) : [];
    },
    [activeData]
  );

  const tObject = useCallback(
    <T = Record<string, unknown>>(key: string): T | undefined => {
      const value = getNestedValue(activeData, key);
      return typeof value === "object" && value !== null ? (value as T) : undefined;
    },
    [activeData]
  );

  return { t, tArray, tObject };
}
