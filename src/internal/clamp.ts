// clamp a number between 0 and max to [0,1]
export function clamp(n: number, max: number) {
  const N = Math.min(max, Math.max(0, n));
  return (N % max) / max;
}
