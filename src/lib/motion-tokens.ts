export const motionTokens = {
  duration: {
    fast: 0.16,
    standard: 0.28,
    reveal: 0.68,
    route: 0.24,
    ambient: 18,
  },
  easing: [0.22, 1, 0.36, 1] as const,
  pointerSpring: {
    stiffness: 52,
    damping: 25,
    mass: 1.15,
  },
};
