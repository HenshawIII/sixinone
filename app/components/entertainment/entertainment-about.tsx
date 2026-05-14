export const ENTERTAINMENT_ABOUT_COPY =
  "At SIX-IN-ONE Entertainment, we thrive on meticulous attention to detail and managing project budgets effectively. We blend critical thinking with practical management skills, nurturing brands and exploring new business avenues so every product ideation aligns with our strategic vision—balancing creative aspirations with commercial realities in talent management and music.";

export function EntertainmentAbout() {
  return (
    <section className="bg-black! pt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-white shadow-[0_-8px_48px_rgba(0,0,0,0.12)]">
        <div className="section-wrap py-12 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
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
