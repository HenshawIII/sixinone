import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../components/breadcrumb-json-ld";
import { CompaniesAbout } from "../components/companies/companies-about";
import { CompaniesFounderIntro } from "../components/companies/companies-founder-intro";
import { CompaniesMissionTabs } from "../components/companies/companies-mission-tabs";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { pageOpenGraph } from "../lib/seo-metadata";

const title = "About SIX-IN-ONE Group – Entertainment & Publishing Company, Lagos";
const description =
  "Learn how SIX-IN-ONE Group unites entertainment and publishing in Lagos to help creators build durable careers, led by founder Abayomi Noah Ogunmefun.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  ...pageOpenGraph("/about", title, description),
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
      <PageReveal />
      <CompaniesAbout />
      <CompaniesFounderIntro />
      <CompaniesMissionTabs />
      <SiteCta />
    </>
  );
}
