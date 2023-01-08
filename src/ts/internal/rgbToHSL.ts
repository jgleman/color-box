import { RGBColor, HSLColor } from "../types";

// Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
export function rgbToHSL(rgbColor: RGBColor): HSLColor {
  const { r, g, b } = rgbColor;

  // step one, scale RGB values to fit between 0..1
  const R = r / 255;
  const G = g / 255;
  const B = b / 255;

  // step two, get the min and max values
  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);

  // calc chroma
  const C = max - min;

  let h = 0;

  // various permutations of how to calculate HUE based on which color is
  // the highest value
  if (C === 0) {
    h = 0;
  } else if (R === max) {
    h = ((G - B) / C) % 6;
  } else if (G === max) {
    h = (B - R) / C + 2;
  } else {
    h = (R - G) / C + 4;
  }
  // hue
  const H = h * 60 < 0 ? h * 60 + 360 : h * 60;
  // lightness
  const L = (max + min) / 2;
  // saturation
  const S = C === 0 ? 0 : C / (1 - Math.abs(2 * L - 1));

  const hsl: HSLColor = {
    h: H,
    s: S,
    l: L,
  };

  return hsl;
}
