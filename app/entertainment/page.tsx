import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { EntertainmentRosterTabs } from "../components/entertainment/entertainment-roster-tabs";
import { athletes, musicians } from "../lib/site-data";
import Link from "next/link";

export default function EntertainmentPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Entertainment"
        title="Artists and athletes with global breakout potential."
        description="We shape identity, audience growth, and commercial pathways for entertainment talent across music and sports."
        backgroundImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1800&q=80"
        overlayClassName="bg-black/58"
        actions={
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#ffb400]/75 bg-[#ffb400] px-5 py-3 text-sm font-semibold text-white transition hover:border-[#ffb400] hover:bg-[#e7a300]"
          >
            Book Entertainment Team
          </Link>
        }
      />
      <EntertainmentRosterTabs athletes={athletes} musicians={musicians} />
      <SiteCta title="Want to work with our entertainment roster?" buttonClassName="!bg-[#ffb400] hover:!bg-[#e7a300]" />
    </>
  );
}
