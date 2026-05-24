export type LiveEvent = {
  title: string;
  venue: string;
  role?: string;
  dateLine: string;
  capacity?: string;
  notes?: string;
  /** Rough year for grouping (use first year if range). */
  year: number;
};

export const liveEvents: LiveEvent[] = [
  {
    title: "V.L.C. Vector Live Concert",
    venue: "Freedom Park, Broad Street, Lagos Island, Lagos, Nigeria",
    role: "Concert Manager",
    dateLine: "December 27, 2016",
    capacity: "1,500",
    year: 2016,
  },
  {
    title: "Airtel TRACE Music Star",
    venue: "Lekki Phase 1, Lagos, Nigeria",
    role: "Music competition — main headliner: Keri Hilson",
    dateLine: "June 10, 2016",
    capacity: "1,000",
    year: 2016,
  },
  {
    title: "High impact amusement park shutdown concert",
    venue: "Km47 Lagos/Ibadan Expressway, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "December 31, 2017",
    capacity: "3,000",
    notes: "Vector headlined alongside 2face Idibia, Kizz Daniel, and Adekunle Gold.",
    year: 2017,
  },
  {
    title: "Afrima Award Show",
    venue: "Eko Hotel Convention Center, Victoria Island, Lagos, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "November 13, 2017",
    capacity: "5,000",
    year: 2017,
  },
  {
    title: "Hennessy Artistry Concert",
    venue: "Balmoral Event Center, Federal Palace Casino, Victoria Island, Lagos, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "December 8, 2018",
    capacity: "2,000",
    year: 2018,
  },
  {
    title: "Olamide Live In Concert 3",
    venue: "Eko Hotel Convention Center, Victoria Island, Lagos, Nigeria",
    role: "Stage Manager",
    dateLine: "December 2016",
    capacity: "5,000",
    year: 2016,
  },
  {
    title: "Olamide Live In Concert 4",
    venue: "Teslim Balogun Stadium, Surulere, Lagos, Nigeria",
    role: "Stage management and artist management",
    dateLine: "December 17, 2017",
    capacity: "20,000 venue capacity",
    notes: "Powered by Lagos State Government.",
    year: 2017,
  },
  {
    title: "One Lagos Fiesta",
    venue: "Lagos, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "December 2015, 2016, and 2017",
    capacity: "6,000 venue capacity",
    notes: "Powered by Lagos State Government.",
    year: 2016,
  },
  {
    title: "Hennessy Artistry Concert / 20 Years Anniversary",
    venue: "Balmoral Event Center, Federal Palace Casino, Victoria Island, Lagos, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "December 8, 2019, 2021, 2023, and 2024",
    capacity: "2,000",
    year: 2024,
  },
  {
    title: "SoundCity Xchange: 100 Concert",
    venue: "Lagos, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "December 18, 2019",
    capacity: "3,000",
    year: 2019,
  },
  {
    title: "Trace In The City Tour (Trace Urban TV)",
    venue: "Lagos, Nigeria",
    role: "Artist Manager (Vector)",
    dateLine: "August 14 and 19, 2019",
    capacity: "5,000",
    year: 2019,
  },
  {
    title: "Vector Live At One Oak Night Club",
    venue: "JW Marriott Marquis, Business Bay, Dubai, UAE",
    role: "Artist Manager (Vector)",
    dateLine: "March 13, 2020",
    capacity: "500",
    year: 2020,
  },
  {
    title: "Campari Passion Project: Live event",
    venue: "Lagos, Nigeria",
    role: "Artist Manager (GoodGirl LA)",
    dateLine: "December 18, 2021",
    capacity: "3,000",
    year: 2021,
  },
  {
    title: "Vector — TESLIM: The Energy Concert",
    venue: "Lagos, Nigeria",
    role: "Concert management / Producer",
    dateLine: "January 1, 2024",
    capacity: "3,000",
    year: 2024,
  },
  {
    title: "Vector at The Lower Third",
    venue: "The Lower Third",
    role: "Artist Manager (Vector)",
    dateLine: "July 5, 2024",
    capacity: "250",
    year: 2024,
  },
];

export function liveEventsByYearDescending(): Map<number, LiveEvent[]> {
  const map = new Map<number, LiveEvent[]>();
  const sorted = [...liveEvents].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  for (const ev of sorted) {
    const list = map.get(ev.year) ?? [];
    list.push(ev);
    map.set(ev.year, list);
  }
  return map;
}
