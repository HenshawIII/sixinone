import { liveEventsByYearDescending } from "../../lib/live-events-data";

export function EntertainmentLiveEvents() {
  const byYear = liveEventsByYearDescending();
  const years = [...byYear.keys()].sort((a, b) => b - a);

  return (
    <div className="space-y-12">
      {years.map((year) => (
        <section key={year} aria-labelledby={`live-year-${year}`}>
          <h2 id={`live-year-${year}`} className="font-heading text-2xl text-site-text sm:text-3xl">
            {year}
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(byYear.get(year) ?? []).map((ev) => (
              <li
                key={`${year}-${ev.title}`}
                className="flex flex-col rounded-2xl border border-black/10 bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
              >
                <h3 className="font-heading text-lg leading-snug text-site-text">{ev.title}</h3>
                {ev.notes ? <p className="mt-2 text-sm leading-relaxed text-site-muted">{ev.notes}</p> : null}
                <p className="mt-3 text-sm text-site-muted">
                  <span className="font-semibold text-site-text/90">Venue: </span>
                  {ev.venue}
                </p>
                {ev.role ? (
                  <p className="mt-2 text-sm text-site-muted">
                    <span className="font-semibold text-site-text/90">Role: </span>
                    {ev.role}
                  </p>
                ) : null}
                <p className="mt-2 text-sm text-site-muted">
                  <span className="font-semibold text-site-text/90">Date: </span>
                  {ev.dateLine}
                </p>
                {ev.capacity ? (
                  <p className="mt-2 text-sm text-site-muted">
                    <span className="font-semibold text-site-text/90">Capacity: </span>
                    {ev.capacity}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
