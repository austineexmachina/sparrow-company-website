import Image from "next/image";
import { GalleryDepth } from "@/components/gallery-depth";
import { HeroLighting } from "@/components/hero-lighting";
import { PinnedStory } from "@/components/pinned-story";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WaitlistForm } from "@/components/waitlist-form";
import { WhatIsSparrowStory } from "@/components/WhatIsSparrowStory";

// Keep the two family/movie-night campaign visuals on the public homepage.
const retainedImages = [
  {
    file: "Sparrow Love Edit Movie Night.png",
    alt: "Sparrow Love Edit family movie-night illustration.",
    caption: "Stories bring people together.",
  },
  {
    file: "Sparrow Love Edit Campus Celebration(2).png",
    alt: "Original Sparrow Love Edit campus celebration artwork.",
    caption: "A world of stories, made for everyone.",
  },
];

const comingSoon = [
  ["Your Vision. Your Story. Your Studio.", "Discover Sparrow's vision for AI-powered creative software and a new generation of digital storytelling."],
  ["From Imagination to the Big Screen.", "Explore our long-term vision for connected film production and cinematic creativity."],
  ["Big Dreams. Magical Stories.", "Discover our ambition for animation, original characters and family entertainment."],
];

function FormulaCar() {
  return (
    <div className="race-car-stage" aria-hidden="true">
      <div className="race-car-grid" aria-hidden="true" />
      <div className="race-car-data race-car-data-top" aria-hidden="true">
        <span>SPARROW / MOTION LAB</span><span>01 — 04</span><span>DOWNFORCE // 100</span>
      </div>
      <div className="race-car-data race-car-data-bottom" aria-hidden="true">
        <span>ENGINEERED FOR IMAGINATION</span><span>4K / 8K PIPELINE</span><span>RENDER // READY</span>
      </div>
      <div className="race-car-number" aria-hidden="true">07</div>
    </div>
  );
}

