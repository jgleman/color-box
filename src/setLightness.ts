import Color from "./Color";
import { HSLColor } from "./types";
import { handlePercentInput } from "./internal/handlePercentInput";

/**
 * Set the lightness value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param lightness a number between [0,1.0] or 0 and 100 representing
 * lightness as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%
 * @returns a new color with the new lightness value
 */

export function setLightness(color: Color, lightness: number): Color {
  if (isNaN(lightness) || lightness < 0 || lightness > 100) {
    throw new Error("Lightness must be between 0.0 and 1.0 or 0 and 100");
  }

  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l = handlePercentInput(lightness);
  return new Color(asHSL);
}
