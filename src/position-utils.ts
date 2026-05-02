export const clampGlobalPosition = (value: number): number =>
  Math.max(0, Math.min(3000, Math.round(value)));
