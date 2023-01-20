import Color from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * @returns The a string of the RGB representation of a color, e.g. rgb(51 102 153)
 */
export function rgbString(color: Color): string {
  if (!isColorValid(color)) return "";

  const r1 = Math.round(color.rgb.r);
  const g1 = Math.round(color.rgb.g);
  const b1 = Math.round(color.rgb.b);
  const a1 =
    typeof color.rgb.a !== "undefined"
      ? Math.round(color.rgb.a * 100) / 100
      : 0;

  if (typeof color.rgb.a !== "undefined") {
    return `rgb(${r1} ${g1} ${b1} / ${a1})`;
  } else {
    return `rgb(${r1} ${g1} ${b1})`;
  }
}
