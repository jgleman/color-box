import { HSLColor } from "./types";
import { Color } from "./Color";

export function saturate(color: Color, amount: number): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s += amount / 100;
  // can't be greater than 1 saturation
  if (asHSL.s > 1) {
    asHSL.s = 1;
  }
  return new Color(asHSL);
}
