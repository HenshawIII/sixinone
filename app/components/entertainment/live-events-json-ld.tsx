import { getSiteUrl } from "../../lib/site-url";
import { liveEvents } from "../../lib/live-events-data";

export function LiveEventsJsonLd() {
  const base = getSiteUrl();
  const organizer = {
    "@type": "Organization",
    name: "SIX-IN-ONE Entertainment",
    url: `${base}/entertainment`,
  };

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "SIX-IN-ONE Entertainment — live events",
    description: "Selected live events and concert credits managed or produced by SIX-IN-ONE Entertainment.",
    url: `${base}/entertainment/live-events`,
    numberOfItems: liveEvents.length,
    itemListElement: liveEvents.map((ev, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: ev.title,
        description: [ev.role, ev.notes].filter(Boolean).join(" — ") || undefined,
        startDate: ev.startDate,
        location: {
          "@type": "Place",
          name: ev.venue,
        },
        organizer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
