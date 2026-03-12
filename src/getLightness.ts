import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";
/**
 * Get the lightness value for a color.
 *
 * @param color the color to get the value from
 * @returns the lightness value
 */
export function getLightness(color: Color): number {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  return color.hsl.l;
}
