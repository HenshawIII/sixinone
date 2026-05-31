export const brandPartnerships = [
  "Hennessy Nigeria",
  "Beta Malt",
  "Netflix Naija",
  "Wazobet (sports betting, Nigeria)",
  "Starstruck Management Inc.",
  "EMPIRE",
  "Universal Music Group",
  "EA Sports",
  "TRACE TV",
  "Capital Xtra",
  "BBC 1Xtra",
  "Beacon-Hill Dental Clinic",
  "BBC One",
  "SoundCity",
  "MTV Base",
] as const;

export const brandCampaigns = [
  "Hennessy VS Class",
  "Hennessy VS Tape",
  "Red Bull 60 Seconds",
  "Red Bull Car Park Drift",
  "Campari Passion Project",
] as const;

export type BrandLogo = {
  src: string;
  alt: string;
};

/** Icons in `public/brandicons` (and site root where noted). Names without a file are omitted. */
const PARTNERSHIP_ICON_BY_NAME: Partial<Record<(typeof brandPartnerships)[number], string>> = {
  "Hennessy Nigeria": "/brandicons/Hennesy.png",
  "Starstruck Management Inc.": "/sstruck.png",
  EMPIRE: "/brandicons/empire.png",
  "Universal Music Group": "/brandicons/universal.png",
  "BBC 1Xtra": "/brandicons/bbc.png",
  "Beacon-Hill Dental Clinic": "/brandicons/beacon.png",
  "BBC One": "/brandicons/bbc.png",
  SoundCity: "/brandicons/soundcity.png",
  "MTV Base": "/brandicons/mtv.jpeg",
};

const CAMPAIGN_ICON_BY_NAME: Partial<Record<(typeof brandCampaigns)[number], string>> = {

  "Hennessy VS Tape": "/brandicons/Hennesy.png",
  "Red Bull 60 Seconds": "/brandicons/redbull.png",
 
};

function logosFromNames(
  names: readonly string[],
  iconByName: Record<string, string | undefined>,
): BrandLogo[] {
  const seen = new Set<string>();
  const logos: BrandLogo[] = [];

  for (const name of names) {
    const src = iconByName[name];
    if (!src || seen.has(src)) continue;
    seen.add(src);
    logos.push({ src, alt: name });
  }

  return logos;
}

export const partnershipBrandLogos = logosFromNames(brandPartnerships, PARTNERSHIP_ICON_BY_NAME);
export const campaignBrandLogos = logosFromNames(brandCampaigns, CAMPAIGN_ICON_BY_NAME);
