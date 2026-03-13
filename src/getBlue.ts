import { Color } from "./Color.js";
import { getRgb } from "./getRgb.js";

/**
 * Get the Blue value for a color.
 *
 * @param color the color to get the value from
 * @param mode the mode to return the value in, if no valid mode is provided it always returns decimal
 * * decimal (default): each color component represented as an integer between 0-255.
 * * percentage: each color component represented as a percentage
 * * raw. Raw is the internal color object values, with no rounding
 * @returns the blue value of the color
 */
export function getBlue(color: Color, mode: "decimal" | "percentage" | "raw" = "decimal"): number {
  return getRgb(color, mode).b;
}
