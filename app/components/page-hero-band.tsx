import type { ReactNode } from "react";

type PageHeroBandProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  backgroundImage?: string;
  overlayClassName?: string;
};

export function PageHeroBand({
  eyebrow,
  title,
  description,
  actions,
  backgroundImage,
  overlayClassName = "bg-black/65",
}: PageHeroBandProps) {
  return (
    <section className="section-white pt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden bg-white" data-reveal>
        <div
          className="relative overflow-hidden bg-black px-6 py-16 text-white sm:px-10 sm:py-20"
          style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
        >
          {backgroundImage ? <div aria-hidden className={`absolute inset-0 ${overlayClassName}`} /> : null}
          <div className="mx-auto max-w-5xl">
            <div className={backgroundImage ? "relative z-10" : undefined}>
              <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/65">{eyebrow}</p>
              <h1 className="mt-4 font-heading text-4xl leading-[1.02] sm:text-6xl">{title}</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">{description}</p>
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
