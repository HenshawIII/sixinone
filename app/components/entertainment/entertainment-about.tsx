export const ENTERTAINMENT_ABOUT_COPY =
  "SIX-IN-ONE Entertainment is an independent entertainment company based in Lagos, Nigeria. We develop and represent a roster of recording artists, songwriters, and professional athletes—managing careers from debut to global release and live performance.";

export function EntertainmentAbout() {
  return (
    <section className="bg-black! pt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-white shadow-[0_-8px_48px_rgba(0,0,0,0.12)]">
        <div className="section-wrap py-12 sm:py-16 md:py-20">
          <div className="mx-auto px-4 md:px-0 max-w-3xl">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-site-muted" data-reveal-text>
              Entertainment
            </p>
            <h2 className="mt-3 font-heading text-3xl text-site-text sm:text-4xl" data-reveal-text>
              About SIX-IN-ONE Entertainment
            </h2>
            <p className="mt-6 text-base leading-relaxed text-site-muted sm:text-lg" data-reveal-text>
              {ENTERTAINMENT_ABOUT_COPY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
