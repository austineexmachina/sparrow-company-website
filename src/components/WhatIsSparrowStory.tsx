"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    number: "01",
    chapter: "INTRODUCTION",
    headline: "WHAT IS SPARROW?",
    highlight: "SPARROW?",
    supporting: "A new vision for digital creativity and entertainment.",
  },
  {
    number: "02",
    chapter: "CREATIVITY",
    headline: "CREATE WITHOUT LIMITS.",
    highlight: "LIMITS.",
    supporting: "Intelligent creative tools designed around human imagination.",
  },
  {
    number: "03",
    chapter: "ENTERTAINMENT",
    headline: "STORIES THAT MOVE THE WORLD.",
    highlight: "WORLD.",
    supporting: "A vision spanning video editing, filmmaking, animation and livestreaming.",
  },
  {
    number: "04",
    chapter: "CONNECTION",
    headline: "ONE CONNECTED CREATIVE WORLD.",
    highlight: "WORLD.",
    supporting: "Bringing creators, talent, businesses and entertainment together.",
  },
  {
    number: "05",
    chapter: "THE FUTURE",
    headline: "WHERE CREATIVITY TAKES FLIGHT.",
    highlight: "FLIGHT.",
    supporting: "Sparrow Love Edit — building toward a new generation of creative experiences.",
  },
] as const;

export function WhatIsSparrowStory() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const media = gsap.matchMedia(element);
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const chapters = gsap.utils.toArray<HTMLElement>(".what-is-sparrow-scene", element);
      const desktop = window.matchMedia("(min-width: 761px)").matches;

      if (desktop) {
        chapters.forEach((chapter) => {
          const words = chapter.querySelectorAll<HTMLElement>(".story-word");
          const supporting = chapter.querySelector<HTMLElement>(".story-supporting");
          const light = chapter.querySelector<HTMLElement>(".story-scene-light");
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: chapter,
              start: "top 76%",
              end: "top 34%",
              scrub: 0.65,
            },
          });

          timeline.fromTo(
            words,
            { y: 28, opacity: 0.84 },
            { y: 0, opacity: 1, stagger: 0.045, ease: "none" },
            0,
          );
          if (supporting) {
            timeline.fromTo(
              supporting,
              { y: 12, opacity: 0.88 },
              { y: 0, opacity: 1, ease: "none" },
              0.14,
            );
          }
          if (light) {
            timeline.fromTo(
              light,
              { scale: 0.94, opacity: 0.28 },
              { scale: 1.06, opacity: 0.64, ease: "none" },
              0,
            );
          }
        });

        gsap.fromTo(
          ".story-thread-progress",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 72%",
              end: "bottom 32%",
              scrub: true,
            },
          },
        );
      } else {
        chapters.forEach((chapter) => {
          ScrollTrigger.create({
            trigger: chapter,
            start: "top 82%",
            once: true,
            onEnter: () => chapter.classList.add("is-story-visible"),
          });
        });
      }

      return () => {
        chapters.forEach((chapter) => chapter.classList.remove("is-story-visible"));
      };
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={root}
      id="what-is-sparrow"
      className="what-is-sparrow-story"
      aria-label="What Is Sparrow? Company story"
    >
      <div className="story-thread" aria-hidden="true">
        <span className="story-thread-progress" />
      </div>
      {scenes.map((scene) => {
        const words = scene.headline.split(" ");
        return (
          <article
            className="what-is-sparrow-scene"
            data-scene={scene.number}
            key={scene.number}
            aria-labelledby={`sparrow-scene-${scene.number}`}
          >
            <div className="story-scene-light" aria-hidden="true" />
            <div className="wrap story-scene-layout">
              <div className="story-scene-marker" aria-hidden="true">
                <span>{scene.number}</span>
                <span className="story-marker-line" />
              </div>
              <div className="story-scene-copy">
                <p className="story-chapter">SCENE {scene.number} <span>/</span> {scene.chapter}</p>
                <h2 id={`sparrow-scene-${scene.number}`} aria-label={scene.headline}>
                  {words.map((word, index) => (
                    <span
                      className={`story-word${word === scene.highlight ? " story-word-highlight" : ""}`}
                      key={`${scene.number}-${index}`}
                      aria-hidden="true"
                      style={{ "--word-index": index } as CSSProperties}
                    >
                      {word}{index < words.length - 1 ? " " : ""}
                    </span>
                  ))}
                </h2>
                <p className="story-supporting">{scene.supporting}</p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
