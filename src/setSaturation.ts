import { Color } from "./Color.js";
import { HSLColor } from "./types.js";
import { handlePercentInput } from "./internal/handlePercentInput.js";
import { isColorValid } from "./isColorValid.js";
/**
 * Set the saturation value for a color to a specific value.
 *
 * @param color - The color to set the value for.
 * @param saturation - A number between 0 and 100, or a percentage string (e.g. "50%").
 * @returns A new color with the given saturation.
 *
 * @throws Invalid Color if the color parameter is not a valid color
 * @throws {Error} If the saturation value is out of range.
 */

export function setSaturation(
  color: Color,
  saturation: number | string
): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const validate =
    typeof saturation === "string" ? parseFloat(saturation) : saturation;
  if (isNaN(validate) || validate < 0 || validate > 100) {
    throw new Error("Saturation must be between 0 and 100");
  }

  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = handlePercentInput(saturation);
  return new Color(asHSL);
}
