export function parsePercentage(percentAsString: string): number {
  return parseInt(percentAsString.split("%")[0], 10) / 100;
}
