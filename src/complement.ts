import { HSLColor } from "./types";
import { Color } from "./Color";

/**
 *
 * @returns the RGB complement of the given color.
 */
export function complement(color: Color): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.h += 180;
  if (asHSL.h > 360) asHSL.h -= 360;
  return new Color(asHSL);
}
