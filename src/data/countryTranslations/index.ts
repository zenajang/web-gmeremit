import ar from "@messages/pending/ar.json";
import bn from "@messages/pending/bn.json";
import en from "@messages/pending/en.json";
import es from "@messages/pending/es.json";
import fr from "@messages/pending/fr.json";
import hi from "@messages/pending/hi.json";
import id from "@messages/pending/id.json";
import ja from "@messages/pending/ja.json";
import kk from "@messages/pending/kk.json";
import km from "@messages/pending/km.json";
import ko from "@messages/pending/ko.json";
import ky from "@messages/pending/ky.json";
import lo from "@messages/pending/lo.json";
import mn from "@messages/pending/mn.json";
import my from "@messages/pending/my.json";
import ne from "@messages/pending/ne.json";
import ru from "@messages/pending/ru.json";
import si from "@messages/pending/si.json";
import th from "@messages/pending/th.json";
import tl from "@messages/pending/tl.json";
import ur from "@messages/pending/ur.json";
import uz from "@messages/pending/uz.json";
import vi from "@messages/pending/vi.json";
import zh from "@messages/pending/zh.json";

export interface CountryTranslationEntry {
  nativeLangCode: string;
  files: Record<string, Record<string, unknown>>;
}

interface PendingFile {
  landing?: Record<string, Record<string, unknown>>;
  [namespace: string]: unknown;
}

const normalize = (value: string) => value.toLowerCase().replace(/[-\s]+/g, "");

/** 언어코드 → 그 언어로 작성된 랜딩 번역 파일 */
const pendingByLang: Record<string, PendingFile> = {
  ar, bn, en, es, fr, hi, id, ja, kk, km, ko, ky, lo, mn, my, ne, ru, si, th, tl, ur, uz, vi, zh,
};

/** 국가별 고유 언어. 랜딩 번역이 그 언어로만 있을 때의 기본값 */
const nativeLangByCountry: Record<string, string> = {
  africa: "en",
  arab: "ar",
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
  russia: "ru",
  "spanish-latam": "es",
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
    const landing = data.landing?.[country];
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
