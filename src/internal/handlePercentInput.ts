export function handlePercentInput(input: number | string): number {
  const value =
    typeof input === "string" ? parseFloat(input.replace("%", "")) : input;
  return value >= 1 ? value / 100 : value;
}
