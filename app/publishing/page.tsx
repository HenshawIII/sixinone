import Link from "next/link";
import { LicensingTabs } from "../components/licensing-tabs";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { SimpleForm } from "../components/simple-form";
import { licensingTabs, publishingContributors } from "../lib/site-data";

export default function PublishingPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Publishing"
        title="Rights strategy and licensing built for scale."
        description="6in1 Publishing supports creators through co-publishing, rights structure, and long-term catalog value."
        actions={
          <Link href="/founder-contact" className="button-brand">
            Submit Your Work
          </Link>
        }
      />
      <section className="section-soft">
        <div className="section-wrap space-y-10">
          <section data-reveal className="surface-card">
            <h3 className="font-heading text-2xl text-site-text">Co-Publishing</h3>
            <p className="mt-3 text-site-muted">
              Represented authors, songwriters, and composers.
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {publishingContributors.map((contributor) => (
                <article key={contributor.name} className="rounded-2xl border border-black/10 p-4">
                  <p className="font-semibold text-site-text">{contributor.name}</p>
                  <p className="text-sm text-brand-red">{contributor.role}</p>
                  <p className="mt-3 text-sm text-site-muted">
                    Works: {contributor.works.join(", ")}
                  </p>
                  <p className="text-sm text-site-muted">IPI: {contributor.ipi}</p>
                  <p className="text-sm text-site-muted">PRO: {contributor.pro}</p>
                  <p className="text-sm text-site-muted">Copyright: {contributor.copyrightYear}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
      <section className="section-dark">
        <div className="section-wrap space-y-10">
          <section data-reveal>
            <h3 className="mb-4 font-heading text-2xl">Music Licensing</h3>
            <LicensingTabs items={licensingTabs} dark />
          </section>
          <div data-reveal>
            <SimpleForm
              title="Submit Your Work"
              helper="Share your details, links, and a short introduction for publishing/licensing consideration."
              buttonText="Submit for Consideration"
              dark
              fields={[
                { name: "email", label: "Email", type: "email" },
                { name: "name", label: "Name" },
                { name: "portfolio", label: "Portfolio / Work Links" },
                { name: "message", label: "Tell us about your work", multiline: true },
              ]}
            />
          </div>
        </div>
      </section>
      <SiteCta title="Need publishing support for your catalog?" buttonLabel="Start a Conversation" />
    </>
  );
}
