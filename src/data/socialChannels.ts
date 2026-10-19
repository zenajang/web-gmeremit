export interface Contact {
  label: string;
  phone: string;
}

export interface Country {
  id: string;
  facebook?: string;
  financeFacebook?: string;
  instagram?: string;
  contacts?: Contact[];
}

export const countries: Country[] = [
  { id: "korea", facebook: "https://www.facebook.com/GMEKorea/",
    contacts: [{ label: "Remit", phone: "010-6551-6864" }] },
  { id: "indonesia", facebook: "https://www.facebook.com/gmeindonesia/",
    financeFacebook: "https://www.facebook.com/gmefinanceindonesia",
    contacts: [{ label: "Remit", phone: "1811-2945" }, { label: "Finance", phone: "010-7923-6864" }] },
  { id: "mongolia", facebook: "https://www.facebook.com/gmemongolia/",
    financeFacebook: "https://www.facebook.com/GmeFinanceMongolia",
    contacts: [{ label: "Remit", phone: "1811-2946" }, { label: "Finance", phone: "010-3384-6864" }] },
  { id: "cambodia", facebook: "https://www.facebook.com/gmecambodia/",
    financeFacebook: "https://www.facebook.com/profile.php?id=61568524845755",
    contacts: [{ label: "Remit", phone: "1811-2948" }, { label: "Finance", phone: "010-3077-6864" }] },
  { id: "bangladesh", facebook: "https://www.facebook.com/gmebangladesh/",
    financeFacebook: "https://www.facebook.com/gmefinancebangladesh",
    contacts: [{ label: "Remit", phone: "1811-2943" }, { label: "Finance", phone: "010-9932-6864" }] },
  { id: "thailand", facebook: "https://www.facebook.com/gmethailand/",
    financeFacebook: "https://www.facebook.com/gmethai.finance",
    contacts: [{ label: "Remit", phone: "1811-2941" }, { label: "Finance", phone: "010-9695-6864" }] },
  { id: "pakistan", facebook: "https://www.facebook.com/gmepakistan/",
    financeFacebook: "https://www.facebook.com/GMEFinancePakistan",
    contacts: [{ label: "Remit", phone: "010-2760-6864" }, { label: "Finance", phone: "010-7509-6864" }] },
  { id: "china", facebook: "https://www.facebook.com/GMERemittanceChina#",
    contacts: [{ label: "Remit", phone: "1811-2907" }] },
  { id: "nepal", facebook: "https://www.facebook.com/gmenepal/",
    financeFacebook: "https://www.facebook.com/GMEFinanceNepal",
    contacts: [{ label: "Remit", phone: "1811-2934" }, { label: "Finance", phone: "010-6584-6864" }] },
  { id: "srilanka", facebook: "https://www.facebook.com/gmeremitsrilanka/",
    financeFacebook: "https://www.facebook.com/gmefinancesrilanka",
    contacts: [{ label: "Remit", phone: "1811-2935" }, { label: "Finance", phone: "010-2965-6864" }] },
  { id: "philippines", facebook: "https://www.facebook.com/gmephilippines/",
    financeFacebook: "https://www.facebook.com/gmefinanceph",
    contacts: [{ label: "Remit", phone: "1811-2936" }, { label: "Finance", phone: "010-3354-6864" }] },
  { id: "india", facebook: "https://www.facebook.com/gmeremitindia/",
    financeFacebook: "https://www.facebook.com/profile.php?id=61571686684974",
    contacts: [{ label: "Remit", phone: "1811-2905" }, { label: "Finance", phone: "010-7509-6864" }] },
  { id: "myanmar", facebook: "https://www.facebook.com/gmemyanmar#",
    financeFacebook: "https://www.facebook.com/profile.php?id=61574808429892",
    contacts: [{ label: "Remit", phone: "1811-2938" }, { label: "Finance", phone: "010-2976-6864" }] },
  { id: "vietnam", facebook: "https://www.facebook.com/gmevietnam/",
    financeFacebook: "https://www.facebook.com/gmefinancevn",
    contacts: [{ label: "Remit", phone: "1811-2937" }, { label: "Finance", phone: "010-9582-6864" }] },
  { id: "uzbekistan-cis", facebook: "https://www.facebook.com/gmeuzbekistan/",
    financeFacebook: "https://www.facebook.com/gmefinancecis",
    contacts: [{ label: "Remit", phone: "1811-2927" }, { label: "Finance", phone: "010-9805-6864" }] },
  { id: "african-region", facebook: "https://www.facebook.com/gmeafrica/",
    contacts: [{ label: "Remit", phone: "010-2989-6864" }] },
  { id: "western", facebook: "https://www.facebook.com/gmeremittanceofficial",
    contacts: [{ label: "Remit", phone: "010-9571-6864" }] },
];
