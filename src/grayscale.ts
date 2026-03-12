import { HSLColor } from "./types.js";
import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";

/**
 * Returns a gray color with the same lightness as the provided color.
 *
 * @returns the new gray color
 */
export function grayscale(color: Color): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = 0;
  return new Color(asHSL);
}
