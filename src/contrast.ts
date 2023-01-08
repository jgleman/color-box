import Color from "./Color";

import { relativeLuminence } from "./relativeLuminence";

// implementation of:
// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
export function contrast(color1: Color, color2: Color): string {
  let lum1 = relativeLuminence(color1.rgb);
  let lum2 = relativeLuminence(color2.rgb);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  const ratio = (((brightest + 0.05) / (darkest + 0.05)) * 100) / 100;
  return `${ratio.toFixed(1)}:1`;
}
