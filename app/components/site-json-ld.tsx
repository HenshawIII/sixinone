import { entertainmentSocialLinks, founderSocialLinks, officeLocations } from "../lib/site-contact";
import { getSiteUrl } from "../lib/site-url";

export function SiteJsonLd() {
  const url = getSiteUrl();
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: "SIX-IN-ONE Group",
    url,
    logo: `${url}/logoGroup.png`,
    description:
      "SIX-IN-ONE Group is a talent, image, and brand development company across entertainment and publishing.",
    sameAs: [
      ...entertainmentSocialLinks.map((l) => l.url),
      ...founderSocialLinks.map((l) => l.url),
    ],
    location: officeLocations.map((office) => ({
      "@type": "Place",
      name: `SIX-IN-ONE Group — ${office.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.lines.join(", "),
        addressLocality: office.city,
        addressCountry: office.country,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: "SIX-IN-ONE Group",
    url,
    publisher: { "@id": `${url}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
