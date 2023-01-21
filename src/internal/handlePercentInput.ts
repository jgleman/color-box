import { stringToFloat } from "./stringToFloat";

// if the input is a string, convert it to a float, if the string resolves to
// equal 1, we return 100 (so 1.0 will be handled as 100%, if not, we return the
//  value.

// There is a known limitation here, it doesn't appear to be possible in
// JavaScript to differentiate between 1.0 and 1 if the type is a numnber.
// if the user enters a string, we are fine, 1.0 will be treated as 100% as
// expected, if the user enters 1.0 as a number, it will be treated as 1%.
export function handlePercentInput(input: number | string): number {
  const nAsFloat = typeof input === "string" ? stringToFloat(input) : input;
  return nAsFloat >= 1 ? nAsFloat / 100 : nAsFloat;
}
