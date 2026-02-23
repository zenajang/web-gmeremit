export interface Contact {
  label: string;
  phone: string;
}

export interface Country {
  id: string;
  facebook?: string;
  tiktok?: string;
  instagram?: string;
  contacts?: Contact[];
}

export const countries: Country[] = [
  { id: "korea", facebook: "https://www.facebook.com/GMEKorea/", tiktok: "https://www.tiktok.com/@GMEKorea",
    contacts: [{ label: "Remittance", phone: "1811-2961" }, { label: "Remittance", phone: "010-6551-6864" }] },
  { id: "indonesia", facebook: "https://www.facebook.com/gmeindonesia/", tiktok: "https://www.tiktok.com/@gmeindonesia",
    contacts: [{ label: "Remittance", phone: "1811-2945" }, { label: "Loan", phone: "010-3017-6864" }] },
  { id: "mongolia", facebook: "https://www.facebook.com/gmemongolia/", tiktok: "https://www.tiktok.com/@gmemongolia",
    contacts: [{ label: "Remittance", phone: "1811-2946" }, { label: "Loan", phone: "010-2973-6864" }] },
  { id: "cambodia", facebook: "https://www.facebook.com/gmecambodia/", tiktok: "https://www.tiktok.com/@gmecambodia",
    contacts: [{ label: "Remittance", phone: "1811-2948" }, { label: "Loan", phone: "010-3077-6864" }] },
  { id: "bangladesh", facebook: "https://www.facebook.com/gmebangladesh/", tiktok: "https://www.tiktok.com/@gmebangladesh",
    contacts: [{ label: "Remittance", phone: "1811-2943" }, { label: "Loan", phone: "010-9932-6864" }] },
  { id: "thailand", facebook: "https://www.facebook.com/gmethailand/", tiktok: "https://www.tiktok.com/@gmeremittancethailand",
    contacts: [{ label: "Remittance", phone: "1811-2941" }, { label: "Loan", phone: "010-9928-6864" }] },
  { id: "pakistan", facebook: "https://www.facebook.com/gmepakistan/", tiktok: "https://www.tiktok.com/@gmepakistan",
    contacts: [{ label: "Remittance", phone: "010-2760-6864" }, { label: "Loan", phone: "010-2760-6864" }] },
  { id: "china", facebook: "https://www.facebook.com/GMERemittanceChina#", tiktok: "https://www.tiktok.com/@gmeremittance_china",
    contacts: [{ label: "Remittance", phone: "1811-2907" }] },
  { id: "japan", facebook: "https://www.facebook.com/GMERemittanceChina#", instagram: "https://www.instagram.com/gmejapan/?hl=ja",
    contacts: [{ label: "Remittance", phone: "1811-2969" }] },
  { id: "nepal", facebook: "https://www.facebook.com/gmenepal/",
    contacts: [{ label: "Remittance", phone: "1811-2934" }, { label: "Loan", phone: "010-6584-6864" }] },
  { id: "srilanka", facebook: "https://www.facebook.com/gmeremitsrilanka/",
    contacts: [{ label: "Remittance", phone: "1811-2935" }, { label: "Loan", phone: "010-2965-6864" }] },
  { id: "philippines", facebook: "https://www.facebook.com/gmephilippines/",
    contacts: [{ label: "Remittance", phone: "1811-2936" }, { label: "Loan", phone: "010-2970-6864" }] },
  { id: "india", facebook: "https://www.facebook.com/gmeremitindia/",
    contacts: [{ label: "Remittance", phone: "1811-2905" }, { label: "Loan", phone: "1811-2905" }] },
  { id: "myanmar", facebook: "https://www.facebook.com/gmemyanmar#",
    contacts: [{ label: "Remittance", phone: "1811-2938" }, { label: "Loan", phone: "010-2976-6864" }] },
  { id: "vietnam", facebook: "https://www.facebook.com/gmevietnam/",
    contacts: [{ label: "Remittance", phone: "1811-2937" }, { label: "Loan", phone: "010-2930-6864" }] },
  { id: "uzbekistan-cis", facebook: "https://www.facebook.com/gmeuzbekistan/",
    contacts: [{ label: "Remittance", phone: "1811-2927" }, { label: "Loan", phone: "010-2968-6864" }] },
  { id: "african-region", facebook: "https://www.facebook.com/gmeafrica/",
    contacts: [{ label: "Remittance", phone: "1811-2904" }, { label: "Remittance", phone: "010-2989-6864" }] },
  { id: "western", facebook: "https://www.facebook.com/gmeremittanceofficial",
    contacts: [{ label: "Remittance", phone: "1811-2964" }, { label: "Remittance", phone: "010-9571-6864" }] },
];
