"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  type Language,
  LANGUAGE_COOKIE_NAME,
  getLanguageByCode,
} from "@/lib/language";

interface LanguageContextType {
  currentLanguage: Language;
  persistedLanguage: Language;
  setLanguage: (lang: Language) => void;
  // 저장 없이 표시만 바꾸는 페이지 한정 오버라이드 (국가 랜딩 페이지용)
  setLanguageOverride: (lang: Language | null) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguageCode,
}: {
  children: ReactNode;
  initialLanguageCode?: string;
}) {
  const [persistedLanguage, setPersistedLanguage] = useState<Language>(() =>
    getLanguageByCode(initialLanguageCode)
  );
  const [overrideLanguage, setLanguageOverride] = useState<Language | null>(null);

  const currentLanguage = overrideLanguage ?? persistedLanguage;

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage.code]);

  useEffect(() => {
    window.localStorage.setItem("language", persistedLanguage.code);
  }, [persistedLanguage.code]);

  const setLanguage = (lang: Language) => {
    setPersistedLanguage(lang);
    setLanguageOverride(null);
    window.localStorage.setItem("language", lang.code);
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${lang.code}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, persistedLanguage, setLanguage, setLanguageOverride }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
