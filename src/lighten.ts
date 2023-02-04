import { HSLColor } from "./types";
import { Color } from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * Lighten a color by a specified amount
 *
 * @param color - The color to be lightened
 * @param amount - The amount to lighten the color by (0-100)
 * @returns The lightened color
 *
 * @throws Invalid Color if the color parameter is not a valid color
 */
export function lighten(color: Color, amount: number): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l += amount / 100;
  // can't be more than 1 luminance
  if (asHSL.l > 1) {
    asHSL.l = 1;
  }
  return new Color(asHSL);
}
