import { ExternalLink } from "lucide-react";
import type { SyncDeal } from "../../lib/sync-deals-data";
import { syncDealStatusLabel, syncDeals } from "../../lib/sync-deals-data";

function StatusBadge({ status }: { status: SyncDeal["status"] }) {
  const base = "inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]";
  if (status === "published") {
    return <span className={`${base} bg-[#864ef5]/15 text-[#6840c4]`}>{syncDealStatusLabel(status)}</span>;
  }
  return <span className={`${base} bg-black/6 text-site-muted`}>{syncDealStatusLabel(status)}</span>;
}

function SyncDealCard({ deal }: { deal: SyncDeal }) {
  return (
    <li className="rounded-2xl border border-black/10 bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.05)] sm:p-6">
      <DealHeader deal={deal} />
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 sm:gap-x-6">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-site-muted">Sync deal</dt>
          <dd className="mt-1 leading-relaxed text-site-text">{deal.dealLabel}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-site-muted">Year</dt>
          <dd className="mt-1 leading-relaxed text-site-text">{deal.year}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-site-muted">Placement</dt>
          <dd className="mt-1 leading-relaxed text-site-text">{deal.placement}</dd>
        </div>
      </dl>
      {deal.mediaUrl ? (
        <a
          href={deal.mediaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#864ef5]/45 bg-[#864ef5]/10 px-4 py-2.5 text-sm font-semibold text-site-text transition hover:border-[#864ef5] hover:bg-[#864ef5] hover:text-white"
        >
          Watch placement
          <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
        </a>
      ) : null}
    </li>
  );
}

function DealHeader({ deal }: { deal: SyncDeal }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <p className="font-heading text-lg text-site-text sm:text-xl">{deal.songTitle}</p>
        {deal.artist ? <p className="mt-1 text-sm text-[#864ef5]">{deal.artist}</p> : null}
      </div>
      <StatusBadge status={deal.status} />
    </div>
  );
}

export function PublishingSyncDeals() {
  return (
    <section className="surface-card">
      <p className="font-heading text-xs uppercase tracking-[0.3em] text-site-muted">Track record</p>
      <h3 className="mt-2 font-heading text-2xl text-site-text sm:text-3xl" data-reveal-text>
        Past sync deals
      </h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-site-muted sm:text-base" data-reveal-text>
        Selected sync placements across games, sports broadcast, and film—representing work advanced through
        SIX-IN-ONE Publishing and rights strategy.
      </p>

      <ul className="mt-8 space-y-4" data-reveal-stagger>
        {syncDeals.map((deal) => (
          <SyncDealCard key={`${deal.songTitle}-${deal.year}`} deal={deal} />
        ))}
      </ul>
    </section>
  );
}
