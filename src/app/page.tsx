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
    <div className="race-car-stage" aria-label="Original formula-style racing car illustration">
      <div className="race-car-grid" aria-hidden="true" />
      <div className="race-car-data race-car-data-top" aria-hidden="true">
        <span>SPARROW / MOTION LAB</span><span>01 — 04</span><span>DOWNFORCE // 100</span>
      </div>
      <svg className="formula-car" viewBox="0 0 1000 430" role="img" aria-labelledby="car-title">
        <title id="car-title">Sleek graphite and silver open-wheel racing car</title>
        <defs>
          <linearGradient id="carBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0f1f2" />
            <stop offset=".35" stopColor="#8c929b" />
            <stop offset=".7" stopColor="#333943" />
            <stop offset="1" stopColor="#101318" />
          </linearGradient>
          <linearGradient id="carEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#59616b" />
          </linearGradient>
          <filter id="carGlow"><feGaussianBlur stdDeviation="14" /></filter>
        </defs>
        <ellipse cx="510" cy="320" rx="390" ry="38" fill="#c4cbd5" opacity=".18" filter="url(#carGlow)" />
        <g fill="#080a0e" stroke="#68717d" strokeWidth="5">
          <rect x="190" y="164" width="92" height="174" rx="34" transform="rotate(-7 236 251)" />
          <rect x="715" y="164" width="92" height="174" rx="34" transform="rotate(7 761 251)" />
          <rect x="78" y="177" width="100" height="176" rx="34" transform="rotate(-7 128 265)" />
          <rect x="817" y="177" width="100" height="176" rx="34" transform="rotate(7 867 265)" />
        </g>
        <g fill="none" stroke="#9da5af" strokeWidth="3" opacity=".72">
          <path d="M201 222h71M201 248h71M201 274h71M726 222h71M726 248h71M726 274h71" />
          <path d="M91 236h74M91 262h74M91 288h74M829 236h74M829 262h74M829 288h74" />
        </g>
        <path d="M90 155h130l52 24 90 8 90-52 75-18 76 18 90 52 90-8 52-24h130l-14 39-140 28-77 64-144 22-144-22-77-64-140-28z" fill="url(#carBody)" stroke="url(#carEdge)" strokeWidth="5" />
        <path d="M356 186 449 116l52-13 52 13 93 70-81 20H437z" fill="#1b2028" stroke="#c0c6cf" strokeWidth="4" />
        <path d="M430 185q70-95 142 0l-31 22h-80z" fill="#080b11" stroke="#818a97" strokeWidth="4" />
        <path d="M492 99v-28h18v28M481 71h40" stroke="#c8ced6" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M456 218h92l52 32-97 26-99-26z" fill="#aeb5bf" opacity=".9" />
        <path d="M98 145h132l-9 23H90zM770 168l-9-23h132l8 23z" fill="#b9c0ca" stroke="#f1f3f6" strokeWidth="3" />
        <path d="M60 333h205l-17 20H76zM735 353l-17-20h205l-16 20z" fill="#d4d9df" stroke="#8b929c" strokeWidth="3" />
        <path d="M265 185 385 215 445 265 354 249 290 222zM735 185 615 215 555 265 646 249 710 222z" fill="#6f7884" stroke="#c2c8d0" strokeWidth="3" />
        <path d="M305 197 410 232M695 197 590 232" stroke="#f4f5f6" strokeWidth="5" opacity=".7" />
        <path d="M445 292h120l-15 24H460z" fill="#151a21" stroke="#8d96a1" strokeWidth="3" />
        <path d="M110 366h780" stroke="#d6dbe2" strokeWidth="3" opacity=".48" />
      </svg>
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
          <div className="scifi-frame" aria-label="Abstract science-fiction cinematic environment concept">
            <div className="scifi-orbit orbit-one" /><div className="scifi-orbit orbit-two" />
            <div className="scifi-horizon" /><div className="scifi-monolith" />
            <span className="scifi-coordinate">N 51°30&apos; / FUTURE WORLDS</span><span className="scifi-frame-label">AN ORIGINAL UNIVERSE / IN DEVELOPMENT</span>
          </div>
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
