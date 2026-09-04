export interface ServedEntry {
  code: string;
  flagSrc?: string;
  emoji?: string;
  nameKey: string;
  nameNs: "home.hero" | "header";
  langCode: string;
}

function country(code: string, langCode: string): ServedEntry {
  return {
    code,
    flagSrc: `/images/flags/${code.toLowerCase()}.svg`,
    nameKey: `countries.names.${code}`,
    nameNs: "home.hero",
    langCode,
  };
}

function region(code: string, emoji: string, nameKey: string, langCode: string): ServedEntry {
  return { code, emoji, nameKey, nameNs: "header", langCode };
}

// Order matches the reference GME country selector exactly.
// langCode: matching site language when selected; "en" when no dedicated language exists.
export const servedEntries: ServedEntry[] = [
  country("PH", "en"),
  country("ID", "id"),
  country("AFRICA", "en"),
  country("ARAB", "ar"),
  country("CN", "zh"),
  country("SPANISH_LATAM", "es"),
  country("VN", "vi"),
  country("KZ", "en"),
  country("KH", "km"),
  country("BD", "bn"),
  country("MN", "mn"),
  country("LA", "en"),
  country("RU", "ru"),
  country("MM", "my"),
  country("NP", "ne"),
  country("LK", "si"),
  country("UZ", "uz"),
  country("IN", "en"),
  country("PK", "ur"),
  country("TH", "th"),
  country("KG", "en"),
];
