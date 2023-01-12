import { HSLColor } from "./types";
import { Color } from "./Color";

/**
 * Makes the provided color less saturated by the specified amount.
 *
 * @param color the color to desaturate.
 * @param amount the amount to desaturate the color.
 * @returns the new desaturated color
 */
export function desaturate(color: Color, amount: number): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s -= amount / 100;
  // can't be less than 0 saturation
  if (asHSL.s < 0) {
    asHSL.s = 0;
  }
  return new Color(asHSL);
}
