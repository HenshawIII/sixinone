import { brandCampaigns, brandPartnerships } from "../../lib/entertainment-marketing-data";

function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/18 bg-white/6 px-3 py-1.5 text-left text-xs font-medium leading-snug text-white/92 backdrop-blur-sm sm:px-3.5 sm:text-sm">
      {children}
    </span>
  );
}

export function EntertainmentPartnershipsCampaigns() {
  return (
    <section className="bg-white pt-0">
      <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-site-dark text-white shadow-[0_-12px_48px_rgba(0,0,0,0.25)]">
        <div
          aria-hidden
          className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-[#ffb400]/55 to-transparent"
        />
        <div className="section-wrap py-10 sm:py-12 md:py-14">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-white/50">Capabilities</p>
            <h2 className="mt-2 font-heading text-2xl text-white sm:text-3xl md:text-4xl">
              Partnerships &amp; brand campaigns
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              Affiliations and campaign formats alongside roster and label-services work.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:mt-10 md:grid-cols-2 md:gap-10 lg:gap-12">
            <div className="text-left">
              <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-[#ffb400]">Partnerships</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {brandPartnerships.map((name) => (
                  <Chip key={name}>{name}</Chip>
                ))}
              </div>
            </div>
            <div className="text-left">
              <h3 className="font-heading text-xs uppercase tracking-[0.2em] text-[#ffb400]">Campaigns</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {brandCampaigns.map((name) => (
                  <Chip key={name}>{name}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
