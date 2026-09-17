import africa from "@messages/pending/en.json";
import arab from "@messages/pending/ar.json";
import bangladesh from "@messages/pending/bn.json";
import cambodia from "@messages/pending/km.json";
import china from "@messages/pending/zh.json";
import india from "@messages/pending/hi.json";
import indonesia from "@messages/pending/id.json";
import kazakhstan from "@messages/pending/kk.json";
import kyrgyzstan from "@messages/pending/ky.json";
import laos from "@messages/pending/lo.json";
import mongolia from "@messages/pending/mn.json";
import myanmar from "@messages/pending/my.json";
import nepal from "@messages/pending/ne.json";
import pakistan from "@messages/pending/ur.json";
import philippines from "@messages/pending/tl.json";
import russia from "@messages/pending/ru.json";
import spanishLatam from "@messages/pending/es.json";
import sriLanka from "@messages/pending/si.json";
import thailand from "@messages/pending/th.json";
import uzbekistan from "@messages/pending/uz.json";
import vietnam from "@messages/pending/vi.json";

export interface CountryTranslationEntry {
  nativeLangCode: string;
  files: Record<string, Record<string, unknown>>;
}

const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");

const manifest: Record<string, CountryTranslationEntry> = {
  [normalize("africa")]: { nativeLangCode: "en", files: { en: africa.landing } },
  [normalize("arab")]: { nativeLangCode: "ar", files: { ar: arab.landing } },
  [normalize("bangladesh")]: { nativeLangCode: "bn", files: { bn: bangladesh.landing } },
  [normalize("cambodia")]: { nativeLangCode: "km", files: { km: cambodia.landing } },
  [normalize("china")]: { nativeLangCode: "zh", files: { zh: china.landing } },
  [normalize("india")]: { nativeLangCode: "hi", files: { hi: india.landing } },
  [normalize("indonesia")]: { nativeLangCode: "id", files: { id: indonesia.landing } },
  [normalize("kazakhstan")]: { nativeLangCode: "kk", files: { kk: kazakhstan.landing } },
  [normalize("kyrgyzstan")]: { nativeLangCode: "ky", files: { ky: kyrgyzstan.landing } },
  [normalize("laos")]: { nativeLangCode: "lo", files: { lo: laos.landing } },
  [normalize("mongolia")]: { nativeLangCode: "mn", files: { mn: mongolia.landing } },
  [normalize("myanmar")]: { nativeLangCode: "my", files: { my: myanmar.landing } },
  [normalize("nepal")]: { nativeLangCode: "ne", files: { ne: nepal.landing } },
  [normalize("pakistan")]: { nativeLangCode: "ur", files: { ur: pakistan.landing } },
  [normalize("philippines")]: { nativeLangCode: "tl", files: { tl: philippines.landing } },
  [normalize("russia")]: { nativeLangCode: "ru", files: { ru: russia.landing } },
  [normalize("spanish-latam")]: { nativeLangCode: "es", files: { es: spanishLatam.landing } },
  [normalize("sri-lanka")]: { nativeLangCode: "si", files: { si: sriLanka.landing } },
  [normalize("thailand")]: { nativeLangCode: "th", files: { th: thailand.landing } },
  [normalize("uzbekistan")]: { nativeLangCode: "uz", files: { uz: uzbekistan.landing } },
  [normalize("vietnam")]: { nativeLangCode: "vi", files: { vi: vietnam.landing } },
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
