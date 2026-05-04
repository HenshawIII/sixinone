"use client";

import gsap from "gsap";
import Link from "next/link";
import { useId, useLayoutEffect, useRef } from "react";

type HomeHeroProps = {
  headline: string;
  supporting: string;
};

export function HomeHero({ headline, supporting }: HomeHeroProps) {
  const ringRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const ringPathId = `${useId().replace(/:/g, "")}-hero-ring`;

  useLayoutEffect(() => {
    const ring = ringRef.current;
    const heroText = heroTextRef.current;
    if (!ring || !heroText) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const tl = gsap.timeline();
    tl.fromTo(
      heroText.children,
      { opacity: 0, y: 26, filter: "blur(14px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.0,
        delay: 0.1,
        ease: "power3.out",
        stagger: 0.12,
      }
    );

    const tween = gsap.to(ring, {
      rotation: 360,
      duration: 14,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });
    return () => {
      tl.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="relative isolate -mt-20 min-h-[110svh] w-full overflow-hidden bg-black text-white sm:min-h-[120svh]">
      <video
        aria-hidden
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
      >
        <source src="/mic6in.mp4" type="video/mp4" />
      </video>
      <div aria-hidden className="absolute inset-0 bg-black/55" />

      <div ref={heroTextRef} className="relative z-10 mx-auto flex min-h-[110svh] w-full max-w-6xl flex-col justify-end px-6 pb-8 text-center sm:min-h-[120svh] sm:px-10 sm:pb-12 lg:pb-16">
        <h1 className="mx-auto max-w-4xl font-heading text-[clamp(2.1rem,6.5vw,5.6rem)] font-bold leading-[0.95] text-white">
          Built for <span className="text-brand-primary">Talent.</span> Driven by <span className="text-brand-primary">Vision.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-white/85 sm:text-xl">{supporting}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link className="bg-brand-primary text-white rounded-full min-w-44 hover:bg-[#ffb400] px-6 py-2.5 text-base" href="/entertainment">
            Explore Entertainment
          </Link>
          <Link className="bg-brand-primary text-white rounded-full min-w-44 hover:bg-[#864ef5] hover:text-white px-6 py-2.5 text-base" href="/publishing">
            Explore Publishing
          </Link>
        </div>
      </div>

      <div className="hidden pointer-events-none absolute inset-x-8 bottom-8 z-10 flex items-center justify-between sm:inset-x-12 sm:bottom-10">
        <p className="font-heading text-4xl leading-none text-white sm:text-6xl lg:pl-9">6in1 Group</p>
        <button
          className="pointer-events-auto relative flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-black/25 backdrop-blur-sm transition hover:border-white/60"
          onClick={() => {
            document.getElementById("home-after-hero")?.scrollIntoView({ behavior: "smooth" });
          }}
          type="button"
          aria-label="Scroll to content"
        >
          <div ref={ringRef} className="absolute inset-0">
            <svg className="h-full w-full font-heading uppercase tracking-[0.18em]" viewBox="0 0 100 100">
              <defs>
                <path
                  d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="none"
                  id={ringPathId}
                />
              </defs>
              <text className="fill-white/90" style={{ fontSize: "12.5px" }}>
                <textPath href={`#${ringPathId}`} startOffset="0%">
                  Music · Film · Sports · Film ·
                </textPath>
              </text>
            </svg>
          </div>
          <span className="text-white" aria-hidden>
            <img src="/iconG.png" alt="Arrow down" className="w-10 h-auto" />
          </span>
        </button>
      </div>
    </section>
  );
}
