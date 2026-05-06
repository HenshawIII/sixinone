type TalentKind = "musician" | "athlete";

type TalentImage = {
  src: string;
  alt: string;
};

const TALENT_IMAGE_MAP: Record<string, TalentImage> = {
  vector: {
    src: "/vecii.webp",
    alt: "Music artist performing under stage lights",
  },
  pdstrn: {
    src: "/PDSTRN.webp",
    alt: "Singer recording with a studio microphone",
  },
  "bigbird-kuti": {
    src: "/seunii.webp",
    alt: "Afrobeat performer with energetic crowd",
  },
  eld3r: {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80",
    alt: "Alternative artist in a live concert scene",
  },
  kehne: {
    src: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1400&q=80",
    alt: "Vocal artist performing with stage backdrop",
  },
  "ao-machine": {
    src: "https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1400&q=80",
    alt: "Recording artist on stage with dramatic lighting",
  },
  maxino: {
    src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1400&q=80",
    alt: "Performer engaging an audience at a live show",
  },
  "nuellah-rose": {
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1400&q=80",
    alt: "Vocal artist singing with a spotlight",
  },
  "ezekiel-touch": {
    src: "/Ezeikel.jpeg",
    alt: "Ezekiel TOUCH — professional boxer portrait",
  },
  "adeyemi-emmanuel": {
    src: "/Adeyem.jpeg",
    alt: "Adeyemi Emmanuel — professional boxer portrait",
  },
};

export function getTalentImage(slug: string, name: string, kind: TalentKind): TalentImage {
  const mapped = TALENT_IMAGE_MAP[slug];
  if (mapped) return mapped;

  return {
    src: `https://picsum.photos/seed/${slug}/1400/1000`,
    alt: kind === "musician" ? `${name} artist profile image` : `${name} athlete profile image`,
  };
}
