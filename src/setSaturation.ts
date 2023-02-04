import Color from "./Color";
import { HSLColor } from "./types";
import { handlePercentInput } from "./internal/handlePercentInput";
import { isColorValid } from "./isColorValid";
/**
 * Set the saturation value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param saturation a number or string between [0,1.0] or 0 and 100 representing
 * lightness as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%, however, 1.0 must be entered as a string because JavaScript
 * cannot distinguish between 1 and 1.0 as a number.
 * @returns a new color with the new saturation value
 */

/**
 * setSaturation is a function that takes in a color and a saturation value, and returns a new color with the given saturation.
 *
 * @param {Color} color - The color that needs to have its saturation set.
 * @param {number | string} saturation - The saturation value to set. Accepted input formats are either a number between 0 and 100, or a string representing a percentage (e.g. "50%").
 * @return {Color} A new color with the given saturation.
 *
 * @throws Invalid Color if the color parameter is not a valid color
 * @throws {Error} If the color is invalid or the saturation value is invalid (not a number between 0 and 100 or not a string in the format of "%d%").
 */

export function setSaturation(
  color: Color,
  saturation: number | string
): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const validate =
    typeof saturation === "string" ? parseFloat(saturation) : saturation;
  if (isNaN(validate) || validate < 0 || validate > 100) {
    throw new Error("Saturation must be between 0.0 and 1.0 or 0 and 100");
  }

  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = handlePercentInput(saturation);
  return new Color(asHSL);
}
