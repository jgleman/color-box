import { stringToFloat } from "./stringToFloat";

// if the input is a string, convert it to a float, if the string resolves to
// equal 1, we return 100 (so 1.0 will be handled as 100%, if not, we return the value
export function handlePercentInput(input: number | string): number {
  const nAsFloat = typeof input === "string" ? stringToFloat(input) : input;
  return nAsFloat > 1 ? nAsFloat / 100 : nAsFloat;
}
