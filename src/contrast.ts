import Color from "./Color";
import { isColorValid } from "./isColorValid";

import { relativeLuminence } from "./relativeLuminence";

/**
 * The `contrast` function calculates the contrast ratio between two colors.
 * Implementation of http://www.w3.org/TR/WCAG20/#contrast-ratiodef
 *
 * @param {Color} color1 - The first color to compare.
 * @param {Color} color2 - The second color to compare.
 * @return {string} - The contrast ratio between two colors in the format of "X.X:1".
 *
 * @throws {Error} - Throws an error if either of the color arguments is invalid.
 */

export function contrast(color1: Color, color2: Color): string {
  if (!isColorValid(color1)) throw new Error("Invalid Color (color1)");
  if (!isColorValid(color2)) throw new Error("Invalid Color (color2)");
  let lum1 = relativeLuminence(color1);
  let lum2 = relativeLuminence(color2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  const ratio = (((brightest + 0.05) / (darkest + 0.05)) * 100) / 100;
  return `${ratio.toFixed(1)}:1`;
}
