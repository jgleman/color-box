import { RGBColor } from "../types";

export function hexToRGB(hexColor: string): RGBColor {
  const rgbParts: RGBColor = { r: 0, g: 0, b: 0 };

  rgbParts.r = parseInt(hexColor.substring(0, 2), 16);
  rgbParts.g = parseInt(hexColor.substring(2, 4), 16);
  rgbParts.b = parseInt(hexColor.substring(4, 6), 16);

  return rgbParts;
}
