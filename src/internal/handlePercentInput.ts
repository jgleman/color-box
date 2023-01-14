import { stringToFloat } from "./stringToFloat";

export function handlePercentInput(input: number | string): number {
  let nAsFloat;
  if (typeof input === "string") {
    nAsFloat = stringToFloat(input);
  } else {
    nAsFloat = input;
  }

  // a number between 1 and 100
  if (nAsFloat > 1) {
    return nAsFloat / 100;
    // 1, this is either 1% or 100%, we already handled 1.0 being 100%
    // any 1 here is 1%
  } else {
    return nAsFloat;
  }
}
