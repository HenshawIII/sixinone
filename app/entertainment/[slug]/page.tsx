import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHeroBand } from "../../components/page-hero-band";
import { PageReveal } from "../../components/page-reveal";
import { SiteCta } from "../../components/site-cta";
import { allTalent } from "../../lib/site-data";
import { SimpleForm } from "../../components/simple-form";
import { getTalentImage } from "../../lib/talent-images";

type Params = { slug: string };

export function generateStaticParams() {
  return allTalent.map((talent) => ({ slug: talent.slug }));
}

export default async function TalentProfilePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const talent = allTalent.find((item) => item.slug === slug);
  if (!talent) notFound();
  const image = getTalentImage(talent.slug, talent.name, talent.kind);

  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow={talent.kind === "musician" ? "Artist Profile" : "Athlete Profile"}
        title={talent.name}
        description={talent.bio}
        actions={
          <Link href="/entertainment" className="button-secondary-dark">
            Back to Entertainment
          </Link>
        }
      />
      <section className="section-soft bg-black! pt-0">
        <div data-reveal className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-site-soft">
          <div className="section-wrap space-y-8">
            <div data-reveal className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5">
              <div className="relative aspect-16/7 min-h-[220px]">
                <Image alt={image.alt} className="object-cover" fill priority sizes="(max-width: 1024px) 100vw, 1200px" src={image.src} />
              </div>
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-heading text-2xl text-white sm:text-3xl">{talent.name}</p>
                <p className="mt-2 inline-flex rounded-full bg-[#ffb400] px-4 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
                  {talent.kind === "musician" ? "Artist" : "Athlete"} Profile
                </p>
              </div>
            </div>
            <div data-reveal className="surface-card">
              <p className="text-sm text-site-muted">Identity</p>
              <p className="font-heading text-xl text-site-text">{talent.identity}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-white">
        <div className="section-wrap space-y-8">

          {talent.kind === "musician" ? (
            <>
              <section data-reveal className="surface-card">
                <h3 className="font-heading text-2xl text-site-text">Discography</h3>
                <ul className="mt-4 space-y-2 text-site-muted">
                  {talent.discography.map((work) => (
                    <li key={work.title}>
                      <a className="transition hover:text-site-text" href={work.link} target="_blank" rel="noreferrer noopener">
                        {work.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <section data-reveal className="surface-card">
                <h3 className="font-heading text-2xl text-site-text">Live Performances & Touring</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {talent.mediaEmbeds.map((media) => (
                    <div key={media.platform} className="rounded-2xl border border-black/10 p-4">
                      <p className="font-semibold text-site-text">{media.platform}</p>
                      <a className="text-site-muted transition hover:text-site-text" href={media.link} rel="noreferrer noopener" target="_blank">
                        Open {media.platform}
                      </a>
                    </div>
                  ))}
                </div>
              </section>
              <section data-reveal className="surface-card">
                <h3 className="font-heading text-2xl text-site-text">Upcoming Events</h3>
                <ul className="mt-4 space-y-3 text-site-muted">
                  {talent.gigs.map((gig) => (
                    <li key={`${gig.date}-${gig.city}`} className="rounded-2xl border border-black/10 p-4">
                      <p className="text-site-text">
                        {gig.date} - {gig.city}
                      </p>
                      <p>{gig.details}</p>
                      <a href={gig.ticketUrl} target="_blank" rel="noreferrer noopener" className="mt-1 inline-block text-brand-red">
                        View details
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <>
              <section data-reveal className="surface-card">
                <h3 className="font-heading text-2xl text-site-text">Stats</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  <p>
                    <span className="text-site-muted">Height:</span> {talent.height}
                  </p>
                  <p>
                    <span className="text-site-muted">Weight:</span> {talent.weightCategory}
                  </p>
                  <p>
                    <span className="text-site-muted">Record:</span> {talent.record}
                  </p>
                </div>
              </section>
              <section data-reveal className="surface-card">
                <h3 className="font-heading text-2xl text-site-text">Fight History</h3>
                <ul className="mt-4 space-y-3 text-site-muted">
                  {talent.fights.map((fight) => (
                    <li key={fight.event} className="rounded-2xl border border-black/10 p-4">
                      <p className="text-site-text">{fight.event}</p>
                      <p>{fight.result}</p>
                      <p className="text-sm">{fight.note}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <section data-reveal className="surface-card">
                <h3 className="font-heading text-2xl text-site-text">Training & Preparation</h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-site-muted">
                  {talent.training.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </>
          )}

          <section data-reveal className="surface-card">
            <h3 className="font-heading text-2xl text-site-text">Social Links</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {talent.socials.map((social) => (
                <a key={social.label} href={social.url} className="button-secondary" target="_blank" rel="noreferrer noopener">
                  {social.label}
                </a>
              ))}
            </div>
          </section>

          <div data-reveal>
            <SimpleForm
              title={talent.kind === "musician" ? "Stay Connected" : "Get Athlete Updates"}
              helper="Subscribe for announcements, releases, appearances, and profile updates."
              buttonText="Subscribe"
            />
          </div>
        </div>
      </section>
      <SiteCta
        title={`Interested in ${talent.name}?`}
        buttonLabel="Talk to Management"
        buttonClassName="!bg-[#ffb400] hover:!bg-[#e7a300]"
      />
    </>
  );
}
