export interface PayoutMethod {
  key: string;
  label: string;
}

export interface CurrencyConfig {
  code: string;
  payoutMethods: PayoutMethod[];
}

export interface CountryConfig {
  countryCode: string;
  countryName: string;
  flag: string;
  currencies: CurrencyConfig[];
}

const CASH = { key: "1", label: "CASH PAYMENT" };
const BANK = { key: "2", label: "BANK DEPOSIT" };
const HOME = { key: "12", label: "HOME DELIVERY" };
const WALLET = { key: "13", label: "MOBILE WALLET" };
const CARD_PAY = { key: "14", label: "CARD PAYMENT" };
const WECHAT = { key: "16", label: "WECHAT" };
const ALIPAY = { key: "17", label: "ALIPAY WALLET" };
const VMU = { key: "18", label: "VISA/MASTERCARD/UNIONPAY" };
const VM = { key: "19", label: "VISA/MASTERCARD" };
const UPI = { key: "25", label: "UPI" };
const BKASH = { key: "33", label: "BKASH" };
const ROCKET = { key: "34", label: "ROCKET" };
const NAGAD = { key: "35", label: "NAGAD" };
const QR_PAY = { key: "37", label: "QR PAY" };

export const countryConfigs: CountryConfig[] = [
  { countryCode: "AR", countryName: "Argentina", flag: "🇦🇷", currencies: [{ code: "ARS", payoutMethods: [CASH, BANK, VM] }] },
  { countryCode: "AU", countryName: "Australia", flag: "🇦🇺", currencies: [{ code: "AUD", payoutMethods: [CASH, BANK] }] },
  { countryCode: "AT", countryName: "Austria", flag: "🇦🇹", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "BH", countryName: "Bahrain", flag: "🇧🇭", currencies: [{ code: "BHD", payoutMethods: [CASH] }] },
  { countryCode: "BD", countryName: "Bangladesh", flag: "🇧🇩", currencies: [{ code: "BDT", payoutMethods: [NAGAD, CASH, BANK, BKASH, ROCKET] }] },
  { countryCode: "BE", countryName: "Belgium", flag: "🇧🇪", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "BO", countryName: "Bolivia", flag: "🇧🇴", currencies: [{ code: "BOB", payoutMethods: [CASH, BANK] }] },
  { countryCode: "BR", countryName: "Brazil", flag: "🇧🇷", currencies: [{ code: "BRL", payoutMethods: [CASH, BANK, VM] }] },
  { countryCode: "KH", countryName: "Cambodia", flag: "🇰🇭", currencies: [
    { code: "KHR", payoutMethods: [BANK, QR_PAY] },
    { code: "USD", payoutMethods: [CASH, BANK, WALLET, QR_PAY] },
  ] },
  { countryCode: "CA", countryName: "Canada", flag: "🇨🇦", currencies: [{ code: "CAD", payoutMethods: [CASH, BANK] }] },
  { countryCode: "CL", countryName: "Chile", flag: "🇨🇱", currencies: [{ code: "CLP", payoutMethods: [CASH, BANK, VM] }] },
  { countryCode: "CN", countryName: "China", flag: "🇨🇳", currencies: [{ code: "CNY", payoutMethods: [WECHAT, ALIPAY, BANK, CASH, VMU] }] },
  { countryCode: "CO", countryName: "Colombia", flag: "🇨🇴", currencies: [{ code: "COP", payoutMethods: [CASH, BANK, VM] }] },
  { countryCode: "CZ", countryName: "Czech Republic", flag: "🇨🇿", currencies: [{ code: "CZK", payoutMethods: [CASH] }] },
  { countryCode: "DK", countryName: "Denmark", flag: "🇩🇰", currencies: [{ code: "DKK", payoutMethods: [CASH] }] },
  { countryCode: "DO", countryName: "Dominican Republic", flag: "🇩🇴", currencies: [{ code: "DOP", payoutMethods: [BANK, CASH] }] },
  { countryCode: "FJ", countryName: "Fiji", flag: "🇫🇯", currencies: [{ code: "FJD", payoutMethods: [CASH] }] },
  { countryCode: "FI", countryName: "Finland", flag: "🇫🇮", currencies: [{ code: "EUR", payoutMethods: [BANK] }] },
  { countryCode: "FR", countryName: "France", flag: "🇫🇷", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "DE", countryName: "Germany", flag: "🇩🇪", currencies: [{ code: "EUR", payoutMethods: [BANK, CASH] }] },
  { countryCode: "GH", countryName: "Ghana", flag: "🇬🇭", currencies: [{ code: "GHS", payoutMethods: [BANK, CASH, WALLET] }] },
  { countryCode: "GR", countryName: "Greece", flag: "🇬🇷", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "GT", countryName: "Guatemala", flag: "🇬🇹", currencies: [{ code: "GTQ", payoutMethods: [CASH, BANK] }] },
  { countryCode: "HN", countryName: "Honduras", flag: "🇭🇳", currencies: [{ code: "HNL", payoutMethods: [CASH, VM] }] },
  { countryCode: "HK", countryName: "Hong Kong", flag: "🇭🇰", currencies: [{ code: "HKD", payoutMethods: [BANK, CASH] }] },
  { countryCode: "HU", countryName: "Hungary", flag: "🇭🇺", currencies: [{ code: "HUF", payoutMethods: [CASH] }] },
  { countryCode: "IN", countryName: "India", flag: "🇮🇳", currencies: [{ code: "INR", payoutMethods: [BANK, UPI, CASH] }] },
  { countryCode: "ID", countryName: "Indonesia", flag: "🇮🇩", currencies: [{ code: "IDR", payoutMethods: [BANK, CASH, WALLET] }] },
  { countryCode: "IE", countryName: "Ireland", flag: "🇮🇪", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "IL", countryName: "Israel", flag: "🇮🇱", currencies: [{ code: "ILS", payoutMethods: [CASH, BANK] }] },
  { countryCode: "IT", countryName: "Italy", flag: "🇮🇹", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "JP", countryName: "Japan", flag: "🇯🇵", currencies: [{ code: "JPY", payoutMethods: [CASH, BANK] }] },
  { countryCode: "JO", countryName: "Jordan", flag: "🇯🇴", currencies: [{ code: "JOD", payoutMethods: [CASH, BANK, WALLET] }] },
  { countryCode: "KE", countryName: "Kenya", flag: "🇰🇪", currencies: [{ code: "KES", payoutMethods: [CASH, WALLET, BANK] }] },
  { countryCode: "KW", countryName: "Kuwait", flag: "🇰🇼", currencies: [{ code: "KWD", payoutMethods: [CASH] }] },
  { countryCode: "LA", countryName: "Laos", flag: "🇱🇦", currencies: [
    { code: "LAK", payoutMethods: [BANK, WALLET] },
    { code: "USD", payoutMethods: [BANK] },
  ] },
  { countryCode: "MY", countryName: "Malaysia", flag: "🇲🇾", currencies: [{ code: "MYR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "MX", countryName: "Mexico", flag: "🇲🇽", currencies: [{ code: "MXN", payoutMethods: [CASH, WALLET, BANK, VM] }] },
  { countryCode: "MA", countryName: "Morocco", flag: "🇲🇦", currencies: [{ code: "MAD", payoutMethods: [CASH, BANK, WALLET, VM] }] },
  { countryCode: "MM", countryName: "Myanmar", flag: "🇲🇲", currencies: [{ code: "MMK", payoutMethods: [CASH, WALLET, BANK] }] },
  { countryCode: "NP", countryName: "Nepal", flag: "🇳🇵", currencies: [{ code: "NPR", payoutMethods: [CASH, BANK, WALLET] }] },
  { countryCode: "NL", countryName: "Netherlands", flag: "🇳🇱", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "NZ", countryName: "New Zealand", flag: "🇳🇿", currencies: [{ code: "NZD", payoutMethods: [CASH] }] },
  { countryCode: "NG", countryName: "Nigeria", flag: "🇳🇬", currencies: [{ code: "NGN", payoutMethods: [BANK, CASH, VM] }] },
  { countryCode: "NO", countryName: "Norway", flag: "🇳🇴", currencies: [{ code: "NOK", payoutMethods: [CASH] }] },
  { countryCode: "OM", countryName: "Oman", flag: "🇴🇲", currencies: [{ code: "OMR", payoutMethods: [CASH] }] },
  { countryCode: "PK", countryName: "Pakistan", flag: "🇵🇰", currencies: [{ code: "PKR", payoutMethods: [BANK, CASH, WALLET] }] },
  { countryCode: "PY", countryName: "Paraguay", flag: "🇵🇾", currencies: [{ code: "PYG", payoutMethods: [CASH] }] },
  { countryCode: "PE", countryName: "Peru", flag: "🇵🇪", currencies: [{ code: "PEN", payoutMethods: [CASH, WALLET, BANK, VM] }] },
  { countryCode: "PH", countryName: "Philippines", flag: "🇵🇭", currencies: [{ code: "PHP", payoutMethods: [CASH, BANK, WALLET] }] },
  { countryCode: "PL", countryName: "Poland", flag: "🇵🇱", currencies: [{ code: "PLN", payoutMethods: [CASH, BANK] }] },
  { countryCode: "PT", countryName: "Portugal", flag: "🇵🇹", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "QA", countryName: "Qatar", flag: "🇶🇦", currencies: [{ code: "QAR", payoutMethods: [CASH] }] },
  { countryCode: "RW", countryName: "Rwanda", flag: "🇷🇼", currencies: [{ code: "RWF", payoutMethods: [CASH, WALLET, BANK] }] },
  { countryCode: "WS", countryName: "Samoa", flag: "🇼🇸", currencies: [{ code: "WST", payoutMethods: [CASH] }] },
  { countryCode: "SA", countryName: "Saudi Arabia", flag: "🇸🇦", currencies: [{ code: "SAR", payoutMethods: [CASH, BANK, VM] }] },
  { countryCode: "SG", countryName: "Singapore", flag: "🇸🇬", currencies: [{ code: "SGD", payoutMethods: [CASH, BANK] }] },
  { countryCode: "ES", countryName: "Spain", flag: "🇪🇸", currencies: [{ code: "EUR", payoutMethods: [CASH, BANK] }] },
  { countryCode: "LK", countryName: "Sri Lanka", flag: "🇱🇰", currencies: [
    { code: "LKR", payoutMethods: [BANK] },
    { code: "USD", payoutMethods: [BANK] },
  ] },
  { countryCode: "CH", countryName: "Switzerland", flag: "🇨🇭", currencies: [{ code: "CHF", payoutMethods: [CASH] }] },
  { countryCode: "TZ", countryName: "Tanzania", flag: "🇹🇿", currencies: [{ code: "TZS", payoutMethods: [BANK, CASH, WALLET] }] },
  { countryCode: "TH", countryName: "Thailand", flag: "🇹🇭", currencies: [{ code: "THB", payoutMethods: [BANK, CASH] }] },
  { countryCode: "TO", countryName: "Tonga", flag: "🇹🇴", currencies: [{ code: "TOP", payoutMethods: [CASH] }] },
  { countryCode: "UG", countryName: "Uganda", flag: "🇺🇬", currencies: [{ code: "UGX", payoutMethods: [CASH, WALLET, BANK] }] },
  { countryCode: "AE", countryName: "United Arab Emirates", flag: "🇦🇪", currencies: [{ code: "AED", payoutMethods: [BANK, CASH, VM] }] },
  { countryCode: "GB", countryName: "United Kingdom", flag: "🇬🇧", currencies: [{ code: "GBP", payoutMethods: [CASH, BANK] }] },
  { countryCode: "US", countryName: "United States", flag: "🇺🇸", currencies: [{ code: "USD", payoutMethods: [CASH, BANK] }] },
  { countryCode: "VN", countryName: "Vietnam", flag: "🇻🇳", currencies: [
    { code: "VND", payoutMethods: [CASH, BANK, HOME, CARD_PAY, WALLET] },
    { code: "USD", payoutMethods: [CASH, BANK, HOME, CARD_PAY] },
  ] },
  { countryCode: "ZM", countryName: "Zambia", flag: "🇿🇲", currencies: [{ code: "ZMW", payoutMethods: [CASH, WALLET] }] },
];

export const defaultCountry: CountryConfig =
  countryConfigs.find((c) => c.countryCode === "US") ?? countryConfigs[0];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = countryConfigs.map(c => ({ code: c.countryCode, flag: c.flag }));
