import { getSiteUrl } from "../lib/site-url";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SIX-IN-ONE Group",
    url,
    logo: `${url}/logoGroup.png`,
    description:
      "SIX-IN-ONE Group is a talent, image, and brand development company across entertainment and publishing.",
    sameAs: ["https://www.instagram.com/"],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
