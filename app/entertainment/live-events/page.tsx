import type { Metadata } from "next";
import { PageHeroBand } from "../../components/page-hero-band";
import { PageReveal } from "../../components/page-reveal";
import { SiteCta } from "../../components/site-cta";
import { EntertainmentLiveEvents } from "../../components/entertainment/entertainment-live-events";
import { LiveEventsJsonLd } from "../../components/entertainment/live-events-json-ld";

export const metadata: Metadata = {
  title: "Live events",
  description:
    "Live events, concerts, and productions managed by SIX-IN-ONE Entertainment in Lagos, Nigeria, and internationally—including Vector, Olamide, Hennessy Artistry, and major venues.",
  alternates: { canonical: "/entertainment/live-events" },
  keywords: [
    "live events Lagos",
    "concert management Nigeria",
    "SIX-IN-ONE Entertainment",
    "Vector live concert",
    "Hennessy Artistry",
  ],
  openGraph: {
    title: "Live events | SIX-IN-ONE Entertainment",
    description:
      "Selected live events and concert credits: venues, roles, dates, and capacities across Nigeria and the UAE.",
    url: "/entertainment/live-events",
  },
};

export default function LiveEventsPage() {
  return (
    <>
      <LiveEventsJsonLd />
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
