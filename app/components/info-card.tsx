import Link from "next/link";
import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
  href?: string;
  hrefLabel?: string;
  dark?: boolean;
};

export function InfoCard({
  title,
  description,
  children,
  href,
  hrefLabel,
  dark,
}: InfoCardProps) {
  return (
    <article className={dark ? "surface-card-dark" : "surface-card"}>
      <h3 className={`font-heading text-2xl tracking-wide ${dark ? "text-white" : "text-site-text"}`}>{title}</h3>
      <p className={`mt-3 leading-7 ${dark ? "text-white/75" : "text-site-muted"}`}>{description}</p>
      {children ? <div className="mt-6">{children}</div> : null}
      {href && hrefLabel ? (
        <Link href={href} className={`mt-6 ${dark ? "button-secondary-dark" : "button-secondary"}`}>
          {hrefLabel}
        </Link>
      ) : null}
    </article>
  );
}
