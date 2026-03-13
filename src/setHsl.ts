import { Color } from "./Color.js";
import { HSLColor } from "./types.js";
import { isColorValid } from "./isColorValid.js";
import { handlePercentInput } from "./internal/handlePercentInput.js";

/**
 * Set the HSL values for a color to a specific values.
 *
 * @param color the color to set the values for
 * @param values object containing values for h, s, and l. Each value is optional, any values not provided will not be changed
 * h: a number between 0 and 360 representing hue
 * s: saturation as a number or string. Numbers >= 1 are treated as a percentage
 * (0–100). Numbers < 1 are treated as a ratio (0–1). Percentage strings also
 * accepted (e.g. "50%").
 * l: lightness as a number or string, same rules as s.
 * @returns a new color with the new h, s, and l values
 */

export function setHsl(
  color: Color,
  hsl: { h?: number | string; s?: number | string; l?: number | string },
): Color {
  if (!isColorValid(color)) throw new Error("Invalid Color");
  const { h, s, l } = hsl || { h: undefined, s: undefined, l: undefined };
  const asHSL: HSLColor = { ...color.hsl };

  if (typeof h !== "undefined") {
    const vh = typeof h === "string" ? parseFloat(h) : h;
    if (isNaN(vh) || vh < 0 || vh > 360) {
      throw new Error("Hue must be between 0 and 360");
    }
    asHSL.h = vh;
  }

  if (typeof l !== "undefined") {
    const vl = typeof l === "string" ? parseFloat(l) : l;
    if (isNaN(vl) || vl < 0 || vl > 100) {
      throw new Error("Lightness must be between 0 and 100");
    }
    asHSL.l = handlePercentInput(l);
  }
  if (typeof s !== "undefined") {
    const vs = typeof s === "string" ? parseFloat(s) : s;
    if (isNaN(vs) || vs < 0 || vs > 100) {
      throw new Error("Saturation must be between 0 and 100");
    }
    asHSL.s = handlePercentInput(s);
  }

  return new Color(asHSL);
}
