const MAX_SLUG_WORDS = 6;

export function slugify(text: string, maxWords = MAX_SLUG_WORDS): string {
  const normalized = text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  const slug = normalized.split("-").filter(Boolean).slice(0, maxWords).join("-");

  return slug || "post";
}
