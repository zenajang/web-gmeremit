"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useMemo } from "react";

// 페이지 폴더별 번역 파일
import common_en from "@messages/common/en.json";
import common_ko from "@messages/common/ko.json";
import common_zh from "@messages/common/zh.json";
import common_ja from "@messages/common/ja.json";
import common_vi from "@messages/common/vi.json";
import common_id from "@messages/common/id.json";
import common_tl from "@messages/common/tl.json";
import common_th from "@messages/common/th.json";
import common_hi from "@messages/common/hi.json";
import common_bn from "@messages/common/bn.json";
import common_ne from "@messages/common/ne.json";
import common_km from "@messages/common/km.json";
import common_ur from "@messages/common/ur.json";
import common_my from "@messages/common/my.json";
import common_mn from "@messages/common/mn.json";
import common_uz from "@messages/common/uz.json";
import common_si from "@messages/common/si.json";
import common_fr from "@messages/common/fr.json";
import common_ar from "@messages/common/ar.json";
import common_es from "@messages/common/es.json";
import board_en from "@messages/board/en.json";
import board_ko from "@messages/board/ko.json";
import board_zh from "@messages/board/zh.json";
import board_ja from "@messages/board/ja.json";
import board_vi from "@messages/board/vi.json";
import board_id from "@messages/board/id.json";
import board_tl from "@messages/board/tl.json";
import board_th from "@messages/board/th.json";
import board_hi from "@messages/board/hi.json";
import board_bn from "@messages/board/bn.json";
import board_ne from "@messages/board/ne.json";
import board_km from "@messages/board/km.json";
import board_ur from "@messages/board/ur.json";
import board_my from "@messages/board/my.json";
import board_mn from "@messages/board/mn.json";
import board_uz from "@messages/board/uz.json";
import board_si from "@messages/board/si.json";
import board_fr from "@messages/board/fr.json";
import board_ar from "@messages/board/ar.json";
import board_es from "@messages/board/es.json";
import company_en from "@messages/company/en.json";
import company_ko from "@messages/company/ko.json";
import company_zh from "@messages/company/zh.json";
import company_ja from "@messages/company/ja.json";
import company_vi from "@messages/company/vi.json";
import company_id from "@messages/company/id.json";
import company_tl from "@messages/company/tl.json";
import company_th from "@messages/company/th.json";
import company_hi from "@messages/company/hi.json";
import company_bn from "@messages/company/bn.json";
import company_ne from "@messages/company/ne.json";
import company_km from "@messages/company/km.json";
import company_ur from "@messages/company/ur.json";
import company_my from "@messages/company/my.json";
import company_mn from "@messages/company/mn.json";
import company_uz from "@messages/company/uz.json";
import company_si from "@messages/company/si.json";
import company_fr from "@messages/company/fr.json";
import company_ar from "@messages/company/ar.json";
import company_es from "@messages/company/es.json";
import country_en from "@messages/country/en.json";
import country_ko from "@messages/country/ko.json";
import country_zh from "@messages/country/zh.json";
import country_ja from "@messages/country/ja.json";
import country_vi from "@messages/country/vi.json";
import country_id from "@messages/country/id.json";
import country_tl from "@messages/country/tl.json";
import country_th from "@messages/country/th.json";
import country_hi from "@messages/country/hi.json";
import country_bn from "@messages/country/bn.json";
import country_ne from "@messages/country/ne.json";
import country_km from "@messages/country/km.json";
import country_ur from "@messages/country/ur.json";
import country_my from "@messages/country/my.json";
import country_mn from "@messages/country/mn.json";
import country_uz from "@messages/country/uz.json";
import country_si from "@messages/country/si.json";
import country_fr from "@messages/country/fr.json";
import country_ar from "@messages/country/ar.json";
import country_es from "@messages/country/es.json";
import home_en from "@messages/home/en.json";
import home_ko from "@messages/home/ko.json";
import home_zh from "@messages/home/zh.json";
import home_ja from "@messages/home/ja.json";
import home_vi from "@messages/home/vi.json";
import home_id from "@messages/home/id.json";
import home_tl from "@messages/home/tl.json";
import home_th from "@messages/home/th.json";
import home_hi from "@messages/home/hi.json";
import home_bn from "@messages/home/bn.json";
import home_ne from "@messages/home/ne.json";
import home_km from "@messages/home/km.json";
import home_ur from "@messages/home/ur.json";
import home_my from "@messages/home/my.json";
import home_mn from "@messages/home/mn.json";
import home_uz from "@messages/home/uz.json";
import home_si from "@messages/home/si.json";
import home_fr from "@messages/home/fr.json";
import home_ar from "@messages/home/ar.json";
import home_es from "@messages/home/es.json";
import services_en from "@messages/services/en.json";
import services_ko from "@messages/services/ko.json";
import services_zh from "@messages/services/zh.json";
import services_ja from "@messages/services/ja.json";
import services_vi from "@messages/services/vi.json";
import services_id from "@messages/services/id.json";
import services_tl from "@messages/services/tl.json";
import services_th from "@messages/services/th.json";
import services_hi from "@messages/services/hi.json";
import services_bn from "@messages/services/bn.json";
import services_ne from "@messages/services/ne.json";
import services_km from "@messages/services/km.json";
import services_ur from "@messages/services/ur.json";
import services_my from "@messages/services/my.json";
import services_mn from "@messages/services/mn.json";
import services_uz from "@messages/services/uz.json";
import services_si from "@messages/services/si.json";
import services_fr from "@messages/services/fr.json";
import services_ar from "@messages/services/ar.json";
import services_es from "@messages/services/es.json";
import support_en from "@messages/support/en.json";
import support_ko from "@messages/support/ko.json";
import support_zh from "@messages/support/zh.json";
import support_ja from "@messages/support/ja.json";
import support_vi from "@messages/support/vi.json";
import support_id from "@messages/support/id.json";
import support_tl from "@messages/support/tl.json";
import support_th from "@messages/support/th.json";
import support_hi from "@messages/support/hi.json";
import support_bn from "@messages/support/bn.json";
import support_ne from "@messages/support/ne.json";
import support_km from "@messages/support/km.json";
import support_ur from "@messages/support/ur.json";
import support_my from "@messages/support/my.json";
import support_mn from "@messages/support/mn.json";
import support_uz from "@messages/support/uz.json";
import support_si from "@messages/support/si.json";
import support_fr from "@messages/support/fr.json";
import support_ar from "@messages/support/ar.json";
import support_es from "@messages/support/es.json";

