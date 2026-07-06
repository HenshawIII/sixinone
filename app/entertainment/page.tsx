import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "../components/breadcrumb-json-ld";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { EntertainmentAbout } from "../components/entertainment/entertainment-about";
import { EntertainmentPartnershipsCampaigns } from "../components/entertainment/entertainment-partnerships-campaigns";
import { EntertainmentRosterTabs } from "../components/entertainment/entertainment-roster-tabs";
import { athletes, musicians } from "../lib/site-data";
import { pageOpenGraph } from "../lib/seo-metadata";

const title = "Artist & Athlete Representation – SIX-IN-ONE Entertainment";
const description =
  "SIX-IN-ONE Entertainment develops and represents artists and athletes. Roster includes Vector, PDSTRN, BIGBIRD Kuti, and Valka.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/entertainment" },
  ...pageOpenGraph("/entertainment", title, description),
};

export default function EntertainmentPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Entertainment", path: "/entertainment" },
        ]}
      />
      <PageReveal />
      <PageHeroBand
        eyebrow="Entertainment"
        title="Artists and athletes with global breakout potential."
        description="Roster development, live performance, and brand partnerships across music and sports."
        actions={
          <Link href="/contact" className="button-secondary-dark">
            Work With Us
          </Link>
        }
      />
      <EntertainmentAbout />
      <EntertainmentRosterTabs musicians={musicians} athletes={athletes} />
      <EntertainmentPartnershipsCampaigns />
      <SiteCta title="Ready to build with SIX-IN-ONE Entertainment?" buttonHref="/contact" />
    </>
  );
}
