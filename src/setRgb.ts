import { Color } from "./Color.js";
import { RGBColor } from "./types.js";
import { isColorValid } from "./isColorValid.js";

/**
 * Set the RGB values for a color to specific values.
 *
 * @param color the color to set the values for
 * @param rgb object containing values for r, g, and b. Each value is optional, any values not provided will not be changed
 * @returns a new color with the new r, g, and b values
 */
export function setRgb(
  color: Color,
  rgb: { r?: number; g?: number; b?: number },
): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  if (!rgb) return color;

  const { r, g, b } = rgb;

  if (typeof r !== "undefined" && (r < 0 || r > 255)) {
    throw new Error("RGB values must be between 0 and 255");
  }
  if (typeof g !== "undefined" && (g < 0 || g > 255)) {
    throw new Error("RGB values must be between 0 and 255");
  }
  if (typeof b !== "undefined" && (b < 0 || b > 255)) {
    throw new Error("RGB values must be between 0 and 255");
  }

  const asRGB: RGBColor = { ...color.rgb };
  if (typeof r !== "undefined") asRGB.r = r;
  if (typeof g !== "undefined") asRGB.g = g;
  if (typeof b !== "undefined") asRGB.b = b;

  return new Color(asRGB);
}
