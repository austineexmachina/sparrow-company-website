"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  "Tell Sparrow your day",
  "Sparrow edits like a human editor",
  "Share it with the world",
];

export function PinnedStory() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const media = gsap.matchMedia(element);
    media.add(
      {
        desktop: "(min-width: 761px)",
        reducedMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const conditions = context.conditions as { desktop: boolean; reducedMotion: boolean } | undefined;
        if (!conditions?.desktop || conditions.reducedMotion) return;

        const scope = gsap.context(() => {
          gsap.fromTo(
            ".story-step",
            { opacity: 0.42, y: 18 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.3,
              scrollTrigger: {
                trigger: element,
                start: "top top",
                end: "+=120%",
                pin: true,
                scrub: true,
              },
            },
          );
        }, element);
        return () => scope.revert();
      },
    );

    return () => media.revert();
  }, []);

  return (
    <section ref={root} className="section story">
      <div className="wrap story-grid">
        <div>
          <p className="eyebrow">How Sparrow could help</p>
          {steps.map((step, index) => (
            <article className="story-step" key={step}>
              <span className="label">0{index + 1}</span>
              <h2>{step}</h2>
            </article>
          ))}
        </div>
        <div className="console" aria-label="Sparrow storyboard">
          <strong>YOUR STORYBOARD</strong>
          <div className="track" />
          <div className="track" />
          <div className="track" />
        </div>
      </div>
    </section>
  );
}
