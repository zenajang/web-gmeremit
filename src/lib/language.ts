export interface Language {
  code: string;
  name: string;
  nativeName: string;
  /** public/images/flags 의 파일명 */
  flagCode: string;
}

export const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flagCode: "us" },
  { code: "ko", name: "Korean", nativeName: "한국어", flagCode: "kr" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flagCode: "id" },
  { code: "mn", name: "Mongolian", nativeName: "Монгол", flagCode: "mn" },
  { code: "km", name: "Khmer", nativeName: "ភាសាខ្មែរ", flagCode: "kh" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flagCode: "bd" },
  { code: "th", name: "Thai", nativeName: "ไทย", flagCode: "th" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flagCode: "pk" },
  { code: "zh", name: "Chinese", nativeName: "中文", flagCode: "cn" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flagCode: "jp" },
  { code: "ne", name: "Nepali", nativeName: "नेपाली", flagCode: "np" },
  { code: "si", name: "Sinhala", nativeName: "සිංහල", flagCode: "lk" },
  { code: "tl", name: "Filipino", nativeName: "Filipino", flagCode: "ph" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flagCode: "in" },
  { code: "my", name: "Myanmar", nativeName: "မြန်မာ", flagCode: "mm" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flagCode: "vn" },
  { code: "uz", name: "Uzbek", nativeName: "Oʻzbekcha", flagCode: "uz" },
  { code: "fr", name: "French", nativeName: "Français", flagCode: "fr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flagCode: "arab" },
  { code: "es", name: "Spanish", nativeName: "Español", flagCode: "es" },
];

export const LANGUAGE_COOKIE_NAME = "gme-language";

export const defaultLanguage =
  languages.find((language) => language.code === "ko") ?? languages[0];

export function getLanguageByCode(code?: string | null) {
  return languages.find((language) => language.code === code) ?? defaultLanguage;
}
