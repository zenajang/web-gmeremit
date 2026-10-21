export const SocialChannelsGrid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start";

const panelBase = "grid transition-all duration-300 ease-in-out";
export const SocialChannelsPanelOpen = `${panelBase} grid-rows-[1fr] opacity-100 mt-4`;
export const SocialChannelsPanelClosed = `${panelBase} grid-rows-[0fr] opacity-0 mt-0`;
export const SocialChannelsPanelInner = "pt-4 border-t border-gray-100 space-y-1";
export const SocialChannelsPanelLabel =
  "text-gray-400 text-xs font-medium tracking-wide uppercase";
