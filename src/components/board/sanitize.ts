import DOMPurify from "dompurify";
import {
  SANITIZE_ALLOWED_ATTRS,
  SANITIZE_ALLOWED_TAGS,
  YOUTUBE_EMBED_PREFIXES,
} from "@/components/board/constants";

let isYoutubeHookRegistered = false;

function isAllowedYoutubeEmbed(src: string): boolean {
  return YOUTUBE_EMBED_PREFIXES.some((prefix) => src.startsWith(prefix));
}

function registerYoutubeHook() {
  if (typeof window === "undefined" || isYoutubeHookRegistered) return;

  DOMPurify.addHook("uponSanitizeElement", (node, data) => {
    if (data.tagName !== "iframe") return;

    const element = node as Element;
    if (!isAllowedYoutubeEmbed(element.getAttribute("src") ?? "")) {
      element.remove();
    }
  });
  isYoutubeHookRegistered = true;
}

export function sanitizeBoardContent(html: string): string {
  registerYoutubeHook();

  return DOMPurify.sanitize(html, {
    ADD_TAGS: SANITIZE_ALLOWED_TAGS,
    ADD_ATTR: SANITIZE_ALLOWED_ATTRS,
  });
}
