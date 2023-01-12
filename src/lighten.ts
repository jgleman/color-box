import { HSLColor } from "./types";
import { Color } from "./Color";

/**
 * Lighten a color by the specified amount.
 *
 * @param color the color to lighten.
 * @param amount the amount to lighten the color.
 * @returns the new lightened color
 */
export function lighten(color: Color, amount: number): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l += amount / 100;
  // can't be more than 1 luminance
  if (asHSL.l > 1) {
    asHSL.l = 1;
  }
  return new Color(asHSL);
}
