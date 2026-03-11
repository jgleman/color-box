export function parsePercentage(value: string): number {
  return value.endsWith("%") ? parseFloat(value) / 100 : parseFloat(value);
}
