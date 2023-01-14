import Color from "./Color";

/**
 * Get the hue value for a color.
 *
 * @param color the color to get the value from
 * @returns the hue value
 */
export function getHue(color: Color): number {
  return color.hsl.h;
}
