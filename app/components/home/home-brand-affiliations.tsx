import Image from "next/image";

/** Logos in `public/brandicons` — order matches the affiliations strip left-to-right. */
const BRAND_LOGOS = [
  { src: "/brandicons/redbull.png", alt: "Red Bull" },
  { src: "/brandicons/Hennesy.png", alt: "Hennessy" },
  { src: "/brandicons/chivas.webp", alt: "Chivas Regal" },
  { src: "/brandicons/vitafoam.png", alt: "Vita Foam" },
  { src: "/brandicons/sprite.png", alt: "Sprite" },
  { src: "/brandicons/universal.png", alt: "Universal Music Group" },
  { src: "/brandicons/Orchard.png", alt: "The Orchard" },
  { src: "/brandicons/tokyo.png", alt: "Tokyo James" },
  { src: "/sstruck.png", alt: "Starstruck Management" },
  { src: "/brandicons/empire.png", alt: "EMPIRE" },
  { src: "/brandicons/sony.png", alt: "Sony Music Publishing" },
  { src: "/brandicons/tailored.png", alt: "Tailored Records Global" },
  { src: "/brandicons/plug.png", alt: "The Plug Talent Agency" },
  { src: "/brandicons/balmoral.png", alt: "Balmoral Promotions" },
  { src: "/brandicons/ArtC.PNG", alt: "The Art Cartel" },
] as const;

export function HomeBrandAffiliations() {
  const loop = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="section-soft border-y border-black/6 bg-white! py-2 sm:pb-16 ">
      <div className="section-wrap py-0">
        <header className="mb-8 text-center sm:mb-10">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-site-muted" data-reveal-text>
            Partners &amp; platforms
          </p>
          <h2 className="mt-3 font-heading text-3xl text-site-text sm:text-4xl" data-reveal-text>
            SIX-IN-ONE brand affiliations
          </h2>
        </header>
      </div>
      <div className="relative w-full overflow-x-clip mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="home-brands-marquee-track flex flex-nowrap items-center gap-10 sm:gap-14 md:gap-20">
          {loop.map((brand, index) => (
            <div
              key={`${brand.src}-${index}`}
              className="relative flex h-11 w-29 shrink-0 items-center justify-center sm:h-12 sm:w-34 md:h-14 md:w-40"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={200}
                height={100}
                sizes="(max-width: 640px) 116px, 160px"
                className="max-h-full max-w-full object-contain opacity-[0.92]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
