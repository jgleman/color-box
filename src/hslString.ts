import Color from "./Color";
import { isColorValid } from "./isColorValid";

/**
 * @returns The a string of the HSL representation of a color, e.g. hsl(210 50% 40%)
 */
export function hslString(color: Color): string {
  if (!isColorValid(color)) return "";

  const h1 = Math.round(color.hsl.h);
  const s1 = Math.round(color.hsl.s * 100);
  const l1 = Math.round(color.hsl.l * 100);
  const a1 =
    typeof color.hsl.a !== "undefined"
      ? Math.round(color.hsl.a * 100)
      : undefined;

  if (typeof a1 !== "undefined") {
    return `hsl(${h1} ${s1}% ${l1}% / ${a1}%)`;
  } else {
    return `hsl(${h1} ${s1}% ${l1}%)`;
  }
}
