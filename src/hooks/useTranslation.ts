"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useCallback, useMemo } from "react";

// Import all translation files
import en from "@messages/en.json";
import ko from "@messages/ko.json";
import zh from "@messages/zh.json";
import ja from "@messages/ja.json";
import vi from "@messages/vi.json";
import id from "@messages/id.json";
import tl from "@messages/tl.json";
import th from "@messages/th.json";
import hi from "@messages/hi.json";
import bn from "@messages/bn.json";
import ne from "@messages/ne.json";
import km from "@messages/km.json";
import ur from "@messages/ur.json";
import my from "@messages/my.json";
import mn from "@messages/mn.json";
import uz from "@messages/uz.json";
import si from "@messages/si.json";

type TranslationValue = string | string[] | Record<string, unknown>;
type Translations = Record<string, unknown>;

const translations: Record<string, Translations> = {
  en,
  ko,
  zh,
  ja,
  vi,
  id,
  tl,
  th,
  hi,
  bn,
  ne,
  km,
  ur,
  my,
  mn,
  uz,
  si,
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
export function useTranslation(namespace?: string) {
  const { currentLanguage } = useLanguage();

  const currentTranslations = useMemo(() => {
    return translations[currentLanguage.code] || translations.ko;
  }, [currentLanguage.code]);

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
      let value = getNestedValue(currentTranslations, fullPath);

      // If value is still the path, it wasn't found
      if (value === fullPath) {
        console.warn(`Translation not found: ${fullPath}`);
        return fullPath;
      }

      // Handle string interpolation (exclude 'ns' from interpolation)
      if (typeof value === "string" && params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
          if (paramKey === "ns") return;
          value = (value as string).replace(
            new RegExp(`{{${paramKey}}}`, "g"),
            String(paramValue)
          );
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
      const value = getNestedValue(currentTranslations, fullPath);

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
      const value = getNestedValue(currentTranslations, fullPath);

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
