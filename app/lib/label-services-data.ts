export type LabelRelease = {
  title: string;
  format: "Album LP" | "EP" | "Single" | "Double Single";
  releaseDate: string;
};

export type ArtistLabelBlock = {
  slug: string;
  name: string;
  genre: string;
  label: string;
  country?: string;
  role?: string;
  releases: LabelRelease[];
};

export const musoCreditsProfileUrl =
  "https://credits.muso.ai/profile/50c4d76f-16ea-4979-937c-8ab8724cd1b8" as const;

export const labelServiceArtists: ArtistLabelBlock[] = [
  {
    slug: "vector",
    name: "Vector",
    genre: "Rap / Hip-Hop",
    label: "GRAP Entertainment Limited",
    country: "Nigeria",
    role: undefined,
    releases: [
      { title: "Lafiaji", format: "Album LP", releaseDate: "December 8, 2016" },
      { title: "This One Is Mad", format: "Double Single", releaseDate: "June 21, 2018" },
      { title: "Be Happy (feat. DJ Magnum & Daddy Showkey)", format: "Single", releaseDate: "November 30, 2018" },
      { title: "This Vector Sef", format: "Single", releaseDate: "February 15, 2019" },
      { title: "Vibes Before Teslim", format: "EP", releaseDate: "November 26, 2019" },
      { title: "Crossroads", format: "EP", releaseDate: "May 22, 2020" },
      { title: "Early Momo (feat. GoodGirl LA)", format: "Single", releaseDate: "February 14, 2021" },
      { title: "Crown Of Clay (feat. M.I. Abaga & Pheelz)", format: "Single", releaseDate: "March 12, 2021" },
      { title: "TESLIM: The Energy Still Lives In Me", format: "Album LP", releaseDate: "November 11, 2022" },
      { title: "If They Are Real (feat. Bella Shmurda)", format: "Single", releaseDate: "January 12, 2024" },
    ],
  },
  {
    slug: "wande-coal",
    name: "Wande Coal",
    genre: "R&B and Afropop",
    label: "Starstruck Management / EMPIRE",
    role: "A&R and product management",
    releases: [
      { title: "Again", format: "Single", releaseDate: "February 5, 2020" },
      { title: "Realms", format: "EP", releaseDate: "September 11, 2020" },
      { title: "Come My Way", format: "Single", releaseDate: "October 27, 2021" },
      { title: "Legend Or No Legend", format: "Album LP", releaseDate: "May 18, 2023" },
      { title: "Ebelebe (feat. Wizkid)", format: "Single", releaseDate: "October 18, 2023" },
    ],
  },
];

export const independentArtistsIntro = {
  headline: "Label services for independent artists",
  subhead:
    "SIX-IN-ONE Entertainment supports independent artists across Lagos, Ghana, and wider West Africa with release planning, A&R input, product management, and campaign coordination—aligned with global partners where it strengthens the story.",
  body: [
    "Whether you are building toward a first major push or scaling an established catalog, we focus on clear timelines, rights hygiene, and audience-facing narrative so each drop lands with intent.",
    "Select credits and release milestones for artists we have supported in a label-services capacity are listed below. A broader credit index is also published on Muso.ai and reflects work we now advance under the SIX-IN-ONE Group umbrella.",
  ],
} as const;
