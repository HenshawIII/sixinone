import type { MetadataRoute } from "next";
import { allTalent } from "./lib/site-data";
import { getSiteUrl } from "./lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPaths = ["", "/companies", "/contact", "/blog", "/entertainment", "/publishing"];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const talentEntries: MetadataRoute.Sitemap = allTalent.map((t) => ({
    url: `${base}/entertainment/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...talentEntries];
}
