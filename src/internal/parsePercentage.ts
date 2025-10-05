import { handlePercentInput } from "./handlePercentInput.js";
export function parsePercentage(percentAsString: string): number {
  const p = handlePercentInput(percentAsString.split("%")[0]);
  return p > 1 ? p / 100 : p;
}
