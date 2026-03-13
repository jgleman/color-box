import { Color } from "./Color.js";
import { HSLColor } from "./types.js";
import { handlePercentInput } from "./internal/handlePercentInput.js";
import { isColorValid } from "./isColorValid.js";
/**
 * Set the lightness value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param lightness a number or string representing lightness. Numbers >= 1 are
 * treated as a percentage (0–100). Numbers < 1 are treated as a ratio (0–1).
 * Percentage strings are also accepted (e.g. "50%").
 * @returns a new color with the new lightness value
 */

export function setLightness(color: Color, lightness: number | string): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const validate =
    typeof lightness === "string" ? parseFloat(lightness) : lightness;
  if (isNaN(validate) || validate < 0 || validate > 100) {
    throw new Error("Lightness must be between 0 and 100");
  }

  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l = handlePercentInput(lightness);
  return new Color(asHSL);
}
