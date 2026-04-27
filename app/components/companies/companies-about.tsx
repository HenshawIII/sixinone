import Image from "next/image";
import { InfoCard } from "../info-card";

export function CompaniesAbout() {
  return (
    <section className="section-white bg-white!">
      <div className="section-wrap">
        <div className="mx-auto max-w-[90%] space-y-10">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl uppercase tracking-[0.02em] text-site-text sm:text-5xl">About Us</h2>
            <p className="mt-4 text-base leading-relaxed text-site-muted tracking-tight sm:text-lg">
              6in1 Group unites specialist companies that help creators turn momentum into durable careers. We combine
              development, strategy, and execution so talent and rights holders can grow with confidence.
            </p>
          </header>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5 ">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  alt="Professional esports players competing in a live session"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80"
                />
              </div>
            </article>
            <article className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5">
              <div className="relative aspect-4/3 overflow-hidden rounded-xl">
                <Image
                  alt="Creator team collaborating in a modern competitive gaming setup"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80"
                />
              </div>
            </article>
          </div>
          <p className="mx-auto max-w-4xl text-center text-base tracking-tight leading-relaxed text-site-muted sm:text-lg">
            Through Entertainment and Publishing, we provide the structure behind sustainable growth: sharper
            positioning, stronger partnerships, and long-term commercial value built around each creator&apos;s goals.
            Backed by deep industry experience, our teams deliver practical strategies that create visible impact for
            both emerging and established talent.
          </p>
        </div>
      </div>
      <div className="border-t border-black/5 bg-white pt-10">
        <div className="mx-auto max-w-[90%] space-y-8 px-4 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div data-reveal>
              <InfoCard
                accent="gold"
                title="6in1 Entertainment"
                description="Talent development, representation, and growth across music and sports. We build visibility, positioning, and audience momentum."
                href="/entertainment"
                hrefLabel="Open Entertainment"
              />
            </div>
            <div data-reveal>
              <InfoCard
                accent="purple"
                title="6in1 Publishing"
                description="Co-publishing, rights administration, and licensing strategy that help creators protect catalog and monetize globally."
                href="/publishing"
                hrefLabel="Open Publishing"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
