import { HSLColor } from "./types";
import Color from "./Color";

/**
 * Adjust the hue by the specified amount.
 *
 * @param color the color to adjust
 * @param amount the amount to adjust in degrees, -360 to 360
 * @returns the adjusted color
 */
export function adjustHue(color: Color, amount: number): Color {
  const asHSL: HSLColor = { ...color.hsl };
  if (amount < -360 || amount > 360) {
    throw new Error("Amount must be between -360 and 360");
  }
  asHSL.h += amount;

  if (asHSL.h > 360) asHSL.h -= 360;
  if (asHSL.h < 0) asHSL.h = 360 - Math.abs(asHSL.h);
  //if (asHSL.h < -360) asHSL.h += 360;

  return new Color(asHSL);
}