type TranslationValue = string | string[] | Record<string, unknown>;
type Translations = Record<string, unknown>;

export const translations: Record<string, Translations> = {
  en: { ...common_en, ...board_en, ...company_en, ...country_en, ...home_en, ...services_en, ...support_en },
  ko: { ...common_ko, ...board_ko, ...company_ko, ...country_ko, ...home_ko, ...services_ko, ...support_ko },
  zh: { ...common_zh, ...board_zh, ...company_zh, ...country_zh, ...home_zh, ...services_zh, ...support_zh },
  ja: { ...common_ja, ...board_ja, ...company_ja, ...country_ja, ...home_ja, ...services_ja, ...support_ja },
  vi: { ...common_vi, ...board_vi, ...company_vi, ...country_vi, ...home_vi, ...services_vi, ...support_vi },
  id: { ...common_id, ...board_id, ...company_id, ...country_id, ...home_id, ...services_id, ...support_id },
  tl: { ...common_tl, ...board_tl, ...company_tl, ...country_tl, ...home_tl, ...services_tl, ...support_tl },
  th: { ...common_th, ...board_th, ...company_th, ...country_th, ...home_th, ...services_th, ...support_th },
  hi: { ...common_hi, ...board_hi, ...company_hi, ...country_hi, ...home_hi, ...services_hi, ...support_hi },
  bn: { ...common_bn, ...board_bn, ...company_bn, ...country_bn, ...home_bn, ...services_bn, ...support_bn },
  ne: { ...common_ne, ...board_ne, ...company_ne, ...country_ne, ...home_ne, ...services_ne, ...support_ne },
  km: { ...common_km, ...board_km, ...company_km, ...country_km, ...home_km, ...services_km, ...support_km },
  ur: { ...common_ur, ...board_ur, ...company_ur, ...country_ur, ...home_ur, ...services_ur, ...support_ur },
  my: { ...common_my, ...board_my, ...company_my, ...country_my, ...home_my, ...services_my, ...support_my },
  mn: { ...common_mn, ...board_mn, ...company_mn, ...country_mn, ...home_mn, ...services_mn, ...support_mn },
  uz: { ...common_uz, ...board_uz, ...company_uz, ...country_uz, ...home_uz, ...services_uz, ...support_uz },
  si: { ...common_si, ...board_si, ...company_si, ...country_si, ...home_si, ...services_si, ...support_si },
  fr: { ...common_fr, ...board_fr, ...company_fr, ...country_fr, ...home_fr, ...services_fr, ...support_fr },
  ar: { ...common_ar, ...board_ar, ...company_ar, ...country_ar, ...home_ar, ...services_ar, ...support_ar },
  es: { ...common_es, ...board_es, ...company_es, ...country_es, ...home_es, ...services_es, ...support_es },
};

