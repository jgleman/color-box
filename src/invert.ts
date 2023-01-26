import { RGBColor } from "./types";
import { Color } from "./Color";
import { isColorValid } from "./isColorValid";

/**
 *
 * @returns the inverse color of the given color.
 */
export function invert(color: Color): Color {
  if (!isColorValid(color)) throw "Invalid Color";
  const asRGB: RGBColor = { ...color.rgb };
  asRGB.r = 255 - color.rgb.r;
  asRGB.g = 255 - color.rgb.g;
  asRGB.b = 255 - color.rgb.b;
  return new Color(asRGB);
}
