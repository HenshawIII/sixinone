"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SITE_NAV_LINKS } from "../lib/nav-links";
import { SiteNavDrawer } from "./site-nav-drawer";

const SCROLL_THRESHOLD = 12;

export function SiteHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const onHome = pathname === "/";
  const onEntertainment = pathname.startsWith("/entertainment");
  const onPublishing = pathname.startsWith("/publishing");
  const useTransparentHeader = onHome && !scrolled;
  const useLightChrome = useTransparentHeader && !drawerOpen;
  const brandLogoSrc = onEntertainment ? "/iconBlack.png" : "/iconWhite.png";
  const brandLogoAlt = onEntertainment
    ? "6in1 Entertainment"
    : onPublishing
      ? "6in1 Publishing"
      : "6in1 Group";
  const routeHeaderClass = onEntertainment
    ? "border-b border-black/10 bg-[#ffb400] shadow-sm backdrop-blur-md"
    : onPublishing
      ? "border-b border-black/10 bg-[#864ef5] shadow-sm backdrop-blur-md"
      : "border-b border-black/10 bg-brand-primary shadow-sm backdrop-blur-md";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 h-20 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ease-out ${
        useTransparentHeader
          ? "border-b border-transparent bg-transparent shadow-none"
          : routeHeaderClass
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[94%] items-center justify-between gap-4 px-2 sm:max-w-[90%]">
        <Link
          href="/"
          className="relative flex shrink-0 items-center"
          aria-label="6in1 Group home"
        >
          <Image
            src={brandLogoSrc}
            alt={brandLogoAlt}
            width={220}
            height={62}
            className="h-10 w-auto object-contain object-left sm:h-14"
            priority
          />
        </Link>

        <button
          aria-expanded={drawerOpen}
          aria-controls="site-nav-sidebar"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          className={`group flex h-16 w-16 shrink-0 flex-col items-end justify-center gap-2.5 rounded-full p-3 transition ${
            useLightChrome
              ? "bg-transparent backdrop-blur-sm hover:bg-black/10"
              : "bg-black/6 hover:bg-black/10"
          }`}
          onClick={() => setDrawerOpen((open) => !open)}
          type="button"
        >
          <span
            className={`block h-1.5 w-14 shrink-0 rounded-full transition ${
              useLightChrome ? "bg-brand-primary group-hover:bg-brand-primary" : "bg-white group-hover:bg-white/85"
            }`}
          />
          <span
            className={`block h-1.5 w-8 shrink-0 rounded-full transition ${
              useLightChrome ? "bg-brand-primary group-hover:bg-brand-primary" : "bg-white group-hover:bg-white/85"
            }`}
          />
          <span
            className={`block h-1.5 w-14 shrink-0 rounded-full transition ${
              useLightChrome ? "bg-brand-primary group-hover:bg-brand-primary" : "bg-white group-hover:bg-white/85"
            }`}
          />
        </button>
      </div>

      <SiteNavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        items={SITE_NAV_LINKS}
      />
    </header>
  );
}
