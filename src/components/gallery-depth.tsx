"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function GalleryDepth({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const figures = Array.from(element.querySelectorAll<HTMLElement>(".crew figure"));
    const update = () => {
      frame = 0;
      const height = window.innerHeight || 1;
      for (const [index, figure] of figures.entries()) {
        const bounds = figure.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > height) continue;
        const relativeCenter = (bounds.top + bounds.height / 2 - height / 2) / height;
        const offset = Math.max(-7, Math.min(7, -relativeCenter * 10)) + ((index % 3) - 1) * 1.5;
        figure.style.setProperty("--parallax-y", `${offset.toFixed(1)}px`);
      }
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      for (const figure of figures) figure.style.removeProperty("--parallax-y");
    };
  }, []);

  return <div ref={root} className="gallery-depth">{children}</div>;
}
