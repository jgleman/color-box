import Color from "./Color";
import { isColorValid } from "./isColorValid";

import { relativeLuminence } from "./relativeLuminence";

/**
 * Implementation of http://www.w3.org/TR/WCAG20/#contrast-ratiodef
 *
 * @returns The contrast ratio of the two provided colors in the format   n:1
 */
export function contrast(color1: Color, color2: Color): string {
  if (!isColorValid(color1)) throw "Invalid Color (color1)";
  if (!isColorValid(color2)) throw "Invalid Color (color2)";
  let lum1 = relativeLuminence(color1.rgb);
  let lum2 = relativeLuminence(color2.rgb);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  const ratio = (((brightest + 0.05) / (darkest + 0.05)) * 100) / 100;
  return `${ratio.toFixed(1)}:1`;
}
