/** Header height matching Header component's h-16 lg:h-[80px] */
export const getHeaderHeight = () =>
  window.innerWidth >= 1024 ? 80 : 64;

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
