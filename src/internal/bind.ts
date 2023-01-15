export function bind(n: number, max: number) {
  let N = Math.min(max, Math.max(0, n));
  if (N === max) return 1;
  return (N % max) / max;
}
