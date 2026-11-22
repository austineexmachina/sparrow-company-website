"use client";

import { useState } from "react";

const tools = [
  { number: "01", name: "Script & Story Lab", detail: "Shape a premise into scenes, dialogue, story beats and a production-ready screenplay.", output: "SCREENPLAY" },
  { number: "02", name: "Sci-Fi World Builder", detail: "Design planets, cities, spacecraft, environments, atmosphere and visual references.", output: "WORLD DESIGN" },
  { number: "03", name: "Character Continuity", detail: "Develop characters, visual identities, costumes and consistent appearances across scenes.", output: "CHARACTER BIBLE" },
  { number: "04", name: "Camera & Shot Designer", detail: "Plan lenses, framing, camera movement, lighting and cinematic shot sequences.", output: "SHOT LIST" },
  { number: "05", name: "Soundstage & Score", detail: "Plan dialogue, sound effects, ambience, music direction and immersive audio layers.", output: "AUDIO PLAN" },
  { number: "06", name: "Edit, VFX & Finish", detail: "Bring scenes together with pacing, visual effects, colour grading, titles and delivery.", output: "FINAL CUT" },
];

const stages = [
  ["01", "STORY DEVELOPMENT", "Premise · script · storyboard"],
  ["02", "PRE-PRODUCTION", "Worlds · cast · shot planning"],
  ["03", "SCENE GENERATION", "Sequences · motion · continuity"],
  ["04", "POST-PRODUCTION", "Edit · VFX · sound · grade"],
  ["05", "MASTERING", "4K Ultra HD · delivery review"],
];

function FormulaOneCar() {
  return (
    <svg className="f1-car-art" viewBox="0 0 900 330" role="img" aria-label="Stylised Formula One racing car in a dark cinematic studio">
      <defs>
        <linearGradient id="f1-body" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#f4f4f1" />
          <stop offset=".42" stopColor="#9da0a5" />
          <stop offset="1" stopColor="#393b42" />
        </linearGradient>
        <linearGradient id="f1-accent" x1="0" x2="1">
          <stop stopColor="#d6b77a" />
          <stop offset="1" stopColor="#8c6c3e" />
        </linearGradient>
        <filter id="f1-glow"><feGaussianBlur stdDeviation="9" /></filter>
      </defs>
      <ellipse cx="450" cy="273" rx="350" ry="20" fill="#c9a96e" opacity=".19" filter="url(#f1-glow)" />
      <path d="M92 226 L245 215 L302 180 L382 159 L555 157 L655 181 L744 204 L817 211 L824 229 L730 238 L645 232 L568 245 L347 246 L245 237 L92 242 Z" fill="url(#f1-body)" stroke="#e4d3ae" strokeWidth="2" />
      <path d="M319 182 L370 116 Q393 96 443 101 L509 112 L565 164 L520 184 L393 188 Z" fill="#202127" stroke="#b8a98c" strokeWidth="3" />
      <path d="M369 117 Q410 88 456 111 L498 157 L389 157 Z" fill="#101116" stroke="#d4c7ad" strokeWidth="2" />
      <path d="M245 210 L300 181 L376 176 L353 208 Z M559 177 L650 192 L707 212 L603 208 Z" fill="#55575d" />
      <path d="M115 213 L258 206 L272 220 L112 229 Z M660 204 L795 207 L825 218 L671 222 Z" fill="#d4b579" />
      <path d="M410 194 L525 192 L581 222 L359 225 Z" fill="#1a1b20" stroke="#8e8b85" strokeWidth="2" />
      <path d="M343 223 L583 222 L623 240 L315 242 Z" fill="#27282e" />
      <path d="M293 178 L257 155 L225 155 L238 175 L303 195 Z M640 187 L691 159 L726 164 L706 193 L648 207 Z" fill="#a9aaad" stroke="#e6d7b7" strokeWidth="2" />
      <path d="M70 223 L263 219 L272 231 L72 240 Z M665 223 L842 222 L859 236 L667 240 Z" fill="#dedede" />
      <path d="M81 238 L272 238 L254 250 L86 250 Z M671 238 L852 237 L835 250 L674 250 Z" fill="url(#f1-accent)" />
      <circle cx="285" cy="237" r="56" fill="#090a0d" stroke="#77777a" strokeWidth="8" />
      <circle cx="285" cy="237" r="27" fill="#3a3b40" stroke="#c2b18e" strokeWidth="4" />
      <circle cx="646" cy="237" r="56" fill="#090a0d" stroke="#77777a" strokeWidth="8" />
      <circle cx="646" cy="237" r="27" fill="#3a3b40" stroke="#c2b18e" strokeWidth="4" />
      <path d="M283 237 L646 237 M465 102 L465 72 L526 72 L544 93" fill="none" stroke="#d9c08e" strokeWidth="5" strokeLinecap="round" />
      <path d="M430 160 L464 128 L500 160" fill="none" stroke="#c9a96e" strokeWidth="4" />
      <path d="M420 209 L545 209" stroke="#d6b77a" strokeWidth="4" />
      <path d="M98 206 L247 202 M683 199 L798 204" stroke="#fff" strokeOpacity=".55" strokeWidth="3" />
    </svg>
  );
}

