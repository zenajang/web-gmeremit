const cardBase = "relative rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden";

export const CountryChannelCardExpanded = `${cardBase} bg-white shadow-lg shadow-black/[0.06] ring-1 ring-gray-200`;
export const CountryChannelCardCollapsed = `${cardBase} bg-gray-50/80 hover:bg-white hover:shadow-lg hover:shadow-black/[0.04] hover:ring-1 hover:ring-gray-100`;

const accentBase = "absolute left-0 top-3 bottom-3 w-[3px] rounded-full bg-primary transition-all duration-300";
export const CountryChannelCardAccentOn = `${accentBase} opacity-100`;
export const CountryChannelCardAccentOff = `${accentBase} opacity-0`;

export const CountryChannelCardBody = "p-5";
export const CountryChannelCardTopRow = "flex items-center justify-between";
export const CountryChannelCardName = "text-[15px] font-semibold text-dark";
export const CountryChannelCardActions = "flex items-center gap-1.5";
