import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";
import { adjustHue } from "./adjustHue.js";

/**
 * Returns the triadic color harmony for the given color.
 *
 * @param color the base color
 * @returns a tuple of [original, hue+120, hue+240]
 */
export function triadic(color: Color): [Color, Color, Color] {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  return [color, adjustHue(color, 120), adjustHue(color, 240)];
}
