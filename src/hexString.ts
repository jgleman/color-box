import Color from "./Color";
import { isColorValid } from "./isColorValid";

export function hexString(color: Color): string {
  return isColorValid(color) ? "#" + color.hex : "";
}
