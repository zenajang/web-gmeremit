"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Language {
  code: string;
  label: string;
  name: string;
  nativeName: string;
  color: string;
}

export const languages: Language[] = [
  { code: "en", label: "En", name: "English", nativeName: "English", color: "#ed1c24" },
  { code: "ko", label: "Ko", name: "Korean", nativeName: "한국어", color: "#3b82f6" },
  { code: "id", label: "Id", name: "Indonesian", nativeName: "Bahasa Indonesia", color: "#f59e0b" },
  { code: "mn", label: "Mn", name: "Mongolian", nativeName: "Монгол", color: "#06b6d4" },
  { code: "km", label: "Km", name: "Khmer", nativeName: "ភាសាខ្មែរ", color: "#8b5cf6" },
  { code: "bn", label: "Bn", name: "Bengali", nativeName: "বাংলা", color: "#10b981" },
  { code: "th", label: "Th", name: "Thai", nativeName: "ไทย", color: "#ec4899" },
  { code: "ur", label: "Ur", name: "Urdu", nativeName: "اردو", color: "#14b8a6" },
  { code: "zh", label: "Zh", name: "Chinese", nativeName: "中文", color: "#ef4444" },
  { code: "ja", label: "Ja", name: "Japanese", nativeName: "日本語", color: "#6366f1" },
  { code: "ne", label: "Ne", name: "Nepali", nativeName: "नेपाली", color: "#f97316" },
  { code: "si", label: "Si", name: "Sinhala", nativeName: "සිංහල", color: "#0ea5e9" },
  { code: "tl", label: "Tl", name: "Filipino", nativeName: "Filipino", color: "#a855f7" },
  { code: "hi", label: "Hi", name: "Hindi", nativeName: "हिन्दी", color: "#eab308" },
  { code: "my", label: "My", name: "Myanmar", nativeName: "မြန်မာ", color: "#22c55e" },
  { code: "vi", label: "Vi", name: "Vietnamese", nativeName: "Tiếng Việt", color: "#e11d48" },
  { code: "uz", label: "Uz", name: "Uzbek", nativeName: "Oʻzbekcha", color: "#0891b2" },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages.find((l) => l.code === "ko") ?? languages[0]
  );

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) {
      const lang = languages.find((l) => l.code === savedLang);
      if (lang) setCurrentLanguage(lang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang.code);
    document.documentElement.lang = lang.code;
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
