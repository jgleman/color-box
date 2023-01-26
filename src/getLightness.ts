import Color from "./Color";
import { isColorValid } from "./isColorValid";
/**
 * Get the lightness value for a color.
 *
 * @param color the color to get the value from
 * @returns the lightness value
 */
export function getLightness(color: Color): number {
  if (!isColorValid(color)) throw "Invalid Color";
  return color.hsl.l;
}
