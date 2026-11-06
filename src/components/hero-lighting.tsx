"use client";

import { useCallback, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { motionTokens } from "@/lib/motion-tokens";

interface HeroLightingProps {
  children: ReactNode;
  className?: string;
}

export function HeroLighting({ children, className = "" }: HeroLightingProps) {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, motionTokens.pointerSpring);
  const y = useSpring(pointerY, motionTokens.pointerSpring);

  const handlePointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(Math.max(-24, Math.min(24, (event.clientX - bounds.left - bounds.width / 2) * 0.035)));
    pointerY.set(Math.max(-16, Math.min(16, (event.clientY - bounds.top - bounds.height / 2) * 0.035)));
  }, [pointerX, pointerY, reducedMotion]);

  const resetPointer = useCallback(() => {
    pointerX.set(0);
    pointerY.set(0);
  }, [pointerX, pointerY]);

  return (
    <section className={className} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="hero-ambient" aria-hidden="true" />
      <motion.div className="hero-pointer-light" style={{ x, y }} aria-hidden="true" />
      {children}
    </section>
  );
}
