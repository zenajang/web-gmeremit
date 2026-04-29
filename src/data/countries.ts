export interface PayoutMethod {
  key: string;
  label: string;
}

export interface CountryConfig {
  code: string;
  countryCode: string;
  countryName: string;
  flag: string;
  payoutMethods: PayoutMethod[];
}

export const countryConfigs: CountryConfig[] = [
  { code: "ARS", countryCode: "AR", countryName: "Argentina", flag: "🇦🇷", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "AUD", countryCode: "AU", countryName: "Australia", flag: "🇦🇺", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "BHD", countryCode: "BH", countryName: "Bahrain", flag: "🇧🇭", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "BDT", countryCode: "BD", countryName: "Bangladesh", flag: "🇧🇩", payoutMethods: [{ key: "35", label: "NAGAD" }, { key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "33", label: "BKASH" }, { key: "34", label: "ROCKET" }] },
  { code: "BOB", countryCode: "BO", countryName: "Bolivia", flag: "🇧🇴", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "BRL", countryCode: "BR", countryName: "Brazil", flag: "🇧🇷", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "KHR", countryCode: "KH", countryName: "Cambodia", flag: "🇰🇭", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "37", label: "QR PAY" }] },
  { code: "CAD", countryCode: "CA", countryName: "Canada", flag: "🇨🇦", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "CLP", countryCode: "CL", countryName: "Chile", flag: "🇨🇱", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "CNY", countryCode: "CN", countryName: "China", flag: "🇨🇳", payoutMethods: [{ key: "16", label: "WECHAT" }, { key: "17", label: "ALIPAY WALLET" }, { key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "18", label: "VISA/MASTERCARD/UNIONPAY" }] },
  { code: "COP", countryCode: "CO", countryName: "Colombia", flag: "🇨🇴", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "CZK", countryCode: "CZ", countryName: "Czech Republic", flag: "🇨🇿", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "DKK", countryCode: "DK", countryName: "Denmark", flag: "🇩🇰", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "DOP", countryCode: "DO", countryName: "Dominican Republic", flag: "🇩🇴", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  { code: "FJD", countryCode: "FJ", countryName: "Fiji", flag: "🇫🇯", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "EUR", countryCode: "DE", countryName: "Germany", flag: "🇩🇪", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  { code: "GHS", countryCode: "GH", countryName: "Ghana", flag: "🇬🇭", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "GTQ", countryCode: "GT", countryName: "Guatemala", flag: "🇬🇹", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "HNL", countryCode: "HN", countryName: "Honduras", flag: "🇭🇳", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "HKD", countryCode: "HK", countryName: "Hong Kong", flag: "🇭🇰", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  { code: "HUF", countryCode: "HU", countryName: "Hungary", flag: "🇭🇺", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "INR", countryCode: "IN", countryName: "India", flag: "🇮🇳", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "25", label: "UPI" }, { key: "1", label: "CASH PAYMENT" }] },
  { code: "IDR", countryCode: "ID", countryName: "Indonesia", flag: "🇮🇩", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "ILS", countryCode: "IL", countryName: "Israel", flag: "🇮🇱", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "JPY", countryCode: "JP", countryName: "Japan", flag: "🇯🇵", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "JOD", countryCode: "JO", countryName: "Jordan", flag: "🇯🇴", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "KES", countryCode: "KE", countryName: "Kenya", flag: "🇰🇪", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "KWD", countryCode: "KW", countryName: "Kuwait", flag: "🇰🇼", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "MYR", countryCode: "MY", countryName: "Malaysia", flag: "🇲🇾", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "MXN", countryCode: "MX", countryName: "Mexico", flag: "🇲🇽", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "MAD", countryCode: "MA", countryName: "Morocco", flag: "🇲🇦", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "MMK", countryCode: "MM", countryName: "Myanmar", flag: "🇲🇲", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "NPR", countryCode: "NP", countryName: "Nepal", flag: "🇳🇵", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "NZD", countryCode: "NZ", countryName: "New Zealand", flag: "🇳🇿", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "NGN", countryCode: "NG", countryName: "Nigeria", flag: "🇳🇬", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "NOK", countryCode: "NO", countryName: "Norway", flag: "🇳🇴", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "OMR", countryCode: "OM", countryName: "Oman", flag: "🇴🇲", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "PKR", countryCode: "PK", countryName: "Pakistan", flag: "🇵🇰", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "PYG", countryCode: "PY", countryName: "Paraguay", flag: "🇵🇾", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "PEN", countryCode: "PE", countryName: "Peru", flag: "🇵🇪", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "PHP", countryCode: "PH", countryName: "Philippines", flag: "🇵🇭", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "PLN", countryCode: "PL", countryName: "Poland", flag: "🇵🇱", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "QAR", countryCode: "QA", countryName: "Qatar", flag: "🇶🇦", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "RWF", countryCode: "RW", countryName: "Rwanda", flag: "🇷🇼", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "WST", countryCode: "WS", countryName: "Samoa", flag: "🇼🇸", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "SAR", countryCode: "SA", countryName: "Saudi Arabia", flag: "🇸🇦", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "SGD", countryCode: "SG", countryName: "Singapore", flag: "🇸🇬", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "LKR", countryCode: "LK", countryName: "Sri Lanka", flag: "🇱🇰", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  { code: "CHF", countryCode: "CH", countryName: "Switzerland", flag: "🇨🇭", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "TZS", countryCode: "TZ", countryName: "Tanzania", flag: "🇹🇿", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "THB", countryCode: "TH", countryName: "Thailand", flag: "🇹🇭", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  { code: "TOP", countryCode: "TO", countryName: "Tonga", flag: "🇹🇴", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  { code: "UGX", countryCode: "UG", countryName: "Uganda", flag: "🇺🇬", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "AED", countryCode: "AE", countryName: "United Arab Emirates", flag: "🇦🇪", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  { code: "GBP", countryCode: "GB", countryName: "United Kingdom", flag: "🇬🇧", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "USD", countryCode: "US", countryName: "United States", flag: "🇺🇸", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  { code: "VND", countryCode: "VN", countryName: "Vietnam", flag: "🇻🇳", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "12", label: "HOME DELIVERY" }, { key: "14", label: "CARD PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  { code: "ZMW", countryCode: "ZM", countryName: "Zambia", flag: "🇿🇲", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
];

export const defaultCountry: CountryConfig =
  countryConfigs.find((c) => c.code === "USD") ?? countryConfigs[0];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = countryConfigs.map(c => ({ code: c.countryCode, flag: c.flag }));
