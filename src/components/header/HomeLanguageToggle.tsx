"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/lib/language";

const HOME_LANGUAGE_CODES = ["en", "ko"] as const;

const HOME_LANGUAGE_LABELS: Record<string, string> = { en: "EN", ko: "KR" };

const homeLanguages = HOME_LANGUAGE_CODES.map(
  (code) => languages.find((language) => language.code === code)!
);

const isHomeLanguage = (code: string) =>
  HOME_LANGUAGE_CODES.some((homeCode) => homeCode === code);

const HomeLanguageToggle = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    if (isHomeLanguage(currentLanguage.code)) return;
    setLanguage(homeLanguages[0]);
  }, [currentLanguage.code, setLanguage]);

  const activeIndex = homeLanguages.findIndex(
    (language) => language.code === currentLanguage.code
  );
  const selectedIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <div className="relative inline-flex items-center p-1 rounded-full bg-gray-100 border border-gray-200">
      <span
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-1 w-14 rounded-full bg-white shadow-sm transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${selectedIndex * 100}%)` }}
      />

      {homeLanguages.map((language, index) => (
        <button
          key={language.code}
          type="button"
          onClick={() => setLanguage(language)}
          aria-pressed={index === selectedIndex}
          className={`relative z-10 w-14 py-1.5 rounded-full text-[13px] font-semibold transition-colors duration-200 cursor-pointer ${
            index === selectedIndex ? "text-dark" : "text-gray-500 hover:text-dark"
          }`}
        >
          {HOME_LANGUAGE_LABELS[language.code]}
        </button>
      ))}
    </div>
  );
};

export default HomeLanguageToggle;
