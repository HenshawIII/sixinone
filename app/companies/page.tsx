import type { Metadata } from "next";
import { CompaniesAbout } from "../components/companies/companies-about";
import { CompaniesFounderIntro } from "../components/companies/companies-founder-intro";
import { CompaniesMissionTabs } from "../components/companies/companies-mission-tabs";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";

export const metadata: Metadata = {
  title: "Companies",
  description:
    "Learn how 6in1 Group unites entertainment and publishing to help creators build durable careers and long-term commercial value.",
  alternates: { canonical: "/companies" },
  openGraph: {
    title: "Companies | 6in1 Group",
    description:
      "Learn how 6in1 Group unites entertainment and publishing to help creators build durable careers and long-term commercial value.",
    url: "/companies",
  },
};

export default function CompaniesPage() {
  return (
    <>
      <PageReveal />
      <CompaniesAbout />
      <CompaniesMissionTabs />
      <CompaniesFounderIntro />
      <SiteCta title="Need the right division for your next move?" />
    </>
  );
}
