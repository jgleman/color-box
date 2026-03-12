import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";
import { adjustHue } from "./adjustHue.js";

/**
 * Returns the analogous color harmony for the given color.
 *
 * @param color the base color
 * @returns a tuple of [original, hue+30, hue-30]
 */
export function analogous(color: Color): [Color, Color, Color] {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  return [color, adjustHue(color, 30), adjustHue(color, -30)];
}
