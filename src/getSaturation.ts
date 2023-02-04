import Color from "./Color";
import { isColorValid } from "./isColorValid";
/**
 * Get the saturation value for a color.
 *
 * @param color the color to get the value from
 * @returns the saturation value
 */
export function getSaturation(color: Color): number {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  return color.hsl.s;
}
