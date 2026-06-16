import type { Metadata } from "next";
import { Mail, MapPin, MessageSquareMore } from "lucide-react";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { SimpleForm } from "../components/simple-form";
import { officeLocations, siteEmail } from "../lib/site-contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact SIX-IN-ONE Group in Lagos, Nigeria and Amsterdam for talent representation, publishing, licensing, and partnerships.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | SIX-IN-ONE Group",
    description:
      "Contact SIX-IN-ONE Group in Lagos, Nigeria and Amsterdam for talent representation, publishing, licensing, and partnerships.",
    url: "/contact",
  },
};

const contactTopics = [
  "General enquiries",
  "Talent & roster enquiries",
  "Publishing & licensing",
  "Media & partnerships",
] as const;

export default function ContactPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Contact"
        title="Talk to the SIX-IN-ONE team."
        description="Reach out for representation, publishing support, licensing opportunities, and strategic partnerships."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80"
        overlayClassName="bg-black/60"
      />

      <section className="section-soft bg-black! pt-0">
        <div className="mx-auto w-full max-w-full overflow-hidden rounded-t-[2.25rem] bg-site-soft">
          <div className="section-wrap space-y-8">
            <section className="surface-card">
              <h2 className="font-heading text-3xl text-site-text sm:text-4xl" data-reveal-text>
                Get in touch
              </h2>
              <p className="mt-3 max-w-3xl text-site-muted" data-reveal-text>
                Tell us what you are working on and the right team will follow up. We usually respond to priority enquiries
                quickly.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal-stagger>
                <article className="rounded-2xl border border-black/10 bg-white p-4">
                  <Mail className="h-5 w-5 text-brand-primary" />
                  <p className="mt-3 font-semibold text-site-text">Email</p>
                  <a className="text-sm text-site-muted transition hover:text-site-text" href={`mailto:${siteEmail}`}>
                    {siteEmail}
                  </a>
                </article>
                {officeLocations.map((office) => (
                  <article key={office.city} className="rounded-2xl border border-black/10 bg-white p-4">
                    <MapPin className="h-5 w-5 text-brand-primary" />
                    <p className="mt-3 font-semibold text-site-text">{office.city} office</p>
                    <address className="mt-2 space-y-0.5 text-sm not-italic leading-relaxed text-site-muted">
                      {office.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </article>
                ))}
                <article className="rounded-2xl border border-black/10 bg-white p-4 sm:col-span-2 lg:col-span-1">
                  <MessageSquareMore className="h-5 w-5 text-brand-primary" />
                  <p className="mt-3 font-semibold text-site-text">Best for</p>
                  <p className="text-sm text-site-muted">Talent, publishing, media, partnerships</p>
                </article>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {contactTopics.map((topic) => (
                  <span key={topic} className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm text-site-muted">
                    {topic}
                  </span>
                ))}
              </div>
            </section>

            <div data-reveal>
              <SimpleForm
                contactAutoReply
                title="Contact SIX-IN-ONE Group"
                helper="Share your details and a short message. We will route it to the right team."
                buttonText="Send Message"
                fields={[
                  { name: "email", label: "Email", type: "email" },
                  { name: "name", label: "Name" },
                  { name: "topic", label: "Topic" },
                  { name: "message", label: "Message", multiline: true },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <SiteCta title="Ready to build with SIX-IN-ONE Group?" buttonHref="/contact" />
    </>
  );
}
