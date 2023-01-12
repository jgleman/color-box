import { HSLColor } from "./types";
import { Color } from "./Color";

/**
 * Returns a gray color with the same lightness as the provided color.
 *
 * @returns the new gray color
 */
export function grayscale(color: Color): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = 0;
  return new Color(asHSL);
}
