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
      <section className="section-soft">
        <div className="section-wrap space-y-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article className="surface-card" key={post.title} data-reveal>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-red">{post.category}</p>
                <h3 className="mt-3 font-heading text-xl text-site-text">{post.title}</h3>
                <p className="mt-3 text-site-muted">{post.excerpt}</p>
                <p className="mt-4 text-sm text-site-muted">{post.date}</p>
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
