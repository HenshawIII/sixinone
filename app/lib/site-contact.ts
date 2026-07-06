export type OfficeLocation = {
  city: string;
  country: string;
  lines: string[];
};

export const officeLocations: OfficeLocation[] = [
  {
    city: "Lagos",
    country: "Nigeria",
    lines: ["54B Adeniyi Jones", "Ikeja, Lagos, Nigeria"],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    lines: ["Klaprozenweg 51, F1", "1032 KK Amsterdam"],
  },
];

export const siteEmail = "hello@sixinonegroup.com" as const;
export const sitePhone = "+234 813 494 9119" as const;
export const sitePhoneDisplay = "0 813 494 9119" as const;
export const sitePhoneTel = "+2348134949119" as const;

export type SocialLink = {
  label: string;
  url: string;
};

/** SIX-IN-ONE Entertainment */
export const entertainmentSocialLinks: SocialLink[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/sixinoneent?igsh=Y20zY291c3RqbGcx",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/share/18w47EXzxP/?mibextid=wwXIfr",
  },
];

/** Founder — Abayomi Noah Ogunmefun */
export const founderSocialLinks: SocialLink[] = [
  {
    label: "Instagram",
    url: "https://www.instagram.com/killerkanemax?igsh=bDA0cGY4bjlybTkx&utm_source=qr",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/share/1Do3SgNKrj/?mibextid=wwXIfr",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/abayomi-ogunmefun-084659181?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

export function formatOfficeAddress(office: OfficeLocation): string {
  return [...office.lines, `${office.city}, ${office.country}`].join(", ");
}
