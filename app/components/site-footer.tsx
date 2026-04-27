import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className=" bg-black!">
      <div className="bg-white! rounded-t-[2.25rem] w-full ">
      <div className="mx-auto w-full max-w-[90%] px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex">
              <Image
                src="/logoGroup.png"
                alt="6in1 Group"
                width={250}
                height={72}
                className="h-14 w-auto object-contain object-left"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-site-muted">
              Built for talent. Driven by vision. 6in1 Group advances entertainment and publishing through strategic
              growth, rights-focused operations, and long-term brand development.
            </p>
            <Link href="/founder-contact" className="button-brand mt-6">
              Get In Touch
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <FooterLinkGroup
              title="Company"
              links={[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/companies", label: "Companies" },
                { href: "/blog", label: "Blog" },
              ]}
            />

            <FooterLinkGroup
              title="Divisions"
              links={[
                { href: "/entertainment", label: "Entertainment" },
                { href: "/publishing", label: "Publishing" },
                { href: "/founder-contact", label: "Founder + Contact" },
              ]}
            />

            <div>
              <p className="font-heading text-sm uppercase tracking-[0.2em] text-site-text">Connect</p>
              <div className="mt-5 space-y-3 text-sm text-site-muted">
                <a className="block transition hover:text-site-text" href="https://instagram.com/" rel="noreferrer noopener" target="_blank">
                  Instagram
                </a>
                <a className="block transition hover:text-site-text" href="https://facebook.com/" rel="noreferrer noopener" target="_blank">
                  Facebook
                </a>
                <a className="block transition hover:text-site-text" href="https://tiktok.com/" rel="noreferrer noopener" target="_blank">
                  TikTok
                </a>
              </div>
              <p className="mt-6 text-sm text-site-muted">hello@6in1group.com</p>
              <p className="text-sm text-site-muted">Lagos · London · Toronto</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-site-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 6in1 Group. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/founder-contact" className="transition hover:text-site-text">
              Privacy
            </Link>
            <Link href="/founder-contact" className="transition hover:text-site-text">
              Terms
            </Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; label: string }>;
}) {
  return (
    <div>
      <p className="font-heading text-sm uppercase tracking-[0.2em] text-site-text">{title}</p>
      <div className="mt-5 space-y-3 text-sm text-site-muted">
        {links.map((link) => (
          <Link key={`${title}-${link.href}-${link.label}`} href={link.href} className="block transition hover:text-site-text">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
