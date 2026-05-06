"use client";

import { Clock3, Music2, Trophy, UsersRound, MusicIcon, SportShoe } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const sliderImages = [
  { src: "/veci.jpeg", alt: "Vector performing" },
  { src: "/boxers.jpg", alt: "Boxer performing" },
  { src: "/artists.jpg", alt: "Artists performing" },
  { src: "/seun.webp", alt: "Seun Kuti performing" },
  { src: "/boxii.jpg", alt: "Boxers performing" },
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
              We are one brand with two faces: <span>Entertainment</span> and{" "}
              <span className="text-site-muted">Publishing</span>.
            </h2>
            <p
              className="mt-4 max-w-3xl font-body text-base leading-relaxed text-site-muted sm:text-lg"
              data-reveal-text
            >
              6in1 Group is a forward-facing talent and brand development company operating at the intersection of
              entertainment, publishing, and strategic growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal-stagger>
              <Link className="button-brand" href="/about">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div data-reveal className="relative left-1/2 w-screen -translate-x-1/2 pb-6 md:pb-8">
          <div className="w-full overflow-hidden">
            <div className="home-image-slider-track flex flex-nowrap items-stretch gap-5">
              {[...sliderImages, ...sliderImages].map((image, index) => (
                <article
                  className="relative h-[52vh] min-h-[280px] max-h-[420px] w-[88vw] shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:min-h-0 sm:max-h-none sm:w-[620px] lg:h-[70vh] lg:w-[700px]"
                  key={`${image.src}-${index}`}
                >
                  <img alt={image.alt} className="h-full w-full object-cover" src={image.src} />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div data-reveal-stagger className="grid  max-w-[94%] mx-auto py-10 sm:max-w-[90%] sm:grid-cols-2 lg:grid-cols-4">
          <StatItem
            icon={<UsersRound className="h-8 w-8" strokeWidth={1.8} />}
            value="2.5M+"
            title="Fans"
            description="Engaged fans across entertainment and publishing ecosystems."
          />
          <StatItem
            icon={<Clock3 className="h-8 w-8" strokeWidth={1.8} />}
            value="10+"
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
}: {
  icon: ReactNode;
  value: string;
  title: string;
  description: string;
}) {
  return (
    <article className="border-r border-black/6 px-8 py-10 last:border-r-0 lg:px-12">
      <div className="text-site-text">{icon}</div>
      <p className="mt-24 font-heading text-6xl leading-none text-site-text">{value}</p>
      {/* <p className="mt-4 font-body text-xl font-medium text-site-text">{title}</p> */}
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-site-muted">{description}</p>
    </article>
  );
}
