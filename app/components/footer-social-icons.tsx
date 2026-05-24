import type { SocialLink } from "../lib/site-contact";
import { entertainmentSocialLinks, founderSocialLinks } from "../lib/site-contact";

function SocialIcon({ label }: { label: string }) {
  const key = label.toLowerCase();
  if (key.includes("instagram")) return <InstagramIcon />;
  if (key.includes("facebook")) return <FacebookIcon />;
  if (key.includes("linkedin")) return <LinkedInIcon />;
  return null;
}

function SocialIconButton({
  item,
  ariaPrefix,
  accentClass = "hover:border-brand-primary/40 hover:bg-brand-primary/10 hover:text-brand-primary",
}: {
  item: SocialLink;
  ariaPrefix: string;
  accentClass?: string;
}) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${ariaPrefix} on ${item.label}`}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/3 text-site-text transition ${accentClass}`}
    >
      <SocialIcon label={item.label} />
    </a>
  );
}

export function FooterSocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {entertainmentSocialLinks.map((item) => (
        <SocialIconButton key={item.url} item={item} ariaPrefix="SIX-IN-ONE Entertainment" />
      ))}
    </div>
  );
}

export function FounderSocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {founderSocialLinks.map((item) => (
        <SocialIconButton
          key={item.url}
          item={item}
          ariaPrefix="Abayomi Noah Ogunmefun"
          accentClass="hover:border-brand-primary/40 hover:bg-brand-primary/10 hover:text-brand-primary"
        />
      ))}
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
      <rect height="18" rx="4" width="18" x="3" y="3" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" fill="currentColor" r="1.2" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 13.5h3l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C16.524 2.1 15.67 2 14.64 2 12.52 2 11 3.47 11 6.3v3.2H8v4h3V22h4v-8.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