/**
 * Get a nested value from an object using dot notation
 * @param obj - The object to traverse
 * @param path - Dot-notation path (e.g., "home.hero.title1")
 * @returns The value at the path or the path itself if not found
 */
function getNestedValue(obj: Translations, path: string): TranslationValue {
  const keys = path.split(".");
  let current: unknown = obj;

  for (const key of keys) {
    if (current && typeof current === "object" && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      // Return the path as fallback if translation not found
      return path;
    }
  }

  return current as TranslationValue;
}

/**
 * Hook to get translations for a specific namespace
 * @param namespace - The namespace to use (e.g., "home.hero")
 * @returns Translation function
 */
const FALLBACK_LANG = "en";

/**
 * 카드 영역은 일본어·프랑스어 번역이 들어오지 않아 통째로 영어로 보여준다.
 * 키마다 따로 떨어뜨리면 한 화면에 두 언어가 섞인다.
 */
const ENGLISH_FALLBACK_LANGS = new Set(["ja", "fr"]);
const ENGLISH_FALLBACK_PREFIXES = ["services-card", "home.cards-showcase"];

function resolveSourceLang(langCode: string, fullPath: string): string {
  if (!ENGLISH_FALLBACK_LANGS.has(langCode)) return langCode;
  return ENGLISH_FALLBACK_PREFIXES.some((prefix) => fullPath.startsWith(prefix))
    ? FALLBACK_LANG
    : langCode;
}

export function useTranslation(namespace?: string, langCodeOverride?: string) {
  const { currentLanguage } = useLanguage();
  const langCode = langCodeOverride ?? currentLanguage.code;

  const currentTranslations = useMemo(() => {
    return translations[langCode] || translations.ko;
  }, [langCode]);

  /**
   * Get a translated string
   * @param key - The translation key (can be nested with dots)
   * @param params - Optional parameters for interpolation
   * @returns Translated string
   */
  const t = useCallback(
    (key: string, params?: Record<string, string | number> & { ns?: string }): string => {
      const effectiveNamespace = params?.ns ?? namespace;
      const fullPath = effectiveNamespace ? `${effectiveNamespace}.${key}` : key;
      let value = getNestedValue(translations[resolveSourceLang(langCode, fullPath)] ?? currentTranslations, fullPath);

      if (value === fullPath) {
        console.warn(`Translation not found: ${fullPath}`);
        return fullPath;
      }

      // Handle string interpolation (exclude 'ns' from interpolation)
      // 앱과 같은 키를 쓰는 문구는 Lokalise 에 %1$s 형태로 들어와 있어 자리 번호로도 받는다
      if (typeof value === "string" && params) {
        Object.entries(params)
          .filter(([paramKey]) => paramKey !== "ns")
          .forEach(([paramKey, paramValue], index) => {
            value = (value as string)
              .replace(new RegExp(`\\{\\{${paramKey}\\}\\}`, "g"), String(paramValue))
              .replace(new RegExp(`%${index + 1}\\$[sd]`, "g"), String(paramValue));
          });
      }

      return value as string;
    },
    [currentTranslations, namespace]
  );

  /**
   * Get an array of translated strings
   * @param key - The translation key for an array
   * @returns Array of translated strings
   */
  const tArray = useCallback(
    (key: string): string[] => {
      const fullPath = namespace ? `${namespace}.${key}` : key;
      const value = getNestedValue(translations[resolveSourceLang(langCode, fullPath)] ?? currentTranslations, fullPath);

      if (Array.isArray(value)) {
        return value as string[];
      }

      console.warn(`Translation array not found: ${fullPath}`);
      return [];
    },
    [currentTranslations, namespace]
  );

  /**
   * Get a nested object of translations
   * @param key - The translation key for an object
   * @returns Object of translations
   */
  const tObject = useCallback(
    <T = Record<string, unknown>>(key: string): T => {
      const fullPath = namespace ? `${namespace}.${key}` : key;
      const value = getNestedValue(translations[resolveSourceLang(langCode, fullPath)] ?? currentTranslations, fullPath);

      if (typeof value === "object" && value !== null) {
        return value as T;
      }

      console.warn(`Translation object not found: ${fullPath}`);
      return {} as T;
    },
    [currentTranslations, namespace]
  );

  return {
    t,
    tArray,
    tObject,
    currentLanguage: currentLanguage.code,
  };
}

/**
 * Standalone function to get translations (for non-hook contexts)
 * @param langCode - Language code
 * @param path - Full path to translation
 * @returns Translated value
 */
export function getTranslation(
  langCode: string,
  path: string
): TranslationValue {
  const langTranslations = translations[langCode] || translations.ko;
  return getNestedValue(langTranslations, path);
}
