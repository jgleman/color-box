import Color from "./Color";
import { HSLColor } from "./types";
import { isColorValid } from "./isColorValid";
/**
 * Set the hue value for a color to a specific value.
 *
 * @param color the color to set the value for
 * @param hue a number between [0,360] representing hue
 * @returns a new color with the new hue value
 */
export function setHue(color: Color, hue: number): Color {
  if (!isColorValid(color)) throw "Invalid Color";
  if (hue < 0 || hue > 360) {
    throw new Error("Amount must be between 0 and 360");
  }
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.h = hue;
  return new Color(asHSL);
}
