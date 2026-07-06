"use client";

import { Clock3, Music2, MusicIcon, SportShoe } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { musoCreditsProfileUrl } from "../../lib/label-services-data";
import { homeCopy } from "../../lib/site-data";
type SliderImage = {
  src: string;
  alt: string;
  /** Use "contain" for portraits so faces are not cropped in the slide frame. */
  fit?: "cover" | "contain";
  objectPosition?: string;
};

const sliderImages: SliderImage[] = [
  { src: "/Vecr.jpeg", alt: "Vector performing" },
  { src: "/boxy.JPG", alt: "Boxer performing" },
  { src: "/Valka1.jpg", alt: "Artists performing", fit: "cover", objectPosition: "center top" },
  {
    src: "https://ik.imagekit.io/ttibelkqm/Portfolio/6in1/Seun.png",
    alt: "Seun Kuti performing",
    fit: "contain",
    objectPosition: "center top",
  },
  { src: "/boxyy.JPG", alt: "Boxers performing" },
];

export function HomeTwoFacesSection() {
  return (
    <section className="section-soft pt-0 bg-black!">
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-white">
        <div className="mx-auto grid max-w-[94%] gap-8 px-4 py-12 sm:max-w-[90%] sm:px-8 md:grid-cols-6 md:items-start md:gap-10 md:px-12 md:py-16 md:pt-32 lg:px-16">
          <p
            className="col-span-2 pt-2 font-heading text-xs font-normal tracking-[0.005em] text-site-muted md:text-2xl"
            data-reveal-text
          >
            Who We Are
          </p>

          <div className="col-span-4">
            <h2
              className="max-w-5xl font-heading text-3xl leading-[1.1] text-site-text sm:text-4xl lg:text-5xl"
              data-reveal-text
            >
              We are one brand with Multiple faces.
            </h2>
            <p
              className="mt-4 max-w-3xl font-body text-base leading-relaxed text-site-text sm:text-lg"
              data-reveal-text
            >
              {homeCopy.watchword}
            </p>
            {/* <p
              className="mt-4 max-w-3xl font-body text-base leading-relaxed text-site-muted sm:text-lg"
              data-reveal-text
            >
              {homeCopy.supporting}
            </p> */}
            <div className="mt-8 flex flex-wrap gap-3" data-reveal-stagger>
              <Link className="button-brand" href="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div data-reveal className="relative w-full pb-6 md:pb-8">
          <div className="w-full overflow-hidden">
            <div className="home-image-slider-track flex flex-nowrap items-stretch gap-5">
              {[...sliderImages, ...sliderImages].map((image, index) => (
                <article
                  className="relative h-[52vh] min-h-[280px] max-h-[420px] w-[88vw] shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:min-h-0 sm:max-h-none sm:w-[620px] lg:h-[70vh] lg:w-[700px]"
                  key={`${image.src}-${index}`}
                >
                  <img
                    alt={image.alt}
                    className={`h-full w-full bg-black/5 ${
                      image.fit === "contain" ? "object-contain" : "object-cover"
                    }`}
                    style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
                    src={image.src}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          data-reveal-stagger
          className="mx-auto grid max-w-[94%] grid-cols-1 gap-y-10 pt-10 pb-2 sm:max-w-[90%] md:grid-cols-2 lg:grid-cols-4"
        >
          <StatItem
            icon={<Music2 className="h-8 w-8" strokeWidth={1.8} />}
            value="570M+"
            title="Career streams"
            description="570+ million career streams across the company's milestones and roster."
            footnoteLink={{ href: musoCreditsProfileUrl, label: "View credit index on Muso.ai" }}
          />          {/* <StatItem
            icon={<UsersRound className="h-8 w-8" strokeWidth={1.8} />}
            value="2.5M+"
            title="Fans"
            description="Engaged fans across entertainment and publishing ecosystems."
          /> */}
          <StatItem
            icon={<Clock3 className="h-8 w-8" strokeWidth={1.8} />}
            value="12+"
            title="Years of Experience"
            description="Years of strategy, rights management, and growth execution."
          />
          <StatItem
            icon={<SportShoe className="h-8 w-8" strokeWidth={1.8} />}
            value="5+"
            title="Professional Athletes"
            description="Professional athletes represented with media, image, and career development."
          />
          <StatItem
            icon={<MusicIcon className="h-8 w-8" strokeWidth={1.8} />}
            value="20+"
            title="Musicians"
            description="Artists developed through branding, publishing, and licensing."
          />
        </div>
      </div>
    </section>
  );
}

function StatItem({
  icon,
  value,
  title,
  description,
  footnoteLink,
}: {
  icon: ReactNode;
  value: string;
  title: string;
  description: string;
  footnoteLink?: { href: string; label: string };
}) {
  return (
    <article className="border-r border-black/6 px-8 md:py-10 py-6 last:border-r-0 lg:px-12">
      <div className="text-site-text">{icon}</div>
      <p className="mt-16 md:mt-24 font-heading text-4xl md:text-5xl xl:text-6xl leading-none text-site-text">{value}</p>
      {/* <p className="mt-4 font-body text-xl font-medium text-site-text">{title}</p> */}
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-site-muted">{description}</p>
      {footnoteLink ? (
        <a
          href={footnoteLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-semibold text-brand-primary transition hover:opacity-80"
        >
          {footnoteLink.label} →
        </a>
      ) : null}
    </article>
  );
}