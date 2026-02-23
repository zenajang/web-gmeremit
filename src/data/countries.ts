export interface CountryConfig {
  code: string;
  countryCode: string;
  flag: string;
  exchangeRate: number;
}

export const countryConfigs: CountryConfig[] = [
  { code: "USD", countryCode: "US", flag: "🇺🇸", exchangeRate: 0.00075 },
  { code: "PHP", countryCode: "PH", flag: "🇵🇭", exchangeRate: 0.042 },
  { code: "VND", countryCode: "VN", flag: "🇻🇳", exchangeRate: 18.5 },
  { code: "NPR", countryCode: "NP", flag: "🇳🇵", exchangeRate: 0.1 },
  { code: "IDR", countryCode: "ID", flag: "🇮🇩", exchangeRate: 11.8 },
  { code: "THB", countryCode: "TH", flag: "🇹🇭", exchangeRate: 0.026 },
  { code: "MMK", countryCode: "MM", flag: "🇲🇲", exchangeRate: 1.58 },
  { code: "CNY", countryCode: "CN", flag: "🇨🇳", exchangeRate: 0.0054 },
  { code: "JPY", countryCode: "JP", flag: "🇯🇵", exchangeRate: 0.11 },
];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = [
  { code: "PH", flag: "🇵🇭" },
  { code: "VN", flag: "🇻🇳" },
  { code: "NP", flag: "🇳🇵" },
  { code: "ID", flag: "🇮🇩" },
  { code: "TH", flag: "🇹🇭" },
  { code: "MM", flag: "🇲🇲" },
  { code: "CN", flag: "🇨🇳" },
  { code: "JP", flag: "🇯🇵" },
  { code: "US", flag: "🇺🇸" },
  { code: "BD", flag: "🇧🇩" },
  { code: "LK", flag: "🇱🇰" },
  { code: "PK", flag: "🇵🇰" },
];
