import type { SocialLink } from "../lib/site-contact";

export function SocialLinksList({
  links,
  className = "",
  linkClassName = "block transition hover:text-site-text",
}: {
  links: SocialLink[];
  className?: string;
  linkClassName?: string;
}) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.url}
          className={linkClassName}
          href={link.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
