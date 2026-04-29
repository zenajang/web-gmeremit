export type DeliveryMethod = "1" | "2" | "13" | "37";

export interface CountryConfig {
  code: string;
  countryCode: string;
  countryName: string;
  flag: string;
  availableDeliveryMethods: DeliveryMethod[];
}

const BOTH: DeliveryMethod[] = ["1", "2"];
const BANK_ONLY: DeliveryMethod[] = ["1"];
const CASH_ONLY: DeliveryMethod[] = ["2"];
const CAMBODIA_METHODS: DeliveryMethod[] = ["1", "2", "13", "37"];

export const countryConfigs: CountryConfig[] = [
  { code: "ARS", countryCode: "AR", countryName: "Argentina", flag: "🇦🇷", availableDeliveryMethods: BOTH },
  { code: "AUD", countryCode: "AU", countryName: "Australia", flag: "🇦🇺", availableDeliveryMethods: BOTH },
  { code: "BHD", countryCode: "BH", countryName: "Bahrain", flag: "🇧🇭", availableDeliveryMethods: BOTH },
  { code: "BDT", countryCode: "BD", countryName: "Bangladesh", flag: "🇧🇩", availableDeliveryMethods: BOTH },
  { code: "BOB", countryCode: "BO", countryName: "Bolivia", flag: "🇧🇴", availableDeliveryMethods: BOTH },
  { code: "BRL", countryCode: "BR", countryName: "Brazil", flag: "🇧🇷", availableDeliveryMethods: BOTH },
  { code: "USD", countryCode: "KH", countryName: "Cambodia", flag: "🇰🇭", availableDeliveryMethods: CAMBODIA_METHODS },
  { code: "CAD", countryCode: "CA", countryName: "Canada", flag: "🇨🇦", availableDeliveryMethods: BOTH },
  { code: "CLP", countryCode: "CL", countryName: "Chile", flag: "🇨🇱", availableDeliveryMethods: BOTH },
  { code: "CNY", countryCode: "CN", countryName: "China", flag: "🇨🇳", availableDeliveryMethods: BOTH },
  { code: "COP", countryCode: "CO", countryName: "Colombia", flag: "🇨🇴", availableDeliveryMethods: BOTH },
  { code: "CZK", countryCode: "CZ", countryName: "Czech Republic", flag: "🇨🇿", availableDeliveryMethods: BOTH },
  { code: "DKK", countryCode: "DK", countryName: "Denmark", flag: "🇩🇰", availableDeliveryMethods: BOTH },
  { code: "DOP", countryCode: "DO", countryName: "Dominican Republic", flag: "🇩🇴", availableDeliveryMethods: BOTH },
  { code: "FJD", countryCode: "FJ", countryName: "Fiji", flag: "🇫🇯", availableDeliveryMethods: BANK_ONLY },
  { code: "EUR", countryCode: "DE", countryName: "Germany", flag: "🇩🇪", availableDeliveryMethods: BOTH },
  { code: "GHS", countryCode: "GH", countryName: "Ghana", flag: "🇬🇭", availableDeliveryMethods: BOTH },
  { code: "GTQ", countryCode: "GT", countryName: "Guatemala", flag: "🇬🇹", availableDeliveryMethods: BANK_ONLY },
  { code: "HNL", countryCode: "HN", countryName: "Honduras", flag: "🇭🇳", availableDeliveryMethods: BANK_ONLY },
  { code: "HKD", countryCode: "HK", countryName: "Hong Kong", flag: "🇭🇰", availableDeliveryMethods: BOTH },
  { code: "HUF", countryCode: "HU", countryName: "Hungary", flag: "🇭🇺", availableDeliveryMethods: BOTH },
  { code: "INR", countryCode: "IN", countryName: "India", flag: "🇮🇳", availableDeliveryMethods: BOTH },
  { code: "IDR", countryCode: "ID", countryName: "Indonesia", flag: "🇮🇩", availableDeliveryMethods: BOTH },
  { code: "ILS", countryCode: "IL", countryName: "Israel", flag: "🇮🇱", availableDeliveryMethods: BOTH },
  { code: "JPY", countryCode: "JP", countryName: "Japan", flag: "🇯🇵", availableDeliveryMethods: BOTH },
  { code: "JOD", countryCode: "JO", countryName: "Jordan", flag: "🇯🇴", availableDeliveryMethods: BANK_ONLY },
  { code: "KES", countryCode: "KE", countryName: "Kenya", flag: "🇰🇪", availableDeliveryMethods: BOTH },
  { code: "KWD", countryCode: "KW", countryName: "Kuwait", flag: "🇰🇼", availableDeliveryMethods: BANK_ONLY },
  { code: "MYR", countryCode: "MY", countryName: "Malaysia", flag: "🇲🇾", availableDeliveryMethods: BOTH },
  { code: "MXN", countryCode: "MX", countryName: "Mexico", flag: "🇲🇽", availableDeliveryMethods: BOTH },
  { code: "MAD", countryCode: "MA", countryName: "Morocco", flag: "🇲🇦", availableDeliveryMethods: BOTH },
  { code: "MMK", countryCode: "MM", countryName: "Myanmar", flag: "🇲🇲", availableDeliveryMethods: BOTH },
  { code: "NPR", countryCode: "NP", countryName: "Nepal", flag: "🇳🇵", availableDeliveryMethods: BOTH },
  { code: "NZD", countryCode: "NZ", countryName: "New Zealand", flag: "🇳🇿", availableDeliveryMethods: BANK_ONLY },
  { code: "NGN", countryCode: "NG", countryName: "Nigeria", flag: "🇳🇬", availableDeliveryMethods: BOTH },
  { code: "NOK", countryCode: "NO", countryName: "Norway", flag: "🇳🇴", availableDeliveryMethods: BANK_ONLY },
  { code: "OMR", countryCode: "OM", countryName: "Oman", flag: "🇴🇲", availableDeliveryMethods: BANK_ONLY },
  { code: "PKR", countryCode: "PK", countryName: "Pakistan", flag: "🇵🇰", availableDeliveryMethods: BOTH },
  { code: "PYG", countryCode: "PY", countryName: "Paraguay", flag: "🇵🇾", availableDeliveryMethods: BANK_ONLY },
  { code: "PEN", countryCode: "PE", countryName: "Peru", flag: "🇵🇪", availableDeliveryMethods: BOTH },
  { code: "PHP", countryCode: "PH", countryName: "Philippines", flag: "🇵🇭", availableDeliveryMethods: BOTH },
  { code: "PLN", countryCode: "PL", countryName: "Poland", flag: "🇵🇱", availableDeliveryMethods: BANK_ONLY },
  { code: "QAR", countryCode: "QA", countryName: "Qatar", flag: "🇶🇦", availableDeliveryMethods: BANK_ONLY },
  { code: "RON", countryCode: "RO", countryName: "Romania", flag: "🇷🇴", availableDeliveryMethods: BOTH },
  { code: "RWF", countryCode: "RW", countryName: "Rwanda", flag: "🇷🇼", availableDeliveryMethods: BOTH },
  { code: "WST", countryCode: "WS", countryName: "Samoa", flag: "🇼🇸", availableDeliveryMethods: BANK_ONLY },
  { code: "SAR", countryCode: "SA", countryName: "Saudi Arabia", flag: "🇸🇦", availableDeliveryMethods: BOTH },
  { code: "SGD", countryCode: "SG", countryName: "Singapore", flag: "🇸🇬", availableDeliveryMethods: BOTH },
  { code: "LKR", countryCode: "LK", countryName: "Sri Lanka", flag: "🇱🇰", availableDeliveryMethods: CASH_ONLY },
  { code: "CHF", countryCode: "CH", countryName: "Switzerland", flag: "🇨🇭", availableDeliveryMethods: BANK_ONLY },
  { code: "TZS", countryCode: "TZ", countryName: "Tanzania", flag: "🇹🇿", availableDeliveryMethods: BOTH },
  { code: "THB", countryCode: "TH", countryName: "Thailand", flag: "🇹🇭", availableDeliveryMethods: BOTH },
  { code: "TOP", countryCode: "TO", countryName: "Tonga", flag: "🇹🇴", availableDeliveryMethods: BANK_ONLY },
  { code: "UGX", countryCode: "UG", countryName: "Uganda", flag: "🇺🇬", availableDeliveryMethods: BOTH },
  { code: "AED", countryCode: "AE", countryName: "United Arab Emirates", flag: "🇦🇪", availableDeliveryMethods: BOTH },
  { code: "GBP", countryCode: "GB", countryName: "United Kingdom", flag: "🇬🇧", availableDeliveryMethods: BOTH },
  { code: "USD", countryCode: "US", countryName: "United States", flag: "🇺🇸", availableDeliveryMethods: BANK_ONLY },
  { code: "VND", countryCode: "VN", countryName: "Vietnam", flag: "🇻🇳", availableDeliveryMethods: BOTH },
  { code: "ZMW", countryCode: "ZM", countryName: "Zambia", flag: "🇿🇲", availableDeliveryMethods: BANK_ONLY },
];

export const defaultCountry: CountryConfig =
  countryConfigs.find((c) => c.countryCode === "US") ?? countryConfigs[0];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = countryConfigs.map(c => ({ code: c.countryCode, flag: c.flag }));
