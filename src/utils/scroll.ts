/**
 * Header height from CSS variables (`--header-height`, `--header-height-mobile`).
 * Defined in globals.css so layout values stay in sync across CSS and JS.
 */
export const getHeaderHeight = () => {
  if (typeof window === "undefined") return 120;
  const varName = window.innerWidth >= 1024 ? "--header-height" : "--header-height-mobile";
  const value = getComputedStyle(document.documentElement).getPropertyValue(varName);
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) ? parsed : (window.innerWidth >= 1024 ? 120 : 64);
};

/** Get the smoothScrollTo exposed by ScrollSnap (if active) */
const getSmoothScroll = () =>
  (window as unknown as Record<string, unknown>).__smoothScrollTo as
    | ((y: number) => void)
    | undefined;

/** Smooth-scroll to a pixel offset, using ScrollSnap animation when available */
export function smoothScrollToY(y: number) {
  const fn = getSmoothScroll();
  if (fn) fn(y);
  else window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
}

/** Scroll to the very top */
export function scrollToTop() {
  smoothScrollToY(0);
}

/** Scroll to a section by its DOM id, with optional extra offset */
export function scrollToSection(id: string, extraOffset = 0) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = Math.max(0, el.offsetTop - getHeaderHeight() - extraOffset);
  smoothScrollToY(y);
}
