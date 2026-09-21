"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import {
  type Language,
  LANGUAGE_COOKIE_NAME,
  getLanguageByCode,
} from "@/lib/language";

interface SetLanguageOptions {
  /** 국가 랜딩 진입처럼 사용자가 직접 고르지 않고 자동으로 맞춘 경우 */
  auto?: boolean;
}

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language, options?: SetLanguageOptions) => void;
  /** 현재 언어가 자동 설정된 값인지. 사용자가 직접 고르면 false 가 된다 */
  isAutoLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLanguageCode,
}: {
  children: ReactNode;
  initialLanguageCode?: string;
}) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() =>
    getLanguageByCode(initialLanguageCode)
  );
  const [isAutoLanguage, setIsAutoLanguage] = useState(false);

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
    window.localStorage.setItem("language", currentLanguage.code);
  }, [currentLanguage.code]);

  const setLanguage = useCallback((lang: Language, options?: SetLanguageOptions) => {
    setCurrentLanguage(lang);
    setIsAutoLanguage(options?.auto ?? false);
    window.localStorage.setItem("language", lang.code);
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${lang.code}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, isAutoLanguage }}>
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