function CalculatorMotif() {
  return (
    <div className="calculator-motif" aria-hidden="true">
      <span className="calculator-kicker">CREATIVE COMPUTATION</span>
      <span className="calculator-equation">24 × 60 × 4K</span>
      <span className="calculator-rule" />
      <span className="calculator-result">∞ <small>FRAME POSSIBILITIES</small></span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main" className="home-page">
      <HeroLighting className="wrap hero">
        <div className="hero-copy">
          <span className="label">Building for a global launch</span>
          <p className="eyebrow">UK-focused. Globally ambitious.</p>
          <h1><span className="hero-title-mask"><span className="hero-title-line">Building the Future of Global Entertainment.</span></span></h1>
          <p className="hero-supporting">An AI-powered entertainment technology ecosystem connecting creative software, animation, film production, social entertainment and streaming — built for creators and audiences worldwide.</p>
          <a className="btn hero-cta" href="#movie-studio">Explore the studio</a>
        </div>
        <div className="hero-visual-stack">
          <div className="hero-art"><Image priority src={`/images/${encodeURIComponent(retainedImages[0].file)}`} width={1400} height={900} sizes="(max-width: 760px) 100vw, 44vw" alt={retainedImages[0].alt} /></div>
          <FormulaCar />
        </div>
        <a className="hero-scroll-cue" href="#creator-community" aria-label="Scroll to creator community"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" aria-hidden="true"><path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
      </HeroLighting>

      <section id="movie-studio" className="section movie-studio-section">
        <div className="wrap">
          <ScrollReveal>
            <p className="eyebrow">Sparrow Movie Studio / 001</p>
            <h2>From a first idea to an entire universe.</h2>
            <p className="studio-intro">A connected creative workspace designed around the complete filmmaking journey — from story development and visual planning to production, sound, finishing and delivery.</p>
          </ScrollReveal>
          <div className="studio-console">
            <div className="console-topline"><span>SPARROW // CREATIVE SYSTEMS</span><span>STUDIO PREVIEW — ROADMAP</span></div>
            <div className="studio-tool-grid">
              {[
                ["01", "Story & screenplay", "Develop concepts, scripts, dialogue and scene-by-scene story structure."],
                ["02", "World & character design", "Build characters, locations, costumes and consistent visual identities."],
                ["03", "Storyboard & shot planning", "Plan camera angles, lenses, movement, lighting and shot continuity."],
                ["04", "Scene creation", "Create cinematic environments, action sequences and multi-scene narratives."],
                ["05", "Sound & performance", "Shape voice, music, ambience, sound design and performance direction."],
                ["06", "Edit, colour & master", "Assemble sequences, refine pacing, grade the image and prepare final masters."],
              ].map(([number, title, description]) => (
                <article className="studio-tool" key={number}>
                  <span className="tool-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="tool-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
            <div className="console-bottomline"><span>CREATIVE CONTROL / HUMAN-DIRECTED</span><span>MODULES IN DEVELOPMENT</span></div>
          </div>
        </div>
      </section>

      <section id="film-factory" className="section factory-section">
        <div className="wrap factory-layout">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Sparrow Animation & Film Factory / 002</p>
              <h2>A production floor for worlds yet to be imagined.</h2>
              <p className="studio-intro">A long-term vision for a coordinated production engine: reusable assets, consistent characters, scene pipelines, parallel rendering and review checkpoints — bringing complex productions into one organised workflow.</p>
            </ScrollReveal>
            <CalculatorMotif />
          </div>
          <div className="factory-board">
            <div className="factory-board-head"><span>FACTORY CONTROL / 24.01</span><span className="live-indicator">● CONCEPT</span></div>
            {[
              ["01", "Story development", "Concept → script → scene list", "COMPLETE"],
              ["02", "Character & asset lab", "Identity lock · reusable assets", "IN PIPELINE"],
              ["03", "Scene production", "Layout · animation · VFX", "QUEUED"],
              ["04", "Render & finishing", "Lighting · render · colour", "QUEUED"],
              ["05", "Quality & delivery", "Review · revisions · master", "APPROVAL"],
            ].map(([number, title, detail, status]) => (
              <div className="factory-stage" key={number}>
                <span className="factory-stage-number">{number}</span><div><strong>{title}</strong><small>{detail}</small></div><span className="factory-status">{status}</span>
              </div>
            ))}
            <div className="factory-board-foot"><span>CHARACTER CONSISTENCY</span><span>SCENE CONTINUITY</span><span>HUMAN APPROVAL GATES</span></div>
          </div>
        </div>
      </section>

      <section className="section scifi-section">
        <div className="wrap scifi-content">
          <ScrollReveal>
            <p className="eyebrow">Sparrow Ultra HD / 003</p>
            <h2>Science fiction. At cinematic scale.</h2>
            <p>Our ambition is to enable the creation of immersive science-fiction films and original cinematic worlds, with high-resolution visual pipelines, detailed environments, believable characters, visual effects and carefully directed storytelling.</p>
            <div className="resolution-line"><span>4K UHD</span><i /> <span>8K-READY VISION</span><i /> <span>CINEMATIC VFX</span></div>
          </ScrollReveal>
        </div>
      </section>

      <WhatIsSparrowStory />
      <section id="creator-community" className="section creator-section"><div className="wrap">
        <ScrollReveal><p className="eyebrow">A global creative community</p><h2>Connecting the Next Generation of Creators.</h2><p>We are building towards a connected creative ecosystem where ideas, technology, production and audiences can meet.</p></ScrollReveal>
        <GalleryDepth><div className="crew">{retainedImages.map((item, index) => <ScrollReveal className="crew-reveal" delayMs={index * 45} key={item.file}><figure><Image src={`/images/${encodeURIComponent(item.file)}`} width={1400} height={900} sizes="(max-width: 500px) 90vw, (max-width: 760px) 45vw, 33vw" alt={item.alt} loading="lazy" /><figcaption>{item.caption}</figcaption></figure></ScrollReveal>)}</div></GalleryDepth>
      </div></section>
      <PinnedStory />
      <section className="section coming-section"><div className="wrap">
        <ScrollReveal><p className="eyebrow">Our product vision</p><h2>One ecosystem. A world of possibilities.</h2></ScrollReveal>
        <div className="cards">{comingSoon.map(([title, description], index) => <ScrollReveal className="card-reveal" delayMs={index * 70} key={title}><article className="card"><span className="label">In development roadmap</span><h3>{title}</h3><p>{description}</p></article></ScrollReveal>)}</div>
      </div></section>
      <div className="marquee" aria-label="Create together. Connect everywhere. Building the future of global entertainment.">Create Together. Connect Everywhere. Building the Future of Global Entertainment. ·</div>
      <section id="waitlist" className="section wrap waitlist-section"><ScrollReveal><p className="eyebrow">Stay connected</p><h2>Be part of what comes next.</h2><WaitlistForm /></ScrollReveal></section>
    </main>
  );
}
