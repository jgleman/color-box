import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";
import { adjustHue } from "./adjustHue.js";

/**
 * Returns the split-complement color harmony for the given color.
 *
 * @param color the base color
 * @returns a tuple of [original, hue+150, hue+210]
 */
export function splitComplement(color: Color): [Color, Color, Color] {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  return [color, adjustHue(color, 150), adjustHue(color, 210)];
}
