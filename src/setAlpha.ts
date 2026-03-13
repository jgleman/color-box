import { Color } from "./Color.js";
import { RGBColor } from "./types.js";
import { handlePercentInput } from "./internal/handlePercentInput.js";
import { isColorValid } from "./isColorValid.js";
/**
 * Set the alpha value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param alpha a number or string representing alpha. Numbers >= 1 are treated
 * as a percentage (0–100). Numbers < 1 are treated as a ratio (0–1).
 * Percentage strings are also accepted (e.g. "50%").
 * @returns a new color with the new alpha value
 */

export function setAlpha(color: Color, alpha: number | string): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const validate = typeof alpha === "string" ? parseFloat(alpha) : alpha;
  if (isNaN(validate) || validate < 0 || validate > 100) {
    throw new Error("Alpha must be between 0 and 100");
  }

  const asRGB: RGBColor = { ...color.rgb };
  asRGB.a = handlePercentInput(alpha);
  return new Color(asRGB);
}
