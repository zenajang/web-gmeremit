import africaEn from "./africa/en.json";
import arabAr from "./arab/ar.json";
import bangladeshBn from "./bangladesh/bn.json";
import cambodiaKm from "./cambodia/km.json";
import chinaZh from "./china/zh.json";
import indiaHi from "./india/hi.json";
import indonesiaId from "./indonesia/id.json";
import kazakhstanKk from "./kazakhstan/kk.json";
import kyrgyzstanKy from "./kyrgyzstan/ky.json";
import kyrgyzstanRu from "./kyrgyzstan/ru.json";
import laosLo from "./laos/lo.json";
import mongoliaMn from "./mongolia/mn.json";
import myanmarMy from "./myanmar/my.json";
import nepalNe from "./nepal/ne.json";
import pakistanUr from "./pakistan/ur.json";
import philippinesFil from "./philippines/fil.json";
import russiaRu from "./russia/ru.json";
import spanishLatamEs from "./spanish-latam/es.json";
import sriLankaSi from "./sri-lanka/si.json";
import sriLankaTa from "./sri-lanka/ta.json";
import thailandTh from "./thailand/th.json";
import uzbekistanUz from "./uzbekistan/uz.json";
import vietnamVi from "./vietnam/vi.json";

export interface CountryTranslationEntry {
  nativeLangCode: string;
  files: Record<string, Record<string, unknown>>;
}

const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");

const manifest: Record<string, CountryTranslationEntry> = {
  [normalize("africa")]: { nativeLangCode: "en", files: { en: africaEn } },
  [normalize("arab")]: { nativeLangCode: "ar", files: { ar: arabAr } },
  [normalize("bangladesh")]: { nativeLangCode: "bn", files: { bn: bangladeshBn } },
  [normalize("cambodia")]: { nativeLangCode: "km", files: { km: cambodiaKm } },
  [normalize("china")]: { nativeLangCode: "zh", files: { zh: chinaZh } },
  [normalize("india")]: { nativeLangCode: "hi", files: { hi: indiaHi } },
  [normalize("indonesia")]: { nativeLangCode: "id", files: { id: indonesiaId } },
  [normalize("kazakhstan")]: { nativeLangCode: "kk", files: { kk: kazakhstanKk } },
  [normalize("kyrgyzstan")]: { nativeLangCode: "ky", files: { ky: kyrgyzstanKy, ru: kyrgyzstanRu } },
  [normalize("laos")]: { nativeLangCode: "lo", files: { lo: laosLo } },
  [normalize("mongolia")]: { nativeLangCode: "mn", files: { mn: mongoliaMn } },
  [normalize("myanmar")]: { nativeLangCode: "my", files: { my: myanmarMy } },
  [normalize("nepal")]: { nativeLangCode: "ne", files: { ne: nepalNe } },
  [normalize("pakistan")]: { nativeLangCode: "ur", files: { ur: pakistanUr } },
  [normalize("philippines")]: { nativeLangCode: "fil", files: { fil: philippinesFil } },
  [normalize("russia")]: { nativeLangCode: "ru", files: { ru: russiaRu } },
  [normalize("spanish-latam")]: { nativeLangCode: "es", files: { es: spanishLatamEs } },
  [normalize("sri-lanka")]: { nativeLangCode: "si", files: { si: sriLankaSi, ta: sriLankaTa } },
  [normalize("thailand")]: { nativeLangCode: "th", files: { th: thailandTh } },
  [normalize("uzbekistan")]: { nativeLangCode: "uz", files: { uz: uzbekistanUz } },
  [normalize("vietnam")]: { nativeLangCode: "vi", files: { vi: vietnamVi } },
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

// 사이트 언어 코드가 국가 번역 파일의 언어코드와 다르게 표기되는 경우
const navLabelLangAliases: Record<string, string> = { tl: "fil" };

// 국가 번역 파일이 아예 없는 사이트 언어(한국어/일본어/프랑스어)용 수동 보완
const navLabelManualOverrides: Record<string, string> = { ko: "국가", ja: "国", fr: "Pays" };

export function getCountriesNavLabel(langCode: string): string {
  const code = navLabelLangAliases[langCode] ?? langCode;
  return navCountriesLabelByLang[code] ?? navLabelManualOverrides[langCode] ?? "Countries";
}
