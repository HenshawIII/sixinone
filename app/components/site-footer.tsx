"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ENTERTAINMENT_SUBNAV_LINKS } from "../lib/entertainment-subnav-links";
import { officeLocations, siteEmail } from "../lib/site-contact";
import { FooterSocialIcons } from "./footer-social-icons";

export function SiteFooter() {
  const pathname = usePathname();
  const onEntertainment = pathname.startsWith("/entertainment");
  const onPublishing = pathname.startsWith("/publishing");

  const footerLogoSrc = onEntertainment
    ? "/entFoot.png"
    : onPublishing
      ? "/pubFoot.png"
      : "/logoGroup.png";
  const footerLogoAlt = onEntertainment
    ? "SIX-IN-ONE Entertainment"
    : onPublishing
      ? "SIX-IN-ONE Publishing"
      : "SIX-IN-ONE Group";
  const ctaClassName = onEntertainment
    ? "mt-5 inline-flex items-center justify-center rounded-full bg-[#ffb400] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e7a300]"
    : onPublishing
      ? "mt-5 inline-flex items-center justify-center rounded-full bg-[#864ef5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7745de]"
      : "button-brand mt-5";

  const [lagos, amsterdam] = officeLocations;

  return (
    <footer className="bg-black!">
      <div className="w-full rounded-t-[2.25rem] bg-white!">
        <div className="mx-auto w-full max-w-[94%] px-3 py-12 sm:max-w-[90%] sm:px-4 sm:py-14">
          {/* Brand left · link groups spread on the right */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
            <div className="max-w-sm shrink-0 md:max-w-[min(100%,20rem)]">
              <Link href="/" className="inline-flex">
                <Image
                  src={footerLogoSrc}
                  alt={footerLogoAlt}
                  width={250}
                  height={72}
                  className="h-12 w-auto object-contain object-left sm:h-14"
                />
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-site-muted">
                Built for talent. Driven by vision. SIX-IN-ONE Group advances entertainment and publishing through
                strategic growth and long-term brand development.
              </p>
              <Link href="/contact" className={ctaClassName}>
                Get In Touch
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-8 max-md:[&>*:last-child]:col-span-2 md:flex md:min-w-0 md:flex-1 md:flex-row md:flex-nowrap md:items-start md:justify-end md:gap-x-6 md:gap-y-0 lg:gap-x-10 xl:gap-x-40">
              <FooterLinkGroup
                title="Company"
                className="md:shrink-0"
                links={[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                ]}
              />
              <FooterLinkGroup
                title="Entertainment"
                className="md:shrink-0"
                links={ENTERTAINMENT_SUBNAV_LINKS.map((l) => ({ href: l.href, label: l.label }))}
              />
              <FooterLinkGroup
                title="Divisions"
                className="md:shrink-0"
                links={[
                  { href: "/publishing", label: "Publishing" },
                  { href: "/contact", label: "Contact" },
                ]}
              />
            </div>
          </div>

          {/* Offices — 3 columns below */}
          <div className="mt-10 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-3 md:gap-6">
            <FooterOfficeBlock office={lagos} />
            <FooterOfficeBlock office={amsterdam} />
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.2em] text-site-text">Contact</p>
              <a
                className="mt-4 block text-sm leading-relaxed text-site-muted transition hover:text-site-text"
                href={`mailto:${siteEmail}`}
              >
                {siteEmail}
              </a>
              <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-site-text transition hover:text-brand-primary">
                Send a message →
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-site-muted">
              © {new Date().getFullYear()} SIX-IN-ONE Group. All rights reserved.
            </p>
            <FooterSocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
  className = "",
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="font-heading text-sm uppercase tracking-[0.2em] text-site-text">{title}</p>
      <div className="mt-4 space-y-2.5 text-sm text-site-muted">
        {links.map((link) => (
          <Link
            key={`${title}-${link.href}-${link.label}`}
            href={link.href}
            className="block transition hover:text-site-text"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterOfficeBlock({ office }: { office: (typeof officeLocations)[number] }) {
  return (
    <div>
      <p className="font-heading text-sm uppercase tracking-[0.2em] text-site-text">{office.city}</p>
      <address className="mt-4 space-y-0.5 text-sm not-italic leading-relaxed text-site-muted">
        {office.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    </div>
  );
}
