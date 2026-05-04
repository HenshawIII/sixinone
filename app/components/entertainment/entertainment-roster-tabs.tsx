"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { AthleteProfile, MusicianProfile } from "../../lib/site-data";
import { getTalentImage } from "../../lib/talent-images";

type TabKey = "artists" | "athletes";

export function EntertainmentRosterTabs({
  musicians,
  athletes,
}: {
  musicians: MusicianProfile[];
  athletes: AthleteProfile[];
}) {
  const [activeTab, setActiveTab] = useState<TabKey>("artists");

  return (
    <section className=" bg-black!">
      <div className="s space-y-8 bg-white! w-full rounded-t-[2.25rem] py-16 px-4 sm:px-6 sm:py-20">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            className="font-heading text-4xl uppercase tracking-[0.02em] text-site-text sm:text-5xl"
            data-reveal-text
          >
            Our Entertainment Roster
          </h2>
          <p className="mt-4 text-base tracking-tight text-site-muted sm:text-lg" data-reveal-text>
            Discover artists and athletes at a glance. Switch tabs to view either roster instantly without scrolling.
          </p>
        </header>

        <div className="max-w-[94%] mx-auto rounded-3xl border border-black/10 bg-linear-to-br from-[#ffb400]/12 via-white to-white p-4 shadow-[0_8px_28px_rgba(0,0,0,0.08)] sm:max-w-[90%] sm:p-6">
          <div role="tablist" aria-label="Entertainment roster tabs" className="grid gap-2 sm:grid-cols-2">
            <button
              role="tab"
              id="tab-artists"
              aria-controls="panel-artists"
              aria-selected={activeTab === "artists"}
              type="button"
              onClick={() => setActiveTab("artists")}
              className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition sm:text-base ${
                activeTab === "artists"
                  ? "bg-[#ffb400] text-white shadow-[0_10px_28px_rgba(255,180,0,0.35)]"
                  : "bg-black/5 text-site-muted hover:bg-black/10 hover:text-site-text"
              }`}
            >
              Artists
            </button>
            <button
              role="tab"
              id="tab-athletes"
              aria-controls="panel-athletes"
              aria-selected={activeTab === "athletes"}
              type="button"
              onClick={() => setActiveTab("athletes")}
              className={`rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition sm:text-base ${
                activeTab === "athletes"
                  ? "bg-[#ffb400] text-white shadow-[0_10px_28px_rgba(255,180,0,0.35)]"
                  : "bg-black/5 text-site-muted hover:bg-black/10 hover:text-site-text"
              }`}
            >
              Athletes
            </button>
          </div>

          {activeTab === "artists" ? (
            <div
              role="tabpanel"
              id="panel-artists"
              aria-labelledby="tab-artists"
              className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              data-reveal-stagger
            >
              {musicians.map((artist) => {
                const image = getTalentImage(artist.slug, artist.name, artist.kind);
                return (
                  <article key={artist.slug} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
                    <div className="relative aspect-4/3">
                      <Image alt={image.alt} className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" src={image.src} />
                    </div>
                    <div className="p-6">
                      <p className="font-heading text-2xl text-site-text">{artist.name}</p>
                      <p className="mt-2 text-sm text-[#ffb400]">{artist.identity}</p>
                      <p className="mt-3 text-site-muted">{artist.bio}</p>
                      <Link href={`/entertainment/${artist.slug}`} className="mt-6 inline-flex items-center justify-center rounded-full border border-[#ffb400]/55 px-5 py-3 text-sm font-semibold text-site-text transition hover:border-[#ffb400] hover:bg-[#ffb400] hover:text-white">
                        View Profile
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div
              role="tabpanel"
              id="panel-athletes"
              aria-labelledby="tab-athletes"
              className="mt-6 grid gap-5 md:grid-cols-2"
              data-reveal-stagger
            >
              {athletes.map((athlete) => {
                const image = getTalentImage(athlete.slug, athlete.name, athlete.kind);
                return (
                  <article key={athlete.slug} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
                    <div className="relative aspect-4/3">
                      <Image alt={image.alt} className="object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" src={image.src} />
                    </div>
                    <div className="p-6">
                      <p className="font-heading text-2xl text-site-text">{athlete.name}</p>
                      <p className="mt-2 text-sm text-[#ffb400]">{athlete.identity}</p>
                      <p className="mt-3 text-site-muted">{athlete.bio}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-sm">
                        <span className="rounded-full border border-black/10 px-3 py-1 text-site-muted">Weight: {athlete.weightCategory}</span>
                        <span className="rounded-full border border-black/10 px-3 py-1 text-site-muted">W/D/L: {athlete.record}</span>
                      </div>
                      <Link href={`/entertainment/${athlete.slug}`} className="mt-6 inline-flex items-center justify-center rounded-full border border-[#ffb400]/55 px-5 py-3 text-sm font-semibold text-site-text transition hover:border-[#ffb400] hover:bg-[#ffb400] hover:text-white">
                        View Profile
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
