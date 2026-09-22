"use client";

import { useCallback, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslation";

import ar from "@messages/pending/ar.json";
import bn from "@messages/pending/bn.json";
import en from "@messages/pending/en.json";
import es from "@messages/pending/es.json";
import fr from "@messages/pending/fr.json";
import hi from "@messages/pending/hi.json";
import id from "@messages/pending/id.json";
import ja from "@messages/pending/ja.json";
import km from "@messages/pending/km.json";
import ko from "@messages/pending/ko.json";
import mn from "@messages/pending/mn.json";
import my from "@messages/pending/my.json";
import ne from "@messages/pending/ne.json";
import si from "@messages/pending/si.json";
import th from "@messages/pending/th.json";
import tl from "@messages/pending/tl.json";
import ur from "@messages/pending/ur.json";
import uz from "@messages/pending/uz.json";
import vi from "@messages/pending/vi.json";
import zh from "@messages/pending/zh.json";

type Json = Record<string, unknown>;

/** PPT 수정분만 담긴 카드 전용 번역. 나머지 문구는 messages/*.json 을 그대로 쓴다. */
const cardOverrides: Record<string, Json> = {
  ar, bn, en, es, fr, hi, id, ja, km, ko, mn, my, ne, si, th, tl, ur, uz, vi, zh,
};

/** override 의 값만 덮어쓴다. null 은 "번역 없음"이라 base 값을 유지한다. */
function mergeOverride(base: unknown, override: unknown): unknown {
  if (override === null || override === undefined) return base;

  if (Array.isArray(override)) {
    const baseArray = Array.isArray(base) ? base : [];
    const length = Math.max(baseArray.length, override.length);
    return Array.from({ length }, (_, i) => mergeOverride(baseArray[i], override[i]));
  }

  if (typeof override === "object") {
    const baseObject = (base && typeof base === "object" && !Array.isArray(base) ? base : {}) as Json;
    const merged: Json = { ...baseObject };
    for (const [key, value] of Object.entries(override as Json)) {
      merged[key] = mergeOverride(baseObject[key], value);
    }
    return merged;
  }

  return override;
}

const ENGLISH_FALLBACK_LANGS = new Set(["ja", "fr"]);
const ENGLISH_FALLBACK_NAMESPACES = ["card", "home.cards"];
const FALLBACK_LANG = "en";

const mergedCache = new Map<string, Json>();

function getMerged(langCode: string): Json {
  const cached = mergedCache.get(langCode);
  if (cached) return cached;

  const base = (translations[langCode] ?? translations.ko) as Json;
  const override = cardOverrides[langCode];
  const merged = (override ? mergeOverride(base, { card: override.card, home: override.home, company: override.company }) : base) as Json;

  mergedCache.set(langCode, merged);
  return merged;
}

function getNestedValue(obj: Json, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Json)[key];
    }
    return undefined;
  }, obj);
}

/**
 * 홈 카드 섹션과 /services/card 전용 번역 훅.
 * countryTranslations/card 의 PPT 수정분이 messages 값을 덮어쓰고,
 * 양쪽 모두 없으면 키 경로를 그대로 노출한다.
 */
export function usePendingTranslation(namespace?: string) {
  const { currentLanguage } = useLanguage();

  const sourceLang = useMemo(() => {
    const needsEnglish = ENGLISH_FALLBACK_NAMESPACES.some((ns) => namespace?.startsWith(ns));
    return needsEnglish && ENGLISH_FALLBACK_LANGS.has(currentLanguage.code)
      ? FALLBACK_LANG
      : currentLanguage.code;
  }, [currentLanguage.code, namespace]);

  const data = useMemo(() => getMerged(sourceLang), [sourceLang]);

  const resolve = useCallback(
    (key: string) => {
      const fullPath = namespace ? `${namespace}.${key}` : key;
      return { fullPath, value: getNestedValue(data, fullPath) };
    },
    [data, namespace]
  );

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const { fullPath, value } = resolve(key);
      if (typeof value !== "string") return fullPath;
      if (!params) return value;
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replaceAll(`{{${paramKey}}}`, String(paramValue)),
        value
      );
    },
    [resolve]
  );

  const tArray = useCallback(
    (key: string): string[] => {
      const { value } = resolve(key);
      return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
    },
    [resolve]
  );

  const tObject = useCallback(
    <T = Record<string, unknown>>(key: string): T => {
      const { value } = resolve(key);
      return (typeof value === "object" && value !== null ? value : {}) as T;
    },
    [resolve]
  );

  return { t, tArray, tObject };
}
