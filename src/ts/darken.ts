import { HSLColor } from "./types";
import Color from "./Color";

export function darken(color: Color, amount: number): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.l -= amount / 100;
  // can't be less than 0 luminance
  if (asHSL.l < 0) {
    asHSL.l = 0;
  }
  return new Color(asHSL);
}
