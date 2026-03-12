import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";
import { relativeLuminance } from "./relativeLuminance.js";

/**
 * Returns black or white depending on which provides better readability
 * against the given background color.
 *
 * @param color the background color
 * @returns #000000 if luminance >= 0.1791, #ffffff otherwise
 */
export function readableColor(color: Color): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const luminance = relativeLuminance(color);
  return luminance >= 0.1791 ? new Color("#000000") : new Color("#ffffff");
}
