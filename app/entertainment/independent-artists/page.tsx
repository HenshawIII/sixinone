import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../../components/breadcrumb-json-ld";
import { PageHeroBand } from "../../components/page-hero-band";
import { PageReveal } from "../../components/page-reveal";
import { SiteCta } from "../../components/site-cta";
import { EntertainmentIndependentArtists } from "../../components/entertainment/entertainment-independent-artists";
import { pageOpenGraph } from "../../lib/seo-metadata";
import Link from "next/link";

const title = "Independent artists | SIX-IN-ONE Entertainment";
const description =
  "Label services for independent artists in Lagos, Ghana, and West Africa—A&R, product management, releases, and credits through SIX-IN-ONE Entertainment.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/entertainment/independent-artists" },
  ...pageOpenGraph("/entertainment/independent-artists", title, description),
};

export default function IndependentArtistsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Entertainment", path: "/entertainment" },
          { name: "Independent artists", path: "/entertainment/independent-artists" },
        ]}
      />
      <PageReveal />
      <PageHeroBand
        eyebrow="Independent artists"
        title="Independent artists"
        description="Label services across Lagos, Ghana, and wider West Africa—from release planning and A&R to product management and partner coordination."
        backgroundImage="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1800&q=80"
        overlayClassName="bg-black/58"
        actions={
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#ffb400]/75 bg-[#ffb400] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ffb400] hover:bg-[#e7a300]"
          >
            Start a conversation
          </Link>
        }
      />
      <section className="bg-black! pt-0">
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-white shadow-[0_-8px_48px_rgba(0,0,0,0.12)]">
          <div className="section-wrap py-12 sm:py-16 md:py-20">
            <EntertainmentIndependentArtists />
          </div>
        </div>
      </section>
      <SiteCta
        title="Ready to plan your next release?"
        buttonClassName="!bg-[#ffb400] hover:!bg-[#e7a300]"
      />
    </>
  );
}
