export type Gig = { date: string; city: string; details: string; ticketUrl: string };
export type Fight = { event: string; result: string; note: string };
export type Social = { label: string; url: string };

export type MusicianProfile = {
  kind: "musician";
  slug: string;
  name: string;
  identity: string;
  bio: string;
  discography: Array<{ title: string; link: string }>;
  mediaEmbeds: Array<{ platform: string; link: string }>;
  socials: Social[];
  gigs: Gig[];
};

export type AthleteProfile = {
  kind: "athlete";
  slug: string;
  name: string;
  identity: string;
  bio: string;
  height: string;
  weightCategory: string;
  record: string;
  fights: Fight[];
  training: string[];
  mediaAssets: Array<{ title: string; type: string }>;
  socials: Social[];
};

export type TalentProfile = MusicianProfile | AthleteProfile;

export const homeCopy = {
  headline: "Built for Talent. Driven by Vision.",
  supporting:
    "6in1 Group is a talent, image, and brand development company working across entertainment, publishing, and cultural business development.",
  about:
    "6in1 Group is a forward-facing talent and brand development company operating at the intersection of entertainment, publishing, and strategic growth.",
};

export const musicians: MusicianProfile[] = [
  {
    kind: "musician",
    slug: "vector",
    name: "Vector",
    identity: "Rapper / Songwriter",
    bio: "Vector is a Nigerian hip-hop artist known for lyrical precision, storytelling, and performance-led releases.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/2dIFhJ8RkRS2rXeDefY3t1" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/vector/1189665450" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@vector_tha_viper" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/2dIFhJ8RkRS2rXeDefY3t1" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/vectorthaviper" },
      { label: "TikTok", url: "https://www.tiktok.com/@vectorthaviper_" },
      { label: "X", url: "https://x.com/vectorthaviper" },
      { label: "YouTube", url: "https://youtube.com/@vector_tha_viper" },
      { label: "Spotify", url: "https://open.spotify.com/artist/2dIFhJ8RkRS2rXeDefY3t1" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/vector/1189665450" },
    ],
    gigs: [
      { date: "May 18", city: "Lagos", details: "Headliner Showcase", ticketUrl: "https://youtube.com/@vector_tha_viper" },
      { date: "Jun 22", city: "London", details: "Diaspora Live Set", ticketUrl: "https://open.spotify.com/artist/2dIFhJ8RkRS2rXeDefY3t1" },
    ],
  },
  {
    kind: "musician",
    slug: "pdstrn",
    name: "PDSTRN",
    identity: "Artist / Songwriter",
    bio: "PDSTRN blends contemporary African sounds with melodic songwriting and performance-driven releases.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/7oAl5VKsXmNAcXuyKA5sSv" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/pdstrn/1635664140" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@thepdstrn" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/7oAl5VKsXmNAcXuyKA5sSv" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/thepdstrn" },
      { label: "TikTok", url: "https://www.tiktok.com/@thepdstrn" },
      { label: "X", url: "https://x.com/thepdstrn" },
      { label: "YouTube", url: "https://youtube.com/@thepdstrn" },
      { label: "Spotify", url: "https://open.spotify.com/artist/7oAl5VKsXmNAcXuyKA5sSv" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/pdstrn/1635664140" },
    ],
    gigs: [
      { date: "Jul 09", city: "Abuja", details: "Live Performance Session", ticketUrl: "https://youtube.com/@thepdstrn" },
      { date: "Sep 13", city: "Accra", details: "Music Circuit Stage", ticketUrl: "https://open.spotify.com/artist/7oAl5VKsXmNAcXuyKA5sSv" },
    ],
  },
  {
    kind: "musician",
    slug: "bigbird-kuti",
    name: "Bigbird Kuti",
    identity: "Afrobeat Artist",
    bio: "Bigbird Kuti carries forward Afrobeat influence with contemporary vocal styling and energetic live delivery.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/7n7wewebGwzL1Yz8yxdz4M" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/bigbird-kuti/1818566485" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@bigbirdkuti" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/7n7wewebGwzL1Yz8yxdz4M" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/bigbirdkuti" },
      { label: "YouTube", url: "https://youtube.com/@bigbirdkuti" },
      { label: "Spotify", url: "https://open.spotify.com/artist/7n7wewebGwzL1Yz8yxdz4M" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/bigbird-kuti/1818566485" },
    ],
    gigs: [
      { date: "Aug 15", city: "Lagos", details: "Afrobeat Night", ticketUrl: "https://youtube.com/@bigbirdkuti" },
      { date: "Oct 02", city: "Berlin", details: "Global Afrobeat Festival", ticketUrl: "https://open.spotify.com/artist/7n7wewebGwzL1Yz8yxdz4M" },
    ],
  },
  {
    kind: "musician",
    slug: "eld3r",
    name: "ELD3R",
    identity: "Alternative Artist",
    bio: "ELD3R crafts emotionally rich records with modern production and a strong digital-native audience connection.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/eld3r/1691283169" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@the.eld3r" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/the.eld3r" },
      { label: "TikTok", url: "https://www.tiktok.com/@the.eld3r" },
      { label: "X", url: "https://x.com/the_eld3r" },
      { label: "YouTube", url: "https://youtube.com/@the.eld3r" },
      { label: "Spotify", url: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/eld3r/1691283169" },
    ],
    gigs: [
      { date: "Jun 29", city: "Accra", details: "Indie Night Circuit", ticketUrl: "https://youtube.com/@the.eld3r" },
      { date: "Nov 08", city: "Johannesburg", details: "Alt City Session", ticketUrl: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
    ],
  },
  {
    kind: "musician",
    slug: "kehne",
    name: "KEHNE",
    identity: "Singer / Songwriter",
    bio: "KEHNE develops polished melodic records with strong vocal identity and performance-ready compositions.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/kehne/1704151462" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@kehnne" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/kehnnne" },
      { label: "TikTok", url: "https://www.tiktok.com/@kehnnne" },
      { label: "X", url: "https://x.com/kehnnne" },
      { label: "YouTube", url: "https://youtube.com/@kehnne" },
      { label: "Spotify", url: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/kehne/1704151462" },
    ],
    gigs: [
      { date: "May 31", city: "Lagos", details: "Writers & Voices Session", ticketUrl: "https://youtube.com/@kehnne" },
      { date: "Sep 27", city: "Nairobi", details: "Soundscape Live", ticketUrl: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
    ],
  },
  {
    kind: "musician",
    slug: "ao-machine",
    name: "AO MACHINE",
    identity: "Recording Artist",
    bio: "AO MACHINE releases energetic records built for crossover audiences and high-visibility campaign moments.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/ao-machine/1568768390" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@aomachinevevo5401" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/aoworld/" },
      { label: "TikTok", url: "https://www.tiktok.com/@aomachine100" },
      { label: "YouTube", url: "https://youtube.com/@aomachinevevo5401" },
      { label: "Spotify", url: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/ao-machine/1568768390" },
    ],
    gigs: [
      { date: "Aug 10", city: "Abidjan", details: "Summer Artist Circuit", ticketUrl: "https://youtube.com/@aomachinevevo5401" },
      { date: "Nov 16", city: "Kigali", details: "Live Sound Session", ticketUrl: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
    ],
  },
  {
    kind: "musician",
    slug: "maxino",
    name: "Maxino",
    identity: "Artist / Performer",
    bio: "Maxino builds rhythmic, performance-first releases shaped for digital discovery and live audience pull.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/maxino/996564407" },
    ],
    mediaEmbeds: [
      { platform: "YouTube", link: "https://youtube.com/@aomachinevevo5401" },
      { platform: "Spotify", link: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/mvxino/" },
      { label: "TikTok", url: "https://www.tiktok.com/@maxinod19" },
      { label: "YouTube", url: "https://youtube.com/@aomachinevevo5401" },
      { label: "Spotify", url: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/maxino/996564407" },
    ],
    gigs: [
      { date: "Jun 11", city: "Lagos", details: "Emerging Stars Set", ticketUrl: "https://youtube.com/@aomachinevevo5401" },
      { date: "Oct 18", city: "Accra", details: "Afro Urban Showcase", ticketUrl: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
    ],
  },
  {
    kind: "musician",
    slug: "nuellah-rose",
    name: "Nuellah Rose",
    identity: "Vocal Artist",
    bio: "Nuellah Rose blends expressive vocals and storytelling with a contemporary, audience-forward release strategy.",
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
      { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
    ],
    mediaEmbeds: [
      { platform: "Spotify", link: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
      { platform: "Apple Music", link: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/_nuellahrose_" },
      { label: "X", url: "https://x.com/nuellahrose" },
      { label: "Spotify", url: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
      { label: "Apple Music", url: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
    ],
    gigs: [
      { date: "Jul 20", city: "Lagos", details: "Rose Room Live", ticketUrl: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
      { date: "Dec 05", city: "Toronto", details: "Winter Showcase", ticketUrl: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
    ],
  },
];

export const athletes: AthleteProfile[] = [
  {
    kind: "athlete",
    slug: "ezekiel-touch",
    name: "Ezekiel TOUCH",
    identity: "Professional Boxer",
    bio: "Ezekiel TOUCH is a super-bantamweight boxer focused on disciplined preparation and high-intensity ring execution.",
    height: "5'8\"",
    weightCategory: "Super-bantam",
    record: "3/0/2",
    fights: [
      { event: "Rising Ring Card", result: "Win", note: "Split Decision" },
      { event: "Urban Boxing Series", result: "Loss", note: "Points Decision" },
    ],
    training: ["Technical sparring cycle", "Strength and conditioning microcamp"],
    mediaAssets: [
      { title: "Camp Visuals", type: "Video" },
      { title: "Fight Highlights", type: "Video" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/ezekiel_touch_shabaale" },
      { label: "TikTok", url: "https://www.tiktok.com/@touch.ezekiel.ija" },
    ],
  },
  {
    kind: "athlete",
    slug: "adeyemi-emmanuel",
    name: "Adeyemi Emmanuel",
    identity: "Professional Boxer",
    bio: "Adeyemi Emmanuel is a bantamweight talent with a sharp technical base and strong development potential.",
    height: "5'7\"",
    weightCategory: "Bantam",
    record: "1/0/0",
    fights: [
      { event: "Development Card", result: "Win", note: "Unanimous Decision" },
    ],
    training: ["Pad work and ring movement", "Conditioning and recovery blocks"],
    mediaAssets: [
      { title: "Open Workout", type: "Video" },
      { title: "Training Journal", type: "Visual" },
    ],
    socials: [],
  },
];

export const allTalent: TalentProfile[] = [...musicians, ...athletes];

export const publishingContributors = [
  {
    name: "Bennett Abraham Obeya",
    role: "Songwriter / Composer",
    works: ["Catalog in development", "Rights-managed compositions"],
    ipi: "Pending",
    pro: "Pending",
    copyrightYear: "2026",
  },
  {
    name: "Bolon Scridge",
    role: "Writer / Composer",
    works: ["Catalog in development", "Rights-managed compositions"],
    ipi: "Pending",
    pro: "Pending",
    copyrightYear: "2026",
  },
  {
    name: "Ajayi Oluwalayomi Timothy",
    role: "Writer / Composer",
    works: ["Catalog in development", "Rights-managed compositions"],
    ipi: "Pending",
    pro: "Pending",
    copyrightYear: "2026",
  },
  {
    name: "Arinze Oruchie",
    role: "Writer / Composer",
    works: ["Catalog in development", "Rights-managed compositions"],
    ipi: "Pending",
    pro: "Pending",
    copyrightYear: "2026",
  },
  {
    name: "Ogunmefun David Olanrewaju",
    role: "Writer / Composer",
    works: ["Catalog in development", "Rights-managed compositions"],
    ipi: "Pending",
    pro: "Pending",
    copyrightYear: "2026",
  },
  {
    name: "Marayesa Olayemi Stephen",
    role: "Writer / Composer",
    works: ["Catalog in development", "Rights-managed compositions"],
    ipi: "Pending",
    pro: "Pending",
    copyrightYear: "2026",
  },
];

export const licensingTabs = [
  { key: "master", label: "Master Use", content: "Master use opportunities for recordings across digital campaigns and productions." },
  { key: "deals", label: "Publishing Deals", content: "Flexible publishing structures for catalog growth and long-term rights value." },
  { key: "film", label: "Film", content: "Curated sync pitches for dramatic features, trailers, and documentaries." },
  { key: "games", label: "Video Games", content: "High-impact placements for immersive gameplay soundtracks and marketing spots." },
  { key: "tv", label: "TV Commercials", content: "Commercial-ready tracks with quick turnaround clearances for ad agencies." },
  { key: "corp", label: "Corporate Sponsorships & Collaborations", content: "Brand-facing collaborations pairing talent and catalog with campaign strategy." },
];

export const blogPosts = [
  {
    title: "6in1 Group Expands Artist Development Tracks",
    category: "Company Update",
    excerpt: "A new framework supports artist branding, release planning, and performance strategy.",
    date: "Apr 2026",
  },
  {
    title: "What Sync Supervisors Look For in 2026",
    category: "Industry Insight",
    excerpt: "A practical view on metadata readiness, clear rights, and emotional fit in sync pitching.",
    date: "Mar 2026",
  },
  {
    title: "Building Athlete Visibility Beyond Competition",
    category: "Roster Story",
    excerpt: "Positioning athletes as long-term brands across media, partnerships, and audience growth.",
    date: "Feb 2026",
  },
];
