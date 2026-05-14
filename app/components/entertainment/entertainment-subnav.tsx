"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ENTERTAINMENT_SUBNAV_LINKS } from "../../lib/entertainment-subnav-links";

const TOP_LEVEL_ENTERTAINMENT_ROUTES = new Set([
  "live-events",
  "sports-management",
  "independent-artists",
]);

function isActive(pathname: string, href: string) {
  if (href === "/entertainment") {
    if (pathname === "/entertainment") return true;
    if (!pathname.startsWith("/entertainment/")) return false;
    const segment = pathname.split("/")[2];
    return Boolean(segment && !TOP_LEVEL_ENTERTAINMENT_ROUTES.has(segment));
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function EntertainmentSubnav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Entertainment section"
      className="sticky top-20 z-40 border-b border-black/10 bg-[#ffb400]/95 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-[94%] justify-start overflow-x-auto overflow-y-hidden overscroll-x-contain px-2 py-2.5 [-webkit-overflow-scrolling:touch] sm:max-w-[90%] sm:px-4 sm:py-3 lg:justify-center">
        <div className="inline-flex shrink-0 items-center gap-1 sm:gap-2">
          {ENTERTAINMENT_SUBNAV_LINKS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.06em] transition sm:px-4 sm:text-sm ${
                  active ? "bg-white text-site-text shadow-sm" : "text-site-text/90 hover:bg-white/25"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
