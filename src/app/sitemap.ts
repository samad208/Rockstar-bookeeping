import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.rockstar-bookkeeping.com";
  const today = new Date().toISOString().split("T")[0];

  return [
    { url: base,                          lastModified: today, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${base}/services`,            lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`,               lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/how-it-works`,        lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/testimonials`,        lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`,             lastModified: today, changeFrequency: "monthly", priority: 0.8 },
  ];
}
