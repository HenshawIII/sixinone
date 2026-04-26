import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { SimpleForm } from "../components/simple-form";

export default function FounderContactPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Founder + Contact"
        title="Abayomi Noah Ogunmefun"
        description="Connect with 6in1 Group for talent representation, publishing support, partnerships, and growth strategy."
      />
      <section className="section-white">
        <div className="section-wrap space-y-10">
          <article className="surface-card" data-reveal>
            <h3 className="font-heading text-2xl text-site-text">Get in Touch</h3>
            <p className="mt-3 text-site-muted">
              For roster enquiries, publishing opportunities, licensing, media, and partnerships.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "General Enquiries",
                "Talent & Roster Enquiries",
                "Publishing & Licensing",
                "Media & Partnerships",
              ].map((item) => (
                <span key={item} className="rounded-full border border-black/20 px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>
      <section className="section-soft">
        <div className="section-wrap" data-reveal>
          <SimpleForm
            title="Contact 6in1 Group"
            helper="Send us a message and the right team will get back to you."
            buttonText="Send Message"
            fields={[
              { name: "email", label: "Email", type: "email" },
              { name: "name", label: "Name" },
              { name: "topic", label: "Topic" },
              { name: "message", label: "Message", multiline: true },
            ]}
          />
        </div>
      </section>
      <SiteCta title="Ready to build with 6in1 Group?" />
    </>
  );
}
