import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CompaniesFounderIntro() {
  return (
    <section className=" overflow-hidden bg-black!">
      <div className=" rounded-t-[2.25rem] bg-white! py-16 px-4">
        <div className="relative mx-auto max-w-[90%]" data-reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="relative lg:col-span-5">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-8 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-purple/25 blur-3xl md:h-72 md:w-72"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-brand-primary/20 blur-3xl md:h-52 md:w-52"
              />
              <figure className="relative mx-auto max-w-md lg:mx-0">
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl border border-black/6 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-black/4">
                  <Image
                    alt="Portrait placeholder — replace with founder photography"
                    className="object-cover"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                </div>
              
              </figure>
            </div>

            <div className="lg:col-span-7">
              <p className="font-heading text-[0.7rem] uppercase tracking-[0.35em] text-site-muted sm:text-xs">Founder</p>
              <h2 className="mt-3 font-heading text-3xl leading-[1.08] tracking-[0.02em] text-site-text sm:text-4xl lg:text-[2.65rem]">
                Abayomi Noah{" "}
                <span className="text-brand-primary">Ogunmefun</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-site-muted sm:text-lg">
                6in1 Group was founded to unite entertainment and publishing under one disciplined growth engine—so talent,
                catalogs, and partnerships move forward with clarity and commercial staying power.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-site-muted sm:text-lg">
                The vision is straightforward: protect creators, sharpen positioning, and open doors that compound—whether
                on stage, on-field, or across rights and licensing globally.
              </p>

              {/* <div className="mt-8 flex flex-wrap gap-2">
                {["Vision-led", "Talent-first", "Partnerships"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-site-text shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div> */}

              <Link
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(227,67,28,0.35)] transition hover:opacity-95"
                href="/founder-contact"
              >
                Connect with leadership
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
