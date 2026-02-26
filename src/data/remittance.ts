export const remittanceFeatureKeys = ["app", "convenient", "multilingual", "branches"] as const;

export const remittanceFeatureIconPaths: Record<string, string[]> = {
  app: [
    "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  ],
  convenient: [
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
  ],
  multilingual: [
    "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802",
  ],
  branches: [
    "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
    "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  ],
};

export const processStepKeys = ["step1", "step2", "step3"] as const;


export const remittanceCountries = [
  "Nepal", "Philippines", "Vietnam", "Indonesia", "India",
  "Bangladesh", "Sri Lanka", "Myanmar", "Cambodia", "Pakistan",
  "Thailand", "Mongolia", "Uzbekistan", "China", "Japan",
  "Nigeria", "Ghana", "Kenya", "Tanzania", "Ethiopia",
  "South Africa", "Egypt", "Morocco", "Uganda", "Cameroon",
  "United Kingdom", "Germany", "France", "Russia", "Turkey",
  "United States", "Canada", "Brazil", "Mexico", "Colombia",
  "Australia", "New Zealand", "Saudi Arabia", "UAE", "Jordan",
  "Peru", "Fiji", "Laos", "Tajikistan", "Kyrgyzstan", "Senegal", "Togo", "Benin",
];
