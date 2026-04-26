type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeader({ eyebrow, title, description, dark }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <p
          className={`font-heading text-xs uppercase tracking-[0.28em] ${
            dark ? "text-brand-orange" : "text-brand-red"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-heading text-3xl tracking-wide sm:text-5xl ${dark ? "text-white" : "text-site-text"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-8 sm:text-lg ${dark ? "text-white/75" : "text-site-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
