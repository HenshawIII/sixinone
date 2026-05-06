import Image from "next/image";
import Link from "next/link";

type SiteCtaProps = {
  eyebrow?: string;
  title?: string;
  buttonLabel?: string;
  buttonHref?: string;
  buttonClassName?: string;
};

export function SiteCta({
  eyebrow = "Let's Work Together",
  title = "Ready to shape your next chapter?",
  buttonLabel = "Contact Us",
  buttonHref = "/contact",
  buttonClassName,
}: SiteCtaProps) {
  return (
    <section className="section-white pt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden bg-white">
        <div className="relative overflow-hidden rounded-t-[2.25rem] bg-black px-6 py-14 text-white sm:px-10 sm:py-32 lg:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-brand-primary/35 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-brand-purple/30 blur-3xl"
          />

          <div
            className="relative mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-end"
            data-reveal-stagger
          >
            <div className="max-w-2xl">
              <p className="font-heading text-xs uppercase tracking-[0.28em] text-white/65" data-reveal-text>
                {eyebrow}
              </p>
              <h2 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl" data-reveal-text>
                {title}
              </h2>
              <div className="mt-7 inline-block">
                <Link className={`button-brand px-8 py-3.5 text-base ${buttonClassName ?? ""}`} href={buttonHref}>
                  {buttonLabel}
                </Link>
              </div>
            </div>

            <div className="relative justify-self-start md:justify-self-end">
              {/* <div className="rounded-3xl border border-white/20 bg-white/6 p-5 backdrop-blur-sm sm:p-6">
                <Image
                  alt="6in1 Group brand logo"
                  height={110}
                  src="/logoGroup.png"
                  width={320}
                  className="h-16 w-auto object-contain sm:h-20"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
