export type SyncDealStatus = "published" | "not-published" | "unreleased";

export type SyncDeal = {
  songTitle: string;
  artist?: string;
  dealLabel: string;
  placement: string;
  year: string;
  status: SyncDealStatus;
  mediaUrl?: string;
};

export const syncDeals: SyncDeal[] = [
  {
    songTitle: "No Peace",
    dealLabel: "EA Games — Apex Legends",
    placement:
      'Stories from the Outlands — "Metamorphosis"',
    year: "2021",
    status: "published",
    mediaUrl: "https://youtu.be/vHWlJlMkTcg?si=4sKOSp2XnZFvRVm7",
  },
  {
    songTitle: "Basketball Africa League 2021 Final",
    dealLabel: "Basketball Africa League",
    placement:
      "Montage of action on the court as US Monastir play Zamalek — Episode 4: Origin: The Story of the Basketball Africa League",
    year: "2021",
    status: "not-published",
  },
  {
    songTitle: "Calabash",
    artist: "SoundOfAce",
    dealLabel: "Lady Film",
    placement: "Feature film sync",
    year: "2024",
    status: "unreleased",
  },
];

export function syncDealStatusLabel(status: SyncDealStatus): string {
  switch (status) {
    case "published":
      return "Published";
    case "not-published":
      return "Not published";
    case "unreleased":
      return "Unreleased";
  }
}
