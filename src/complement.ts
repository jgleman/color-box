import { HSLColor } from "./types.js";
import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";

/**
 *
 * @returns the complement of the given color (hue rotated 180°).
 */
export function complement(color: Color): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.h += 180;
  if (asHSL.h > 360) asHSL.h -= 360;
  return new Color(asHSL);
}
