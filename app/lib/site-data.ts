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
    "SIX-IN-ONE Group is a talent, image, and brand development company working across entertainment, publishing, and cultural business development.",
  watchword:
    "The watchword is — artistry/talent development, Image/likeness creation, and brand establishment for the artist.",
  about:
    "SIX-IN-ONE Group is a forward-facing talent and brand development company operating at the intersection of entertainment, publishing, and strategic growth.",
};

export const musicians: MusicianProfile[] = [
  {
    kind: "musician",
    slug: "vector",
    name: "Vector",
    identity: "Rapper / Songwriter",
    bio: `Olanrewaju David Ogunmefun, known as Vector Tha Viper, was born on August 7, 1984, in Lagos, Nigeria. A Philosophy graduate of the University of Lagos, he is one of Nigerian hip-hop's premier lyricists and a two-time Headies "Lyricist on the Roll" winner. He pioneered "Rapfrobeat," fusing Afrobeat instrumentation with hip-hop lyricism. His catalog spans five studio albums — State of Surprise (2010), The Second Coming (2012), Lafíaji (2016), Teslìm: The Energy Still Lives in Me (2022), and Teslim: A Lover Boy PTSD (2024) — featuring collaborations with 2Face Idibia, Davido, Wande Coal, Nasty C, and Seun Kuti. His rivalry and subsequent reconciliation with M.I Abaga remain the most celebrated feud in Nigerian rap history. He holds the African record for the longest freestyle rap, at approximately 2 hours and 30 minutes. Brand partners include Sprite, Hennessy Nigeria, and Red Bull. Vector remains one of the most enduring voices in African hip-hop.`,
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
    bio: `Bennett Abraham Obeya (born July 27, 1999), professionally known as PDSTRN (pron. pedestrian), is a rapper, singer, songwriter, and style icon born in Lagos, Nigeria, and raised between Lagos and Toronto, Canada. He began writing and performing in his preteens. He announced himself to the world with his debut song "TOXIC," featured on WeTalkSound's critically acclaimed compilation album LOFN, which hit #1 on the Apple Music Alternative Charts in Nigeria in 2020. His debut EP, Rock, Paper, Scissors, accumulated over 2.2 million streams in 2024. Drawing influence from J. Cole, Drake, Olamide, and Tyler, the Creator, PDSTRN crafted a sound entirely his own — a seamless fusion of rap and melody delivered through a coarse baritone voice, weaving narratives of street life, luxury, and resilience across hip-hop and afrobeats with equal authority.`,
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
    name: "BIGBIRD Kuti",
    identity: "Rap & Afrobeat · BIGBIRD & THA VIPER",
    bio: `BIGBIRD is the alter ego of Afrobeat icon Seun Kuti and Nigerian rap icon Vector, embarking on a new musical journey with lead single "The Matter" from the upcoming project BIGBIRD & THA VIPER—the first fusion of rap and Afrobeat with outstanding lyricism and wordplay, 808 drums, saxophone, and classical instrumentation.

"The Matter" was inspired by Afrobeat legend Fela Kuti's "I No Get Eyes For Back" from Alagbon Close, sampling the horns and piano at the opening of the original track.

Seun Kuti released four albums with Egypt 80: Many Things (2008), From Africa with Fury: Rise for Knitting Factory Records (2011, coproduced by Brian Eno and John Reynolds), A Long Way Beginning (2014), and the Grammy-nominated Black Times (2018) featuring Carlos Santana, plus numerous EPs. He has played for receptive audiences globally and collaborated widely. In 2022 he joined Roots frontman Black Thought on the EP African Dreams. In 2023 he appeared on Janelle Monáe's The Age of Pleasure (Grammy nominee for Album of the Year) on "Float" and "Knows Better," teamed with Talib Kweli and Madlib on Liberation 2 ("Nat Turner" featuring Cassper Nyovest), and released a new version of "Bad Man Lighter" with Black Thought featuring Vic Mensa.`,
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
    slug: "valka",
    name: "Valka",
    identity: "Singer / Digital Creator",
    bio: `Valka (Valeria García Calle) is a Colombian singer and digital creator born May 10, 2002, in Medellín. She began pursuing music at 15 and launched her public presence in 2019 via TikTok (@soyvalka), growing to over 5 million followers.

Her breakthrough came with "Me Provocas" (2020), a guaracha track with DJ Fumaratto that surpassed 156 million streams and established her as a leading female voice in Colombia's electronic music scene. She followed with her first solo single "Solita" (2021), then accelerated in 2024 with "Mi novio tiene novia" (W Sound, lyrics by Keityn) and an international collaboration with Gianluca Vacchi on "Veo", filmed in Italy.

Her debut album Valquirias (2024) is a conceptual 13-track project inspired by Norse mythology, centered on female empowerment—recorded entirely without features by design. She defines herself by versatility—spanning guaracha, urban pop, and reggaeton—with dream collaborators from Karol G to Andrea Bocelli. In 2025 she joined La Casa de Alofoke 2 as the only Colombian cast member, broadening her pan–Latin American reach. She has been profiled by El Espectador, KienyKe, and NTN24.`,
    discography: [
      { title: "Spotify Profile", link: "https://open.spotify.com/artist/0nZi35gC9oUvfWsegp9VVr?si=e21qWxzHQi6Vx-_2C71c4A" },
    ],
    mediaEmbeds: [
      { platform: "Spotify", link: "https://open.spotify.com/artist/0nZi35gC9oUvfWsegp9VVr?si=e21qWxzHQi6Vx-_2C71c4A" },
    ],
    socials: [
      { label: "Instagram", url: "https://www.instagram.com/soyvalka" },
      { label: "TikTok", url: "https://www.tiktok.com/@soyvalka" },
      { label: "Spotify", url: "https://open.spotify.com/artist/0nZi35gC9oUvfWsegp9VVr?si=e21qWxzHQi6Vx-_2C71c4A" },
    ],
    gigs: [
      { date: "2024", city: "Medellín", details: "Valquirias album cycle", ticketUrl: "https://open.spotify.com/artist/0nZi35gC9oUvfWsegp9VVr?si=e21qWxzHQi6Vx-_2C71c4A" },
    ],
  },
  // {
  //   kind: "musician",
  //   slug: "eld3r",
  //   name: "ELD3R",
  //   identity: "Alternative Artist",
  //   bio: "ELD3R crafts emotionally rich records with modern production and a strong digital-native audience connection.",
  //   discography: [
  //     { title: "Spotify Profile", link: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
  //     { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/eld3r/1691283169" },
  //   ],
  //   mediaEmbeds: [
  //     { platform: "YouTube", link: "https://youtube.com/@the.eld3r" },
  //     { platform: "Spotify", link: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
  //   ],
  //   socials: [
  //     { label: "Instagram", url: "https://www.instagram.com/the.eld3r" },
  //     { label: "TikTok", url: "https://www.tiktok.com/@the.eld3r" },
  //     { label: "X", url: "https://x.com/the_eld3r" },
  //     { label: "YouTube", url: "https://youtube.com/@the.eld3r" },
  //     { label: "Spotify", url: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
  //     { label: "Apple Music", url: "https://music.apple.com/us/artist/eld3r/1691283169" },
  //   ],
  //   gigs: [
  //     { date: "Jun 29", city: "Accra", details: "Indie Night Circuit", ticketUrl: "https://youtube.com/@the.eld3r" },
  //     { date: "Nov 08", city: "Johannesburg", details: "Alt City Session", ticketUrl: "https://open.spotify.com/artist/77HukpCjCtGDQSCmYLi5vc" },
  //   ],
  // },
  // {
  //   kind: "musician",
  //   slug: "kehne",
  //   name: "KEHNE",
  //   identity: "Singer / Songwriter",
  //   bio: "KEHNE develops polished melodic records with strong vocal identity and performance-ready compositions.",
  //   discography: [
  //     { title: "Spotify Profile", link: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
  //     { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/kehne/1704151462" },
  //   ],
  //   mediaEmbeds: [
  //     { platform: "YouTube", link: "https://youtube.com/@kehnne" },
  //     { platform: "Spotify", link: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
  //   ],
  //   socials: [
  //     { label: "Instagram", url: "https://www.instagram.com/kehnnne" },
  //     { label: "TikTok", url: "https://www.tiktok.com/@kehnnne" },
  //     { label: "X", url: "https://x.com/kehnnne" },
  //     { label: "YouTube", url: "https://youtube.com/@kehnne" },
  //     { label: "Spotify", url: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
  //     { label: "Apple Music", url: "https://music.apple.com/us/artist/kehne/1704151462" },
  //   ],
  //   gigs: [
  //     { date: "May 31", city: "Lagos", details: "Writers & Voices Session", ticketUrl: "https://youtube.com/@kehnne" },
  //     { date: "Sep 27", city: "Nairobi", details: "Soundscape Live", ticketUrl: "https://open.spotify.com/artist/64YrHk9Eas75hAl2q5y6o1" },
  //   ],
  // },
  // {
  //   kind: "musician",
  //   slug: "ao-machine",
  //   name: "AO MACHINE",
  //   identity: "Recording Artist",
  //   bio: "AO MACHINE releases energetic records built for crossover audiences and high-visibility campaign moments.",
  //   discography: [
  //     { title: "Spotify Profile", link: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
  //     { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/ao-machine/1568768390" },
  //   ],
  //   mediaEmbeds: [
  //     { platform: "YouTube", link: "https://youtube.com/@aomachinevevo5401" },
  //     { platform: "Spotify", link: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
  //   ],
  //   socials: [
  //     { label: "Instagram", url: "https://www.instagram.com/aoworld/" },
  //     { label: "TikTok", url: "https://www.tiktok.com/@aomachine100" },
  //     { label: "YouTube", url: "https://youtube.com/@aomachinevevo5401" },
  //     { label: "Spotify", url: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
  //     { label: "Apple Music", url: "https://music.apple.com/us/artist/ao-machine/1568768390" },
  //   ],
  //   gigs: [
  //     { date: "Aug 10", city: "Abidjan", details: "Summer Artist Circuit", ticketUrl: "https://youtube.com/@aomachinevevo5401" },
  //     { date: "Nov 16", city: "Kigali", details: "Live Sound Session", ticketUrl: "https://open.spotify.com/artist/12GJRrWKVNDUZAyxE3rKas" },
  //   ],
  // },
  // {
  //   kind: "musician",
  //   slug: "maxino",
  //   name: "Maxino",
  //   identity: "Artist / Performer",
  //   bio: `Talented Nigerian rapper and songwriter, real name Ezaza Maxino, better known by his stage name Maxino, born 4th July. He started at 10, inspired by his parents' love of music and diverse genres. Maxino was a singer and dancer, and in 2004, he joined a crew with whom he created music. He recorded his first studio single, "Little Light Of Mine," produced by Frankie Free, in 2006; next were "I Want More feat. Erigga" and "Copy & Paste," which became an anthem of the street at the time. Maxino graduated in 2015 with a BSc degree in Computer Science from Benson Idahosa University (BIU), Edo State, and also holds an OND from Ahmadu Bello University, Zaria. After school, the rapper moved to Lagos to pursue music full-time. He is a big fan of hip-hop, and his mentors included 50 Cent, The Game, Nas, and other rappers featured in Rap Life. Maxino's goal in making music is to educate the street and feed their souls with sounds and lyrics to nourish them. He says the street is his motivation, and hip-hop is in safe hands with him.`,
  //   discography: [
  //     { title: "Spotify Profile", link: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
  //     { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/maxino/996564407" },
  //   ],
  //   mediaEmbeds: [
  //     { platform: "YouTube", link: "https://youtube.com/@aomachinevevo5401" },
  //     { platform: "Spotify", link: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
  //   ],
  //   socials: [
  //     { label: "Instagram", url: "https://www.instagram.com/mvxino/" },
  //     { label: "TikTok", url: "https://www.tiktok.com/@maxinod19" },
  //     { label: "YouTube", url: "https://youtube.com/@aomachinevevo5401" },
  //     { label: "Spotify", url: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
  //     { label: "Apple Music", url: "https://music.apple.com/us/artist/maxino/996564407" },
  //   ],
  //   gigs: [
  //     { date: "Jun 11", city: "Lagos", details: "Emerging Stars Set", ticketUrl: "https://youtube.com/@aomachinevevo5401" },
  //     { date: "Oct 18", city: "Accra", details: "Afro Urban Showcase", ticketUrl: "https://open.spotify.com/artist/6LTAaKONuHKKWR8ljjIbCA" },
  //   ],
  // },
  // {
  //   kind: "musician",
  //   slug: "nuellah-rose",
  //   name: "Nuellah Rose",
  //   identity: "Vocal Artist",
  //   bio: "Nuellah Rose blends expressive vocals and storytelling with a contemporary, audience-forward release strategy.",
  //   discography: [
  //     { title: "Spotify Profile", link: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
  //     { title: "Apple Music Profile", link: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
  //   ],
  //   mediaEmbeds: [
  //     { platform: "Spotify", link: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
  //     { platform: "Apple Music", link: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
  //   ],
  //   socials: [
  //     { label: "Instagram", url: "https://www.instagram.com/_nuellahrose_" },
  //     { label: "X", url: "https://x.com/nuellahrose" },
  //     { label: "Spotify", url: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
  //     { label: "Apple Music", url: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
  //   ],
  //   gigs: [
  //     { date: "Jul 20", city: "Lagos", details: "Rose Room Live", ticketUrl: "https://open.spotify.com/artist/5bkSU6wyev45e33puJMNSY" },
  //     { date: "Dec 05", city: "Toronto", details: "Winter Showcase", ticketUrl: "https://music.apple.com/us/artist/nuellah-rose/1597734751" },
  //   ],
  // },
];

export const athletes: AthleteProfile[] = [
  {
    kind: "athlete",
    slug: "ezekiel-touch",
    name: "Seun Ezekiel (TOUCH)",
    identity: "Professional Boxer",
    bio: "Seun Ezekiel (TOUCH) is a super-bantamweight boxer focused on disciplined preparation and high-intensity ring execution.",
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

export type PublishingContributor = {
  name: string;
  role: string;
  ipi: string;
  pro: string;
  publisher?: string;
  works?: string[];
  copyrightYear?: string;
};

export const publishingContributors: PublishingContributor[] = [
  {
    name: "Olanrewaju David Ogunmefun",
    role: "Author / Composer",
    ipi: "846101752",
    pro: "PRS",
    publisher: "Sony Music Publishing",
  },
  {
    name: "Marayesa Olayemi Stephen",
    role: "Composer",
    ipi: "",
    pro: "ASCAP",
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
    title: "SIX-IN-ONE Group Expands Artist Development Tracks",
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
