import Link from "next/link";
import { PageHeroBand } from "../components/page-hero-band";
import { PageReveal } from "../components/page-reveal";
import { SiteCta } from "../components/site-cta";
import { SimpleForm } from "../components/simple-form";
import { blogPosts } from "../lib/site-data";

export default function BlogPage() {
  return (
    <>
      <PageReveal />
      <PageHeroBand
        eyebrow="Blog & Articles"
        title="Company updates and industry perspective."
        description="Insights across entertainment, publishing, rights, and roster growth."
        actions={
          <Link href="/contact" className="button-secondary-dark">
            Pitch a Story
          </Link>
        }
      />
      <section className="section-soft bg-black!">
        <div className="ma space-y-10 rounded-t-[2.25rem] bg-site-soft px-3 py-16 sm:px-8 lg:px-16">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" data-reveal-stagger>
            {blogPosts.map((post) => (
              <article className="surface-card" key={post.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-red" data-reveal-text>
                  {post.category}
                </p>
                <h3 className="mt-3 font-heading text-xl text-site-text" data-reveal-text>
                  {post.title}
                </h3>
                <p className="mt-3 text-site-muted" data-reveal-text>
                  {post.excerpt}
                </p>
                <p className="mt-4 text-sm text-site-muted" data-reveal-text>
                  {post.date}
                </p>
              </article>
            ))}
          </div>
          <div data-reveal>
            <SimpleForm
              title="Stay in the Loop"
              helper="Subscribe for company updates, new articles, and industry insights."
              buttonText="Subscribe"
            />
          </div>
        </div>
      </section>
      <SiteCta title="Want tailored updates from 6in1?" buttonLabel="Contact Editorial Team" />
    </>
  );
}
