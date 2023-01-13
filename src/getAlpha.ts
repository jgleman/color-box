import Color from "./Color";

/**
 * Get the alpha value for a color.
 *
 * @param color the color to get the value from
 * @returns the alpha value, or undefined color has no alpha
 */
export function getAlpha(color: Color): number | undefined {
  if (typeof color.rgb.a === "undefined") {
    return undefined;
  }
  return color.rgb.a;
}
