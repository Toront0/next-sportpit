export const clamp = (v: number, min: number, max: number) => {
  return Math.min(Math.max(0, min), max);
};
