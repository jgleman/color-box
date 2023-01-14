import Color from "./Color";
import { HSLColor } from "./types";
import { handlePercentInput } from "./internal/handlePercentInput";

/**
 * Set the saturation value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param saturation a number between [0,1.0] or 0 and 100 representing
 * saturation as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%
 * @returns a new color with the new saturation value
 */

export function setSaturation(color: Color, saturation: number): Color {
  if (isNaN(saturation) || saturation < 0 || saturation > 100) {
    throw new Error("Saturation must be between 0.0 and 1.0 or 0 and 100");
  }

  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = handlePercentInput(saturation);
  return new Color(asHSL);
}
