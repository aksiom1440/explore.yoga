import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://explore.yoga",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://explore.yoga/terms",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://explore.yoga/privacy",
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