export function FilmFactory() {
  const [activeTool, setActiveTool] = useState(0);
  const selected = tools[activeTool];

  return (
    <>
      <section className="race-intro" aria-label="Sparrow cinematic engineering">
        <div className="wrap race-layout">
          <div className="race-copy">
            <p className="eyebrow">Precision meets imagination</p>
            <h2>Built with the precision of a race team.</h2>
            <p>From the first idea to the final frame, Sparrow's ambition is to bring creative direction, production intelligence and cinematic craft into one connected workflow.</p>
            <div className="race-equation" aria-label="Story plus world plus camera plus sound equals cinema">
              <span>STORY</span><b>+</b><span>WORLD</span><b>+</b><span>CAMERA</span><b>+</b><span>SOUND</span><i>= CINEMA</i>
            </div>
            <div className="race-readouts">
              <span><b>24</b><small>FRAMES / SEC</small></span>
              <span><b>4K</b><small>ULTRA HD</small></span>
              <span><b>360°</b><small>WORLD BUILDING</small></span>
            </div>
          </div>
          <div className="race-visual">
            <div className="race-topline"><span>SPARROW / PERFORMANCE DIVISION</span><span>SPEC. 001</span></div>
            <FormulaOneCar />
            <div className="race-bottomline"><span>ENGINEERED FOR THE BIG SCREEN</span><span>LIGHT / SPEED / STORY</span></div>
          </div>
        </div>
      </section>

      <section id="movie-studio" className="section film-tools-section">
        <div className="wrap">
          <div className="film-section-heading">
            <div><p className="eyebrow">The cinematic toolkit · product vision</p><h2>From a blank page to a universe.</h2></div>
            <p>Movie creation tools designed to support the full filmmaking journey — with the creator directing every decision.</p>
          </div>
          <div className="film-tool-layout">
            <div className="film-tool-list" role="tablist" aria-label="Movie creation tools">
              {tools.map((tool, index) => (
                <button className={activeTool === index ? "film-tool-tab is-active" : "film-tool-tab"} type="button" role="tab" aria-selected={activeTool === index} aria-controls="film-tool-detail" id={`film-tool-tab-${index}`} key={tool.number} onClick={() => setActiveTool(index)}>
                  <span className="film-tool-number">{tool.number}</span><span className="film-tool-name">{tool.name}</span><span className="film-tool-arrow">↗</span>
                </button>
              ))}
            </div>
            <article className="film-tool-detail" id="film-tool-detail" role="tabpanel" aria-labelledby={`film-tool-tab-${activeTool}`}>
              <span className="film-detail-kicker">CREATION MODULE / {selected.number}</span>
              <div className="film-detail-glyph">{["✳", "⌘", "◉", "◫", "♫", "▤"][activeTool]}</div>
              <h3>{selected.name}</h3>
              <p>{selected.detail}</p>
              <div className="film-output"><span>WORKSPACE OUTPUT</span><b>{selected.output}</b></div>
            </article>
          </div>
          <p className="roadmap-note">These are planned capabilities in Sparrow's product roadmap, not a claim that every tool is currently available.</p>
        </div>
      </section>

      <section id="film-factory" className="section factory-section">
        <div className="wrap">
          <div className="factory-heading">
            <p className="eyebrow">Sparrow AI production concept</p>
            <h2>The Movie Factory.</h2>
            <p>A visual production pipeline for developing ambitious films and ultra-high-definition science-fiction worlds — from concept through final master.</p>
          </div>
          <div className="factory-console">
            <div className="factory-console-head"><div><span className="factory-live-dot" /> FACTORY CONTROL / CONCEPT INTERFACE</div><span>PROJECT: ORBITAL DAWN <i>·</i> 001</span></div>
            <div className="factory-console-body">
              <div className="factory-main-panel">
                <div className="factory-panel-title"><span>PRODUCTION PIPELINE</span><span>5 STAGES</span></div>
                <div className="factory-stages">{stages.map(([number, title, detail], index) => <div className="factory-stage" key={number}><span className="factory-stage-index">{number}</span><div><b>{title}</b><small>{detail}</small></div><span className="factory-stage-status">{index === 0 ? "INPUT" : index === 4 ? "MASTER" : "PIPELINE"}</span></div>)}</div>
                <div className="factory-timeline"><div className="factory-timeline-label"><span>SEQUENCE TIMELINE</span><span>SCENE 01 — 05</span></div><div className="factory-timeline-track"><i /><i /><i /><i /><i /></div><div className="factory-timeline-times"><span>00:00</span><span>00:48</span><span>01:36</span><span>02:24</span><span>03:12</span></div></div>
              </div>
              <aside className="factory-spec-panel"><span className="factory-panel-title">MASTER SPECIFICATION</span><div className="factory-spec-value">4K<span> UHD</span></div><p>Ultra-high-definition cinematic delivery target</p><div className="factory-spec-row"><span>FRAME RATE</span><b>24 FPS</b></div><div className="factory-spec-row"><span>COLOUR</span><b>FILM GRADE</b></div><div className="factory-spec-row"><span>PIPELINE</span><b>SCENE BASED</b></div><div className="factory-spec-row"><span>CREATIVE CONTROL</span><b>HUMAN DIRECTED</b></div></aside>
            </div>
            <div className="factory-console-foot"><span>STORY → WORLD → SCENE → EDIT → MASTER</span><span>BUILT FOR CINEMATIC SCALE</span></div>
          </div>
          <p className="roadmap-note">The factory is a product-design vision. Actual generation, rendering capacity and export specifications will depend on implementation and infrastructure.</p>
        </div>
      </section>
    </>
  );
}
