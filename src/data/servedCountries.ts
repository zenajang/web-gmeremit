export interface ServedEntry {
  code: string;
  flagSrc?: string;
  emoji?: string;
  nameKey: string;
  nameNs: "home.hero" | "header";
}

function country(code: string): ServedEntry {
  return {
    code,
    flagSrc: `/images/flags/${code.toLowerCase()}.svg`,
    nameKey: `countries.names.${code}`,
    nameNs: "home.hero",
  };
}

function region(code: string, emoji: string, nameKey: string): ServedEntry {
  return { code, emoji, nameKey, nameNs: "header" };
}

// Order matches the reference GME country selector exactly.
export const servedEntries: ServedEntry[] = [
  country("PH"),
  country("ID"),
  region("AFRICA", "🌍", "nav.region_africa"),
  region("ARAB", "🌐", "nav.region_arab"),
  country("CN"),
  region("SPANISH_LATAM", "🌎", "nav.region_spanish_latam"),
  country("VN"),
  country("KZ"),
  country("KH"),
  country("BD"),
  country("MN"),
  country("LA"),
  region("RUSSIA_CIS", "🗺️", "nav.region_russia_cis"),
  country("MM"),
  country("NP"),
  country("LK"),
  country("UZ"),
  country("IN"),
  country("PK"),
  country("TH"),
  country("KG"),
];
