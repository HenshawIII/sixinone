import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "../../components/breadcrumb-json-ld";
import { PageHeroBand } from "../../components/page-hero-band";
import { PageReveal } from "../../components/page-reveal";
import { SiteCta } from "../../components/site-cta";
import { EntertainmentLiveEvents } from "../../components/entertainment/entertainment-live-events";
import { LiveEventsJsonLd } from "../../components/entertainment/live-events-json-ld";
import { pageOpenGraph } from "../../lib/seo-metadata";

const title = "Concert & Live Event Management Nigeria – SIX-IN-ONE Entertainment";
const description =
  "Live events, concerts, and productions managed by SIX-IN-ONE Entertainment in Lagos, Nigeria, and internationally—including Vector, Olamide, Hennessy Artistry, and major venues.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/entertainment/live-events" },
  ...pageOpenGraph("/entertainment/live-events", title, description),
};

export default function LiveEventsPage() {
  return (
    <>
      <LiveEventsJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Entertainment", path: "/entertainment" },
          { name: "Live events", path: "/entertainment/live-events" },
        ]}
      />
      <PageReveal />
      <PageHeroBand
        eyebrow="Live events"
        title="Live events"
        description="High-capacity concerts and productions across arenas, hotel ballrooms, stadiums, and international stages—from artist and stage management to concert production."
        backgroundImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=80"
        overlayClassName="bg-black/58"
      />
      <section className="bg-black! pt-0">
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-white shadow-[0_-8px_48px_rgba(0,0,0,0.12)]">
          <div className="section-wrap py-12 sm:py-16 md:py-20">
            <EntertainmentLiveEvents />
          </div>
        </div>
      </section>
      <SiteCta
        title="Planning a live moment?"
        buttonClassName="!bg-[#ffb400] hover:!bg-[#e7a300]"
      />
    </>
  );
}
