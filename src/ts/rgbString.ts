import Color from "./Color";
import { isColorValid } from "./isColorValid";

export function rgbString(color: Color): string {
  if (!isColorValid(color)) return "";

  const r1 = Math.round(color.rgb.r);
  const g1 = Math.round(color.rgb.g);
  const b1 = Math.round(color.rgb.b);

  const rgbAsCSS: string = `rgb(${r1} ${g1} ${b1})`;

  return rgbAsCSS;
}
