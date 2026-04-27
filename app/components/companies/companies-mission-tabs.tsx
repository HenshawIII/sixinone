"use client";

import Image from "next/image";
import { useState } from "react";

type TabKey = "mission" | "vision" | "values";

type TabContent = {
  key: TabKey;
  label: string;
  heading: string;
  body: string;
  image: { src: string; alt: string };
};

const TABS: readonly TabContent[] = [
  {
    key: "mission",
    label: "Our Mission",
    heading: "Empowering creators to build careers that last.",
    body: "We help artists, athletes, and rights holders turn momentum into long-term value through development, strategy, and disciplined execution across every stage of their journey.",
    image: {
      src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80",
      alt: "Creators collaborating in a competitive gaming environment",
    },
  },
  {
    key: "vision",
    label: "Our Vision",
    heading: "A connected ecosystem where talent thrives globally.",
    body: "We see a future where creators have direct access to the structure, partners, and platforms they need to grow without compromise, on their own terms and across borders.",
    image: {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80",
      alt: "Esports professional focused during a live competition",
    },
  },
  {
    key: "values",
    label: "Our Values",
    heading: "Integrity, ambition, and a builder's mindset.",
    body: "We back the people we work with for the long run. We move with clarity, communicate with honesty, and invest in the craft, the catalog, and the careers behind every brand we touch.",
    image: {
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=80",
      alt: "Studio team working together on a creative project",
    },
  },
];

export function CompaniesMissionTabs() {
  const [activeKey, setActiveKey] = useState<TabKey>("mission");
  const active = TABS.find((tab) => tab.key === activeKey) ?? TABS[0];

  return (
    <section className="overflow-hidden rounded-t-[2.25rem] bg-black text-white md:pb-24">
      <div className="section-wrap">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/70 sm:text-sm">Our Purpose</p>
          <h2 className="mt-4 font-heading text-4xl leading-[1.05] text-white sm:text-5xl">
            Elevating Talent. Building Lasting Brands.
          </h2>
        </header>

        <div className="mt-12 rounded-3xl border border-white/20 bg-white/6 p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_0_rgba(255,255,255,0.12)] backdrop-blur-3xl backdrop-saturate-150 sm:p-6 lg:p-8">
          <div role="tablist" aria-label="Our purpose" className="grid gap-2 sm:grid-cols-3">
            {TABS.map((tab) => {
              const isActive = tab.key === active.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tab-panel-${tab.key}`}
                  id={`tab-${tab.key}`}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition sm:text-base ${
                    isActive
                      ? "bg-brand-red text-white shadow-[0_8px_24px_rgba(255,94,54,0.35)]"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`tab-panel-${active.key}`}
            aria-labelledby={`tab-${active.key}`}
            className="mt-6 grid gap-6 md:mt-8 md:grid-cols-2 md:items-center md:gap-10"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                key={active.image.src}
                alt={active.image.alt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={active.image.src}
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl leading-[1.15] text-white sm:text-3xl lg:text-4xl">{active.heading}</h3>
              <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">{active.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
