import Link from "next/link";
import type { AthleteProfile } from "../../lib/site-data";

export function EntertainmentSportsManagement({ athletes }: { athletes: AthleteProfile[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-2">
      <div className="space-y-4 text-base leading-relaxed text-site-muted sm:text-lg ">
        <p>
          SIX-IN-ONE Entertainment provides sports management that mirrors how we treat music careers: disciplined
          positioning, fight-to-fight narrative, and partnerships that respect the athlete&apos;s long arc—not only the
          next bout.
        </p>
        <p>
          From training blocks and media moments to commercial introductions, we align boxing talent with clear
          milestones and professional representation. If you are searching for sports management in Nigeria or
          cross-border athlete development, start with our roster and reach out through contact.
        </p>
      </div>

      <div>
        <h2 className="font-heading text-2xl text-site-text sm:text-3xl">Athletes on roster</h2>
        <ul className="mt-5 space-y-3">
          {athletes.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/entertainment/${a.slug}`}
                className="inline-flex text-base font-semibold text-site-text underline-offset-4 transition hover:text-[#ffb400] hover:underline"
              >
                {a.name}
                <span className="ml-2 font-normal text-site-muted">— {a.identity}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full border border-[#ffb400]/55 bg-white px-5 py-3 text-sm font-semibold text-site-text transition hover:border-[#ffb400] hover:bg-[#ffb400] hover:text-white"
      >
        Discuss sports management
      </Link>
    </div>
  );
}
