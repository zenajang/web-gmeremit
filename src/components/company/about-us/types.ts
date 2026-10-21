export interface AboutJourneyEvent {
  id: string;
  month: string;
  images: string[];
  highlight: boolean;
}

export interface AboutJourneyYear {
  year: string;
  events: AboutJourneyEvent[];
}

export interface AboutPartnerLogo {
  alt: string;
  src: string;
}

export interface AboutMediaLink {
  id: string;
  href: string;
}
