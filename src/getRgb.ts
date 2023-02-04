import Color from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * Get the RGB values for a color.
 *
 * @param color the color to get the value from
 * @param mode the mode to return the values in, if no valid mode is provided it always returns decimal
 * * decimal (default): each color component represented as an integer between 0-255.
 * * percentage: each color component represented as a percentage
 * * raw. Raw is the internal color object values, with no rounding
 * @returns an object containing the RGB values, \{ r, g, b \}
 */
export function getRgb(
  color: Color,
  mode: string = "decimal"
): { r: number; g: number; b: number } {
  if (!isColorValid(color)) throw new Error("Invalid Color");

  const rgb = color.rgb;
  switch (mode) {
    case "raw":
      return { r: rgb.r, g: rgb.g, b: rgb.b };
    case "percentage":
      return {
        r: (rgb.r / 255) * 100,
        g: (rgb.g / 255) * 100,
        b: (rgb.b / 255) * 100,
      };
    default:
      return {
        r: Math.round(color.rgb.r),
        g: Math.round(color.rgb.g),
        b: Math.round(color.rgb.b),
      };
  }
}
