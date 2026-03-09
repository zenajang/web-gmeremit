export interface CountryConfig {
  code: string;
  countryCode: string;
  countryName: string;
  flag: string;
}

export const countryConfigs: CountryConfig[] = [
  // Asia
  { code: "BDT", countryCode: "BD", countryName: "Bangladesh", flag: "🇧🇩" },
  { code: "CNY", countryCode: "CN", countryName: "China", flag: "🇨🇳" },
  { code: "HKD", countryCode: "HK", countryName: "Hong Kong", flag: "🇭🇰" },
  { code: "INR", countryCode: "IN", countryName: "India", flag: "🇮🇳" },
  { code: "IDR", countryCode: "ID", countryName: "Indonesia", flag: "🇮🇩" },
  { code: "JPY", countryCode: "JP", countryName: "Japan", flag: "🇯🇵" },
  { code: "MYR", countryCode: "MY", countryName: "Malaysia", flag: "🇲🇾" },
  { code: "MMK", countryCode: "MM", countryName: "Myanmar", flag: "🇲🇲" },
  { code: "NPR", countryCode: "NP", countryName: "Nepal", flag: "🇳🇵" },
  { code: "PKR", countryCode: "PK", countryName: "Pakistan", flag: "🇵🇰" },
  { code: "PHP", countryCode: "PH", countryName: "Philippines", flag: "🇵🇭" },
  { code: "SGD", countryCode: "SG", countryName: "Singapore", flag: "🇸🇬" },
  { code: "LKR", countryCode: "LK", countryName: "Sri Lanka", flag: "🇱🇰" },
  { code: "THB", countryCode: "TH", countryName: "Thailand", flag: "🇹🇭" },
  { code: "VND", countryCode: "VN", countryName: "Vietnam", flag: "🇻🇳" },
  // Middle East
  { code: "BHD", countryCode: "BH", countryName: "Bahrain", flag: "🇧🇭" },
  { code: "ILS", countryCode: "IL", countryName: "Israel", flag: "🇮🇱" },
  { code: "JOD", countryCode: "JO", countryName: "Jordan", flag: "🇯🇴" },
  { code: "KWD", countryCode: "KW", countryName: "Kuwait", flag: "🇰🇼" },
  { code: "OMR", countryCode: "OM", countryName: "Oman", flag: "🇴🇲" },
  { code: "QAR", countryCode: "QA", countryName: "Qatar", flag: "🇶🇦" },
  { code: "SAR", countryCode: "SA", countryName: "Saudi Arabia", flag: "🇸🇦" },
  { code: "AED", countryCode: "AE", countryName: "United Arab Emirates", flag: "🇦🇪" },
  // Americas
  { code: "ARS", countryCode: "AR", countryName: "Argentina", flag: "🇦🇷" },
  { code: "BOB", countryCode: "BO", countryName: "Bolivia", flag: "🇧🇴" },
  { code: "BRL", countryCode: "BR", countryName: "Brazil", flag: "🇧🇷" },
  { code: "CAD", countryCode: "CA", countryName: "Canada", flag: "🇨🇦" },
  { code: "CLP", countryCode: "CL", countryName: "Chile", flag: "🇨🇱" },
  { code: "COP", countryCode: "CO", countryName: "Colombia", flag: "🇨🇴" },
  { code: "DOP", countryCode: "DO", countryName: "Dominican Republic", flag: "🇩🇴" },
  { code: "GTQ", countryCode: "GT", countryName: "Guatemala", flag: "🇬🇹" },
  { code: "HNL", countryCode: "HN", countryName: "Honduras", flag: "🇭🇳" },
  { code: "MXN", countryCode: "MX", countryName: "Mexico", flag: "🇲🇽" },
  { code: "PYG", countryCode: "PY", countryName: "Paraguay", flag: "🇵🇾" },
  { code: "PEN", countryCode: "PE", countryName: "Peru", flag: "🇵🇪" },
  { code: "USD", countryCode: "US", countryName: "United States", flag: "🇺🇸" },
  // Europe
  { code: "CZK", countryCode: "CZ", countryName: "Czech Republic", flag: "🇨🇿" },
  { code: "DKK", countryCode: "DK", countryName: "Denmark", flag: "🇩🇰" },
  { code: "EUR", countryCode: "DE", countryName: "Germany", flag: "🇩🇪" },
  { code: "HUF", countryCode: "HU", countryName: "Hungary", flag: "🇭🇺" },
  { code: "NOK", countryCode: "NO", countryName: "Norway", flag: "🇳🇴" },
  { code: "PLN", countryCode: "PL", countryName: "Poland", flag: "🇵🇱" },
  { code: "RON", countryCode: "RO", countryName: "Romania", flag: "🇷🇴" },
  { code: "CHF", countryCode: "CH", countryName: "Switzerland", flag: "🇨🇭" },
  { code: "GBP", countryCode: "GB", countryName: "United Kingdom", flag: "🇬🇧" },
  // Oceania
  { code: "AUD", countryCode: "AU", countryName: "Australia", flag: "🇦🇺" },
  { code: "FJD", countryCode: "FJ", countryName: "Fiji", flag: "🇫🇯" },
  { code: "NZD", countryCode: "NZ", countryName: "New Zealand", flag: "🇳🇿" },
  { code: "WST", countryCode: "WS", countryName: "Samoa", flag: "🇼🇸" },
  { code: "TOP", countryCode: "TO", countryName: "Tonga", flag: "🇹🇴" },
  // Africa
  { code: "GHS", countryCode: "GH", countryName: "Ghana", flag: "🇬🇭" },
  { code: "KES", countryCode: "KE", countryName: "Kenya", flag: "🇰🇪" },
  { code: "MAD", countryCode: "MA", countryName: "Morocco", flag: "🇲🇦" },
  { code: "NGN", countryCode: "NG", countryName: "Nigeria", flag: "🇳🇬" },
  { code: "RWF", countryCode: "RW", countryName: "Rwanda", flag: "🇷🇼" },
  { code: "TZS", countryCode: "TZ", countryName: "Tanzania", flag: "🇹🇿" },
  { code: "UGX", countryCode: "UG", countryName: "Uganda", flag: "🇺🇬" },
  { code: "ZMW", countryCode: "ZM", countryName: "Zambia", flag: "🇿🇲" },
];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = countryConfigs.map(c => ({ code: c.countryCode, flag: c.flag }));
