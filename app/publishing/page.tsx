import type { Metadata } from "next";
import Link from "next/link";
import { LicensingTabs } from "../components/licensing-tabs";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { PublishingSyncDeals } from "../components/publishing/publishing-sync-deals";
import { licensingTabs, publishingContributors } from "../lib/site-data";

export const metadata: Metadata = {
  title: "Publishing",
  description:
    "SIX-IN-ONE Publishing offers co-publishing, rights structure, licensing, and catalog strategy for songwriters, composers, and rights holders.",
  alternates: { canonical: "/publishing" },
  openGraph: {
    title: "Publishing | SIX-IN-ONE Group",
    description:
      "SIX-IN-ONE Publishing offers co-publishing, rights structure, licensing, and catalog strategy for songwriters, composers, and rights holders.",
    url: "/publishing",
  },
};

export default function PublishingPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Publishing"
        title="Rights strategy and licensing built for scale."
        description="SIX-IN-ONE Publishing supports creators through co-publishing, rights structure, and long-term catalog value."
        backgroundImage="https://images.unsplash.com/photo-1485579149621-3123dd979885?auto=format&fit=crop&w=1800&q=80"
        overlayClassName="bg-[#2e1358]/62"
        actions={
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#864ef5]/70 bg-[#864ef5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7541dc]">
            Submit Your Work
          </Link>
        }
      />
      <section className="section-soft bg-[#68456E]! pt-0">
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-site-soft">
          <div className="section-wrap space-y-10">
            <section className="surface-card">
              <h3 className="font-heading text-2xl text-site-text" data-reveal-text>
                Co-Publishing
              </h3>
              <p className="mt-3 text-site-muted" data-reveal-text>
                Represented authors, songwriters, and composers.
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3" data-reveal-stagger>
                {publishingContributors.map((contributor) => (
                  <article key={contributor.name} className="rounded-2xl border border-black/10 p-4">
                    <p className="font-semibold text-site-text">{contributor.name}</p>
                    <p className="text-sm text-[#864ef5]">{contributor.role}</p>
                    {contributor.publisher ? (
                      <p className="mt-2 text-sm text-site-muted">Publisher: {contributor.publisher}</p>
                    ) : null}
                    {contributor.works?.length ? (
                      <p className="mt-3 text-sm text-site-muted">Works: {contributor.works.join(", ")}</p>
                    ) : null}
                    {contributor.ipi ? <p className="mt-2 text-sm text-site-muted">IPI: {contributor.ipi}</p> : null}
                    <p className="text-sm text-site-muted">PRO: {contributor.pro}</p>
                    {contributor.copyrightYear ? (
                      <p className="text-sm text-site-muted">Copyright: {contributor.copyrightYear}</p>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>

            <PublishingSyncDeals />
          </div>
        </div>
      </section>
      <section className="section-soft pt-0">
        <div className="section-wrap space-y-10">
          <section>
            <h3 className="mb-4 font-heading text-2xl text-site-text" data-reveal-text>
              Music Licensing
            </h3>
            <div data-reveal>
              <LicensingTabs items={licensingTabs} accent="purple" variant="modern" />
            </div>
          </section>
        </div>
      </section>
      <SiteCta
        title="Need publishing support for your catalog?"
        buttonLabel="Start a Conversation"
        buttonClassName="!bg-[#864ef5] hover:!bg-[#7541dc]"
      />
    </>
  );
}
