import { getSiteUrl } from "../lib/site-url";
import { absoluteOgImage } from "../lib/seo-metadata";

type PersonJsonLdProps = {
  name: string;
  description: string;
  path: string;
  imageSrc: string;
  jobTitle: string;
};

export function PersonJsonLd({ name, description, path, imageSrc, jobTitle }: PersonJsonLdProps) {
  const url = `${getSiteUrl()}${path}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    description,
    url,
    image: absoluteOgImage(imageSrc),
    jobTitle,
    worksFor: {
      "@type": "Organization",
      name: "SIX-IN-ONE Entertainment",
      url: `${getSiteUrl()}/entertainment`,
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
