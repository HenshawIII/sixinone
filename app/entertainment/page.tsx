import Link from "next/link";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { athletes, musicians } from "../lib/site-data";

export default function EntertainmentPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Entertainment"
        title="Music and sports talent with global potential."
        description="We shape career identity, audience growth, and commercial pathways for artists and athletes."
      />
      <section className="section-soft">
        <div className="section-wrap space-y-14">
          <div className="space-y-6">
            <h3 data-reveal className="font-heading text-3xl text-site-text sm:text-4xl">
              Music Roster
            </h3>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {musicians.map((artist, index) => (
                <article className="surface-card overflow-hidden p-0" key={artist.slug} data-reveal>
                  <div className="h-40 bg-linear-to-r from-brand-purple/35 via-brand-blue/30 to-brand-red/35" />
                  <div className="p-6">
                    <p className="font-heading text-2xl text-site-text">{artist.name}</p>
                    <p className="mt-2 text-sm text-brand-primary">{artist.identity}</p>
                    <p className="mt-3 text-site-muted">{artist.bio}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {artist.socials.slice(0, 3).map((social) => (
                        <a key={`${artist.slug}-${social.label}-${index}`} href={social.url} target="_blank" rel="noreferrer" className="rounded-full border border-black/15 px-3 py-1 text-xs text-site-muted transition hover:text-site-text">
                          {social.label}
                        </a>
                      ))}
                    </div>
                    <Link href={`/entertainment/${artist.slug}`} className="button-secondary mt-6">
                      View Profile
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 data-reveal className="font-heading text-3xl text-site-text sm:text-4xl">
              Athlete Roster
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              {athletes.map((athlete) => (
                <article className="surface-card" key={athlete.slug} data-reveal>
                  <p className="font-heading text-2xl text-site-text">{athlete.name}</p>
                  <p className="mt-2 text-sm text-brand-purple">{athlete.identity}</p>
                  <p className="mt-3 text-site-muted">{athlete.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-sm">
                    <span className="rounded-full border border-black/15 px-3 py-1 text-site-muted">Weight: {athlete.weightCategory}</span>
                    <span className="rounded-full border border-black/15 px-3 py-1 text-site-muted">W/D/L: {athlete.record}</span>
                  </div>
                  <Link href={`/entertainment/${athlete.slug}`} className="button-secondary mt-6">
                    View Profile
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteCta title="Want to work with our entertainment roster?" />
    </>
  );
}
