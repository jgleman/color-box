import Color from "./Color";
import { isColorValid } from "./isColorValid";

export function hslString(color: Color): string {
  if (!isColorValid(color)) return "";

  const h1 = Math.round(color.hsl.h);
  const s1 = Math.round(color.hsl.s * 100);
  const l1 = Math.round(color.hsl.l * 100);

  const hslAsCSS: string = `hsl(${h1} ${s1}% ${l1}%)`;

  return hslAsCSS;
}
