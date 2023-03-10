import Color from "./Color";
import { isColorValid } from "./isColorValid";
/**
 * Implementation of http://www.w3.org/TR/WCAG20/#relativeluminancedef
 *
 * @returns The the relative luminance
 */
export function relativeLuminence(color: Color): number {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const r = color.rgb.r / 255;
  const g = color.rgb.g / 255;
  const b = color.rgb.b / 255;

  const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  const B = r <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}
