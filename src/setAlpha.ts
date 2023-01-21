import Color from "./Color";
import { RGBColor } from "./types";
import { handlePercentInput } from "./internal/handlePercentInput";

/**
 * Set the alpha value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param alpha a number or string between [0,1.0] or 0 and 100 representing
 * lightness as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%, however, 1.0 must be entered as a string because JavaScript
 * cannot distinguish between 1 and 1.0 as a number.
 * @returns a new color with the new alpha value
 */

export function setAlpha(color: Color, alpha: number | string): Color {
  const validate = typeof alpha === "string" ? parseFloat(alpha) : alpha;
  if (isNaN(validate) || validate < 0 || validate > 100) {
    throw new Error("Alpha must be between 0.0 and 1.0 or 0 and 100");
  }

  const asRGB: RGBColor = { ...color.rgb };
  asRGB.a = handlePercentInput(alpha);
  return new Color(asRGB);
}
