import { RGBColor, HSLColor } from "../types";

// algorithm adapted from
// https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB

export function hslToRGB(hslColor: HSLColor): RGBColor {
  const { h, s, l, a } = hslColor;

  // chroma
  const C = (1 - Math.abs(2 * l - 1)) * s;

  const H = h / 60;

  const X = C * (1 - Math.abs((H % 2) - 1));

  let r1 = 0;
  let g1 = 0;
  let b1 = 0;

  if (H >= 0 && H <= 1) {
    r1 = C;
    g1 = X;
  }
  if (H > 1 && H <= 2) {
    r1 = X;
    g1 = C;
  }
  if (H > 2 && H <= 3) {
    g1 = C;
    b1 = X;
  }
  if (H > 3 && H <= 4) {
    g1 = X;
    b1 = C;
  }
  if (H > 4 && H <= 5) {
    r1 = X;
    b1 = C;
  }
  if (H > 5 && H <= 6) {
    r1 = C;
    b1 = X;
  }

  const M = l - C / 2;

  const rgb: RGBColor = {
    r: (r1 + M) * 255,
    g: (g1 + M) * 255,
    b: (b1 + M) * 255,
    a: a,
  };

  return rgb;
}
