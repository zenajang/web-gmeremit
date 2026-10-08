import ar from "@messages/country/ar.json";
import bn from "@messages/country/bn.json";
import en from "@messages/country/en.json";
import es from "@messages/country/es.json";
import fr from "@messages/country/fr.json";
import hi from "@messages/country/hi.json";
import id from "@messages/country/id.json";
import ja from "@messages/country/ja.json";
import kk from "@messages/country/kk.json";
import km from "@messages/country/km.json";
import ky from "@messages/country/ky.json";
import lo from "@messages/country/lo.json";
import ko from "@messages/country/ko.json";
import mn from "@messages/country/mn.json";
import my from "@messages/country/my.json";
import ne from "@messages/country/ne.json";
import si from "@messages/country/si.json";
import th from "@messages/country/th.json";
import tl from "@messages/country/tl.json";
import ur from "@messages/country/ur.json";
import uz from "@messages/country/uz.json";
import vi from "@messages/country/vi.json";
import zh from "@messages/country/zh.json";

export interface CountryTranslationEntry {
  nativeLangCode: string;
  files: Record<string, Record<string, unknown>>;
}

interface PendingFile {
  [country: string]: unknown;
}

const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");

/** 언어코드 → 그 언어로 작성된 랜딩 번역 파일 */
const pendingByLang: Record<string, PendingFile> = {
  ar, bn, en, es, fr, hi, id, ja, kk, km, ky, lo, ko, mn, my, ne, si, th, tl, ur, uz, vi, zh,
};

/** 국가별 고유 언어. 랜딩 번역이 그 언어로만 있을 때의 기본값 */
const nativeLangByCountry: Record<string, string> = {
  bangladesh: "bn",
  cambodia: "km",
  china: "zh",
  india: "hi",
  indonesia: "id",
  kazakhstan: "kk",
  kyrgyzstan: "ky",
  laos: "lo",
  mongolia: "mn",
  myanmar: "my",
  nepal: "ne",
  pakistan: "ur",
  philippines: "tl",
  "sri-lanka": "si",
  thailand: "th",
  uzbekistan: "uz",
  vietnam: "vi",
};

// 각 언어 파일의 landing 아래 국가 키를 훑어 국가별로 언어를 모은다.
// 같은 국가에 언어 파일이 늘어나면 자동으로 선택지가 늘어난다.
const manifest: Record<string, CountryTranslationEntry> = {};

for (const [country, nativeLangCode] of Object.entries(nativeLangByCountry)) {
  const files: Record<string, Record<string, unknown>> = {};

  for (const [langCode, data] of Object.entries(pendingByLang)) {
    const landing = (data.country as Record<string, Record<string, unknown>> | undefined)?.[country];
    if (landing) files[langCode] = landing;
  }

  manifest[normalize(country)] = { nativeLangCode, files };
}

// 헤더 국가 라우팅에서 실제 슬러그와 번역 키가 다른 경우만 여기서 매핑
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
