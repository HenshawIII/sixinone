import Image from "next/image";
import {
  campaignBrandLogos,
  partnershipBrandLogos,
  type BrandLogo,
} from "../../lib/entertainment-marketing-data";

function BrandLogoMarquee({ logos }: { logos: BrandLogo[] }) {
  if (logos.length === 0) return null;

  const loop = [...logos, ...logos];

  return (
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
  );
}

export function EntertainmentPartnershipsCampaigns() {
  return (
    <section className="bg-white pt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] border-t border-black/6 bg-white! text-site-text">
        <div
          aria-hidden
          className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-[#ffb400]/55 to-transparent"
        />
        <div className="section-wrap pb-2 pt-10 sm:pb-2! sm:pt-12 md:pt-14">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-site-muted">Capabilities</p>
            <h2 className="mt-2 font-heading text-2xl text-site-text sm:text-3xl md:text-4xl">
              Partnerships &amp; brand campaigns
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-site-muted sm:text-base">
              Affiliations and campaign formats alongside roster and label-services work.
            </p>
          </div>
        </div>

        <div className="space-y-8 pb-10 sm:space-y-10 sm:pb-14 md:pb-16">
        {/* <div>
            <p className="section-wrap pb-4 font-heading text-xs text-center uppercase tracking-[0.2em] text-[#ffb400] sm:pb-5">
              Campaigns
            </p>
            <BrandLogoMarquee logos={campaignBrandLogos} />
          </div> */}
          <div>
            <p className="section-wrap pb-4 font-heading text-xs text-center uppercase tracking-[0.2em] text-[#ffb400] sm:pb-5">
              Partnerships
            </p>
            <BrandLogoMarquee logos={partnershipBrandLogos} />
          </div>
          
        </div>
      </div>
    </section>
  );
}
