import Color from "./Color";

/**
 * Get the lightness value for a color.
 *
 * @param color the color to get the value from
 * @returns the lightness value
 */
export function getLightness(color: Color): number {
  return color.hsl.l;
}
