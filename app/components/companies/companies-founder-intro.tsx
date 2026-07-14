import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { siteFaqCategories } from "../../lib/faq-data";
import { siteEmail } from "../../lib/site-contact";
import { FounderSocialIcons } from "../footer-social-icons";

export function CompaniesFounderIntro() {
  return (
    <section className="overflow-hidden bg-black!">
      <div className="rounded-t-[2.25rem] bg-white! py-16 px-4">
        <div className="relative mx-auto max-w-[94%] sm:max-w-[90%]">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
            <div className="relative lg:col-span-5" data-reveal>
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
                    src="/Founders.jpg"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />
                </div>
              </figure>
            </div>

            <div className="lg:col-span-7">
              <p
                className="font-heading text-[0.7rem] uppercase tracking-[0.35em] text-site-muted sm:text-xs"
                data-reveal-text
              >
                Founder
              </p>
              <h2
                className="mt-3 font-heading text-3xl leading-[1.08] tracking-[0.02em] text-site-text sm:text-4xl lg:text-[2.65rem]"
                data-reveal-text
              >
                Abayomi Noah <span className="text-brand-primary">Ogunmefun</span>
              </h2>
              <p
                className="mt-4 max-w-xl text-sm font-medium uppercase tracking-[0.12em] text-site-text sm:text-base"
                data-reveal-text
              >
                B.A. Philosophy, University of Lagos · Nigeria
              </p>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-site-muted sm:text-lg" data-reveal-text>
                SIX-IN-ONE Group was founded by Abayomi who has over 12 years experience as a music executive to unite
                entertainment and publishing under one disciplined growth engine—so talent, catalogs, and partnerships
                move forward with clarity and commercial staying power.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-site-muted sm:text-lg" data-reveal-text>
                The vision is straightforward: protect creators, sharpen positioning, and open doors that compound—whether
                on stage, on-field, or across rights and licensing globally.
              </p>

              <div data-reveal-stagger className="mt-10 space-y-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(227,67,28,0.35)] transition hover:opacity-95"
                    href="/contact"
                  >
                    Contact SIX-IN-ONE Group
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-site-muted">
                    Connect with the founder
                  </p>
                  <FounderSocialIcons className="mt-3" />
                </div>
              </div>
            </div>
          </div>

          <div
            id="faq"
            className="mt-16 scroll-mt-28 border-t border-black/8 pt-14 sm:mt-20 sm:pt-16"
            data-reveal
          >
            <header className="max-w-3xl">
              <p
                className="font-heading text-[0.7rem] uppercase tracking-[0.35em] text-site-muted sm:text-xs"
                data-reveal-text
              >
                FAQ
              </p>
              <h2
                className="mt-3 font-heading text-3xl leading-[1.08] tracking-[0.02em] text-site-text sm:text-4xl"
                data-reveal-text
              >
                Frequently asked <span className="text-brand-primary">questions</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-site-muted sm:text-lg" data-reveal-text>
                Straight answers on who we are, how the divisions work, how we develop talent, and how to get in touch.
              </p>
            </header>

            <div className="mt-10 space-y-12" data-reveal-stagger>
              {siteFaqCategories.map((category) => (
                <div key={category.title}>
                  <h3 className="font-heading text-xs uppercase tracking-[0.28em] text-brand-primary sm:text-sm">
                    {category.title}
                  </h3>
                  <div className="mt-4 divide-y divide-black/8 overflow-hidden rounded-2xl border border-black/8 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.05)] ring-1 ring-black/3">
                    {category.items.map((item) => (
                      <details key={item.question} className="group">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-black/2 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                          <span className="font-heading text-base leading-snug text-site-text sm:text-lg">
                            {item.question}
                          </span>
                          <ChevronDown
                            className="mt-1 h-5 w-5 shrink-0 text-site-muted transition group-open:rotate-180 group-open:text-brand-primary"
                            aria-hidden
                          />
                        </summary>
                        <div className="border-t border-black/6 px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
                          <FaqAnswer text={item.answer} />
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqAnswer({ text }: { text: string }) {
  const blocks = text.split("\n\n");

  return (
    <div className="space-y-3 text-sm leading-relaxed text-site-muted sm:text-base">
      {blocks.map((block) => (
        <p key={block.slice(0, 48)}>{renderInlineLinks(block)}</p>
      ))}
    </div>
  );
}

function renderInlineLinks(text: string) {
  const parts = text.split(/(\/contact|hello@sixinonegroup\.com)/g);

  return parts.map((part, index) => {
    if (part === "/contact") {
      return (
        <Link key={`${part}-${index}`} href="/contact" className="font-semibold text-brand-primary transition hover:opacity-80">
          sixinonegroup.com/contact
        </Link>
      );
    }
    if (part === siteEmail || part === "hello@sixinonegroup.com") {
      return (
        <a
          key={`${part}-${index}`}
          href={`mailto:${siteEmail}`}
          className="font-semibold text-brand-primary transition hover:opacity-80"
        >
          {siteEmail}
        </a>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}
