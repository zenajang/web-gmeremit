"use client";

import { useCallback, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import ar from "@messages/inquiry/ar.json";
import bn from "@messages/inquiry/bn.json";
import en from "@messages/inquiry/en.json";
import es from "@messages/inquiry/es.json";
import fr from "@messages/inquiry/fr.json";
import hi from "@messages/inquiry/hi.json";
import id from "@messages/inquiry/id.json";
import ja from "@messages/inquiry/ja.json";
import km from "@messages/inquiry/km.json";
import ko from "@messages/inquiry/ko.json";
import mn from "@messages/inquiry/mn.json";
import my from "@messages/inquiry/my.json";
import ne from "@messages/inquiry/ne.json";
import si from "@messages/inquiry/si.json";
import th from "@messages/inquiry/th.json";
import tl from "@messages/inquiry/tl.json";
import ur from "@messages/inquiry/ur.json";
import uz from "@messages/inquiry/uz.json";
import vi from "@messages/inquiry/vi.json";
import zh from "@messages/inquiry/zh.json";

type Json = Record<string, unknown>;

const inquiryTranslations: Record<string, Json> = {
  ar, bn, en, es, fr, hi, id, ja, km, ko, mn, my, ne, si, th, tl, ur, uz, vi, zh,
};

const FALLBACK_LANG = "en";

function getNestedValue(source: Json, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Json)[key];
    }
    return undefined;
  }, source);
}

function interpolate(value: string, params?: Record<string, string>) {
  if (!params) return value;
  return Object.entries(params).reduce(
    (acc, [key, replacement]) => acc.replaceAll(`{{${key}}}`, replacement),
    value
  );
}

export function useInquiryTranslation() {
  const { currentLanguage } = useLanguage();

  const source = useMemo(
    () => inquiryTranslations[currentLanguage.code] ?? inquiryTranslations[FALLBACK_LANG],
    [currentLanguage.code]
  );

  const t = useCallback(
    (key: string, params?: Record<string, string>) => {
      const value = getNestedValue(source, key) ?? getNestedValue(inquiryTranslations[FALLBACK_LANG], key);
      if (typeof value !== "string") {
        console.warn(`Inquiry translation not found: ${key}`);
        return key;
      }
      return interpolate(value, params);
    },
    [source]
  );

  const tArray = useCallback(
    (key: string) => {
      const value = getNestedValue(source, key) ?? getNestedValue(inquiryTranslations[FALLBACK_LANG], key);
      if (!Array.isArray(value)) {
        console.warn(`Inquiry translation array not found: ${key}`);
        return [];
      }
      return value as string[];
    },
    [source]
  );

  return { t, tArray };
}
