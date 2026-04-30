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

export const countryConfigs: CountryConfig[] = [
  { countryCode: "AL", countryName: "Albania", flag: "🇦🇱", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "DZ", countryName: "Algeria", flag: "🇩🇿", currencies: [
    { code: "DZD", payoutMethods: [{ key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "AS", countryName: "American Samoa", flag: "🇦🇸", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "AD", countryName: "Andorra", flag: "🇦🇩", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "AO", countryName: "Angola", flag: "🇦🇴", currencies: [
    { code: "AOA", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "AI", countryName: "Anguilla", flag: "🇦🇮", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "AG", countryName: "Antigua and Barbuda", flag: "🇦🇬", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "AR", countryName: "Argentina", flag: "🇦🇷", currencies: [
    { code: "ARS", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "AM", countryName: "Armenia", flag: "🇦🇲", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "AW", countryName: "Aruba", flag: "🇦🇼", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "AU", countryName: "Australia", flag: "🇦🇺", currencies: [
    { code: "AUD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "AT", countryName: "Austria", flag: "🇦🇹", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "AZ", countryName: "Azerbaijan", flag: "🇦🇿", currencies: [
    { code: "AZN", payoutMethods: [{ key: "14", label: "CARD PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "BS", countryName: "Bahamas", flag: "🇧🇸", currencies: [
    { code: "BSD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BH", countryName: "Bahrain", flag: "🇧🇭", currencies: [
    { code: "BHD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BD", countryName: "Bangladesh", flag: "🇧🇩", currencies: [
    { code: "BDT", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "33", label: "BKASH" }, { key: "35", label: "NAGAD" }, { key: "34", label: "ROCKET" }] },
  ] },
  { countryCode: "BB", countryName: "Barbados", flag: "🇧🇧", currencies: [
    { code: "BBD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BY", countryName: "Belarus", flag: "🇧🇾", currencies: [
    { code: "BYN", payoutMethods: [{ key: "14", label: "CARD PAYMENT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BE", countryName: "Belgium", flag: "🇧🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "BZ", countryName: "Belize", flag: "🇧🇿", currencies: [
    { code: "BZD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BJ", countryName: "Benin", flag: "🇧🇯", currencies: [
    { code: "XOF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "BM", countryName: "Bermuda", flag: "🇧🇲", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BT", countryName: "Bhutan", flag: "🇧🇹", currencies: [
    { code: "BTN", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BO", countryName: "Bolivia", flag: "🇧🇴", currencies: [
    { code: "BOB", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "BA", countryName: "Bosnia and Herzegovina", flag: "🇧🇦", currencies: [
    { code: "BAM", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BW", countryName: "Botswana", flag: "🇧🇼", currencies: [
    { code: "BWP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BR", countryName: "Brazil", flag: "🇧🇷", currencies: [
    { code: "BRL", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "BN", countryName: "Brunei", flag: "🇧🇳", currencies: [
    { code: "BND", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BG", countryName: "Bulgaria", flag: "🇧🇬", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BF", countryName: "Burkina Faso", flag: "🇧🇫", currencies: [
    { code: "XOF", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BI", countryName: "Burundi", flag: "🇧🇮", currencies: [
    { code: "BIF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "KH", countryName: "Cambodia", flag: "🇰🇭", currencies: [
    { code: "KHR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "37", label: "QR PAY" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "37", label: "QR PAY" }] },
  ] },
  { countryCode: "CM", countryName: "Cameroon", flag: "🇨🇲", currencies: [
    { code: "XAF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "CA", countryName: "Canada", flag: "🇨🇦", currencies: [
    { code: "CAD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "CV", countryName: "Cape Verde", flag: "🇨🇻", currencies: [
    { code: "CVE", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "KY", countryName: "Cayman Islands", flag: "🇰🇾", currencies: [
    { code: "KYD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CF", countryName: "Central African Republic", flag: "🇨🇫", currencies: [
    { code: "XAF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TD", countryName: "Chad", flag: "🇹🇩", currencies: [
    { code: "XAF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CL", countryName: "Chile", flag: "🇨🇱", currencies: [
    { code: "CLP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "CN", countryName: "China", flag: "🇨🇳", currencies: [
    { code: "CNY", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "16", label: "WECHAT" }, { key: "17", label: "ALIPAY WALLET" }, { key: "1", label: "CASH PAYMENT" }, { key: "18", label: "VISA/MASTERCARD/UNIONPAY" }] },
  ] },
  { countryCode: "CO", countryName: "Colombia", flag: "🇨🇴", currencies: [
    { code: "COP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "KM", countryName: "Comoros", flag: "🇰🇲", currencies: [
    { code: "KMF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CK", countryName: "Cook Islands", flag: "🇨🇰", currencies: [
    { code: "NZD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CR", countryName: "Costa Rica", flag: "🇨🇷", currencies: [
    { code: "CRC", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "HR", countryName: "Croatia", flag: "🇭🇷", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CU", countryName: "Cuba", flag: "🇨🇺", currencies: [
    { code: "CUC", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CY", countryName: "Cyprus", flag: "🇨🇾", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "CZ", countryName: "Czech Republic", flag: "🇨🇿", currencies: [
    { code: "CZK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "CD", countryName: "Democratic Republic of the Congo", flag: "🇨🇩", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "DK", countryName: "Denmark", flag: "🇩🇰", currencies: [
    { code: "DKK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "DJ", countryName: "Djibouti", flag: "🇩🇯", currencies: [
    { code: "DJF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "DM", countryName: "Dominica", flag: "🇩🇲", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "DO", countryName: "Dominican Republic", flag: "🇩🇴", currencies: [
    { code: "DOP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "EC", countryName: "Ecuador", flag: "🇪🇨", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "EG", countryName: "Egypt", flag: "🇪🇬", currencies: [
    { code: "EGP", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "15", label: "BANK DEPOSIT(USD)" }] },
  ] },
  { countryCode: "SV", countryName: "El Salvador", flag: "🇸🇻", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GQ", countryName: "Equatorial Guinea", flag: "🇬🇶", currencies: [
    { code: "XAF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ER", countryName: "Eritrea", flag: "🇪🇷", currencies: [
    { code: "ERN", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "EE", countryName: "Estonia", flag: "🇪🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ET", countryName: "Ethiopia", flag: "🇪🇹", currencies: [
    { code: "ETB", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }, { key: "13", label: "MOBILE WALLET" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "FJ", countryName: "Fiji", flag: "🇫🇯", currencies: [
    { code: "FJD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "FI", countryName: "Finland", flag: "🇫🇮", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "FR", countryName: "France", flag: "🇫🇷", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "GF", countryName: "French Guiana", flag: "🇬🇫", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PF", countryName: "French Polynesia", flag: "🇵🇫", currencies: [
    { code: "XPF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GA", countryName: "Gabon", flag: "🇬🇦", currencies: [
    { code: "XAF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "GM", countryName: "Gambia", flag: "🇬🇲", currencies: [
    { code: "GMD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "GE", countryName: "Georgia", flag: "🇬🇪", currencies: [
    { code: "GEL", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "14", label: "CARD PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "14", label: "CARD PAYMENT" }] },
  ] },
  { countryCode: "DE", countryName: "Germany", flag: "🇩🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GH", countryName: "Ghana", flag: "🇬🇭", currencies: [
    { code: "GHS", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GI", countryName: "Gibraltar", flag: "🇬🇮", currencies: [
    { code: "GBP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GR", countryName: "Greece", flag: "🇬🇷", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "GD", countryName: "Grenada", flag: "🇬🇩", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GP", countryName: "Guadeloupe", flag: "🇬🇵", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GU", countryName: "Guam", flag: "🇬🇺", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "GT", countryName: "Guatemala", flag: "🇬🇹", currencies: [
    { code: "GTQ", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "GN", countryName: "Guinea", flag: "🇬🇳", currencies: [
    { code: "GNF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "GW", countryName: "Guinea-Bissau", flag: "🇬🇼", currencies: [
    { code: "XOF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "GY", countryName: "Guyana", flag: "🇬🇾", currencies: [
    { code: "GYD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "HT", countryName: "Haiti", flag: "🇭🇹", currencies: [
    { code: "HTG", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "HN", countryName: "Honduras", flag: "🇭🇳", currencies: [
    { code: "HNL", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "HK", countryName: "Hong Kong", flag: "🇭🇰", currencies: [
    { code: "HKD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
    { code: "USD", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "HU", countryName: "Hungary", flag: "🇭🇺", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
    { code: "HUF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "IS", countryName: "Iceland", flag: "🇮🇸", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
    { code: "ISK", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "IN", countryName: "India", flag: "🇮🇳", currencies: [
    { code: "INR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "25", label: "UPI" }] },
  ] },
  { countryCode: "ID", countryName: "Indonesia", flag: "🇮🇩", currencies: [
    { code: "IDR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "IE", countryName: "Ireland", flag: "🇮🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "IL", countryName: "Israel", flag: "🇮🇱", currencies: [
    { code: "ILS", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "IT", countryName: "Italy", flag: "🇮🇹", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "CI", countryName: "Ivory Coast", flag: "🇨🇮", currencies: [
    { code: "XOF", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "JM", countryName: "Jamaica", flag: "🇯🇲", currencies: [
    { code: "JMD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "JP", countryName: "Japan", flag: "🇯🇵", currencies: [
    { code: "JPY", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "JO", countryName: "Jordan", flag: "🇯🇴", currencies: [
    { code: "JOD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "KZ", countryName: "Kazakhstan", flag: "🇰🇿", currencies: [
    { code: "KZT", payoutMethods: [{ key: "14", label: "CARD PAYMENT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "14", label: "CARD PAYMENT" }] },
  ] },
  { countryCode: "KE", countryName: "Kenya", flag: "🇰🇪", currencies: [
    { code: "KES", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "XK", countryName: "Kosovo", flag: "🇽🇰", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "KW", countryName: "Kuwait", flag: "🇰🇼", currencies: [
    { code: "KWD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "KG", countryName: "Kyrgyzstan", flag: "🇰🇬", currencies: [
    { code: "KGS", payoutMethods: [{ key: "14", label: "CARD PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "LA", countryName: "Laos", flag: "🇱🇦", currencies: [
    { code: "LAK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
    { code: "USD", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "LV", countryName: "Latvia", flag: "🇱🇻", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "LB", countryName: "Lebanon", flag: "🇱🇧", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "LS", countryName: "Lesotho", flag: "🇱🇸", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "LR", countryName: "Liberia", flag: "🇱🇷", currencies: [
    { code: "LRD", payoutMethods: [{ key: "19", label: "VISA/MASTERCARD" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "LY", countryName: "Libya", flag: "🇱🇾", currencies: [
    { code: "LYD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "LI", countryName: "Liechtenstein", flag: "🇱🇮", currencies: [
    { code: "CHF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "LT", countryName: "Lithuania", flag: "🇱🇹", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "LU", countryName: "Luxembourg", flag: "🇱🇺", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "MO", countryName: "Macao", flag: "🇲🇴", currencies: [
    { code: "HKD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "MOP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MK", countryName: "Macedonia", flag: "🇲🇰", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MG", countryName: "Madagascar", flag: "🇲🇬", currencies: [
    { code: "MGA", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MW", countryName: "Malawi", flag: "🇲🇼", currencies: [
    { code: "MWK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "MY", countryName: "Malaysia", flag: "🇲🇾", currencies: [
    { code: "MYR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MV", countryName: "Maldives", flag: "🇲🇻", currencies: [
    { code: "MVR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ML", countryName: "Mali", flag: "🇲🇱", currencies: [
    { code: "XOF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "MT", countryName: "Malta", flag: "🇲🇹", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "MH", countryName: "Marshall Islands", flag: "🇲🇭", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MQ", countryName: "Martinique", flag: "🇲🇶", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MR", countryName: "Mauritania", flag: "🇲🇷", currencies: [
    { code: "MRU", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MU", countryName: "Mauritius", flag: "🇲🇺", currencies: [
    { code: "MUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "YT", countryName: "Mayotte", flag: "🇾🇹", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MX", countryName: "Mexico", flag: "🇲🇽", currencies: [
    { code: "MXN", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "FM", countryName: "Micronesia", flag: "🇫🇲", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MD", countryName: "Moldova", flag: "🇲🇩", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MC", countryName: "Monaco", flag: "🇲🇨", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MN", countryName: "Mongolia", flag: "🇲🇳", currencies: [
    { code: "MNT", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ME", countryName: "Montenegro", flag: "🇲🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MS", countryName: "Montserrat", flag: "🇲🇸", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MA", countryName: "Morocco", flag: "🇲🇦", currencies: [
    { code: "MAD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "MZ", countryName: "Mozambique", flag: "🇲🇿", currencies: [
    { code: "MZN", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "MM", countryName: "Myanmar", flag: "🇲🇲", currencies: [
    { code: "MMK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "NA", countryName: "Namibia", flag: "🇳🇦", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "NP", countryName: "Nepal", flag: "🇳🇵", currencies: [
    { code: "NPR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "NL", countryName: "Netherlands", flag: "🇳🇱", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "NC", countryName: "New Caledonia", flag: "🇳🇨", currencies: [
    { code: "XPF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "NZ", countryName: "New Zealand", flag: "🇳🇿", currencies: [
    { code: "NZD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "NI", countryName: "Nicaragua", flag: "🇳🇮", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "NE", countryName: "Niger", flag: "🇳🇪", currencies: [
    { code: "XOF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "NG", countryName: "Nigeria", flag: "🇳🇬", currencies: [
    { code: "NGN", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "NO", countryName: "Norway", flag: "🇳🇴", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
    { code: "NOK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "OM", countryName: "Oman", flag: "🇴🇲", currencies: [
    { code: "OMR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PK", countryName: "Pakistan", flag: "🇵🇰", currencies: [
    { code: "PKR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PS", countryName: "Palestinian Territory, Occupied", flag: "🇵🇸", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PA", countryName: "Panama", flag: "🇵🇦", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "PG", countryName: "Papua New Guinea", flag: "🇵🇬", currencies: [
    { code: "PGK", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PY", countryName: "Paraguay", flag: "🇵🇾", currencies: [
    { code: "PYG", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PE", countryName: "Peru", flag: "🇵🇪", currencies: [
    { code: "PEN", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "PH", countryName: "Philippines", flag: "🇵🇭", currencies: [
    { code: "PHP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "PL", countryName: "Poland", flag: "🇵🇱", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
    { code: "PLN", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "PT", countryName: "Portugal", flag: "🇵🇹", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "PR", countryName: "Puerto Rico", flag: "🇵🇷", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "QA", countryName: "Qatar", flag: "🇶🇦", currencies: [
    { code: "QAR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CG", countryName: "Republic of the Congo", flag: "🇨🇬", currencies: [
    { code: "XAF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "RO", countryName: "Romania", flag: "🇷🇴", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "RU", countryName: "Russian Federation", flag: "🇷🇺", currencies: [
    { code: "RUB", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "14", label: "CARD PAYMENT" }] },
  ] },
  { countryCode: "RW", countryName: "Rwanda", flag: "🇷🇼", currencies: [
    { code: "RWF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "RE", countryName: "Réunion", flag: "🇷🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "BL", countryName: "Saint Barthélemy", flag: "🇧🇱", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "KN", countryName: "Saint Kitts and Nevis", flag: "🇰🇳", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "LC", countryName: "Saint Lucia", flag: "🇱🇨", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "MF", countryName: "Saint Martin (French part)", flag: "🇲🇫", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "VC", countryName: "Saint Vincent and the Grenadines", flag: "🇻🇨", currencies: [
    { code: "XCD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "WS", countryName: "Samoa", flag: "🇼🇸", currencies: [
    { code: "WST", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ST", countryName: "Sao Tome and Principe", flag: "🇸🇹", currencies: [
    { code: "STN", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SA", countryName: "Saudi Arabia", flag: "🇸🇦", currencies: [
    { code: "SAR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "SN", countryName: "Senegal", flag: "🇸🇳", currencies: [
    { code: "XOF", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "RS", countryName: "Serbia", flag: "🇷🇸", currencies: [
    { code: "RSD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SC", countryName: "Seychelles", flag: "🇸🇨", currencies: [
    { code: "SCR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SL", countryName: "Sierra Leone", flag: "🇸🇱", currencies: [
    { code: "SLE", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "SG", countryName: "Singapore", flag: "🇸🇬", currencies: [
    { code: "SGD", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SK", countryName: "Slovakia", flag: "🇸🇰", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "SI", countryName: "Slovenia", flag: "🇸🇮", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SB", countryName: "Solomon Islands", flag: "🇸🇧", currencies: [
    { code: "SBD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ZA", countryName: "South Africa", flag: "🇿🇦", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "ZAR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "SS", countryName: "South Sudan", flag: "🇸🇸", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ES", countryName: "Spain", flag: "🇪🇸", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "LK", countryName: "Sri Lanka", flag: "🇱🇰", currencies: [
    { code: "LKR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
    { code: "USD", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "SD", countryName: "Sudan", flag: "🇸🇩", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SR", countryName: "Suriname", flag: "🇸🇷", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SZ", countryName: "Swaziland", flag: "🇸🇿", currencies: [
    { code: "SZL", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "SE", countryName: "Sweden", flag: "🇸🇪", currencies: [
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
    { code: "SEK", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "CH", countryName: "Switzerland", flag: "🇨🇭", currencies: [
    { code: "CHF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "EUR", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "TJ", countryName: "Tajikistan", flag: "🇹🇯", currencies: [
    { code: "TJS", payoutMethods: [{ key: "38", label: "KORTI MILLI" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TZ", countryName: "Tanzania", flag: "🇹🇿", currencies: [
    { code: "TZS", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "TH", countryName: "Thailand", flag: "🇹🇭", currencies: [
    { code: "THB", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TL", countryName: "Timor-Leste", flag: "🇹🇱", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "TG", countryName: "Togo", flag: "🇹🇬", currencies: [
    { code: "XOF", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "TO", countryName: "Tonga", flag: "🇹🇴", currencies: [
    { code: "TOP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TT", countryName: "Trinidad and Tobago", flag: "🇹🇹", currencies: [
    { code: "TTD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TN", countryName: "Tunisia", flag: "🇹🇳", currencies: [
    { code: "TND", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "TR", countryName: "Turkey", flag: "🇹🇷", currencies: [
    { code: "EUR", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "TRY", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "24", label: "UPTION" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TM", countryName: "Turkmenistan", flag: "🇹🇲", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TC", countryName: "Turks and Caicos Islands", flag: "🇹🇨", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "TV", countryName: "Tuvalu", flag: "🇹🇻", currencies: [
    { code: "AUD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "UG", countryName: "Uganda", flag: "🇺🇬", currencies: [
    { code: "UGX", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "UA", countryName: "Ukraine", flag: "🇺🇦", currencies: [
    { code: "UAH", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "AE", countryName: "United Arab Emirates", flag: "🇦🇪", currencies: [
    { code: "AED", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "19", label: "VISA/MASTERCARD" }] },
  ] },
  { countryCode: "US", countryName: "United States", flag: "🇺🇸", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "GB", countryName: "United kingdom", flag: "🇬🇧", currencies: [
    { code: "GBP", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }] },
  ] },
  { countryCode: "UY", countryName: "Uruguay", flag: "🇺🇾", currencies: [
    { code: "USD", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
    { code: "UYU", payoutMethods: [{ key: "2", label: "BANK DEPOSIT" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "UZ", countryName: "Uzbekistan", flag: "🇺🇿", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "19", label: "VISA/MASTERCARD" }] },
    { code: "UZS", payoutMethods: [{ key: "27", label: "HUMO CARD" }, { key: "26", label: "UZCARD" }] },
  ] },
  { countryCode: "VU", countryName: "Vanuatu", flag: "🇻🇺", currencies: [
    { code: "VUV", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "VE", countryName: "Venezuela", flag: "🇻🇪", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "VN", countryName: "Vietnam", flag: "🇻🇳", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "12", label: "HOME DELIVERY" }, { key: "14", label: "CARD PAYMENT" }] },
    { code: "VND", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "2", label: "BANK DEPOSIT" }, { key: "12", label: "HOME DELIVERY" }, { key: "13", label: "MOBILE WALLET" }, { key: "14", label: "CARD PAYMENT" }] },
  ] },
  { countryCode: "VG", countryName: "Virgin Islands, British", flag: "🇻🇬", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "VI", countryName: "Virgin Islands, U.S.", flag: "🇻🇮", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "YE", countryName: "Yemen", flag: "🇾🇪", currencies: [
    { code: "USD", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }] },
  ] },
  { countryCode: "ZM", countryName: "Zambia", flag: "🇿🇲", currencies: [
    { code: "ZMW", payoutMethods: [{ key: "1", label: "CASH PAYMENT" }, { key: "13", label: "MOBILE WALLET" }] },
  ] },
  { countryCode: "ZW", countryName: "Zimbabwe", flag: "🇿🇼", currencies: [
    { code: "USD", payoutMethods: [{ key: "13", label: "MOBILE WALLET" }, { key: "1", label: "CASH PAYMENT" }] },
  ] },
];

export const defaultCountry: CountryConfig =
  countryConfigs.find((c) => c.countryCode === "US") ?? countryConfigs[0];

export interface SupportedCountry {
  code: string;
  flag: string;
}

export const supportedCountries: SupportedCountry[] = countryConfigs.map(c => ({ code: c.countryCode, flag: c.flag }));
