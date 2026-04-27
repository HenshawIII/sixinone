import Link from "next/link";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
  href?: string;
  hrefLabel?: string;
  dark?: boolean;
  /** Matches home hero CTA hover: gold = Entertainment (#ffb400), purple = Publishing (#864ef5) */
  accent?: "gold" | "purple";
};

export function InfoCard({
  title,
  description,
  children,
  href,
  hrefLabel,
  dark,
  accent,
}: InfoCardProps) {
  const hasLightAccent = !dark && (accent === "gold" || accent === "purple");
  const articleClass = (() => {
    if (dark) return "surface-card-dark";
    if (accent === "gold") {
      return "surface-card relative overflow-hidden bg-gradient-to-br from-[#ffb400]/12 via-white to-white ring-2 ring-[#ffb400]/25 ring-offset-2 ring-offset-white";
    }
    if (accent === "purple") {
      return "surface-card relative overflow-hidden bg-gradient-to-br from-[#864ef5]/10 via-white to-white ring-2 ring-[#864ef5]/25 ring-offset-2 ring-offset-white";
    }
    return "surface-card";
  })();

  const linkClass =
    dark ? "button-secondary-dark"
    : accent === "gold"
      ? "mt-6 inline-flex items-center justify-center rounded-full border border-[#ffb400]/55 px-5 py-3 text-sm font-semibold text-site-text transition hover:border-[#ffb400] hover:bg-[#ffb400] hover:text-white"
      : accent === "purple"
        ? "mt-6 inline-flex items-center justify-center rounded-full border border-[#864ef5]/55 px-5 py-3 text-sm font-semibold text-site-text transition hover:border-[#864ef5] hover:bg-[#864ef5] hover:text-white"
        : "button-secondary";

  return (
    <article className={articleClass}>
      {hasLightAccent ? (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-6 top-0 h-[3px] rounded-full sm:inset-x-8 ${accent === "gold" ? "bg-[#ffb400]" : "bg-[#864ef5]"}`}
        />
      ) : null}
      <h3 className={`font-heading text-2xl tracking-wide ${dark ? "text-white" : "text-site-text"} ${hasLightAccent ? "pt-1" : ""}`}>{title}</h3>
      <p className={`mt-3 leading-7 ${dark ? "text-white/75" : "text-site-muted"}`}>{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
      {href && hrefLabel ? (
        <Link href={href} className={linkClass}>
          {hrefLabel}
        </Link>
      ) : null}
    </article>
  );
}
