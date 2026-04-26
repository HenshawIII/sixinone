import { HomeHero } from "./components/home-hero";
import { HomeTwoFacesSection } from "./components/home-two-faces-section";
import { PageReveal } from "./components/page-reveal";
import { SiteCta } from "./components/site-cta";
import { homeCopy } from "./lib/site-data";

export default function Home() {
  return (
    <>
      <HomeHero headline={homeCopy.headline} supporting={homeCopy.supporting} />
      <div id="home-after-hero" className="space-y-10 sm:space-y-14 lg:space-y-16">
        <PageReveal />
        <HomeTwoFacesSection />

        <SiteCta />
      </div>
    </>
  );
}
