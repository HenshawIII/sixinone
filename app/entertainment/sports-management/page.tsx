import type { Metadata } from "next";
import { PageHeroBand } from "../../components/page-hero-band";
import { PageReveal } from "../../components/page-reveal";
import { SiteCta } from "../../components/site-cta";
import { EntertainmentSportsManagement } from "../../components/entertainment/entertainment-sports-management";
import { athletes } from "../../lib/site-data";

export const metadata: Metadata = {
  title: "Sports management",
  description:
    "Sports management for boxing and combat talent in Nigeria and beyond—training narrative, fight positioning, and roster representation through SIX-IN-ONE Entertainment.",
  alternates: { canonical: "/entertainment/sports-management" },
  keywords: ["sports management Nigeria", "boxing management Lagos", "athlete representation", "SIX-IN-ONE Entertainment"],
  openGraph: {
    title: "Sports management | SIX-IN-ONE Entertainment",
    description:
      "Professional sports management aligned with long-term athlete positioning, media, and commercial pathways.",
    url: "/entertainment/sports-management",
  },
};

export default function SportsManagementPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Sports management"
        title="Sports management"
        description="Disciplined representation for combat athletes—visibility, narrative, and commercial pathways around training cycles and fight milestones."
        backgroundImage="https://images.unsplash.com/photo-1549719386-74dfcbf7db31?auto=format&fit=crop&w=1800&q=80"
        overlayClassName="bg-black/58"
      />
      <section className="bg-black! pt-0">
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-white shadow-[0_-8px_48px_rgba(0,0,0,0.12)]">
          <div className="section-wrap py-12 sm:py-16 md:py-20">
            <EntertainmentSportsManagement athletes={athletes} />
          </div>
        </div>
      </section>
      <SiteCta
        title="Discuss representation for your athlete."
        buttonClassName="!bg-[#ffb400] hover:!bg-[#e7a300]"
      />
    </>
  );
}
