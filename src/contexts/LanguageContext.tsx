"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import {
  type Language,
  LANGUAGE_COOKIE_NAME,
  getLanguageByCode,
} from "@/lib/language";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
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

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
    window.localStorage.setItem("language", currentLanguage.code);
  }, [currentLanguage.code]);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    window.localStorage.setItem("language", lang.code);
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${lang.code}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
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
