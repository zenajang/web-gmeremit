import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/gme-backoffice/", "/api/"],
      },
    ],
    sitemap: "https://www.gmeremit.com/sitemap.xml",
  };
}
