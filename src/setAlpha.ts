import Color from "./Color";
import { RGBColor } from "./types";
import { handlePercentInput } from "./internal/handlePercentInput";

/**
 * Set the alpha value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param alpha a number between [0,1.0] or 0 and 100 representing
 * alpha as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%
 * @returns a new color with the new alpha value
 */

export function setAlpha(color: Color, alpha: number): Color {
  if (isNaN(alpha) || alpha < 0 || alpha > 100) {
    throw new Error("Alpha must be between 0.0 and 1.0 or 0 and 100");
  }

  const asRGB: RGBColor = { ...color.rgb };
  asRGB.a = handlePercentInput(alpha);
  return new Color(asRGB);
}
