import africa from "./landing/en.json";
import arab from "./landing/ar.json";
import bangladesh from "./landing/bn.json";
import cambodia from "./landing/km.json";
import china from "./landing/zh.json";
import india from "./landing/hi.json";
import indonesia from "./landing/id.json";
import kazakhstan from "./landing/kk.json";
import kyrgyzstan from "./landing/ky.json";
import laos from "./landing/lo.json";
import mongolia from "./landing/mn.json";
import myanmar from "./landing/my.json";
import nepal from "./landing/ne.json";
import pakistan from "./landing/ur.json";
import philippines from "./landing/tl.json";
import russia from "./landing/ru.json";
import spanishLatam from "./landing/es.json";
import sriLanka from "./landing/si.json";
import thailand from "./landing/th.json";
import uzbekistan from "./landing/uz.json";
import vietnam from "./landing/vi.json";

export interface CountryTranslationEntry {
  nativeLangCode: string;
  files: Record<string, Record<string, unknown>>;
}

const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");

const manifest: Record<string, CountryTranslationEntry> = {
  [normalize("africa")]: { nativeLangCode: "en", files: { en: africa } },
  [normalize("arab")]: { nativeLangCode: "ar", files: { ar: arab } },
  [normalize("bangladesh")]: { nativeLangCode: "bn", files: { bn: bangladesh } },
  [normalize("cambodia")]: { nativeLangCode: "km", files: { km: cambodia } },
  [normalize("china")]: { nativeLangCode: "zh", files: { zh: china } },
  [normalize("india")]: { nativeLangCode: "hi", files: { hi: india } },
  [normalize("indonesia")]: { nativeLangCode: "id", files: { id: indonesia } },
  [normalize("kazakhstan")]: { nativeLangCode: "kk", files: { kk: kazakhstan } },
  [normalize("kyrgyzstan")]: { nativeLangCode: "ky", files: { ky: kyrgyzstan } },
  [normalize("laos")]: { nativeLangCode: "lo", files: { lo: laos } },
  [normalize("mongolia")]: { nativeLangCode: "mn", files: { mn: mongolia } },
  [normalize("myanmar")]: { nativeLangCode: "my", files: { my: myanmar } },
  [normalize("nepal")]: { nativeLangCode: "ne", files: { ne: nepal } },
  [normalize("pakistan")]: { nativeLangCode: "ur", files: { ur: pakistan } },
  [normalize("philippines")]: { nativeLangCode: "tl", files: { tl: philippines } },
  [normalize("russia")]: { nativeLangCode: "ru", files: { ru: russia } },
  [normalize("spanish-latam")]: { nativeLangCode: "es", files: { es: spanishLatam } },
  [normalize("sri-lanka")]: { nativeLangCode: "si", files: { si: sriLanka } },
  [normalize("thailand")]: { nativeLangCode: "th", files: { th: thailand } },
  [normalize("uzbekistan")]: { nativeLangCode: "uz", files: { uz: uzbekistan } },
  [normalize("vietnam")]: { nativeLangCode: "vi", files: { vi: vietnam } },
};

// 헤더 국가 라우팅에서 실제 슬러그와 번역 폴더명이 다른 경우만 여기서 매핑
const slugAliases: Record<string, string> = {
  [normalize("Russian-Federation")]: normalize("russia"),
};

export function getCountryTranslation(countryName: string): CountryTranslationEntry | undefined {
  const key = normalize(countryName);
  return manifest[key] ?? manifest[slugAliases[key]];
}

// 헤더 "Countries" 네비 라벨: 각 국가 번역 파일의 header.navItems.countries 값을 언어코드별로 취합
const navCountriesLabelByLang: Record<string, string> = {};
for (const entry of Object.values(manifest)) {
  for (const [lang, data] of Object.entries(entry.files)) {
    const label = (data as { header?: { navItems?: { countries?: string } } }).header?.navItems?.countries;
    if (label && !navCountriesLabelByLang[lang]) navCountriesLabelByLang[lang] = label;
  }
}

// 국가 번역 파일이 아예 없는 사이트 언어(한국어/일본어/프랑스어)용 수동 보완
const navLabelManualOverrides: Record<string, string> = { ko: "국가", ja: "国", fr: "Pays" };

export function getCountriesNavLabel(langCode: string): string {
  return navCountriesLabelByLang[langCode] ?? navLabelManualOverrides[langCode] ?? "Countries";
}
