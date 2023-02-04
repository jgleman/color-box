import { HSLColor } from "./types";
import Color from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * Darken a color by the specified amount.
 *
 * @param color the color to darken.
 * @param amount the amount to darken the color.
 * @returns the new darkened color
 */
export function darken(color: Color, amount: number): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l -= amount / 100;
  // can't be less than 0 luminance
  if (asHSL.l < 0) {
    asHSL.l = 0;
  }
  return new Color(asHSL);
}
