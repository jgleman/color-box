import { HSLColor } from "./types";
import { Color } from "./Color";
import { isColorValid } from "./isColorValid";
/**
 * Makes the provided color more saturated by the specified amount.
 *
 * @param color the color to saturate.
 * @param amount the amount to saturate the color.
 * @returns the new saturated color
 */
export function saturate(color: Color, amount: number): Color {
  if (!isColorValid(color)) throw "Invalid Color";
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s += amount / 100;
  // can't be greater than 1 saturation
  if (asHSL.s > 1) {
    asHSL.s = 1;
  }
  return new Color(asHSL);
}
