import { HSLColor } from "./types";
import { Color } from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * Returns a gray color with the same lightness as the provided color.
 *
 * @returns the new gray color
 */
export function grayscale(color: Color): Color {
  if (!isColorValid(color)) throw "Invalid Color";
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = 0;
  return new Color(asHSL);
}
