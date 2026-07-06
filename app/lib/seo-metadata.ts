import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";

const PUBLISHING_OG_IMAGE =
  "https://ik.imagekit.io/ttibelkqm/Portfolio/6in1/strategy.jpg";

export const SITE_OG_DEFAULT = "/logoGroup.png";

export const PAGE_OG_IMAGES: Record<string, string> = {
  "/": SITE_OG_DEFAULT,
  "/about": "/Founders.jpg",
  "/entertainment": "/Vecr.jpeg",
  "/publishing": PUBLISHING_OG_IMAGE,
  "/entertainment/sports-management": "/boxy.JPG",
  "/entertainment/live-events": "/boxyy.JPG",
  "/entertainment/independent-artists": "/Vecr.jpeg",
  "/contact": SITE_OG_DEFAULT,
};

export function absoluteOgImage(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageOpenGraph(
  path: string,
  title: string,
  description: string,
  imagePath?: string,
): Pick<Metadata, "openGraph" | "twitter"> {
  const image = absoluteOgImage(imagePath ?? PAGE_OG_IMAGES[path] ?? SITE_OG_DEFAULT);
  const url = path === "/" ? getSiteUrl() : `${getSiteUrl()}${path}`;

  return {
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
