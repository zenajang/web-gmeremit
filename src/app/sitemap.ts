import { MetadataRoute } from "next";

const SITE_URL = "https://www.gmeremit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: "/", changeFrequency: "weekly" as const, priority: 1.0 },
    { url: "/services/remittance", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/services/payments", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/services/loan", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/services/card", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/support", changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "/support/branches", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/support/social-channels", changeFrequency: "monthly" as const, priority: 0.5 },
    { url: "/company/ceo-message", changeFrequency: "yearly" as const, priority: 0.5 },
    { url: "/company/history", changeFrequency: "yearly" as const, priority: 0.5 },
    { url: "/company/services", changeFrequency: "yearly" as const, priority: 0.5 },
    { url: "/company/careers", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/board", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/board/notice", changeFrequency: "weekly" as const, priority: 0.6 },
    { url: "/board/press", changeFrequency: "weekly" as const, priority: 0.6 },
    { url: "/board/blog", changeFrequency: "weekly" as const, priority: 0.6 },
    { url: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
    { url: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return staticPages.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
