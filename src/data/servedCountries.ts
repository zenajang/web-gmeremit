export interface ServedEntry {
  code: string;
  flagSrc?: string;
  emoji?: string;
  nameKey: string;
  nameNs: "home.hero-main" | "header";
  langCode: string;
}

function country(code: string, langCode: string): ServedEntry {
  return {
    code,
    flagSrc: `/images/flags/${code.toLowerCase()}.svg`,
    nameKey: `home.hero-main.countries.names.${code}`,
    nameNs: "home.hero-main",
    langCode,
  };
}

function region(code: string, emoji: string, nameKey: string, langCode: string): ServedEntry {
  return { code, emoji, nameKey, nameNs: "home.hero-main", langCode };
}

// 순서는 기획 확정본을 따른다. 드롭다운은 이 순서를 세로로 2열에 나눠 채운다.
// langCode: 선택 시 전환할 사이트 언어. 전용 언어가 없으면 "en".
export const servedEntries: ServedEntry[] = [
  country("KH", "km"),
  country("NP", "ne"),
  country("ID", "id"),
  country("UZ", "uz"),
  country("MM", "my"),
  country("TH", "th"),
  country("CN", "zh"),
  country("BD", "bn"),
  country("MN", "mn"),
  country("PH", "en"),
  country("VN", "vi"),
  country("LA", "en"),
  country("KZ", "en"),
  region("CIS", "🗺️", "home.hero-main.countries.names.CIS", "en"),
  country("LK", "si"),
  country("IN", "en"),
  region("WEST_AFRICA", "🌍", "home.hero-main.countries.names.WEST_AFRICA", "en"),
  country("KG", "en"),
  country("PK", "ur"),
];
