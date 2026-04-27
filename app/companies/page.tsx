import { CompaniesAbout } from "../components/companies/companies-about";
import { CompaniesFounderIntro } from "../components/companies/companies-founder-intro";
import { CompaniesMissionTabs } from "../components/companies/companies-mission-tabs";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";

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
