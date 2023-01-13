import Color from "./Color";

/**
 * Get the saturation value for a color.
 *
 * @param color the color to get the value from
 * @returns the saturation value
 */
export function getSaturation(color: Color): number {
  return color.hsl.s;
}
