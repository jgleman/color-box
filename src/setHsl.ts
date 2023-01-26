import Color from "./Color";
import { HSLColor } from "./types";
import { isColorValid } from "./isColorValid";
import { handlePercentInput } from "./internal/handlePercentInput";

/**
 * Set the HSL values for a color to a specific values.
 *
 * @param color the color to set the values for
 * @param values object containing values for h, s, and l. Each value is optional, any values not provided will not be changed
 * h: a number between [0,360] representing hue
 * l: lightness as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%, however, 1.0 must be entered as a string because JavaScript
 * cannot distinguish between 1 and 1.0 as a number.
 * saturation as a percentage (1 will be treated at 1% whereas 1.0 will treated
 * as 1%, however, 1.0 must be entered as a string because JavaScript
 * cannot distinguish between 1 and 1.0 as a number.
 * @returns a new color with the new h, s, and l values
 */

export function setHsl(
  color: Color,
  hsl: { h?: number | string; s?: number | string; l?: number | string }
): Color {
  if (!isColorValid(color)) throw "Invalid Color";
  const { h, s, l } = hsl || { h: undefined, s: undefined, l: undefined };
  const asHSL: HSLColor = { ...color.hsl };
  if (typeof h !== "undefined") {
    if (h < 0 || h > 360) {
      throw new Error("Hue must be between 0 and 360");
    }
    asHSL.h = typeof h === "string" ? parseInt(h, 10) : h;
  }
  if (typeof l !== "undefined") {
    const vl = typeof l === "string" ? parseFloat(l) : l;
    if (isNaN(vl) || vl < 0 || vl > 100) {
      throw new Error("Lightness must be between 0.0 and 1.0 or 0 and 100");
    }
    asHSL.l = handlePercentInput(l);
  }
  if (typeof s !== "undefined") {
    const vs = typeof s === "string" ? parseFloat(s) : s;
    if (isNaN(vs) || vs < 0 || vs > 100) {
      throw new Error("Saturation must be between 0.0 and 1.0 or 0 and 100");
    }
    asHSL.s = handlePercentInput(s);
  }

  return new Color(asHSL);
}
