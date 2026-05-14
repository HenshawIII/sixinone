import type { Metadata } from "next";
import { HomeBrandAffiliations } from "./components/home/home-brand-affiliations";
import { HomeHero } from "./components/home/home-hero";
import { HomeTwoFacesSection } from "./components/home/home-two-faces-section";
import { PageReveal } from "./components/page-reveal";
import { SiteCta } from "./components/site-cta";
import { homeCopy } from "./lib/site-data";

export const metadata: Metadata = {
  title: { absolute: "SIX-IN-ONE Group" },
  description:
    "SIX-IN-ONE Group advances entertainment and publishing through talent development, rights strategy, and long-term brand growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SIX-IN-ONE Group",
    description:
      "SIX-IN-ONE Group advances entertainment and publishing through talent development, rights strategy, and long-term brand growth.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHero headline={homeCopy.headline} supporting={homeCopy.supporting} />
      <div id="home-after-hero" className="space-y-10 sm:space-y-14 lg:space-y-16">
        <PageReveal />
        <HomeTwoFacesSection />
        <HomeBrandAffiliations />

        <SiteCta />
      </div>
    </>
  );
}
