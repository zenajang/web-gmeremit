"use client";

import { useCallback, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getCountryTranslation } from "@/data/countryTranslations";
import { languages } from "@/lib/language";

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

const FALLBACK_LANG = "en";

const isSiteLanguage = (code: string) => languages.some((language) => language.code === code);

/**
 * 국가 랜딩페이지 전용 번역 훅.
 * 고유 언어가 사이트 언어에 없는 나라(키르기스스탄·카자흐스탄·라오스·러시아)는
 * 진입 직후에만 고유 언어로 보여준다. 사이트에서 고를 수 없는 언어라 랜딩에서만 읽을 수 있기 때문이다.
 * 그 외에는 사이트 언어 → 영어 → 고유 언어 순으로 찾는다.
 */
export function useCountryTranslation(countryName: string) {
  const { currentLanguage, isAutoLanguage } = useLanguage();
  const entry = useMemo(() => getCountryTranslation(countryName), [countryName]);

  const activeData = useMemo(() => {
    if (!entry) return {};

    // 사이트에서 고를 수 없는 언어의 나라는 진입 직후 고유 언어로 보여준다.
    // 사용자가 언어를 직접 고르면 그 언어를 따른다.
    const nativeOnly = !isSiteLanguage(entry.nativeLangCode);
    if (nativeOnly && isAutoLanguage && entry.files[entry.nativeLangCode]) {
      return entry.files[entry.nativeLangCode];
    }

    return (
      entry.files[currentLanguage.code] ??
      entry.files[FALLBACK_LANG] ??
      entry.files[entry.nativeLangCode] ??
      {}
    );
  }, [entry, currentLanguage.code, isAutoLanguage]);

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
