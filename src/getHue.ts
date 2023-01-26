import Color from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * Get the hue value for a color.
 *
 * @param color the color to get the value from
 * @returns the hue value
 */
export function getHue(color: Color): number {
  if (!isColorValid(color)) throw "Invalid Color";
  return color.hsl.h;
}
