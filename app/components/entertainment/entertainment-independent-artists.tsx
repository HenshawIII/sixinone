import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  independentArtistsIntro,
  labelServiceArtists,
  musoCreditsProfileUrl,
} from "../../lib/label-services-data";

export function EntertainmentIndependentArtists() {
  return (
    <div className="space-y-14">
      <header className="mx-auto px-4 md:px-0 max-w-3xl ">
        <h2 className="font-heading text-3xl text-site-text sm:text-4xl ">{independentArtistsIntro.headline}</h2>
        <p className="mt-4 text-base leading-relaxed text-site-muted sm:text-lg">{independentArtistsIntro.subhead}</p>
      </header>

      <div className="mx-auto px-4 md:px-0 max-w-3xl space-y-4 text-base leading-relaxed text-site-muted sm:text-lg">
        {independentArtistsIntro.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="rounded-2xl border border-black/10 bg-linear-to-br from-[#ffb400]/15 via-white to-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.06)] sm:p-8">
        <h3 className="font-heading text-xl text-site-text sm:text-2xl">Credit index (Muso.ai)</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-site-muted sm:text-base">
          The linked profile aggregates music-project credits and is maintained as a public index. Work shown there is
          represented and advanced through SIX-IN-ONE Group and our entertainment division where applicable.
        </p>
        <a
          href={musoCreditsProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#ffb400] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e7a300]"
        >
          View credits on Muso.ai
          <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
        </a>
      </div>

      <div className="space-y-12">
        {labelServiceArtists.map((artist) => (
          <section
            key={artist.slug}
            id={artist.slug}
            className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)] sm:p-8"
          >
            <div className="flex flex-col gap-2 border-b border-black/8 pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h3 className="font-heading text-2xl text-site-text">{artist.name}</h3>
                <p className="mt-1 text-sm text-[#ffb400] sm:text-base">
                  {artist.genre}
                  <span className="text-site-muted"> · {artist.label}</span>
                  {artist.country ? <span className="text-site-muted"> · {artist.country}</span> : null}
                </p>
                {artist.role ? <p className="mt-2 text-sm text-site-muted">Role: {artist.role}</p> : null}
              </div>
              {artist.slug === "vector" ? (
                <Link
                  href="/entertainment/vector"
                  className="shrink-0 text-sm font-semibold text-site-text underline-offset-4 hover:text-[#ffb400] hover:underline"
                >
                  Artist profile
                </Link>
              ) : null}
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[280px] text-left text-sm">
                <thead>
                  <tr className="border-b border-black/10 text-xs uppercase tracking-[0.12em] text-site-muted">
                    <th className="pb-3 pr-4 font-heading font-semibold">Release</th>
                    <th className="pb-3 pr-4 font-heading font-semibold">Format</th>
                    <th className="pb-3 font-heading font-semibold">Release date</th>
                  </tr>
                </thead>
                <tbody>
                  {artist.releases.map((r) => (
                    <tr key={r.title} className="border-b border-black/6 last:border-0">
                      <td className="py-3 pr-4 font-medium text-site-text">{r.title}</td>
                      <td className="py-3 pr-4 text-site-muted">{r.format}</td>
                      <td className="py-3 text-site-muted">{r.releaseDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
