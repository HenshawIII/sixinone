import Link from "next/link";
import { InfoCard } from "../components/info-card";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";

export default function CompaniesPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Our Companies"
        title="Two focused companies. One unified growth engine."
        description="6in1 Group operates through Entertainment and Publishing to build careers, protect rights, and unlock long-term commercial value."
        actions={
          <>
            <Link href="/entertainment" className="button-brand">
              Explore Entertainment
            </Link>
            <Link href="/publishing" className="button-secondary-dark">
              Explore Publishing
            </Link>
          </>
        }
      />
      <section className="section-soft">
        <div className="section-wrap space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div data-reveal>
              <InfoCard
                title="6in1 Entertainment"
                description="Talent development, representation, and growth across music and sports. We build visibility, positioning, and audience momentum."
                href="/entertainment"
                hrefLabel="Open Entertainment"
              />
            </div>
            <div data-reveal>
              <InfoCard
                title="6in1 Publishing"
                description="Co-publishing, rights administration, and licensing strategy that help creators protect catalog and monetize globally."
                href="/publishing"
                hrefLabel="Open Publishing"
              />
            </div>
          </div>
        </div>
      </section>
      <SiteCta title="Need the right division for your next move?" />
    </>
  );
}
