import Color from "./Color";
import { getRgb } from "./getRgb";

/**
 * Get the Red value for a color.
 *
 * @param color the color to get the value from
 * @param mode the mode to return the value in, if no valid mode is provided it always returns decimal
 * * decimal (default): each color component represented as an integer between 0-255.
 * * percentage: each color component represented as a percentage
 * * raw. Raw is the internal color object values, with no rounding
 * @returns the red value of the color
 */
export function getRed(color: Color, mode: string = "decimal"): number {
  return getRgb(color, mode).r;
}
