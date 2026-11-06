import Image from "next/image";
import { GalleryDepth } from "@/components/gallery-depth";
import { HeroLighting } from "@/components/hero-lighting";
import { PinnedStory } from "@/components/pinned-story";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import { WhatIsSparrowStory } from "@/components/WhatIsSparrowStory";

const files = [
  "Sparrow Love Edit Campus Celebration(1).png",
  "1000611238.png",
  "Sparrow Love Edit Campus Celebration(2).png",
  "Sparrow Love Edit Movie Night.png",
  "1000611244.png",
  "1000611243.png",
];

const imageDescriptions = [
  "Illustrated campus celebration with Sparrow Love Edit branding.",
  "Illustrated creator cheering at a Sparrow Love Edit campus event.",
  "Illustrated creator holding a laptop outside a campus.",
  "Illustrated family watching a cartoon on a screen.",
  "Illustrated creator with a laptop on campus.",
  "Illustrated family enjoying a movie night.",
];

const comingSoon = [
  ["Your Vision. Your Story. Your Studio.", "Discover Sparrow's vision for a new generation of intelligent video editing and creative expression."],
  ["From Imagination to the Big Screen.", "Explore a future where ambitious stories and cinematic creativity come together."],
  ["Big Dreams. Magical Stories.", "Discover Sparrow's vision for animated worlds, unforgettable characters and family entertainment."],
];

export default function Home() {
  return (
    <main id="main" className="home-page">
      <HeroLighting className="wrap hero">
        <div className="hero-copy">
          <span className="label">Coming soon</span>
          <p className="eyebrow">A new chapter in creative storytelling</p>
          <h1>
            <span className="hero-title-mask">
              <span className="hero-title-line">Sparrow Love Edit — Where Creativity Takes Flight.</span>
            </span>
          </h1>
          <p className="hero-supporting">A new world of creativity, storytelling, entertainment and digital innovation is coming.</p>
          <a className="btn hero-cta" href="#waitlist">Join the waitlist</a>
        </div>
        <div className="hero-art">
          <Image priority src={`/images/${encodeURIComponent(files[2])}`} width={1400} height={900} sizes="(max-width: 760px) 100vw, 50vw" alt="Illustrated Sparrow Love Edit creator holding a laptop on campus." />
        </div>
        <a className="hero-scroll-cue" href="#creator-community" aria-label="Scroll to creator community">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true"><path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </HeroLighting>
      <WhatIsSparrowStory />
      <section id="creator-community" className="section creator-section">
        <div className="wrap">
          <ScrollReveal><p className="eyebrow">Creator Community</p><h2>The Future Belongs to Creators.</h2><p>Big ideas. Bold imaginations. Endless possibilities. Welcome to the creative world of Sparrow Love Edit.</p></ScrollReveal>
          <GalleryDepth><div className="crew">
            {files.map((file, index) => <ScrollReveal className="crew-reveal" delayMs={index * 45} key={file}><figure><Image src={`/images/${encodeURIComponent(file)}`} width={1400} height={900} sizes="(max-width: 500px) 90vw, (max-width: 760px) 45vw, 33vw" alt={imageDescriptions[index]} loading="lazy" /></figure></ScrollReveal>)}
          </div></GalleryDepth>
        </div>
      </section>
      <PinnedStory />
      <section className="section coming-section"><div className="wrap">
        <ScrollReveal><p className="eyebrow">What&apos;s Coming</p><h2>Ideas in motion</h2></ScrollReveal>
        <div className="cards">{comingSoon.map(([title, description], index) => <ScrollReveal className="card-reveal" delayMs={index * 70} key={title}><article className="card"><span className="label">Coming soon</span><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div>
      </div></section>
      <div className="marquee" aria-label="Create Together. Connect Everywhere. A creative community where talent, entertainment and opportunity meet.">Create Together. Connect Everywhere. A creative community where talent, entertainment and opportunity meet. ·</div>
      <section id="waitlist" className="section wrap waitlist-section"><ScrollReveal><p className="eyebrow">Stay in the loop</p><h2>Join the waitlist</h2><WaitlistForm /></ScrollReveal></section>
    </main>
  );
}


